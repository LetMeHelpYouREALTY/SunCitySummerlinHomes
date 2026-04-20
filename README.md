
# Sun City Summerlin Homes

[![Run on Replit](https://replit.com/badge/github/DrJanDuffy/SunCitySummerlinHomes)](https://replit.com/@DrJanDuffy/SunCitySummerlinHomes)

NextJS website for Dr. Jan Duffy's Sun City Summerlin Homes real estate service.

## Development Workflow

This project is maintained in Replit with GitHub integration. Follow these steps for a smooth workflow:

### Getting Started

1. Make changes in the Replit workspace
2. Use the "GitHub Pro" workflow to commit and push changes
3. For feature work, use the "Create GitHub PR" workflow

### Available Workflows

- **GitHub Pro**: Commit and push changes with smart error handling
- **GitHub Sync**: Pull latest changes from GitHub
- **Create GitHub PR**: Create a new branch and generate a PR link
- **GitHub Health Check**: Run maintenance on the Git repository

### Development Commands

```bash
# Start production-like local server (Vercel routing/env behavior)
npm run dev

# Build for production (local Next.js build)
npm run build

# Start production server
npm run start

# Generate sitemap
npm run generate-sitemap
```

## Project Structure

- `/pages`: Next.js pages and routes
- `/components`: Reusable React components
- `/styles`: CSS modules and global styles
- `/public`: Static assets (see [`public/README.md`](public/README.md) for image/logo folders and naming)
- `/utils`: Utility functions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deployment

This project is deployed on Vercel.

### Recommended Vercel workflow

```bash
# Sync project env vars locally
vercel pull

# Local production-like dev
vercel dev

# Build exactly as Vercel would
vercel build

# Deploy to production
vercel --prod
```
