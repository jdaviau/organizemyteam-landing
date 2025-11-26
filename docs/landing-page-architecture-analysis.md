# Landing Page & Multi-Product Architecture Analysis

**Date**: 2025-11-23
**Domain**: organizemyteam.com
**Current App**: Team Manager (financial management for youth sports teams)
**Status**: Planning Phase

## Context

Planning architecture for organizemyteam.com as umbrella brand for potentially multiple products, starting with Team Manager. Need to decide on:
- Landing page structure
- Subdomain vs path-based routing
- Multi-product scalability
- Auth/session sharing strategy

---

## Architecture Options Comparison

### Option 1: Separate Landing Page + Subdomains (Recommended for Multi-Product)

```
organizemyteam.com               → Marketing landing page
app.organizemyteam.com           → Team Manager app
docs.organizemyteam.com          → Documentation site
blog.organizemyteam.com          → Blog/resources
api.organizemyteam.com           → API (if needed)
```

**Pros**:
- ✅ Clean separation of concerns
- ✅ Each app can have its own tech stack
- ✅ Easy to add future products
- ✅ Better SEO (separate domains for different content)
- ✅ Can deploy each independently
- ✅ Professional multi-product appearance
- ✅ Standard industry pattern (Stripe, Atlassian, HubSpot)

**Cons**:
- ❌ Need to manage multiple deployments
- ❌ Session/auth sharing across subdomains requires work
- ❌ More DNS configuration
- ❌ Slightly higher complexity

**Best For**: Building a product suite, long-term scalability

---

### Option 2: Monorepo with Path-Based Routing

```
organizemyteam.com/                    → Marketing landing
organizemyteam.com/team-manager        → Team Manager app
organizemyteam.com/docs                → Documentation
organizemyteam.com/blog                → Blog
```

**Pros**:
- ✅ Single deployment
- ✅ Simpler auth (same domain)
- ✅ Easier cookie/session management
- ✅ Lower hosting costs initially

**Cons**:
- ❌ All apps must share same tech stack (or use complex reverse proxy)
- ❌ Harder to scale individual products
- ❌ Messy URLs for apps (`/team-manager/dashboard` vs `/dashboard`)
- ❌ Can't easily rebrand individual products
- ❌ Tight coupling between marketing and app

**Best For**: Single product with tight marketing integration

---

### Option 3: Hybrid Approach ⭐ (Top Recommendation)

```
organizemyteam.com               → Marketing landing (static site)
app.organizemyteam.com           → Team Manager (current app)
[future].organizemyteam.com      → Future products

Later growth:
teammanager.organizemyteam.com   → If you want branded subdomain
or even:
teammanager.com                  → If product grows enough to warrant own domain
```

**Pros**:
- ✅ Best of both worlds
- ✅ Main site is lightweight marketing
- ✅ Apps are isolated but under brand umbrella
- ✅ Easy to migrate to dedicated domains later
- ✅ Standard pattern (like Atlassian: atlassian.com → jira.atlassian.com)
- ✅ Can start simple and scale as needed

**Cons**:
- ⚠️ Slightly more complex initial setup
- ⚠️ Need reverse proxy or separate deployments

**Best For**: Current situation - one app now, planning for future growth

---

## Subdomain Naming Conventions

### For Youth Sports/Team Management Space

#### Generic App Subdomain (Recommended to Start)

```
app.organizemyteam.com
```

**Why This Works**:
- Simple, clean
- Works if Team Manager is your only app initially
- Easy to explain to users
- Standard pattern (notion.so → app.notion.so, linear.app → app.linear.app)
- No need to rebrand if product name changes

#### Product-Specific Subdomains (When You Have Multiple Apps)

```
teammanager.organizemyteam.com
leaguemanager.organizemyteam.com     (future)
tournamentpro.organizemyteam.com     (future)
schedulemaster.organizemyteam.com    (future)
```

**Why This Works**:
- Better if building product suite
- Each product gets identity
- Easier marketing per product
- Can have different pricing/features per product

#### Naming Patterns to Avoid

```
❌ organizemyteam.teammanager.com     (backwards - confusing TLD structure)
❌ team-manager.organizemyteam.com    (hyphens in subdomain - awkward to say)
❌ tm.organizemyteam.com              (abbreviation - not clear)
❌ manage.organizemyteam.com          (too generic)
❌ portal.organizemyteam.com          (outdated terminology)
```

