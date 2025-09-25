# AutoFlow Production Deployment Guide

This guide will walk you through deploying AutoFlow to production with real GitHub integration.

## Prerequisites

- GitHub account
- Vercel account (for frontend)
- Railway account (for backend)
- Supabase or Neon account (for database)

## Part 1: GitHub OAuth Setup

### Step 1: Create GitHub OAuth App

1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Click **"New OAuth App"**
3. Fill in the details:
   - **Application name**: `AutoFlow CI/CD Platform`
   - **Homepage URL**: `https://your-frontend.vercel.app` (replace with your actual Vercel URL)
   - **Authorization callback URL**: `https://your-backend.railway.app/api/auth/github/callback` (replace with your actual backend URL)
4. Click **"Register application"**
5. Copy the **Client ID** and generate a **Client Secret**

### Step 2: Set Environment Variables

You'll need these environment variables for your backend:

```bash
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
SESSION_SECRET=your_random_session_secret
DATABASE_URL=your_database_connection_string
BACKEND_URL=https://your-backend.railway.app
FRONTEND_URL=https://your-frontend.vercel.app
NODE_ENV=production
```

Generate a session secret:
```bash
openssl rand -base64 32
```

## Part 2: Database Setup (Supabase)

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be ready
3. Go to Settings → Database
4. Copy the **Connection string** (URI format)
5. Replace `[YOUR-PASSWORD]` with your database password

### Step 2: Initialize Database Schema

Run this SQL in the Supabase SQL Editor:

```sql
-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    github_id TEXT UNIQUE,
    avatar TEXT,
    access_token TEXT,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    name TEXT NOT NULL,
    description TEXT,
    repository_url TEXT NOT NULL,
    repository_name TEXT NOT NULL,
    branch TEXT DEFAULT 'main' NOT NULL,
    framework TEXT NOT NULL,
    deployment_url TEXT,
    status TEXT DEFAULT 'pending' NOT NULL,
    last_deployment_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Deployments table
CREATE TABLE deployments (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES projects(id),
    status TEXT DEFAULT 'pending' NOT NULL,
    commit_hash TEXT,
    commit_message TEXT,
    build_logs TEXT,
    deployment_url TEXT,
    started_at TIMESTAMP DEFAULT NOW() NOT NULL,
    completed_at TIMESTAMP
);

-- Activities table
CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    project_id INTEGER REFERENCES projects(id),
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create indexes for better performance
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_deployments_project_id ON deployments(project_id);
CREATE INDEX idx_activities_user_id ON activities(user_id);
CREATE INDEX idx_activities_created_at ON activities(created_at);
```

## Part 3: Backend Deployment (Railway)

### Step 1: Prepare Backend for Production

1. Create `Procfile` in the root directory:
```bash
web: npm run start
```

2. Update `package.json` scripts:
```json
{
  "scripts": {
    "start": "NODE_ENV=production tsx server/index.ts",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "esbuild server/index.ts --bundle --platform=node --target=node18 --outfile=dist/server.js --external:@esbuild/*",
    "dev": "NODE_ENV=development tsx server/index.ts"
  }
}
```

### Step 2: Deploy to Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Create a new Railway project:
```bash
railway new
```

4. Set environment variables in Railway dashboard:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `SESSION_SECRET`
   - `DATABASE_URL`
   - `NODE_ENV=production`
   - `FRONTEND_URL` (will be set after frontend deployment)

5. Deploy:
```bash
railway up
```

6. Get your Railway URL from the dashboard and update the GitHub OAuth callback URL

## Part 4: Frontend Deployment (Vercel)

### Step 1: Prepare Frontend for Production

1. Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  root: "./client",
  build: {
    outDir: "../dist/public",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
})
```

2. Create `.env.production` in the client directory:
```bash
VITE_API_URL=https://your-backend.railway.app
```

### Step 2: Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

4. Set environment variables in Vercel dashboard:
   - `VITE_API_URL=https://your-backend.railway.app`

5. Update the `FRONTEND_URL` environment variable in Railway with your Vercel URL

## Part 5: GitHub Repository Setup

For each repository you want to deploy, add these secrets in GitHub → Settings → Secrets and variables → Actions:

### For React/JavaScript projects (Vercel):
- `VERCEL_TOKEN`: Get from Vercel → Settings → Tokens
- `ORG_ID`: Get from `.vercel/project.json` after deploying once
- `PROJECT_ID`: Get from `.vercel/project.json` after deploying once

### For Node.js/Python projects (Railway):
- `RAILWAY_TOKEN`: Get from Railway → Account → Tokens

## Part 6: Final Configuration

### Step 1: Update GitHub OAuth App

1. Go back to your GitHub OAuth App settings
2. Update the **Authorization callback URL** to:
   `https://your-backend.railway.app/api/auth/github/callback`
3. Update the **Homepage URL** to:
   `https://your-frontend.vercel.app`

### Step 2: Test the Complete Flow

1. Visit your Vercel frontend URL
2. Click "Connect GitHub" 
3. Authorize the app
4. Connect a repository
5. Trigger a deployment
6. Verify the GitHub Actions workflow runs
7. Check that deployment status updates in real-time

## Part 7: Environment Variables Summary

### Backend (Railway)
```bash
GITHUB_CLIENT_ID=ghp_xxx
GITHUB_CLIENT_SECRET=xxx
SESSION_SECRET=xxx
DATABASE_URL=postgresql://xxx
NODE_ENV=production
FRONTEND_URL=https://your-app.vercel.app
BACKEND_URL=https://your-backend.railway.app
```

### Frontend (Vercel)
```bash
VITE_API_URL=https://your-backend.railway.app
```

### GitHub Repository Secrets
For React projects:
```bash
VERCEL_TOKEN=xxx
ORG_ID=xxx
PROJECT_ID=xxx
```

For Node.js/Python projects:
```bash
RAILWAY_TOKEN=xxx
```

## Troubleshooting

### Common Issues

1. **GitHub OAuth fails**: Check that callback URL matches exactly
2. **Database connection fails**: Verify DATABASE_URL is correct
3. **CORS errors**: Ensure FRONTEND_URL is set correctly in backend
4. **Deployments don't trigger**: Check GitHub repository has the required secrets
5. **Webhooks not working**: Verify webhook URL is accessible from GitHub

### Debug Commands

Check backend logs:
```bash
railway logs
```

Check frontend build logs:
```bash
vercel logs
```

Test API endpoints:
```bash
curl https://your-backend.railway.app/api/auth/user
```

## Security Notes

1. Never commit secrets to version control
2. Use strong session secrets
3. Enable GitHub's security features (2FA, etc.)
4. Regularly rotate API tokens
5. Monitor application logs for suspicious activity

Your AutoFlow platform is now ready for production with real GitHub integration!