# Teddy Mbayaki — Portfolio Website

A modern developer portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Pages
- `/` — Homepage with hero, featured projects, services, and CTA
- `/projects` — All projects grid (featured + others)
- `/projects/[slug]` — Individual project case study page
- `/about` — Bio, skills, and experience
- `/services` — Services offered with process breakdown
- `/contact` — Contact links and availability

## Adding a New Project
Edit `data/projects.ts` and add a new entry following the `Project` type.
Add screenshots to `public/images/projects/your-project-name/`.

## Deploying to Vercel
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Next.js — click Deploy
4. Add your custom domain in Project Settings → Domains

## Local Development
```bash
npm install
npm run dev
```
