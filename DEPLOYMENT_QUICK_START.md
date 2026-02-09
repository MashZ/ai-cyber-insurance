# Quick Deployment Guide

## Deploy to Vercel in 5 Minutes

### Step 1: Push to GitHub

```bash
cd ai-cyber-insurance-venture

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI & Cyber Insurance website"

# Create new repository on GitHub
# Then push to it
git remote add origin https://github.com/YOUR_USERNAME/ai-cyber-insurance.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A: Via Dashboard (Recommended)**

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your `ai-cyber-insurance` repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Wait 2-3 minutes for deployment
8. Your site is live!

**Option B: Via CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `aicyberinsurance.com`)
3. Update your DNS:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → Vercel IP (shown in dashboard)
4. Wait for DNS propagation (5-30 minutes)

## Testing Locally First

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Visit http://localhost:8080

# Build for production
npm run build

# Preview production build
npm run preview
# Visit http://localhost:4173
```

## Updating the Site

```bash
# Make your changes to files

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update: your changes"
git push

# Vercel automatically redeploys!
```

## Customization Quick Tips

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: { DEFAULT: '#YOUR_COLOR' },
  accent: { DEFAULT: '#YOUR_COLOR' },
}
```

### Update Contact Info

Edit `src/pages/Contact.tsx` and `src/components/Footer.tsx`

### Add New Page

1. Create `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`:
   ```typescript
   <Route path="/yourpage" element={<YourPage />} />
   ```
3. Add to nav in `src/components/Header.tsx`

## Troubleshooting

**Build fails?**
```bash
npm install
npm run build
```

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Vercel deployment fails?**
- Check `vercel.json` is present
- Ensure `package.json` has all dependencies
- Check build logs in Vercel dashboard

## Next Steps

1. ✅ Deploy to Vercel
2. 📧 Set up custom email (Google Workspace or similar)
3. 🔍 Add Google Analytics (optional)
4. 📱 Test on mobile devices
5. 🚀 Share with stakeholders!
