# GitHub Secrets Required for AutoFlow Deployment

To deploy AutoFlow automatically using GitHub Actions, you need to add the following secrets to your GitHub repository.

## How to Add Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and Variables** > **Actions**
3. Click **New repository secret**
4. Add each secret with the exact name and value

## Required Secrets

### Vercel Deployment (Frontend)

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `VERCEL_TOKEN` | Vercel API Token | Go to Vercel Dashboard > Settings > Tokens > Create |
| `VERCEL_ORG_ID` | Your Vercel Organization ID | Found in Vercel project settings or team settings |
| `VERCEL_PROJECT_ID` | Your Vercel Project ID | Found in Vercel project settings |

### Railway Deployment (Backend)

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `RAILWAY_TOKEN` | Railway API Token | Go to Railway Dashboard > Account > Tokens > Create |
| `RAILWAY_PROJECT_ID` | Your Railway Project ID | Found in Railway project settings |
| `RAILWAY_BACKEND_URL` | Your Railway app URL | After first deployment: `https://your-app-name.up.railway.app` |

### Application Configuration

| Secret Name | Description | Required |
|-------------|-------------|----------|
| `GITHUB_CLIENT_ID` | GitHub OAuth App Client ID | Optional for basic deployment |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App Client Secret | Optional for basic deployment |
| `DATABASE_URL` | PostgreSQL database connection string | **REQUIRED** - Set in Railway environment |
| `SESSION_SECRET` | Secret key for session encryption | **REQUIRED** for production security |
| `FRONTEND_URL` | Frontend deployment URL | **REQUIRED** for CORS configuration |

## Important Notes

- **RAILWAY_BACKEND_URL**: You'll get this after your first Railway deployment
- **RAILWAY_PROJECT_ID**: Critical for deployment - found in Railway project URL or settings
- **DATABASE_URL**: Must be set in Railway environment variables for database connection
- **SESSION_SECRET**: Generate a strong random string for production security
- **GitHub OAuth**: Required only if you want GitHub authentication to work
- **Security**: Never commit these values to your repository
- **Updates**: Railway URL may change, update the secret if needed

## Deployment Flow

1. Push to `main` branch triggers the workflow
2. Frontend builds with `VITE_API_URL` set to your Railway backend
3. Frontend deploys to Vercel automatically
4. Backend deploys to Railway automatically
5. Both deployments complete and URLs are displayed

## Testing Deployment

After adding all secrets:
1. Make a small change to your code
2. Push to the `main` branch
3. Check the **Actions** tab to see deployment progress
4. Visit your deployed URLs once complete

## Troubleshooting

- **Missing secrets**: Check the GitHub Actions logs for specific error messages
- **Wrong URLs**: Verify RAILWAY_BACKEND_URL matches your actual deployment
- **Authentication errors**: Check if GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET are needed