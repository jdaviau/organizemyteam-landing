import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ctaLinks } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="container-landing section-padding">
      <div className="flex flex-col items-center text-center">
        {/* Badge */}
        <Badge variant="secondary" className="mb-4">
          Built for Team Treasurers
        </Badge>

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Financial Management
          <br />
          <span className="text-primary">Built for Team Treasurers</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Stop chasing payments and wrestling with spreadsheets. Track dues,
          manage expenses, and generate reports—all in one place designed
          specifically for youth sports team finances.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href={ctaLinks.signup}>Start Free Trial</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#features">See How It Works</a>
          </Button>
        </div>

        {/* Social Proof Teaser */}
        <p className="mt-8 text-sm text-muted-foreground">
          Trusted by <span className="font-semibold text-foreground">500+</span>{" "}
          youth sports teams managing{" "}
          <span className="font-semibold text-foreground">$2.5M+</span> in team
          finances
        </p>
      </div>

      {/* Dashboard Screenshot Placeholder */}
      <div className="mt-16 overflow-hidden rounded-xl border bg-muted/50 shadow-2xl">
        <div className="relative aspect-[16/9] w-full">
          {/* Placeholder for actual dashboard screenshot */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="text-center">
              <DashboardPlaceholder />
              <p className="mt-4 text-sm text-muted-foreground">
                Dashboard screenshot placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPlaceholder() {
  return (
    <svg
      className="h-24 w-24 text-primary/30"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
      />
    </svg>
  );
}
