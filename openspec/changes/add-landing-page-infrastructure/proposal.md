# Change: Add Landing Page Infrastructure

## Why

OrganizeMyTeam needs a marketing landing page to establish the umbrella brand and drive signups to the Team Manager application. Currently, there is no marketing presence at organizemyteam.com, making it difficult to acquire users, explain the product value proposition, and scale for future products under the same brand.

**Competitive Context**: Analysis of TeamSnap (primary competitor) reveals an opportunity to position Team Manager as a specialized financial management tool for team treasurers. While TeamSnap offers comprehensive team management ($120-150/year) with surface-level payment features, Team Manager can differentiate as the deep financial specialist at a better price point.

**Target Persona**: Team treasurers and financial administrators who need more than basic invoicing—they need detailed payment tracking, expense categorization, comprehensive reporting, and financial transparency tools.

The landing page will serve as the primary entry point for all users, providing:
- **Clear competitive positioning**: "Financial management built for team treasurers"
- **Treasurer-focused messaging**: Speak directly to financial administrator pain points
- **Content marketing**: Blog and documentation targeting treasurer workflows and challenges
- **Pricing transparency**: Competitive pricing ($96-120/year Pro tier vs TeamSnap's $120-150)
- **Professional brand presence**: Build trust with financial data visualization and security
- **Foundation for multi-product expansion**: Umbrella brand supporting future products

## What Changes

- **New Next.js 14+ Application**: Separate repository for landing page using App Router, Tailwind CSS, and shadcn/ui components
- **Page Structure**: Home page, Product pages, Pricing, Blog, Docs, About, and Contact pages
- **Static Site Generation**: All pages pre-rendered for optimal performance and SEO
- **Design System**: Shared UI components and design tokens consistent with Team Manager app
- **Subdomain Architecture**: Landing at organizemyteam.com, app at app.organizemyteam.com
- **Content Management**: MDX-based blog and documentation system
- **Navigation System**: Header, footer, and cross-site navigation with CTAs to app signup/login
- **SEO Foundation**: Meta tags, sitemaps, robots.txt, and structured data

## Impact

### New Capabilities (Specs to Create)
1. **landing-page-core** - Home page with hero, features, social proof, and CTAs
2. **product-showcase** - Product-specific marketing pages and feature showcases
3. **pricing-presentation** - Pricing tier comparison and feature matrix
4. **blog-system** - MDX-based blog with posts, categories, and SEO
5. **documentation** - Getting started guides and user documentation
6. **static-pages** - About, Contact, Privacy, Terms pages
7. **landing-navigation** - Header, footer, and cross-site navigation system
8. **landing-design-system** - Shared UI components and design tokens

### Affected Code
- **New Repository**: organizemyteam-landing (to be created)
- **Deployment**: New Vercel project for organizemyteam.com
- **Existing App**: Team Manager deployment will move to app.organizemyteam.com subdomain
- **DNS Configuration**: Domain routing for main domain and app subdomain

### Migration Impact
- Current organizemyteam.com (if any placeholder exists) will be replaced
- Team Manager app URL will change from organizemyteam.com to app.organizemyteam.com
- Cross-subdomain authentication will need to be configured
- Environment variables will need updating for new URLs

### Success Criteria
- Landing page loads in <2s (First Contentful Paint)
- All pages are statically generated and SEO-optimized
- Seamless navigation between landing site and app
- Mobile-responsive design matching Team Manager app aesthetics
- Blog and docs content can be easily added via MDX
- Lighthouse score >90 for Performance, Accessibility, and SEO
- **Clear competitive differentiation**: Messaging distinguishes from TeamSnap
- **Treasurer-focused content**: 5+ blog posts targeting treasurer pain points
- **Social proof**: 3-5 testimonials from real treasurers collected and displayed
- **Conversion-optimized**: Pricing 20% lower than TeamSnap while highlighting deeper features
