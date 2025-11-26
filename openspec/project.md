# Project Context

## Purpose
This is the **OrganizeMyTeam Landing Page** - a marketing website for the OrganizeMyTeam brand, an umbrella organization for potentially multiple products starting with Team Manager (a financial management app for youth sports teams).

**Goals**:
- Present the OrganizeMyTeam brand and product suite
- Drive signups to app.organizemyteam.com (Team Manager)
- Provide marketing content: features, pricing, blog, documentation
- Support future product launches under the same brand
- Build SEO authority through content marketing

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Vercel
- **Build Strategy**: Static Site Generation (SSG) for optimal performance
- **Content**: MDX for blog posts and documentation

## Project Conventions

### Code Style
- Use TypeScript for all files
- Follow Next.js App Router conventions
- Component organization: `src/components/{ui, marketing, layout, shared}`
- Prefer functional components with hooks
- Use Tailwind utility classes over custom CSS
- Import paths use `@/` alias for src directory

### Architecture Patterns
- **Separate Repositories**: Landing page (this repo) separate from Team Manager app
- **Static Generation**: All pages use SSG for speed and SEO
- **Shared Design System**: Copy UI components and design tokens from Team Manager
- **Subdomain Architecture**:
  - `organizemyteam.com` → Marketing site (this project)
  - `app.organizemyteam.com` → Team Manager app (separate repo)
  - Future products get their own subdomains
- **Auth Strategy**: Session cookies shared via `.organizemyteam.com` domain
- **Navigation**: CTAs redirect to `app.organizemyteam.com/signup` and `/login`

### Testing Strategy
- Focus on fast iteration and deployment
- Manual testing for marketing pages
- Lighthouse audits for performance and SEO
- Cross-browser testing (Chrome, Safari, Firefox)
- Mobile-first responsive testing

### Git Workflow
- Main branch deploys to production automatically (Vercel)
- Feature branches for new pages or sections
- Commit messages: conventional commits preferred
- Deploy previews for all branches via Vercel

## Domain Context

### Target Audience
- Youth sports organizations (soccer, baseball, hockey, etc.)
- Recreational leagues
- Club teams
- Team treasurers, coaches, and administrators

### Core Value Proposition
"Simplify team financial management" - help organizations track payments, manage expenses, and stay organized

### Products
1. **Team Manager** (current): Financial management for youth sports teams
2. Future products: TBD (league management, tournament tools, scheduling, etc.)

### Content Structure
- **Home**: Hero, features, social proof, pricing preview, testimonials, CTA
- **Pricing**: Tier comparison (Free, Pro, Enterprise)
- **Features**: Detailed feature showcase
- **Blog**: Content marketing and SEO (MDX-based)
- **Docs**: Getting started guides and documentation
- **About**: Company mission and team

## Important Constraints

### Design Consistency
- Must match Team Manager app's design system (colors, typography, components)
- Share shadcn/ui components between landing and app
- Maintain consistent brand identity across all touchpoints

### Performance Requirements
- Fast page loads (target <2s FCP)
- Optimized for Core Web Vitals
- Static generation for all routes (no SSR needed)
- Aggressive caching via Vercel CDN

### SEO Requirements
- Focus on ranking for youth sports/team management keywords
- Proper meta tags, sitemap, robots.txt
- Blog content for link building
- Structured data markup

### Cross-Subdomain Auth
- Support seamless navigation between landing site and app
- Cookie domain must be `.organizemyteam.com`
- Logged-in users see different CTAs ("Go to Dashboard" vs "Sign Up")

## External Dependencies

### Hosting & Deployment
- **Vercel**: Hosting and deployment platform
- **DNS**: Domain managed through registrar, pointed to Vercel

### Future Integrations (not yet implemented)
- **Analytics**: Plausible or Google Analytics
- **Email Marketing**: ConvertKit or Mailchimp
- **CMS**: Potentially Contentful or Sanity for blog (currently using MDX)
- **Customer Support**: Intercom or similar (future)

### Shared with Team Manager App
- Design system (colors, fonts, spacing)
- UI components (shadcn/ui)
- Brand assets (logo, images)
- Auth cookies (cross-subdomain session sharing)
