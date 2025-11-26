"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const productLinks = [
  {
    title: "Team Manager",
    href: "/products/team-manager",
    description: "Financial management for youth sports teams",
  },
  {
    title: "Payment Tracking",
    href: "/products/team-manager#payments",
    description: "Track dues, fees, and payment statuses",
  },
  {
    title: "Expense Management",
    href: "/products/team-manager#expenses",
    description: "Categorize and monitor team expenses",
  },
  {
    title: "Financial Reports",
    href: "/products/team-manager#reports",
    description: "Generate detailed financial reports",
  },
];

const resourceLinks = [
  {
    title: "Blog",
    href: "/blog",
    description: "Tips and guides for team treasurers",
  },
  {
    title: "Documentation",
    href: "/docs",
    description: "Get started with Team Manager",
  },
  {
    title: "About Us",
    href: "/about",
    description: "Learn about our mission",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our team",
  },
];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.organizemyteam.com";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="container-landing flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
          aria-label="OrganizeMyTeam Home"
        >
          <LogoPlaceholder />
          <span className="hidden sm:inline">OrganizeMyTeam</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                    {productLinks.map((link) => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                        active={pathname === link.href}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing Link */}
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    data-active={pathname === "/pricing"}
                  >
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                    {resourceLinks.map((link) => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                        active={pathname === link.href}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex md:items-center md:gap-2">
          <Button variant="ghost" asChild>
            <a href={`${APP_URL}/login`}>Log in</a>
          </Button>
          <Button asChild>
            <a href={`${APP_URL}/signup`}>Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogoPlaceholder />
                  <span>OrganizeMyTeam</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4 py-6">
              {/* Products Section */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm text-muted-foreground">
                  Products
                </h3>
                <ul className="space-y-2">
                  {productLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                          pathname === link.href && "bg-accent"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Link */}
              <Link
                href="/pricing"
                className={cn(
                  "block rounded-md px-3 py-2 font-medium text-sm transition-colors hover:bg-accent",
                  pathname === "/pricing" && "bg-accent"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              {/* Resources Section */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm text-muted-foreground">
                  Resources
                </h3>
                <ul className="space-y-2">
                  {resourceLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                          pathname === link.href && "bg-accent"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full">
                  <a href={`${APP_URL}/login`}>Log in</a>
                </Button>
                <Button asChild className="w-full">
                  <a href={`${APP_URL}/signup`}>Get Started</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { active?: boolean }
>(({ className, title, children, active, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            active && "bg-accent/50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