---

## Technical Implementation Patterns

### Pattern A: Next.js Landing + Next.js App (Separate Repos) ⭐ Recommended

**Landing Page** (`organizemyteam.com`):
```
Repository: organizemyteam-landing
Tech Stack: Next.js 14+ (App Router), Tailwind CSS, shadcn/ui
Deployment: Vercel (separate project)
Content: Marketing pages, pricing, blog, docs
Build: Static Site Generation (SSG) for speed
```

**Team Manager App** (`app.organizemyteam.com`):
```
Repository: team-manager (current)
Tech Stack: Next.js 14, Supabase, tRPC, Drizzle ORM
Deployment: Vercel (current project)
Content: Full application
```

**Pros**:
- Clean separation - marketing team can work on landing without touching app
- Landing page can be rebuilt/redesigned without touching app
- Marketing site can be static/cached aggressively for SEO
- Different deployment schedules
- Can use different Vercel projects (both on Pro plan)

**Cons**:
- Two repositories to maintain
- Need to coordinate branding/design updates

**Implementation**:
```bash
# New repository structure
organizemyteam-landing/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── pricing/page.tsx      # Pricing
│   │   ├── features/page.tsx     # Features
│   │   ├── blog/                 # Blog posts
│   │   └── docs/                 # Documentation
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── marketing/            # Marketing-specific components
│   │   └── shared/               # Shared with app (via package)
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   └── assets/
└── package.json

# Existing app repository (unchanged)
team-manager/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── ... (current structure)
```

---

### Pattern B: Turborepo Monorepo (Shared Code)

```
organizemyteam-monorepo/
├── apps/
│   ├── landing/          → Marketing site (organizemyteam.com)
│   ├── team-manager/     → Main app (app.organizemyteam.com)
│   └── docs/             → Documentation (docs.organizemyteam.com)
├── packages/
│   ├── ui/               → Shared UI components (Button, Input, etc.)
│   ├── config/           → Shared TypeScript configs, ESLint
│   ├── utils/            → Shared utilities
│   ├── types/            → Shared TypeScript types
│   └── design-tokens/    → Colors, fonts, spacing
└── package.json
```

**Pros**:
- Share components, utilities, branding across all apps
- Single repo for everything
- Easy refactoring across projects
- Consistent design system
- TypeScript path aliases work across packages
- Great for larger teams

**Cons**:
- More complex setup (Turborepo config)
- All apps coupled to monorepo structure
- Vercel charges per deployment (can get expensive)
- Overkill if just starting with 2 apps

**When to Use**: When you have 3+ products or a team of 5+ developers

---

### Pattern C: Marketing Site as Subdirectory (Not Recommended)

```
team-manager/
├── src/
│   ├── app/
│   │   ├── (marketing)/     → Landing pages
│   │   │   ├── page.tsx
│   │   │   ├── pricing/
│   │   │   └── blog/
│   │   └── (app)/           → Team Manager app
│   │       ├── dashboard/
│   │       └── ...
```

**Pros**:
- Single codebase
- Single deployment
- Easy to share components

**Cons**:
- Marketing and app tightly coupled
- Hard to scale
- Bloated bundle (marketing assets loaded with app)
- Can't easily separate concerns
- No clear ownership boundaries
- App complexity slows down marketing iterations

**Verdict**: Avoid this pattern. Only viable for very small products that are tightly integrated.

---

## Authentication & Session Sharing

### Challenge: Users Should Login Once for All Apps

### Cookie Domain Strategy

```typescript
// Set cookie domain to parent domain
domain: '.organizemyteam.com'

// This allows cookies to be read by:
// - organizemyteam.com (can read cookie)
// - app.organizemyteam.com (can read cookie)
// - teammanager.organizemyteam.com (can read cookie)
// - any-subdomain.organizemyteam.com (can read cookie)
```

### Supabase Auth Configuration for Subdomains

