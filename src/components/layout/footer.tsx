import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ctaLinks } from "@/lib/constants";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { title: "Team Manager", href: "/products/team-manager" },
      { title: "Pricing", href: "/pricing" },
      { title: "Features", href: "/products/team-manager#features" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { title: "Documentation", href: "/docs" },
      { title: "Getting Started", href: "/docs/getting-started" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container-landing section-padding">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg"
            >
              <LogoPlaceholder />
              <span>OrganizeMyTeam</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Financial management built for team treasurers. Track payments,
              manage expenses, and keep your team organized.
            </p>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} OrganizeMyTeam. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={ctaLinks.login}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </a>
            <a
              href={ctaLinks.signup}
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LogoPlaceholder() {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm"
      aria-hidden="true"
    >
      OM
    </div>
  );
}
