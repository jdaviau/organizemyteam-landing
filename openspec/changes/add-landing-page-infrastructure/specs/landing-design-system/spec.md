## ADDED Requirements

### Requirement: Design Token Consistency
The landing page SHALL use design tokens consistent with the Team Manager app.

#### Scenario: Color palette usage
- **WHEN** the landing page is styled
- **THEN** it uses the same color palette as the Team Manager app
- **AND** primary, secondary, accent, and neutral colors match exactly
- **AND** colors are defined in a shared configuration or design tokens file
- **AND** dark mode colors are defined (if dark mode is supported)

#### Scenario: Typography consistency
- **WHEN** text is rendered on landing pages
- **THEN** it uses the same font families as the Team Manager app
- **AND** font sizes, weights, and line heights follow a consistent scale
- **AND** heading hierarchy (h1-h6) is consistent across landing and app

### Requirement: Shared UI Components
The landing page SHALL use shadcn/ui components consistent with the Team Manager app.

#### Scenario: Button components
- **WHEN** buttons are rendered on landing pages
- **THEN** they use the same Button component styles as the Team Manager app
- **AND** variants (primary, secondary, outline, ghost) match the app
- **AND** button sizes (sm, md, lg) are consistent

#### Scenario: Card components
- **WHEN** card components are used
- **THEN** they match the Card component styling from the Team Manager app
- **AND** card headers, content, and footers use consistent spacing and borders

#### Scenario: Input components
- **WHEN** forms include input fields
- **THEN** inputs use the same styling as the Team Manager app
- **AND** focus states, borders, and validation styling match

### Requirement: Spacing and Layout
The landing page SHALL use consistent spacing and layout patterns.

#### Scenario: Spacing scale
- **WHEN** components are laid out on pages
- **THEN** spacing uses a consistent scale (4px, 8px, 16px, 24px, 32px, etc.)
- **AND** section padding and margins follow the same patterns as the app
- **AND** component spacing is applied via Tailwind utility classes

#### Scenario: Grid system
- **WHEN** multi-column layouts are used
- **THEN** they use a consistent grid system (12-column or similar)
- **AND** responsive breakpoints match the Team Manager app
- **AND** container widths are consistent

### Requirement: Responsive Breakpoints
The landing page SHALL use the same responsive breakpoints as the Team Manager app.

#### Scenario: Breakpoint definitions
- **WHEN** responsive styles are applied
- **THEN** breakpoints match Tailwind's defaults or custom app breakpoints
- **AND** breakpoints include mobile (sm), tablet (md), desktop (lg), and wide (xl)
- **AND** layouts adapt consistently at each breakpoint

### Requirement: Icon System
The landing page SHALL use a consistent icon system.

#### Scenario: Icon library usage
- **WHEN** icons are displayed
- **THEN** they use the same icon library as the Team Manager app (e.g., Lucide, Heroicons)
- **AND** icon sizes are standardized (16px, 20px, 24px)
- **AND** icon colors match the design token palette

### Requirement: Component Reusability
UI components SHALL be extracted into reusable component files.

#### Scenario: Component organization
- **WHEN** UI components are created
- **THEN** they are organized in src/components/ui/ directory
- **AND** marketing-specific components are in src/components/marketing/
- **AND** layout components (header, footer) are in src/components/layout/
- **AND** each component file follows single-responsibility principle

### Requirement: Tailwind CSS Configuration
The landing page SHALL use Tailwind CSS with configuration matching the Team Manager app.

#### Scenario: Tailwind config consistency
- **WHEN** the Tailwind configuration is defined
- **THEN** it extends the default theme with custom colors from design tokens
- **AND** it includes the same custom utilities and plugins as the app
- **AND** it purges unused styles in production builds
- **AND** content paths include all component and page directories

### Requirement: Image Optimization
All images SHALL be optimized using Next.js Image component.

#### Scenario: Image component usage
- **WHEN** images are displayed on landing pages
- **THEN** they use the Next.js Image component for automatic optimization
- **AND** images specify width and height to prevent layout shift
- **AND** images use appropriate loading strategies (lazy, eager, priority)
- **AND** images are served in modern formats (WebP, AVIF) when supported