```typescript
// lib/auth/supabase.ts (shared config)

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Cookies from 'js-cookie'

export const supabase = createClientComponentClient({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  options: {
    auth: {
      persistSession: true,
      detectSessionInUrl: true,
      storageKey: 'organizemyteam-auth', // Shared storage key
      storage: {
        // Custom storage that works across subdomains
        getItem: (key: string) => {
          return Cookies.get(key) || null
        },
        setItem: (key: string, value: string) => {
          Cookies.set(key, value, {
            domain: '.organizemyteam.com', // Parent domain
            secure: true,
            sameSite: 'lax',
            expires: 365, // 1 year
          })
        },
        removeItem: (key: string) => {
          Cookies.remove(key, { domain: '.organizemyteam.com' })
        },
      },
    },
  },
})
```

### Cross-Subdomain Navigation Flow

```typescript
// User journey example:

1. User visits organizemyteam.com
2. Clicks "Get Started" → redirects to app.organizemyteam.com/signup
3. Signs up → auth cookie set with domain=.organizemyteam.com
4. User navigates back to organizemyteam.com/blog
5. Blog can read auth cookie → show "Go to Dashboard" instead of "Sign Up"
6. User clicks "Dashboard" → app.organizemyteam.com (already logged in)
```

### Important Security Considerations

```typescript
// CORS Configuration
// In Next.js API routes or tRPC

export const corsConfig = {
  origin: [
    'https://organizemyteam.com',
    'https://www.organizemyteam.com',
    'https://app.organizemyteam.com',
    // Add future subdomains here
  ],
  credentials: true, // Allow cookies
}

// Middleware to check auth across subdomains
export async function middleware(request: NextRequest) {
  const supabase = createMiddlewareClient({ req: request })
  const { data: { session } } = await supabase.auth.getSession()

  // Session available across all *.organizemyteam.com
  return NextResponse.next()
}
```

---

## URL Structure Examples from Industry Leaders

### Example 1: Stripe Model (Multi-Product Suite)

```
stripe.com                     → Marketing, pricing, docs
dashboard.stripe.com           → Main app
connect.stripe.com             → Connect product
terminal.stripe.com            → Terminal product
stripe.com/docs                → Documentation (path-based)
stripe.com/blog                → Blog (path-based)
```

**Lesson**: Mix of subdomains for apps, paths for content

---

### Example 2: Atlassian Model (Multiple Products)

```
atlassian.com                  → Corporate site
jira.atlassian.com             → Jira product
confluence.atlassian.com       → Confluence product
trello.com                     → Acquired product (separate domain)
```

**Lesson**: Each major product gets subdomain, acquired products can keep own domain

---

### Example 3: HubSpot Model (Unified Platform)

```
hubspot.com                    → Marketing
app.hubspot.com                → Main app (all products in one)
hubspot.com/products/...       → Product marketing pages
```

**Lesson**: Single app subdomain for unified experience

---

### Example 4: Linear Model (Simple SaaS)

```
linear.app                     → Marketing + docs
app.linear.app                 → Application
```

**Lesson**: Clean, minimal structure

---

### For OrganizeMyTeam (Recommended Structure)

```
organizemyteam.com                              → Landing, blog, pricing, about
organizemyteam.com/products/team-manager        → Product page
organizemyteam.com/pricing                      → Pricing comparison
organizemyteam.com/blog                         → Blog
organizemyteam.com/docs                         → Getting started docs
organizemyteam.com/about                        → About us, team
organizemyteam.com/contact                      → Contact form

app.organizemyteam.com                          → Team Manager app
app.organizemyteam.com/login                    → Login
app.organizemyteam.com/signup                   → Signup

Future growth:
organizemyteam.com/products/league-manager      → Future product page
leaguemanager.organizemyteam.com                → Future app
```

**Rationale**: Keeps landing page focused on marketing/content, apps isolated by subdomain

---

## DNS & Hosting Setup

### Vercel Configuration (Recommended)

**Project 1: Landing Page**
```
Vercel Project Name: organizemyteam-landing
Domains:
  - organizemyteam.com (apex)
  - www.organizemyteam.com (www redirect)
Build Command: npm run build
Output Directory: .next
Root Directory: /
Environment: Production
```

**Project 2: Team Manager App**
```
Vercel Project Name: team-manager
Domains:
  - app.organizemyteam.com
Build Command: npm run build
Output Directory: .next
Root Directory: /
Environment: Production
Environment Variables:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - NEXT_PUBLIC_APP_URL=https://app.organizemyteam.com
  - (all existing vars)
```

### DNS Records Configuration

**At Your Domain Registrar** (e.g., Namecheap, GoDaddy, Cloudflare):

