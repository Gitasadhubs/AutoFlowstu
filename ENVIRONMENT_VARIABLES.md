# Environment Variables Configuration

This document outlines all environment variables required for AutoFlow deployment and development.

## 🔧 Backend Environment Variables

### Required for Production

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@host:port/database

# Server Configuration
PORT=3000
NODE_ENV=production

# Security
SESSION_SECRET=your-super-secret-session-key-here

# Frontend Integration
FRONTEND_URL=https://your-project.vercel.app
```

### Optional (GitHub OAuth)

```env
# GitHub OAuth Integration
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
```

### Development Only

```env
# Development Environment
NODE_ENV=development
DATABASE_URL=postgresql://localhost:5432/autoflow_dev
SESSION_SECRET=dev-secret-key
FRONTEND_URL=http://localhost:3000
```

## 🎨 Frontend Environment Variables

### Production (Set in Vercel)

```env
# API Configuration
VITE_API_URL=https://your-backend.up.railway.app

# Optional Features
VITE_GITHUB_CLIENT_ID=your_github_oauth_client_id

# Build Environment
NODE_ENV=production
```

### Development

```env
# Local Development
VITE_API_URL=http://localhost:5000

# Optional Features
VITE_GITHUB_CLIENT_ID=your_github_oauth_client_id

# Development Environment
NODE_ENV=development
```

## 🚀 Platform-Specific Setup

### Railway (Backend)

1. Go to Railway Dashboard → Your Project → Variables
2. Add the following variables:

```
NODE_ENV=production
DATABASE_URL=(automatically set by Railway PostgreSQL)
SESSION_SECRET=generate-strong-32-character-secret
FRONTEND_URL=https://your-project.vercel.app
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Vercel (Frontend)

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add the following for **Production**:

```
VITE_API_URL=https://your-backend.up.railway.app
VITE_GITHUB_CLIENT_ID=your_github_client_id
NODE_ENV=production
```

### GitHub Secrets (CI/CD)

For automated deployment, add these secrets in GitHub:

```
# Vercel Deployment
VERCEL_TOKEN=your_vercel_api_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id

# Railway Deployment
RAILWAY_TOKEN=your_railway_api_token
RAILWAY_PROJECT_ID=your_railway_project_id
RAILWAY_BACKEND_URL=https://your-backend.up.railway.app

# Application Configuration
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
DATABASE_URL=postgresql://username:password@host:port/database
SESSION_SECRET=your-strong-session-secret
FRONTEND_URL=https://your-project.vercel.app
```

## 🔑 How to Generate Values

### SESSION_SECRET
Generate a strong 32-character secret:
```bash
openssl rand -base64 32
```
Or use an online generator: https://generate-secret.vercel.app/32

### DATABASE_URL
- **Railway**: Automatically provided when you add PostgreSQL service
- **Local**: `postgresql://localhost:5432/autoflow_dev`
- **Format**: `postgresql://username:password@host:port/database`

### GitHub OAuth (Optional)

1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Create new OAuth App:
   - **Application name**: AutoFlow
   - **Homepage URL**: `https://your-project.vercel.app`
   - **Authorization callback URL**: `https://your-backend.up.railway.app/api/auth/github/callback`
3. Copy Client ID and Client Secret

### API URLs

- **Backend URL**: Available after Railway deployment (e.g., `https://autoflow-production-abc123.up.railway.app`)
- **Frontend URL**: Available after Vercel deployment (e.g., `https://autoflow-frontend.vercel.app`)

## 🛠️ Local Development Setup

Create `.env` files in your project:

### Backend `.env`
```env
DATABASE_URL=postgresql://localhost:5432/autoflow_dev
SESSION_SECRET=local-dev-secret-key
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Frontend `.env`
```env
VITE_API_URL=http://localhost:5000
VITE_GITHUB_CLIENT_ID=your_github_client_id
NODE_ENV=development
```

## ⚠️ Security Notes

- **Never commit** `.env` files to version control
- **Use different secrets** for development and production
- **Rotate secrets** regularly in production
- **Keep DATABASE_URL** private - it contains database credentials
- **SESSION_SECRET** should be at least 32 characters long and cryptographically random

## 🧪 Environment Validation

The application includes built-in environment validation:

- **Backend**: Checks for required variables on startup
- **Frontend**: Uses fallback values for missing variables
- **Development**: Warns about missing optional variables
- **Production**: Fails fast if critical variables are missing

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check `DATABASE_URL` format
   - Ensure database server is running
   - Verify credentials are correct

2. **CORS Errors**
   - Verify `FRONTEND_URL` matches your actual frontend domain
   - Check both development and production URLs

3. **GitHub OAuth Not Working**
   - Confirm `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` are set
   - Verify OAuth app callback URL matches your backend

4. **Session Errors**
   - Ensure `SESSION_SECRET` is set and sufficiently long
   - Check that secret is the same across all backend instances

### Debug Commands

```bash
# Check if environment variables are loaded
echo $DATABASE_URL
echo $VITE_API_URL

# Test API connectivity
curl https://your-backend.up.railway.app/api/health

# Verify frontend build
cd frontend && npm run build
```

## 📚 Additional Resources

- [Railway Environment Variables](https://docs.railway.app/guides/variables)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [PostgreSQL Connection Strings](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING)