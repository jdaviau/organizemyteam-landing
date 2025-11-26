// Site configuration constants

export const siteConfig = {
  name: "OrganizeMyTeam",
  description: "Financial management built for team treasurers",
  url: "https://organizemyteam.com",
  appUrl: "https://app.organizemyteam.com",
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

export const ctaLinks = {
  signup: `${siteConfig.appUrl}/signup`,
  login: `${siteConfig.appUrl}/login`,
  demo: `${siteConfig.appUrl}/demo`,
};