```
Type    Name    Value                           TTL
----    ----    -----                           ---
A       @       76.76.21.21                     Auto (Vercel IP)
CNAME   www     cname.vercel-dns.com            Auto
CNAME   app     cname.vercel-dns.com            Auto
TXT     @       "v=spf1 include:_spf.vercel.com ~all"  Auto (email)
```

**Notes**:
- `@` represents the root domain (organizemyteam.com)
- Vercel provides specific CNAME targets when you add domain
- TTL can be Auto or 3600 (1 hour)

### SSL/TLS Certificates

Vercel automatically provisions SSL certificates for:
- ✅ organizemyteam.com
- ✅ www.organizemyteam.com
- ✅ app.organizemyteam.com
- ✅ Any future subdomains

**No manual configuration needed** - Vercel uses Let's Encrypt

---

## Cost Breakdown

### Minimal Setup (Current Need)

```
Domain Registration: $12-15/year (already purchased ✓)
Vercel Pro Plan: $20/month (covers unlimited projects)
  - organizemyteam-landing project
  - team-manager project
  - Unlimited bandwidth
  - Unlimited deployments

Total: ~$20/month + $15/year = ~$240/year
```

### Medium Setup (with Marketing Tools)

```
Domain: $12-15/year
Vercel Pro: $20/month
Email (Google Workspace): $6/user/month
Analytics (Plausible): $9/month
Email Marketing (ConvertKit): $29/month
CDN for assets (optional): $5-10/month

Total: ~$64-69/month = ~$768-828/year
```

### Full Production Setup (with Team)

```
Domain: $12-15/year
Vercel Pro: $20/month per member (2 members = $40/month)
Google Workspace: $12/month (2 users)
Analytics: $9/month
Email Marketing: $29/month
Customer Support (Intercom/Zendesk): $39/month
Monitoring (Sentry): $26/month

Total: ~$155/month = ~$1,860/year
```

**Verdict**: Start with $20/month Vercel Pro, scale up as revenue grows

---

## Marketing Landing Page Tech Stack

### Option 1: Next.js 14 (App Router) ⭐ Recommended

**Why**:
- Same tech as main app (consistency)
- Can share components between landing and app
- Great SEO with static generation
- Fast, modern, developer-friendly
- Easy to add blog/docs with MDX

**Structure**:
```typescript
// src/app/page.tsx (home page)
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

// src/app/blog/page.tsx (blog index)
export default async function BlogPage() {
  const posts = await getBlogPosts() // MDX or CMS
  return <BlogGrid posts={posts} />
}

// Static generation for speed
export const dynamic = 'force-static'
```

**Pros**:
- ✅ Full control over design
- ✅ Can share UI components with app
- ✅ Great performance (SSG)
- ✅ Easy content management (MDX)

**Cons**:
- ⚠️ Requires React/Next.js knowledge
- ⚠️ More time to build than no-code

---

### Option 2: Astro

**Why**:
- Extremely fast (ships zero JS by default)
- Multiple framework support (React, Vue, Svelte)
- Content-focused
- Smaller bundle sizes than Next.js

**Structure**:
```astro
---
// src/pages/index.astro
import HeroSection from '@/components/HeroSection.astro'
import FeaturesSection from '@/components/FeaturesSection.tsx' // Can use React!
---

<Layout>
  <HeroSection />
  <FeaturesSection client:load />
</Layout>
```

**Pros**:
- ✅ Fastest possible load times
- ✅ Great for content-heavy sites
- ✅ Modern developer experience

**Cons**:
- ⚠️ Different tech stack from app
- ⚠️ Less community support than Next.js

---

### Option 3: Framer (No-Code)

**Why**:
- No-code solution
- Beautiful templates
- Fast iteration
- Non-technical team can update

**Pros**:
- ✅ Fastest time to launch
- ✅ No development needed
- ✅ Beautiful out of the box

**Cons**:
- ❌ Vendor lock-in
- ❌ $20/month per site
- ❌ Limited customization
- ❌ Can't share components with app

---

### Option 4: WordPress/Ghost (Traditional CMS)

**Why**:
- Traditional CMS
- Non-technical friendly
- Blog-focused
- Lots of plugins

**Pros**:
- ✅ Easy for non-technical team
- ✅ Rich plugin ecosystem

