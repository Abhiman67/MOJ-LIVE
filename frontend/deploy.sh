#!/bin/bash
# Deployment Script for Hostinger VPS
set -e

echo "🚀 Starting Deployment for MyOnlineJet Frontend..."

# Navigate to app directory
cd "$(dirname "$0")"

# Pull latest code from git
echo "📥 Pulling latest code..."
git pull origin main || git pull

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps || npm install

# Build Next.js application
echo "🔨 Building application..."
npm run build

# Restart PM2 process
echo "🔄 Reloading PM2 process..."
pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js
pm2 save

echo "✅ Deployment completed successfully!"

