# Vercel Deployment Guide

Complete guide for deploying OrganizeMyTeam services on Vercel with multiple subdomains.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Setting Up Vercel Projects](#setting-up-vercel-projects)
- [DNS Configuration](#dns-configuration)
- [Preview vs Production](#preview-vs-production)
- [Environment Variables](#environment-variables)
- [Cross-Subdomain Authentication](#cross-subdomain-authentication)
- [Deployment Workflow](#deployment-workflow)

---

## Architecture Overview

**Domain:** `organizemyteam.com`

**Services:**
```
organizemyteam.com & www.organizemyteam.com
├── Vercel Project 1: "organizemyteam-landing" (this project)
│   └── Custom domains: organizemyteam.com, www.organizemyteam.com
│
├── Vercel Project 2: "organizemyteam-app"
│   └── Custom domain: app.organizemyteam.com
│
└── Vercel Project 3: "organizemyteam-manager"
    └── Custom domain: manager.organizemyteam.com
```

**Benefits:**
- ✅ Independent deployments (deploy each service separately)
- ✅ Different tech stacks per service if needed
- ✅ Easier to manage permissions/access
- ✅ Better performance (each optimized independently)
- ✅ Isolated failures (one service down doesn't affect others)

---

## Project Structure

### Recommended Approach: Separate Vercel Projects

Each subdomain should be a **separate Vercel project**:

1. **Landing Page** (`www.organizemyteam.com`)
   - Repo: `organizemyteam-landing`
   - Tech: Next.js (this project)
   - Purpose: Marketing site, product info, contact form

2. **Team Manager App** (`app.organizemyteam.com`)
   - Repo: `organizemyteam-app`
   - Tech: Next.js with authentication
   - Purpose: Main SaaS application

3. **Manager Dashboard** (`manager.organizemyteam.com`)
   - Repo: `organizemyteam-manager`
   - Tech: Next.js
   - Purpose: Admin/management interface

---

## Setting Up Vercel Projects

### Step 1: Create GitHub Repositories

```bash
# Option A: Separate repos (recommended for starting)
organizemyteam-landing/
organizemyteam-app/
organizemyteam-manager/

# Option B: Monorepo (advanced)
organizemyteam/
├── apps/
│   ├── landing/
│   ├── app/
│   └── manager/
└── packages/
    └── shared/
```

### Step 2: Import to Vercel

For each repository:

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (or `apps/landing` for monorepo)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Click **"Deploy"**

### Step 3: Add Custom Domains

For each Vercel project:

1. Go to **Project Settings → Domains**
2. Add your custom domain:
   - Landing: `organizemyteam.com` and `www.organizemyteam.com`
   - App: `app.organizemyteam.com`
   - Manager: `manager.organizemyteam.com`
3. Vercel will provide DNS configuration instructions

---

## DNS Configuration

Configure these records in your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare):

### A Records & CNAME Records

```dns
# Root domain and www
@                  A      76.76.21.21          # Vercel's IP (or use CNAME if required)
www               CNAME   cname.vercel-dns.com  # Landing page

# Subdomains
app               CNAME   cname.vercel-dns.com  # Team Manager App
manager           CNAME   cname.vercel-dns.com  # Manager Dashboard

# Optional: Staging environments
staging           CNAME   cname.vercel-dns.com  # Landing staging
app-staging       CNAME   cname.vercel-dns.com  # App staging
```

### DNS Propagation

- DNS changes can take up to 48 hours to propagate
- Use [dnschecker.org](https://dnschecker.org) to verify
- Vercel will show a green checkmark when domain is verified

---

## Preview vs Production

### Option A: Vercel's Built-in Preview System (Recommended)

**Don't buy a second domain!** Vercel provides automatic preview deployments:

```
Production Branch (main/master):
├── www.organizemyteam.com           → Production
├── app.organizemyteam.com           → Production
└── manager.organizemyteam.com       → Production

Preview Deployments (automatic):
├── organizemyteam-landing-git-feature-branch-yourteam.vercel.app
├── organizemyteam-app-abc123.vercel.app
└── Every PR/branch gets a unique preview URL
```

**Benefits:**
- ✅ Free preview URLs for every PR
- ✅ Automatic deployment on every commit
- ✅ Password protection available
- ✅ No DNS management needed
- ✅ Easy to share with team/stakeholders

**Configuration:**
- Go to **Project Settings → Git**
- Enable: "Automatic deployments for all branches"
- Optionally enable password protection for previews

### Option B: Add Staging Subdomains (Optional)

If you need a persistent staging environment:

```
Production:
├── www.organizemyteam.com           → main branch
├── app.organizemyteam.com           → main branch

Staging:
├── staging.organizemyteam.com       → staging branch
├── app-staging.organizemyteam.com   → staging branch
```

**Setup in Vercel:**
1. Create a `staging` branch in your repo
2. Go to **Project Settings → Domains**
3. Add `staging.organizemyteam.com`
4. Select the `staging` branch for this domain

**When to use staging:**
- ✓ QA team needs a stable testing environment
- ✓ Need to demo features before merging to main
- ✓ External integrations need a non-production endpoint
- ✗ Simple projects (use preview URLs instead)

---

## Environment Variables

Set different values per environment in Vercel.

### Configuring Environment Variables

1. Go to **Project Settings → Environment Variables**
2. Add variable with different values for each environment:
   - **Production** (main branch)
   - **Preview** (all branches)
   - **Development** (local)

### Example Configuration

```bash
# Production (main branch)
NEXT_PUBLIC_APP_URL=https://app.organizemyteam.com
NEXT_PUBLIC_SITE_URL=https://organizemyteam.com
RESEND_TO_EMAIL=support@organizemyteam.com
RESEND_FROM_EMAIL=OrganizeMyTeam <noreply@organizemyteam.com>

# Preview (feature branches)
NEXT_PUBLIC_APP_URL=https://app-staging.organizemyteam.com
NEXT_PUBLIC_SITE_URL=https://staging.organizemyteam.com
RESEND_TO_EMAIL=dev@organizemyteam.com
RESEND_FROM_EMAIL=OrganizeMyTeam <dev@organizemyteam.com>

# Development (local)
NEXT_PUBLIC_APP_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_TO_EMAIL=your@email.com
RESEND_FROM_EMAIL=OrganizeMyTeam <onboarding@resend.dev>
```

### Required Environment Variables

See [`.env.example`](../.env.example) for complete list. Key variables:

| Variable | Purpose | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_APP_URL` | Main app URL (controls login/signup links) | Yes |
| `NEXT_PUBLIC_SITE_URL` | Landing page URL | Yes |
| `NEXT_PUBLIC_COOKIE_DOMAIN` | Root domain for cross-subdomain auth | Yes |
| `RESEND_API_KEY` | Resend API key for email | Yes |
| `RESEND_FROM_EMAIL` | Sender email address | Yes |
| `RESEND_TO_EMAIL` | Recipient for contact form | Yes |

---

## Cross-Subdomain Authentication

To share authentication cookies between subdomains (e.g., login on `app.organizemyteam.com`, stay logged in on `www.organizemyteam.com`):

### Cookie Domain Configuration

**Set in all projects:**
```bash
NEXT_PUBLIC_COOKIE_DOMAIN=organizemyteam.com
```

**Important:**
- ✅ Use root domain WITHOUT subdomain prefix
- ✅ Don't include `www.` or `app.`
- ✅ Modern browsers don't need the leading dot (`.organizemyteam.com`)

### Cookie Settings

When setting auth cookies in your app:

```typescript
// Example: Setting a cross-subdomain cookie
document.cookie = `auth_token=${token}; domain=.organizemyteam.com; path=/; secure; samesite=lax`;
```

**Cookie attributes:**
- `domain=.organizemyteam.com` - Works across all subdomains
- `path=/` - Available everywhere on the domain
- `secure` - Only sent over HTTPS (required in production)
- `samesite=lax` - Allows cross-subdomain navigation

### Testing Cross-Subdomain Auth Locally

Use local domain aliases:

1. Edit `/etc/hosts` (Mac/Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows):
   ```
   127.0.0.1 local.organizemyteam.com
   127.0.0.1 app.local.organizemyteam.com
   127.0.0.1 www.local.organizemyteam.com
   ```

2. Access your apps:
   - Landing: `http://www.local.organizemyteam.com:3000`
   - App: `http://app.local.organizemyteam.com:3001`

3. Set `NEXT_PUBLIC_COOKIE_DOMAIN=local.organizemyteam.com`

---

## Deployment Workflow

### Recommended Git Workflow

```
main (production)
├── Deploy to: www.organizemyteam.com
├── Automatic on merge
└── Protected branch (require PR reviews)

staging (optional)
├── Deploy to: staging.organizemyteam.com
├── Pre-production testing
└── Merge main → staging for testing

feature/* branches
├── Deploy to: organizemyteam-landing-git-feature-xyz.vercel.app
├── Automatic preview on PR
└── Delete after merge
```

### Step-by-Step Deployment

1. **Create feature branch:**
   ```bash
   git checkout -b feature/new-pricing
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "feat: Update pricing page"
   git push origin feature/new-pricing
   ```

3. **Vercel automatically deploys preview:**
   - Preview URL: `organizemyteam-landing-git-feature-new-pricing.vercel.app`
   - Comment on GitHub PR with preview link

4. **Create PR and review:**
   - Team reviews code and preview
   - Run tests, check for issues

5. **Merge to main:**
   ```bash
   # After PR approval
   git checkout main
   git pull origin main
   # Merge via GitHub UI or:
   git merge feature/new-pricing
   git push origin main
   ```

6. **Vercel automatically deploys to production:**
   - Production URL: `www.organizemyteam.com`
   - Takes ~2-5 minutes

### Rollback Strategy

If production has issues:

**Option 1: Revert via Vercel Dashboard**
1. Go to **Deployments**
2. Find last working deployment
3. Click **"Promote to Production"**

**Option 2: Revert via Git**
```bash
git revert <commit-hash>
git push origin main
```

**Option 3: Instant Rollback (Vercel Pro)**
- Click **"Instant Rollback"** in dashboard
- Reverts to previous deployment immediately

---

## Production Checklist

Before going live:

### DNS & Domains
- [ ] All CNAME records configured
- [ ] DNS propagation verified (48 hours)
- [ ] SSL certificates issued (automatic via Vercel)
- [ ] `www` and root domain both work
- [ ] Redirects configured (e.g., `organizemyteam.com` → `www.organizemyteam.com`)

### Environment Variables
- [ ] All required env vars set in Vercel
- [ ] Production values (not dev/test values)
- [ ] Secrets properly secured
- [ ] `NEXT_PUBLIC_APP_URL` points to production app
- [ ] Email addresses correct (`RESEND_TO_EMAIL`, `RESEND_FROM_EMAIL`)

### Email Configuration (Resend)
- [ ] Domain verified in Resend dashboard
- [ ] DKIM/SPF records added to DNS
- [ ] Test email sending from production
- [ ] Change from `onboarding@resend.dev` to custom domain

### Security
- [ ] HTTPS enforced (automatic via Vercel)
- [ ] Security headers configured
- [ ] Cookie domain set correctly for cross-subdomain auth
- [ ] API keys rotated (no dev keys in production)
- [ ] Rate limiting configured (if applicable)

### Performance
- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Images optimized (using Next.js Image component)
- [ ] Enable Vercel Analytics (optional)
- [ ] Enable Web Vitals tracking

### Monitoring
- [ ] Set up Vercel notifications (Slack/email)
- [ ] Configure error tracking (Sentry, LogRocket, etc.)
- [ ] Set up uptime monitoring (Vercel, UptimeRobot)

### Testing
- [ ] Test all pages load correctly
- [ ] Test contact form works
- [ ] Test all CTA links point to correct URLs
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive testing
- [ ] Test in incognito/private mode

---

## Troubleshooting

### Common Issues

**"Domain not verified" error:**
- Wait 24-48 hours for DNS propagation
- Check DNS records match Vercel's requirements
- Use `dig` or `nslookup` to verify DNS

**Preview deployments not working:**
- Check Git integration in Project Settings
- Verify branch name matches deployment filter
- Check build logs for errors

**Environment variables not working:**
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding/changing env vars
- Check variable is set for correct environment (Production/Preview)

**Cookies not working across subdomains:**
- Verify `NEXT_PUBLIC_COOKIE_DOMAIN` is set to root domain
- Check cookie domain doesn't have subdomain prefix
- Ensure both domains use HTTPS in production

**Build failures:**
- Check build logs in Vercel dashboard
- Test build locally: `npm run build`
- Verify all dependencies in `package.json`
- Check Node.js version compatibility

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains Guide](https://vercel.com/docs/concepts/projects/custom-domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Preview Deployments](https://vercel.com/docs/concepts/deployments/preview-deployments)

---

## Support

For issues specific to this project:
- Check [Launch Checklist](./LAUNCH_CHECKLIST.md)
- Review [Architecture Analysis](./landing-page-architecture-analysis.md)
- Contact: dev@organizemyteam.com