**Cons**:
- ❌ Slower than modern frameworks
- ❌ Security concerns
- ❌ Doesn't match app tech stack
- ❌ Additional hosting needed

---

### Recommendation: Next.js 14

**Rationale**:
1. Same stack as Team Manager app (consistency)
2. Can share components/styles between landing and app
3. Excellent SEO and performance
4. MDX support for blog/docs
5. You already know it
6. Can iterate quickly

---

## Landing Page Essential Sections

### Site Structure

```
organizemyteam.com/
├── /                       → Home (hero, features, social proof, CTA)
├── /pricing                → Pricing tiers and feature comparison
├── /features               → Detailed feature showcase
│   ├── /payment-tracking
│   ├── /expense-management
│   └── /financial-reports
├── /solutions              → Use case pages
│   ├── /youth-sports
│   ├── /recreational-leagues
│   └── /club-teams
├── /resources              → Content hub
│   ├── /blog
│   ├── /docs
│   └── /guides
├── /about                  → About us, mission, team
├── /contact                → Contact form, support
├── /login                  → Redirect to app.organizemyteam.com/login
├── /signup                 → Redirect to app.organizemyteam.com/signup
└── /privacy, /terms        → Legal pages
```

### Home Page Sections (organizemyteam.com/)

```typescript
1. Hero Section
   - Headline: "Simplify Team Financial Management"
   - Subheadline: "Track payments, manage expenses, and stay organized"
   - Primary CTA: "Start Free Trial" → app.organizemyteam.com/signup
   - Secondary CTA: "See How It Works" (demo video or screenshots)
   - Visual: Dashboard screenshot or animated demo

2. Social Proof
   - "Trusted by 500+ youth sports teams"
   - Logos of organizations using your product (if available)
   - Or: Testimonial quotes with photos

3. Features Grid (3-4 main features)
   - Payment Tracking: "Never chase down payments again"
   - Expense Management: "Track every dollar spent"
   - Automated Reminders: "Send payment reminders automatically"
   - Financial Reports: "Generate reports in seconds"

4. How It Works (3 steps)
   - Step 1: "Create your team" (illustration)
   - Step 2: "Invite members and treasurers" (illustration)
   - Step 3: "Track finances in real-time" (illustration)

5. Pricing Preview
   - "Simple, transparent pricing"
   - Show basic tier pricing
   - CTA: "View Full Pricing" → /pricing

6. Testimonials (2-3 quotes)
   - Quote from treasurer: "Saved me 10 hours per month"
   - Quote from admin: "Finally organized!"
   - Include photos and names

7. Final CTA
   - "Ready to get organized?"
   - CTA: "Start Free Trial" → app.organizemyteam.com/signup
```

### Pricing Page (organizemyteam.com/pricing)

```typescript
Three-tier structure:

Free Tier (Starter):
- 1 team
- Up to 10 members
- Basic payment tracking
- Email support
- CTA: "Start Free"

Pro Tier ($X/month): ⭐ Popular
- Unlimited teams
- Unlimited members
- Advanced reporting
- Automated reminders
- Priority support
- CTA: "Start 14-Day Trial"

Enterprise Tier (Contact Sales):
- Everything in Pro
- Multiple organizations
- API access
- Custom integrations
- Dedicated support
- CTA: "Contact Sales"

FAQ Section:
- "Can I change plans later?"
- "What payment methods do you accept?"
- "Is there a contract?"
- "What happens after the trial?"
```

---

## Navigation Design

### Landing Site Header (organizemyteam.com)

```typescript
<header>
  <Logo href="/">OrganizeMyTeam</Logo>

  <nav>
    <Link href="/features">Features</Link>
    <Link href="/pricing">Pricing</Link>
    <Link href="/resources">Resources</Link>
    <Link href="/about">About</Link>
  </nav>

  <actions>
    <Link href="https://app.organizemyteam.com/login">
      Login
    </Link>
    <Button href="https://app.organizemyteam.com/signup">
      Get Started Free
    </Button>
  </actions>
</header>
```

### App Header (app.organizemyteam.com)

```typescript
// Your existing Navbar component
<Navbar>
  <Logo href="https://organizemyteam.com">OrganizeMyTeam</Logo>
  <NavItems /> {/* Dashboard, Members, etc. */}
  <UserProfile />
</Navbar>
```

