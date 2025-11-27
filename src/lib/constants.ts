// Site configuration constants

// Environment-based URLs
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.organizemyteam.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://organizemyteam.com";

export const siteConfig = {
  name: "OrganizeMyTeam",
  description: "Financial management built for team treasurers",
  url: SITE_URL,
  appUrl: APP_URL,
  // Domain for cross-subdomain cookies (without leading dot for modern browsers)
  cookieDomain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || "organizemyteam.com",
  // Social links
  social: {
    twitter: "",
    github: "",
    linkedin: "",
  },
  // Contact info
  contact: {
    support: "support@organizemyteam.com",
    sales: "sales@organizemyteam.com",
    legal: "legal@organizemyteam.com",
    privacy: "privacy@organizemyteam.com",
  },
};

export const navLinks = {
  main: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "/docs" },
    { label: "About", href: "/about" },
  ],
  footer: {
    product: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Team Manager", href: "/products/team-manager" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

// CTA links pointing to the app
export const ctaLinks = {
  signup: `${APP_URL}/signup`,
  login: `${APP_URL}/login`,
  demo: `${APP_URL}/demo`,
  dashboard: `${APP_URL}/dashboard`,
  // Signup with source tracking
  signupWithSource: (source: string) => `${APP_URL}/signup?ref=${source}`,
};

// Cross-subdomain auth configuration
// This prepares the landing site for future integration with the app's auth system
export const authConfig = {
  // Cookie settings for cross-subdomain authentication
  cookie: {
    // Domain should be set to the root domain to allow sharing between subdomains
    domain: siteConfig.cookieDomain,
    // Secure cookies in production
    secure: process.env.NODE_ENV === "production",
    // SameSite should be 'lax' for cross-subdomain redirects
    sameSite: "lax" as const,
    // Path should be root to be accessible everywhere
    path: "/",
  },
  // Auth-related endpoints on the app
  endpoints: {
    login: `${APP_URL}/login`,
    logout: `${APP_URL}/logout`,
    signup: `${APP_URL}/signup`,
    callback: `${APP_URL}/auth/callback`,
    // Redirect back to landing after logout
    logoutRedirect: SITE_URL,
  },
};
