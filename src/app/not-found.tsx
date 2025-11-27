"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="container-landing section-padding">
      <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
        {/* 404 Graphic */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved, deleted, or never existed.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/docs">
              <Search className="mr-2 h-4 w-4" />
              Browse Docs
            </Link>
          </Button>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-8 border-t w-full max-w-xl">
          <h3 className="font-semibold mb-4">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products/team-manager"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Team Manager
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
