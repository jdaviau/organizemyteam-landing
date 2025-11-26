# Design Document: Landing Page Infrastructure

## Context

OrganizeMyTeam is building a marketing landing page to establish an umbrella brand that can support multiple products, starting with Team Manager (a financial management application for youth sports teams). The landing page needs to:

- Provide marketing content to acquire new users
- **Position competitively against TeamSnap** as a specialized financial management tool
- Maintain design consistency with the existing Team Manager app
- Support future product expansion under the same brand
- Achieve excellent SEO and performance metrics
- Enable seamless cross-site navigation to the application

**Competitive Landscape:**
- **Primary competitor**: TeamSnap ($120-150/year for Premium/Ultra)
- **TeamSnap positioning**: Comprehensive all-in-one team management platform
- **TeamSnap weakness**: Surface-level financial features (basic invoicing, limited expense tracking)
- **Our opportunity**: Specialize in deep financial management for team treasurers

**Constraints:**
- Must be a separate repository from the Team Manager app
- Must use Next.js 14+ and match existing tech stack
- Must support subdomain architecture (organizemyteam.com for landing, app.organizemyteam.com for app)
- Must be statically generated for optimal performance
- Development resources are limited (solo developer or small team)
- **Must differentiate from TeamSnap** through messaging and positioning

**Stakeholders:**
- **Primary persona**: Team treasurers and financial administrators (not coaches/parents)
- End users (team treasurers, coaches, administrators)
- Marketing/content team (for blog and docs updates)
- Development team (for maintenance and future features)

## Goals / Non-Goals

**Goals:**
- Launch professional marketing presence quickly (MVP in 4-8 hours)
- **Position as specialized financial management tool** for team treasurers
- **Differentiate from TeamSnap** through deeper financial features and better pricing
- **Target underserved treasurer persona** with focused messaging
- Achieve excellent SEO and performance (Lighthouse >90)
- Enable content marketing through treasurer-focused blog and documentation
- Support multi-product brand expansion
- Maintain design system consistency with Team Manager app
- Provide clear conversion paths to app signup/login
- **Competitive pricing**: $96-120/year (20% lower than TeamSnap)

**Non-Goals:**
- Complex CMS integration (start with MDX files)
- User authentication on landing site (authentication happens in app)
- Interactive demos or product tours (screenshots sufficient for v1)
- E-commerce or payment processing on landing site
- Multi-language support (English only initially)
- Advanced analytics or A/B testing (can add later)

## Decisions

### Decision 1: Separate Repository Architecture

**Choice:** Create separate repository (organizemyteam-landing) instead of monorepo or same repository as app.

**Rationale:**
- **Clean separation of concerns:** Marketing team can work independently from app development
- **Different deployment schedules:** Landing page updates shouldn't require app redeployment
- **Simpler initial setup:** Avoids monorepo tooling complexity (Turborepo, etc.)
- **Different build strategies:** Landing is fully static, app may use SSR/ISR
- **Lower complexity:** Suitable for solo developer or small team
- **Easy migration:** Can move to monorepo later if needed

**Alternatives Considered:**
- **Monorepo with Turborepo:** More complex setup, overkill for 2 apps, higher cost (multiple Vercel deployments)
- **Same repository with route groups:** Tight coupling, difficult to separate concerns, bloated bundle
- **Different framework (Astro):** Learning curve, different ecosystem, harder to share components

**Trade-offs:**
- (+) Independent deployments and development
- (+) Simpler setup and maintenance
- (-) Component sharing requires manual copying or npm package
- (-) Need to keep design systems in sync manually

### Decision 2: Static Site Generation (SSG) for All Routes

**Choice:** Use Next.js Static Site Generation for all landing page routes.

**Rationale:**
- **Optimal performance:** Pre-rendered HTML loads instantly
- **SEO benefits:** Fully crawlable content for search engines
- **Lower hosting costs:** Static files can be CDN-cached aggressively
- **No runtime server needed:** Vercel Edge Network handles everything
- **Marketing content is stable:** Pages don't need real-time data

**Alternatives Considered:**
- **Server-Side Rendering (SSR):** Unnecessary for static marketing content, slower page loads
- **Client-Side Rendering (CSR):** Poor SEO, slower initial load, not suitable for marketing
- **Incremental Static Regeneration (ISR):** Adds complexity without clear benefit for v1

