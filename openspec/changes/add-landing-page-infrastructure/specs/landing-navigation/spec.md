## ADDED Requirements

### Requirement: Site Header
The landing site SHALL display a consistent header with navigation and CTAs on all pages.

#### Scenario: Header structure
- **WHEN** any landing page is rendered
- **THEN** the page displays a header with the OrganizeMyTeam logo linking to home
- **AND** the header includes primary navigation links (Features, Pricing, Resources, About)
- **AND** the header includes a "Login" link pointing to app.organizemyteam.com/login
- **AND** the header includes a "Get Started" CTA button pointing to app.organizemyteam.com/signup
- **AND** the header is sticky or fixed at the top of the viewport

#### Scenario: Mobile header navigation
- **WHEN** the header is viewed on mobile devices
- **THEN** navigation links collapse into a hamburger menu
- **AND** tapping the hamburger icon opens a mobile navigation drawer
- **AND** the mobile menu displays all navigation links in a vertical list
- **AND** the logo remains visible in the mobile header

#### Scenario: Header navigation dropdowns
- **WHEN** the "Resources" navigation link is hovered or clicked
- **THEN** a dropdown menu displays links to Blog, Docs, and other resources
- **AND** dropdown items are clickable and navigate to the appropriate pages
- **AND** dropdowns close when clicking outside or navigating away

### Requirement: Site Footer
The landing site SHALL display a comprehensive footer on all pages.

#### Scenario: Footer structure
- **WHEN** any landing page is rendered
- **THEN** the page displays a footer with organized link sections
- **AND** sections include Product, Company, Resources, and Legal
- **AND** Product links include Features, Pricing, and Products
- **AND** Company links include About, Contact, and Blog
- **AND** Resources links include Docs and Support
- **AND** Legal links include Privacy Policy and Terms of Service

#### Scenario: Footer branding
- **WHEN** the footer is displayed
- **THEN** it includes the OrganizeMyTeam logo
- **AND** it displays a copyright notice with the current year
- **AND** it optionally includes social media links (Twitter, LinkedIn, etc.)

### Requirement: Cross-Site Navigation
The landing site SHALL provide seamless navigation to the Team Manager app.

#### Scenario: App signup navigation
- **WHEN** a user clicks "Get Started" or "Start Free Trial" CTAs
- **THEN** the user is redirected to https://app.organizemyteam.com/signup
- **AND** the redirect opens in the same window
- **AND** referrer information is preserved for analytics

#### Scenario: App login navigation
- **WHEN** a user clicks "Login" or "Sign In" links
- **THEN** the user is redirected to https://app.organizemyteam.com/login
- **AND** the redirect opens in the same window

#### Scenario: Dashboard navigation for logged-in users
- **WHEN** a logged-in user visits the landing site
- **THEN** CTAs may change to "Go to Dashboard" instead of "Sign Up" (future enhancement)
- **AND** clicking "Go to Dashboard" redirects to app.organizemyteam.com/dashboard

### Requirement: Breadcrumb Navigation
Documentation and blog pages SHALL include breadcrumb navigation.

#### Scenario: Breadcrumbs display
- **WHEN** a user views a documentation or blog post page
- **THEN** breadcrumbs are displayed showing the page hierarchy
- **AND** breadcrumbs are clickable and navigate to parent pages
- **AND** breadcrumbs start with "Home" and include all intermediate levels

### Requirement: Active Link Highlighting
The navigation SHALL highlight the current page's link.

#### Scenario: Active navigation state
- **WHEN** a user is on the Pricing page
- **THEN** the "Pricing" link in the header is visually highlighted
- **AND** other navigation links are in their default state
- **AND** the active state is clearly distinguishable (color, underline, or background)

### Requirement: Accessible Navigation
All navigation elements SHALL be keyboard accessible and screen-reader friendly.

#### Scenario: Keyboard navigation
- **WHEN** a user navigates using the keyboard
- **THEN** all navigation links are focusable with Tab key
- **AND** focused links have a visible focus indicator
- **AND** dropdowns can be opened and navigated with keyboard
- **AND** Enter or Space key activates links

#### Scenario: Screen reader support
- **WHEN** a screen reader user navigates the site
- **THEN** navigation landmarks are properly labeled (nav, main, footer)
- **AND** links have descriptive aria-labels where needed
- **AND** dropdown menus announce their expanded/collapsed state