**Key Decision**: Logo in app should link back to marketing site (organizemyteam.com), not dashboard

---

## Branding & Design Consistency

### Design Token Sharing

```typescript
// shared/design-tokens.ts (used by both landing and app)

export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... your current colors
    900: '#1e3a8a',
  },
  // ... rest of palette
}

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    // ... your current fonts
  },
}

export const spacing = {
  // ... your spacing scale
}
```

### Component Library Approach

**Option A: Shared Package** (if using monorepo)
```
packages/ui/
├── Button.tsx
├── Input.tsx
└── Card.tsx

// Import in both landing and app
import { Button } from '@organizemyteam/ui'
```

**Option B: Duplicated Components** (if separate repos)
```
// Copy shadcn/ui components to both projects
// Keep styles in sync manually
```

**Option C: Shared NPM Package** (advanced)
```
npm package: @organizemyteam/design-system
Published privately or publicly
Both repos install it
```

**Recommendation**: Start with Option B (duplicate), migrate to Option A (shared package) when you have 3+ apps

---

## SEO Strategy

### Domain Authority Building

**Main Domain** (organizemyteam.com):
- Focus on building authority through content
- Blog posts targeting keywords:
  - "youth sports team management"
  - "track team finances"
  - "sports team payment tracking"
- Link building from sports organization sites
- Guest posts on youth sports blogs

**App Subdomain** (app.organizemyteam.com):
- Add `noindex` to authenticated pages (dashboard, member pages)
- Allow indexing of public pages (login, signup)
- Focus on functionality, not SEO

### Content Marketing Structure

```
organizemyteam.com/blog/
├── /how-to-track-team-payments
├── /best-practices-youth-sports-treasurer
├── /expense-tracking-for-coaches
├── /financial-reporting-sports-teams
└── /payment-reminder-tips

organizemyteam.com/docs/
├── /getting-started
├── /inviting-team-members
├── /recording-payments
└── /generating-reports
```

### Sitemap Configuration

```xml
<!-- organizemyteam.com/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Marketing pages -->
  <url>
    <loc>https://organizemyteam.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://organizemyteam.com/pricing</loc>
    <priority>0.8</priority>
  </url>
  <!-- Blog posts -->
  <url>
    <loc>https://organizemyteam.com/blog/how-to-track-team-payments</loc>
    <priority>0.6</priority>
  </url>
  <!-- App public pages (indexable) -->
  <url>
    <loc>https://app.organizemyteam.com/login</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://app.organizemyteam.com/signup</loc>
    <priority>0.5</priority>
  </url>
</urlset>
```

### robots.txt Configuration

```
# organizemyteam.com/robots.txt (landing site)
User-agent: *
Allow: /
Sitemap: https://organizemyteam.com/sitemap.xml

# app.organizemyteam.com/robots.txt (app)
User-agent: *
Disallow: /dashboard
Disallow: /admin
Disallow: /treasurer
Disallow: /member
Disallow: /parent
Allow: /login
Allow: /signup
Sitemap: https://app.organizemyteam.com/sitemap.xml
```

---

## Migration Path & Timeline

### Phase 1: Current State (Now)

```
Status:
- Domain purchased: organizemyteam.com ✓
- Team Manager built: In production
- No landing page: Using placeholder or nothing
- No marketing presence

Immediate Action:
- Point organizemyteam.com to Team Manager temporarily
- Or: Set up simple "Coming Soon" page
```

---

### Phase 2: Minimal Viable Landing Page (Week 1-2)

**Goal**: Get landing page live quickly with essentials

**Tasks**:
1. Create new Next.js 14 project: `organizemyteam-landing`
2. Build 3 pages:
   - Home (hero + features + CTA)
   - Pricing (simple tier comparison)
   - About (mission + team)
3. Design simple header/footer
4. Deploy to Vercel → organizemyteam.com
5. Update Team Manager deployment → app.organizemyteam.com
6. Test auth flow across subdomains

**Deliverables**:
- Basic landing page live
- App on subdomain
- Auth working across domains

**Time Estimate**: 10-15 hours

---

### Phase 3: Content Expansion (Month 2-3)

**Goal**: Add content marketing and SEO foundation