**Trade-offs:**
- (+) Fastest possible page loads
- (+) Best SEO performance
- (+) Lowest infrastructure costs
- (-) Content updates require rebuild/redeploy (acceptable for marketing content)

### Decision 3: MDX for Blog and Documentation

**Choice:** Use MDX (Markdown + JSX) for blog posts and documentation instead of headless CMS.

**Rationale:**
- **Version controlled:** Content lives in Git with code
- **Developer-friendly:** Easy to write and review in PRs
- **Component embedding:** Can use React components in content
- **Zero additional cost:** No CMS subscription fees
- **Fast iteration:** No external API calls, content is local
- **Suitable for technical content:** Great for code examples and documentation

**Alternatives Considered:**
- **Headless CMS (Contentful, Sanity):** Added complexity, cost ($9-29/month), external dependency
- **WordPress/Ghost:** Heavy, security concerns, doesn't match tech stack
- **Notion API:** Limited control, API rate limits, requires internet access

**Trade-offs:**
- (+) Free, simple, version-controlled
- (+) Fast builds and rendering
- (+) Full control over content structure
- (-) Non-technical users need Git knowledge to update content
- (-) No web UI for content editing (can add CMS later if needed)

### Decision 4: Subdomain Architecture

**Choice:** Use organizemyteam.com for landing and app.organizemyteam.com for Team Manager app.

**Rationale:**
- **Clean separation:** Marketing and app are distinct experiences
- **Professional appearance:** Standard industry pattern (like app.linear.app, dashboard.stripe.com)
- **Future-proof:** Easy to add more product subdomains (e.g., leaguemanager.organizemyteam.com)
- **SEO benefits:** Main domain focuses on content, app domain is noindexed
- **Independent scaling:** Can scale landing and app infrastructure separately

**Alternatives Considered:**
- **Path-based routing (/app):** Awkward URLs, tight coupling, all content in one repo
- **Separate top-level domains:** Too complex for initial launch, confusing for users
- **Subdirectory proxy:** Technical complexity, no clear benefits

**Trade-offs:**
- (+) Standard professional pattern
- (+) Easy multi-product expansion
- (+) Clean URL structure
- (-) Requires DNS configuration
- (-) Cross-subdomain auth needs cookie domain setup

### Decision 5: Shared Design System via Component Copying

**Choice:** Copy shadcn/ui components and design tokens from Team Manager to landing repo.

**Rationale:**
- **Simple for v1:** No npm package or monorepo setup needed
- **Fast iteration:** Can customize landing components independently
- **shadcn/ui philosophy:** Components are meant to be copied and owned
- **Low maintenance:** Design system is stable, not changing frequently

**Alternatives Considered:**
- **Shared npm package:** Adds complexity, versioning overhead, build step
- **Monorepo shared packages:** Requires Turborepo setup, overkill for current needs
- **Git submodules:** Fragile, difficult to manage, poor DX

**Trade-offs:**
- (+) Simple setup, fast iteration
- (+) No build tooling for sharing components
- (+) Can customize per-project without breaking the other
- (-) Need to manually sync design changes
- (-) Potential drift between landing and app designs over time

**Migration Path:** When we have 3+ projects or design system changes frequently, migrate to shared npm package or monorepo.

### Decision 6: Contact Form Implementation

**Choice:** Use form submission API endpoint or email service (Resend, FormSpree) instead of building email server.

**Rationale:**
- **Simple integration:** API endpoint or third-party service is quick to set up
- **No email server management:** Avoid SMTP configuration and deliverability issues
- **Cost-effective:** FormSpree free tier or Resend generous limits
- **Reliable delivery:** Email services handle spam filtering and deliverability

**Alternatives Considered:**
- **Nodemailer/SMTP:** Complex setup, deliverability issues, server required
- **Store in database:** Requires backend database, overkill for contact form
- **Google Forms embed:** Unprofessional, limited customization

**Trade-offs:**
- (+) Quick setup, reliable delivery
- (+) No server-side email infrastructure
- (-) Dependency on third-party service
- (-) May have rate limits (acceptable for contact form volume)

**Implementation:** Use Next.js API route at /api/contact that forwards to email service.

### Decision 7: Competitive Positioning and Messaging Strategy

**Choice:** Position Team Manager as a specialized financial management tool for team treasurers, differentiating from TeamSnap's all-in-one approach.

