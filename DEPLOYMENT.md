# Vercel Deployment Guide

## 🚀 Deploy ROOT5 3D Viewer to Vercel

This guide will walk you through deploying your ROOT5 3D Game Viewer to Vercel.

---

## Prerequisites

✅ Node.js 18+ installed  
✅ GitHub account  
✅ Vercel account (free - sign up at [vercel.com](https://vercel.com))  
✅ Your `root5_tcg_game_center.glb` file in `public/obj/`

---

## 🎯 Quick Deploy (Fastest Method)

### Option 1: GitHub + Vercel (Recommended)

**Step 1: Push to GitHub**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial ROOT5 3D Viewer setup"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/root5-3d-viewer.git
git branch -M main
git push -u origin main
```

**Step 2: Connect to Vercel**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `root5-3d-viewer` repository
4. Click "Import"
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes
8. Done! 🎉

Your site will be live at: `https://root5-3d-viewer.vercel.app`

---

### Option 2: Vercel CLI (For Advanced Users)

**Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

**Step 2: Login to Vercel**

```bash
vercel login
```

**Step 3: Deploy**

```bash
# From your project root
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Link to existing project? No
# - Project name: root5-3d-viewer
# - Directory: ./
# - Override settings? No
```

**Step 4: Production Deploy**

```bash
vercel --prod
```

---

## ⚙️ Custom Domain Setup

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `game.root5dao.com`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

### DNS Settings Example:
```
Type: CNAME
Name: game (or @ for root domain)
Value: cname.vercel-dns.com
```

---

## 🔄 Auto-Deploy from GitHub

Once connected, Vercel automatically deploys when you:
- Push to `main` branch (production)
- Push to any branch (preview deployment)
- Open a Pull Request (preview deployment)

---

## 📊 Environment Settings

No environment variables needed for this project!

Vercel automatically configures:
- Node.js version
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`

---

## 🐛 Troubleshooting

### Build Failed?

**Error: Model file not found**
- Ensure `public/obj/root5_tcg_game_center.glb` exists
- Check the file is committed to git
- Verify file size is under 100MB

**Error: Module not found**
```bash
# Delete and reinstall dependencies
rm -rf node_modules .next
npm install
npm run build
```

**Error: Out of memory**
- Your GLB file might be too large
- Try compressing it in Blender
- Use glTF-Pipeline to compress:
```bash
npm install -g gltf-pipeline
gltf-pipeline -i input.glb -o output.glb -d
```

### Deployment Issues?

**Vercel deployment stuck?**
1. Check [Vercel Status](https://www.vercel-status.com/)
2. Try redeploying: `vercel --prod --force`
3. Clear cache: Vercel Dashboard → Deployments → ⋮ → Redeploy

**Build logs show errors?**
1. Test locally first: `npm run build`
2. Check Node.js version matches (18+)
3. Review build logs in Vercel dashboard

---

## 🎮 Preview Before Production

```bash
# Deploy to preview URL
vercel

# View the deployment
# Opens in browser automatically
```

---

## 📦 Large File Handling

If your GLB file is very large (>50MB):

### Option 1: External Storage
Upload to Cloudinary or similar:
```javascript
// In GameBoard3D.js, change:
useGLTF('https://your-cdn.com/root5_tcg_game_center.glb')
```

### Option 2: Compress with Draco
```bash
# Install gltf-pipeline
npm install -g gltf-pipeline

# Compress your model
gltf-pipeline -i public/obj/root5_tcg_game_center.glb \
  -o public/obj/root5_tcg_game_center_compressed.glb \
  -d

# Update GameBoard3D.js to use compressed version
```

---

## 🔗 Project Links After Deployment

After deployment, you'll have:

- **Production URL:** `https://your-project.vercel.app`
- **Git Branch Previews:** Automatic for every branch
- **PR Previews:** Automatic for every pull request
- **Deployment Dashboard:** `https://vercel.com/your-username/root5-3d-viewer`

---

## 🎯 Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ HTTP/2 & HTTP/3
- ✅ Automatic SSL
- ✅ Edge caching
- ✅ Image optimization
- ✅ Zero-config deployment

---

## 📧 Support

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **ROOT5 DAO:** https://root5dao.com

---

## ✅ Deployment Checklist

Before deploying, make sure:

- [ ] `root5_tcg_game_center.glb` is in `public/obj/`
- [ ] All dependencies installed (`npm install`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] Files committed to git
- [ ] Repository pushed to GitHub
- [ ] Vercel account created
- [ ] Repository connected to Vercel

---

## 🎉 Success!

Your ROOT5 3D Game Viewer is now live!

Share your deployment URL with your community and watch them explore the game world in 3D!

**Need to update?** Just push to GitHub and Vercel auto-deploys! 🚀
