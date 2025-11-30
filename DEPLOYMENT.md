# GitHub Pages Deployment Guide

This guide walks you through deploying the Vibe Marketing site to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right, then select **New repository**
3. Name your repository (e.g., `vibe-marketing`)
4. Choose **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Initialize Git and Push Code

Open a terminal in the `vibe-marketing` directory and run:

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Vibe marketing site"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. The page will automatically deploy when you push to the `main` branch

## Step 4: Configure Base Path (If Needed)

### For Root Domain Deployment

If you're using a custom domain or want the site at the root (`username.github.io`):

1. Update `.github/workflows/deploy.yml`:
   - Change `BASE_PATH: ${{ github.event.repository.name }}` to `BASE_PATH: ''`

### For Subdirectory Deployment

If your site is at `username.github.io/repo-name/` (default):

- The current configuration works automatically
- No changes needed

## Step 5: Verify Deployment

1. After pushing to `main`, go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, go to **Settings** → **Pages**
5. Your site URL will be displayed (e.g., `https://YOUR_USERNAME.github.io/REPO_NAME/`)

## Updating the Site

To update the site:

```bash
# Make your changes
# ... edit files ...

# Commit changes
git add .
git commit -m "Update marketing site"

# Push to trigger deployment
git push
```

The GitHub Actions workflow will automatically rebuild and deploy your site.

## Troubleshooting

### Site shows 404

- Wait a few minutes after first deployment (DNS propagation)
- Check the **Actions** tab to ensure the workflow completed successfully
- Verify the base path is correct in `vite.config.js`

### Assets not loading

- Ensure `BASE_PATH` environment variable is set correctly in the workflow
- Check browser console for 404 errors on assets
- Verify paths in your code use relative paths or the configured base

### Workflow fails

- Check the **Actions** tab for error messages
- Ensure `package.json` has a `build` script
- Verify Node.js version compatibility (workflow uses Node 20)

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public/` directory with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. Update GitHub Pages settings:
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Enable "Enforce HTTPS" (after DNS propagates)

4. Update `vite.config.js` base path to `/` for root domain