**Tasks**:
1. Add blog section with MDX
2. Write 5-10 initial blog posts
3. Add documentation section
4. Create feature showcase pages
5. Add testimonials (collect from beta users)
6. Set up analytics (Plausible or Google Analytics)
7. Configure SEO (meta tags, sitemap, robots.txt)

**Deliverables**:
- Blog with initial content
- Documentation for users
- SEO-optimized pages

**Time Estimate**: 20-30 hours

---

### Phase 4: Marketing Automation (Month 3-6)

**Goal**: Automate lead generation and nurturing

**Tasks**:
1. Set up email capture forms
2. Integrate ConvertKit or similar
3. Create email drip campaigns
4. Add live chat (Intercom or similar)
5. Set up demo booking system
6. Create case studies
7. Build resource library (templates, guides)

**Deliverables**:
- Email marketing automation
- Lead capture and nurturing
- Customer success resources

**Time Estimate**: 30-40 hours

---

### Phase 5: Multi-Product Preparation (Future)

**Goal**: Prepare for second product launch

**Tasks**:
1. Add product switcher to landing page
2. Create product-specific marketing pages
3. Deploy second product to new subdomain
4. Update navigation to support multiple products
5. Implement SSO across all products

**Deliverables**:
- Multi-product architecture in place
- Second product launched
- Unified auth experience

**Time Estimate**: TBD based on product scope

---

## Quick Start: Landing Page MVP

### Fastest Path to Production (4-8 hours)

**Step 1: Create Landing Repo** (30 min)
```bash
npx create-next-app@latest organizemyteam-landing
cd organizemyteam-landing
npx shadcn-ui@latest init
```

**Step 2: Copy Design System** (30 min)
```bash
# Copy from team-manager to landing repo
cp -r team-manager/src/components/ui landing/src/components/ui
cp team-manager/src/styles/globals.css landing/src/styles/globals.css
cp team-manager/tailwind.config.ts landing/tailwind.config.ts
```

**Step 3: Build Home Page** (2-3 hours)
```typescript
// src/app/page.tsx
import { HeroSection } from '@/components/marketing/hero-section'
import { FeaturesSection } from '@/components/marketing/features-section'
import { PricingSection } from '@/components/marketing/pricing-section'
import { CTASection } from '@/components/marketing/cta-section'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </main>
  )
}
```

**Step 4: Deploy to Vercel** (30 min)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial landing page"
git remote add origin https://github.com/yourusername/organizemyteam-landing.git
git push -u origin main

# In Vercel dashboard:
# 1. New Project → Import Git Repository
# 2. Select organizemyteam-landing repo
# 3. Configure domain: organizemyteam.com
# 4. Deploy
```

**Step 5: Update App Subdomain** (30 min)
```bash
# In Vercel dashboard for team-manager project:
# 1. Go to Settings → Domains
# 2. Add domain: app.organizemyteam.com
# 3. Update environment variables:
#    - NEXT_PUBLIC_APP_URL=https://app.organizemyteam.com
#    - NEXT_PUBLIC_LANDING_URL=https://organizemyteam.com
# 4. Redeploy
```

**Step 6: Test Everything** (1 hour)
- Visit organizemyteam.com → landing page loads
- Click "Get Started" → redirects to app.organizemyteam.com/signup
- Sign up → auth cookie set with .organizemyteam.com domain
- Navigate back to organizemyteam.com → should see logged-in state
- Test all links and CTAs

**Total Time**: 4-8 hours to MVP

---

## Landing Page Starter Template

### File Structure

```
organizemyteam-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx               # Home
│   │   ├── pricing/page.tsx
│   │   ├── features/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── blog/
│   │       ├── page.tsx           # Blog index
│   │       └── [slug]/page.tsx    # Blog post
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── marketing/
│   │   │   ├── hero-section.tsx
│   │   │   ├── features-section.tsx
│   │   │   ├── pricing-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   └── cta-section.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   └── shared/
│   │       ├── logo.tsx
│   │       └── button-cta.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   └── logos/
└── content/
    └── blog/                      # MDX blog posts
        ├── post-1.mdx
        └── post-2.mdx