**Rationale:**
- **Underserved persona:** Team treasurers have specific needs (detailed tracking, expense categorization, comprehensive reporting) that general team management tools don't address
- **Competitive gap:** TeamSnap focuses on breadth (scheduling, communication, practice plans) with surface-level financial features (basic invoicing)
- **Better economics:** Can offer deeper financial features at lower price ($96-120/year vs TeamSnap's $120-150) because of focused scope
- **SEO opportunity:** Target treasurer-specific keywords with less competition
- **Clear differentiation:** "TeamSnap has invoicing. Team Manager has comprehensive financial management."

**Messaging Framework:**
- **Primary headline:** "Financial management built for team treasurers"
- **Value proposition:** "Track payments, manage expenses, and generate reports in minutes—not hours"
- **Differentiation:** Emphasize depth over breadth (detailed tracking vs basic invoicing)
- **Target persona:** Treasurers and financial administrators (not coaches/parents)
- **Pricing message:** Better value through lower cost + deeper financial capabilities

**Alternatives Considered:**
- **Generic team management positioning:** Would compete head-to-head with TeamSnap on their turf, losing on feature count
- **Multi-persona targeting:** Spreading messaging thin across coaches, parents, admins dilutes treasurer focus
- **Premium pricing:** Charging more than TeamSnap difficult to justify without their feature breadth

**Trade-offs:**
- (+) Clear differentiation and positioning
- (+) Target underserved persona with specific pain points
- (+) Better pricing possible with focused scope
- (+) SEO opportunities with treasurer-focused keywords
- (-) Smaller addressable market than "all team management"
- (-) May need to educate market on financial management importance
- (-) Future product expansion needs careful positioning to maintain brand coherence

**Implementation:**
- Home page hero focuses on treasurer messaging
- Features emphasize 4 financial capabilities (payment tracking, expenses, reports, reminders)
- Competitive comparison section on home page and pricing page
- Blog targets treasurer pain points and workflows
- Testimonials from real treasurers, not generic "team users"
- Metrics emphasize financial scale ("Tracking $2.5M+") not just team counts

### Decision 8: Navigation and Cross-Site Flow

**Choice:** Landing site CTAs redirect to app.organizemyteam.com with simple links (no custom navigation library).

**Rationale:**
- **Simple implementation:** Standard anchor tags work fine
- **No complex state:** Don't need shared navigation state between sites
- **Standard web behavior:** Users expect external site navigation to be full page transitions
- **Future auth integration:** Cookie domain can be configured for cross-subdomain sessions

**Alternatives Considered:**
- **Custom navigation library:** Overengineered, no clear benefit
- **Shared navigation component:** Coupling between repos, deployment complexity

**Trade-offs:**
- (+) Simple, standard web behavior
- (+) No additional libraries or complexity
- (-) Full page transitions between sites (acceptable and expected)

## Risks / Trade-offs

### Risk: Design System Drift
**Risk:** Landing page and app designs may diverge over time with manual component copying.

**Mitigation:**
- Document design tokens in shared location (can copy from)
- Periodic design audits (quarterly review)
- When drift becomes painful (3+ projects), migrate to shared package

### Risk: Content Update Bottleneck
**Risk:** Non-technical users can't update blog/docs without Git knowledge.

**Mitigation:**
- Provide documentation for MDX content updates
- Use Vercel's Git integration for easy content previews
- If bottleneck becomes significant, add headless CMS later (Sanity, Contentful)

### Risk: SEO Cannibalization
**Risk:** Landing site and app site compete for same keywords.

**Mitigation:**
- Landing site targets informational keywords (features, pricing, guides)
- App site noindexes authenticated pages, only indexes login/signup
- Clear content separation: landing = marketing, app = product

### Risk: Build Time Growth
**Risk:** As blog and docs grow, static generation build times may increase.

**Mitigation:**
- Monitor build times in Vercel dashboard
- If build times exceed 2-3 minutes, implement Incremental Static Regeneration (ISR)
- Optimize image sizes and reduce dependencies

### Risk: Cross-Subdomain Auth Complexity
**Risk:** Users expect to stay logged in when navigating between landing and app.

**Mitigation:**
- Configure session cookies with domain=.organizemyteam.com
- Test cross-subdomain navigation thoroughly
- Document auth flow for future developers
- For v1, acceptable for users to log in on app subdomain

## Migration Plan

### Phase 1: MVP Launch (Week 1-2)
1. Create new Next.js project: organizemyteam-landing
2. Build core pages: Home, Pricing, About, Contact
3. Copy design system from Team Manager
4. Deploy to Vercel at organizemyteam.com
5. Redirect Team Manager to app.organizemyteam.com
6. Test cross-site navigation

### Phase 2: Content Expansion (Month 2)
1. Add blog system with MDX
2. Write 5-10 initial blog posts
3. Add documentation section
4. Create Getting Started guides
5. SEO optimization and Lighthouse audits

### Phase 3: Enhancement (Month 3+)
1. Add analytics (Plausible or Google Analytics)
2. Implement email capture forms
3. Add interactive demos or product tours
4. Create additional product pages
5. A/B testing for conversion optimization

### Rollback Plan
If deployment fails or critical issues arise:
1. Revert DNS changes to point organizemyteam.com back to Team Manager
2. Remove app.organizemyteam.com subdomain temporarily
3. Fix issues in staging environment
4. Redeploy when stable

## Open Questions

1. **Analytics Platform:** Which analytics should we use? (Plausible, Google Analytics, or both?)
   - **Recommendation:** Start with Plausible for privacy-friendly analytics, add GA4 later if needed

2. **Email Service:** Which service for contact form? (Resend, FormSpree, SendGrid?)
   - **Recommendation:** Resend (3,000 free emails/month, great DX)

3. **Search Implementation:** How to implement docs search? (Algolia, Fuse.js, or defer to v2?)
   - **Recommendation:** Defer to v2, basic navigation is sufficient for launch

4. **CMS Migration:** At what point should we migrate to headless CMS?
   - **Recommendation:** When non-technical team members need frequent content updates (>1/week) or team size >5

5. **Mobile App Branding:** If we build mobile apps, do they share the OrganizeMyTeam brand?
   - **Recommendation:** Yes, apps named "OrganizeMyTeam" with subtitle indicating specific product

6. **Product Naming:** Do future products get distinct names or are they "OrganizeMyTeam [Feature]"?
   - **Recommendation:** Depends on product scope. Small features = "Team Manager Pro", separate products = distinct names

## Success Metrics

**Launch (Week 1):**
- [ ] Landing page live at organizemyteam.com
- [ ] Lighthouse score >90 (Performance, Accessibility, SEO)
- [ ] First Contentful Paint <2s
- [ ] All core pages functional (Home, Pricing, About, Contact)
- [ ] Cross-site navigation works seamlessly

**Month 1:**
- [ ] 5-10 blog posts published
- [ ] Documentation complete (Getting Started + 5 guides)
- [ ] Organic traffic >100 visitors/week
- [ ] Contact form submissions >5/week

**Month 3:**
- [ ] Organic traffic >500 visitors/week
- [ ] Blog ranking for 3+ target keywords
- [ ] Signup conversion rate >2% from landing page traffic
- [ ] Average session duration >2 minutes

## Technical Specifications

### Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3+
- **UI Components:** shadcn/ui
- **Content:** MDX (@next/mdx, gray-matter)
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

### Directory Structure
```
organizemyteam-landing/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── pricing/
│   │   ├── products/[slug]/
│   │   ├── blog/
│   │   ├── docs/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── privacy/
│   │   └── terms/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── marketing/          # Marketing-specific components
│   │   ├── layout/             # Header, Footer, etc.
│   │   └── shared/             # Shared utilities
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── mdx.ts              # MDX parsing utilities
│   └── styles/
│       └── globals.css
├── content/
│   ├── blog/                   # MDX blog posts
│   └── docs/                   # MDX documentation
├── public/
│   ├── images/
│   └── logos/
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

### Environment Variables
```
# App URLs
NEXT_PUBLIC_APP_URL=https://app.organizemyteam.com
NEXT_PUBLIC_LANDING_URL=https://organizemyteam.com

# Email service (for contact form)
EMAIL_SERVICE_API_KEY=<resend-api-key>
CONTACT_EMAIL_TO=contact@organizemyteam.com

# Analytics (future)
NEXT_PUBLIC_ANALYTICS_ID=<plausible-domain>
```

### Performance Targets
- **Lighthouse Performance:** >90
- **Lighthouse Accessibility:** >95
- **Lighthouse SEO:** >95
- **First Contentful Paint (FCP):** <2s
- **Largest Contentful Paint (LCP):** <2.5s
- **Time to Interactive (TTI):** <3s
- **Cumulative Layout Shift (CLS):** <0.1

### Browser Support
- **Modern browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile browsers:** iOS Safari 14+, Chrome Android
- **No IE11 support** (Next.js 14+ does not support IE11)
