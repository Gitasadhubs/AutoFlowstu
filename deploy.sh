#!/bin/bash

# AutoFlow Frontend Deployment Script for Vercel
# Run this script to deploy your frontend to Vercel

set -e

echo "🚀 AutoFlow Frontend Deployment to Vercel"
echo "========================================="

# Check if required tools are installed
echo "📋 Checking prerequisites..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Test frontend build
echo "🔨 Testing frontend build..."
if [ -f "vite.config.frontend.ts" ]; then
    npm run build --config vite.config.frontend.ts || {
        echo "❌ Frontend build failed. Please fix build errors first."
        exit 1
    }
else
    echo "❌ vite.config.frontend.ts not found. Please ensure frontend config exists."
    exit 1
fi

echo "✅ Frontend build successful"

# Check environment variables
echo "🔍 Checking environment variables..."

if [ -z "$VITE_API_URL" ]; then
    echo "⚠️  VITE_API_URL not set. Using default: http://localhost:5000"
    export VITE_API_URL="http://localhost:5000"
fi

if [ -z "$VITE_GITHUB_CLIENT_ID" ]; then
    echo "⚠️  VITE_GITHUB_CLIENT_ID not set. GitHub authentication may not work."
fi

echo "✅ Environment variables checked"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."

if command -v vercel &> /dev/null; then
    echo "Using Vercel CLI..."
    vercel --prod --yes --confirm
else
    echo "📋 Vercel CLI not found. Please install with: npm install -g vercel"
    echo "Or deploy manually through Vercel dashboard at https://vercel.com"
    echo ""
    echo "Manual deployment steps:"
    echo "1. Go to https://vercel.com/dashboard"
    echo "2. Click 'New Project'"
    echo "3. Import your GitHub repository"
    echo "4. Configure build settings:"
    echo "   - Framework: Vite"
    echo "   - Build Command: npm run build --config vite.config.frontend.ts"
    echo "   - Output Directory: dist"
    echo "5. Add environment variables:"
    echo "   - VITE_API_URL: your backend URL"
    echo "   - VITE_GITHUB_CLIENT_ID: your GitHub OAuth client ID"
    echo "6. Deploy"
    exit 1
fi

echo "✅ Deployment initiated!"
echo ""
echo "🎉 Frontend deployment process completed!"
echo "Check your Vercel dashboard for deployment status."
echo ""
echo "Next steps:"
echo "1. Update your backend CORS settings with the new Vercel URL"
echo "2. Update GitHub OAuth app with the new callback URL"
echo "3. Test all functionality on the deployed app"
echo ""
echo "Happy deploying! 🚀"