```

### Sample Components

```typescript
// src/components/marketing/hero-section.tsx
export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Simplify Team Financial Management
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Track payments, manage expenses, and stay organized—all in one place.
          Built for youth sports teams, recreational leagues, and club organizations.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="https://app.organizemyteam.com/signup">
              Start Free Trial
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#demo">See How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
```

---

## Recommended Next Steps

### When You're Ready to Start:

**Step 1**: Review this document and decide on architecture
- **Recommendation**: Hybrid approach (Option 3)
- Landing page on organizemyteam.com
- App on app.organizemyteam.com

**Step 2**: Create new repository
```bash
npx create-next-app@latest organizemyteam-landing
# Follow Quick Start guide above
```

**Step 3**: Design home page
- Use Figma or sketch wireframe
- Keep it simple: Hero, 3 features, pricing, CTA
- Mobile-first design

**Step 4**: Build MVP (1-2 days)
- Home page
- Pricing page
- Header/footer
- Deploy to Vercel

**Step 5**: Update app to subdomain
- Add app.organizemyteam.com domain in Vercel
- Update environment variables
- Test auth flow

**Step 6**: Launch! 🚀
- Test everything thoroughly
- Update DNS if needed
- Monitor analytics

---

## Frequently Asked Questions

### Q: Should I wait to launch the landing page?

**A**: No! Launch a minimal landing page ASAP. Even a simple one-pager is better than nothing. You can iterate and improve it over time.

---

### Q: Can I use a landing page builder like Framer?

**A**: Yes, if you want speed over customization. But since you already know Next.js and have the design system built, a custom Next.js site will be faster, cheaper ($0 vs $20/month), and more flexible long-term.

---

### Q: How do I handle blog content?

**A**: Start with MDX files in your repo (simple, version-controlled). Later, you can migrate to a headless CMS like Contentful, Sanity, or Strapi if non-technical team members need to write posts.

---

### Q: What about email list building?

**A**: Add a simple email capture form to the footer and hero section. Use ConvertKit (starts at $29/month) or Mailchimp (free tier). Export emails before launch, so you have a list to announce to.

---

### Q: Should I add a demo or product tour?

**A**: Yes! Either:
- **Video demo**: Record screen walkthrough (Loom), embed on home page
- **Interactive demo**: Use demo.organizemyteam.com with fake data
- **Screenshot tour**: Animated walkthrough with Spline or Rive

Start with video (easiest), add interactive demo later.

---

### Q: How do I track conversions?

**A**: Use Plausible Analytics ($9/month, privacy-friendly) or Google Analytics (free). Track these events:
- Clicked "Get Started" from landing page
- Signed up for trial
- Completed onboarding
- Invited first team member

---

### Q: What about mobile app branding?

**A**: Not applicable yet (web-only). But when you build mobile apps:
- iOS: "Organize My Team" app name
- Android: "Organize My Team" app name
- Deep links: organizemyteam://...

---

## Conclusion

### Recommended Architecture for OrganizeMyTeam

```
✅ organizemyteam.com          → Next.js marketing site (new repo)
✅ app.organizemyteam.com      → Team Manager app (existing repo)
✅ Shared auth via cookies      → domain=.organizemyteam.com
✅ Separate deployments         → Both on Vercel Pro
✅ Same design system           → Share components/styles
```

**Why This Works**:
1. Clean separation of marketing and product
2. Easy to add future products as subdomains
3. Simple auth sharing across subdomains
4. Scales well as you grow
5. Standard industry pattern

**Cost**: ~$20/month (Vercel Pro covers unlimited projects)

**Time to Launch**: 4-8 hours for MVP

**Next Action**: When ready, create `organizemyteam-landing` repo and follow Quick Start guide above.

---

## Additional Resources

### Helpful Links
- [Vercel Domains Guide](https://vercel.com/docs/concepts/projects/domains)
- [Next.js Static Site Generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- [Supabase Auth with Custom Domains](https://supabase.com/docs/guides/auth/custom-domains)
- [MDX for Blog Posts](https://mdxjs.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Competitor Examples
- [TeamSnap](https://www.teamsnap.com/) - Sports team management
- [Jersey Watch](https://www.jerseywatch.com/) - League management
- [SportsEngine](https://www.sportsengine.com/) - Youth sports platform

### Design Inspiration
- [Vercel Homepage](https://vercel.com/)
- [Linear Homepage](https://linear.app/)
- [Stripe Homepage](https://stripe.com/)
- [Plausible Homepage](https://plausible.io/)

---

**Document Status**: Planning/Reference
**Next Review**: When ready to start landing page project
**Maintainer**: Reference for future project
