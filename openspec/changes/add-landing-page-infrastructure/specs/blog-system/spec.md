## ADDED Requirements

### Requirement: Blog Index Page
The blog SHALL provide an index page listing all published blog posts.

#### Scenario: Blog posts listing
- **WHEN** a user navigates to /blog
- **THEN** the page displays a grid of blog post cards
- **AND** each card shows the post title, excerpt, author, date, and featured image
- **AND** posts are sorted by publication date (newest first)
- **AND** each card links to the full blog post

#### Scenario: Blog post pagination
- **WHEN** there are more than 12 blog posts
- **THEN** posts are paginated with 12 posts per page
- **AND** pagination controls are displayed at the bottom of the page
- **AND** users can navigate between pages

### Requirement: MDX Blog Posts
Blog posts SHALL be authored in MDX format for rich content support.

#### Scenario: MDX content rendering
- **WHEN** a blog post is written in MDX format
- **THEN** the system renders markdown formatting (headers, lists, links, images)
- **AND** the system supports embedded React components within content
- **AND** code blocks are syntax-highlighted appropriately
- **AND** images are automatically optimized using Next.js Image component

#### Scenario: MDX frontmatter
- **WHEN** an MDX file is parsed
- **THEN** it extracts frontmatter metadata (title, date, author, excerpt, tags, featured_image)
- **AND** metadata is used to populate post cards and SEO tags
- **AND** missing required fields result in build-time validation errors

### Requirement: Blog Post Page
Each blog post SHALL have a dedicated page with full content and metadata.

#### Scenario: Individual post display
- **WHEN** a user navigates to /blog/[slug]
- **THEN** the page displays the full blog post content
- **AND** the page shows post metadata (title, author, date, reading time)
- **AND** the page includes a featured image if provided
- **AND** the page renders MDX content with proper formatting

#### Scenario: Blog post SEO
- **WHEN** a blog post page is rendered
- **THEN** it includes proper meta tags (title, description, og:image)
- **AND** it includes article schema.org structured data
- **AND** it includes author and published date metadata
- **AND** the canonical URL points to the blog post's permanent URL

### Requirement: Blog Post Routing
Blog posts SHALL be accessible via clean, SEO-friendly URLs.

#### Scenario: Blog URL structure
- **WHEN** a blog post is created with filename "track-team-payments.mdx"
- **THEN** it is accessible at /blog/track-team-payments
- **AND** the slug is derived from the filename
- **AND** invalid blog slugs return a 404 page

### Requirement: Reading Time Estimation
Blog posts SHALL display an estimated reading time for readers.

#### Scenario: Reading time calculation
- **WHEN** a blog post is rendered
- **THEN** the system calculates estimated reading time based on word count
- **AND** reading time is displayed in the post header (e.g., "5 min read")
- **AND** calculation assumes ~200 words per minute average reading speed

### Requirement: Treasurer-Focused Content Strategy
Blog posts SHALL target team treasurer pain points and financial management topics for SEO and audience engagement.

#### Scenario: Treasurer content topics
- **WHEN** blog content is planned and written
- **THEN** at least 5 initial posts target treasurer-specific topics
- **AND** topics include payment tracking, expense management, financial reporting, and end-of-season processes
- **AND** content addresses pain points competitors don't solve (e.g., detailed financial tracking vs basic invoicing)
- **AND** posts use SEO keywords like "team treasurer", "youth sports finances", "payment tracking"

#### Scenario: Competitive differentiation in content
- **WHEN** blog posts discuss features or solutions
- **THEN** content emphasizes depth of financial management capabilities
- **AND** posts may reference limitations of general team management tools
- **AND** content positions Team Manager as the specialist solution for financial administrators

### Requirement: Blog Post Categories/Tags
Blog posts SHALL support categorization via tags for content organization and treasurer workflow targeting.

#### Scenario: Post tags display
- **WHEN** a blog post has tags defined in frontmatter
- **THEN** tags are displayed on the post page
- **AND** tags include categories like "Payment Tracking", "Expense Management", "Financial Reports", "Treasurer Tips", "Getting Started"
- **AND** tags are styled as clickable chips or badges
- **AND** clicking a tag could filter posts (future enhancement)

### Requirement: Blog Static Generation
All blog posts SHALL be statically generated at build time with SEO optimization for treasurer-focused keywords.

#### Scenario: Blog build process
- **WHEN** the application is built
- **THEN** all MDX files in content/blog are parsed and validated
- **AND** static pages are generated for each blog post
- **AND** the blog index page is statically generated with all post metadata
- **AND** build fails if any MDX files have invalid frontmatter or syntax
- **AND** SEO meta tags include treasurer and financial management keywords

#### Scenario: Initial content requirements
- **WHEN** the blog is launched
- **THEN** it includes at least 5 treasurer-focused blog posts
- **AND** recommended topics include: "How to Track Youth Sports Team Payments", "Financial Mistakes Treasurers Make", "End-of-Season Financial Reports", "Payment Reminder Best Practices", "Spreadsheets to Software Migration"
- **AND** each post is 800-1500 words with actionable advice
- **AND** posts include relevant screenshots, examples, or templates
