# AutoFlow Frontend Deployment Guide

## Vercel Deployment Setup

### Prerequisites
1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Backend Deployed**: Deploy backend to Railway first

### Step 1: Prepare Frontend for Deployment

```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Test frontend build locally
npm run build:frontend
npm run start:frontend
```

### Step 2: Configure Environment Variables

Create these environment variables in your Vercel project:

```bash
# Required Environment Variables
VITE_API_URL=https://your-backend.railway.app
VITE_GITHUB_CLIENT_ID=your_github_oauth_client_id
NODE_ENV=production
```

### Step 3: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build:frontend`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add environment variables in Vercel dashboard
6. Deploy

#### Option B: Vercel CLI
```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod

# Follow prompts to configure:
# - Build Command: npm run build:frontend
# - Output Directory: dist
# - Development Command: npm run dev:frontend
```

### Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

### Step 5: Update Backend CORS

Update your backend CORS configuration to include your Vercel domain:

```typescript
// In server/routes.ts
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://your-app.vercel.app',
    'https://your-custom-domain.com'
  ],
  credentials: true,
};
```

## Environment Variables Reference

### Frontend (.env.production)
```bash
VITE_API_URL=https://your-backend.railway.app
VITE_GITHUB_CLIENT_ID=your_github_oauth_client_id
NODE_ENV=production
```

### Backend (Railway)
```bash
DATABASE_URL=postgresql://user:pass@host:port/db
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
SESSION_SECRET=your_secure_session_secret
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-app.vercel.app
```

## GitHub OAuth Configuration

Update your GitHub OAuth app settings:

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Edit your OAuth app
3. Update **Homepage URL**: `https://your-app.vercel.app`
4. Update **Callback URL**: `https://your-backend.railway.app/api/auth/github/callback`

## Deployment Verification

1. **Frontend Health**: Visit `https://your-app.vercel.app`
2. **API Connection**: Check network tab for API calls
3. **Authentication**: Test GitHub OAuth login
4. **GitHub Integration**: Test repository connection

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# Check build locally
npm run build:frontend

# Common fixes:
# 1. Update import paths
# 2. Check TypeScript errors
# 3. Verify environment variables
```

#### CORS Errors
- Ensure backend CORS includes Vercel domain
- Check environment variable `VITE_API_URL`
- Verify backend is deployed and accessible

#### Authentication Issues
- Verify GitHub OAuth app configuration
- Check `VITE_GITHUB_CLIENT_ID` environment variable
- Ensure callback URL matches backend deployment

#### Environment Variables Not Working
- Prefix all frontend variables with `VITE_`
- Redeploy after adding new environment variables
- Check Vercel dashboard environment variables

### Performance Optimization

1. **Enable Vercel Analytics**:
   ```bash
   npm install @vercel/analytics
   ```

2. **Optimize Bundle Size**:
   - Code splitting is already configured
   - Use dynamic imports for large components
   - Optimize images and assets

3. **Enable Compression**:
   - Vercel automatically compresses assets
   - Use WebP images where possible

## Continuous Deployment

Vercel automatically deploys on:
- Push to main branch (production)
- Push to other branches (preview deployments)

Configure deployment hooks:
1. Go to Vercel dashboard → Settings → Git
2. Configure production branch
3. Enable automatic deployments

## Monitoring

1. **Vercel Analytics**: Built-in performance monitoring
2. **Error Tracking**: Monitor browser console errors
3. **API Monitoring**: Track backend API response times

## Security Headers

Vercel automatically adds security headers configured in `vercel.json`:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

## Cost Optimization

Vercel offers generous free tier:
- 100GB bandwidth/month
- Unlimited projects
- Automatic SSL

For production apps, consider:
- Pro plan for custom domains
- Enterprise for advanced features

## Next Steps

After successful deployment:

1. **Test All Features**: Verify complete functionality
2. **Monitor Performance**: Use Vercel Analytics
3. **Set Up Alerts**: Configure error monitoring
4. **Document URLs**: Update documentation with live URLs
5. **Share with Users**: Your AutoFlow platform is live!