# AutoFlow - CI/CD Platform

## 🚀 Automated Deployment Guide

AutoFlow is a student-friendly CI/CD automation platform that simplifies GitHub Actions and deployment processes. This guide will help you deploy the application with automated pipelines to Vercel (frontend) and Railway (backend).

## 📋 Prerequisites

Before deploying, ensure you have:

- **GitHub Account** with repository access
- **Vercel Account** ([vercel.com](https://vercel.com))
- **Railway Account** ([railway.app](https://railway.app))
- **Node.js 18+** installed locally (for development)

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐
│   Vercel        │    │    Railway      │
│   (Frontend)    │◄──►│   (Backend)     │
│   React SPA     │    │   Node.js API   │
└─────────────────┘    └─────────────────┘
         ▲                       ▲
         │                       │
    ┌─────────────────────────────────┐
    │        GitHub Actions          │
    │      (Automated CI/CD)         │
    └─────────────────────────────────┘
```

## 🛠️ Setup Instructions

### Step 1: Clone Repository

```bash
git clone <your-repository-url>
cd autoflow
```

### Step 2: Set Up Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Set Up Railway Project

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository
5. Configure service:
   - **Root Directory**: `backend`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`

### Step 4: Configure GitHub Secrets

Navigate to your GitHub repository: **Settings** → **Secrets and Variables** → **Actions**

Add the following secrets:

#### 🔑 Required Secrets

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `VERCEL_TOKEN` | Vercel API token | [Vercel Dashboard](https://vercel.com/account/tokens) → Create Token |
| `VERCEL_ORG_ID` | Organization ID | Vercel Project Settings → General |
| `VERCEL_PROJECT_ID` | Project ID | Vercel Project Settings → General |
| `RAILWAY_TOKEN` | Railway API token | [Railway Dashboard](https://railway.app/account/tokens) → Create Token |
| `RAILWAY_PROJECT_ID` | Project ID | Railway Project Settings → Project ID |
| `RAILWAY_BACKEND_URL` | Backend URL | `https://your-service-name.up.railway.app` |
| `DATABASE_URL` | PostgreSQL connection | Railway PostgreSQL service URL |
| `SESSION_SECRET` | Session encryption key | Generate: `openssl rand -base64 32` |
| `FRONTEND_URL` | Frontend URL | `https://your-project.vercel.app` |

#### 🔧 Optional Secrets (for GitHub OAuth)

| Secret Name | Value |
|-------------|-------|
| `GITHUB_CLIENT_ID` | GitHub OAuth App Client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App Client Secret |

## 🚀 Deployment Process

### Automatic Deployment

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to production"
   git push origin main
   ```

2. **Monitor deployment**:
   - Go to **Actions** tab in your GitHub repository
   - Watch the deployment progress
   - Both frontend and backend will deploy simultaneously

### Manual Deployment

#### Frontend (Vercel)
```bash
cd frontend
npm install
npm run build
npx vercel --prod
```

#### Backend (Railway)
```bash
cd backend
npm install
npm run build
railway login
railway deploy
```

## 🌍 Environment Variables

### Backend (Railway)

Set these in Railway dashboard under **Variables**:

```env
NODE_ENV=production
DATABASE_URL=postgresql://username:password@host:port/database
SESSION_SECRET=your-super-secret-session-key
FRONTEND_URL=https://your-project.vercel.app
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Frontend (Vercel)

Set these in Vercel dashboard under **Environment Variables**:

```env
VITE_API_URL=https://your-backend.up.railway.app
VITE_GITHUB_CLIENT_ID=your_github_client_id
NODE_ENV=production
```

## 🗄️ Database Setup

### Railway PostgreSQL

1. In Railway dashboard, add **PostgreSQL** service
2. Copy the `DATABASE_URL` from the service
3. Add it to both Railway environment and GitHub secrets
4. Database will auto-migrate on first deployment

## 📱 Local Development

### Prerequisites
```bash
# Install dependencies
npm install
```

### Development Server
```bash
# Start both frontend and backend
npm run dev

# Or separately:
cd frontend && npm run dev  # Frontend on http://localhost:5173
cd backend && npm run dev   # Backend on http://localhost:3000
```

### Database Setup (Local)
```bash
cd backend
npm run db:generate  # Generate migrations
npm run db:migrate   # Run migrations
npm run db:studio    # Open Drizzle Studio
```

## 🔍 Monitoring & Logs

### Vercel Logs
- Go to Vercel Dashboard → Your Project → Functions tab
- View real-time logs and performance metrics

### Railway Logs
- Go to Railway Dashboard → Your Service → Logs tab
- Monitor application logs and deployment status

### GitHub Actions
- Repository → Actions tab
- View deployment history and debug failures

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Failures
```bash
# Check build logs in GitHub Actions
# Ensure all dependencies are installed
cd frontend && npm install
cd backend && npm install
```

#### 2. Database Connection Error
- Verify `DATABASE_URL` is correct in Railway
- Check PostgreSQL service is running
- Ensure network policies allow connections

#### 3. CORS Issues
- Verify `FRONTEND_URL` matches your Vercel domain
- Check backend CORS configuration
- Ensure environment variables are set correctly

#### 4. GitHub Actions Failing
- Check all required secrets are set
- Verify secret names match exactly
- Review Actions logs for specific errors

### Debug Commands

```bash
# Check environment variables
echo $VITE_API_URL
echo $DATABASE_URL

# Test API connectivity
curl https://your-backend.up.railway.app/api/health

# Verify build output
cd frontend && npm run build
cd backend && npm run build
```

## 📚 Additional Resources

- [Vercel Deployment Guide](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Configuration](https://vitejs.dev/config/)
- [Express.js Documentation](https://expressjs.com/)

## 🤝 Support

For deployment issues:
1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Check Vercel/Railway service logs
4. Verify all environment variables are set

---

**Happy Deploying! 🎉**