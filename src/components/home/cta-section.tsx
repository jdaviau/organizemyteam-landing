import { Button } from "@/components/ui/button";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.organizemyteam.com";

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-landing section-padding">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Simplify Your Team Finances?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Join hundreds of treasurers who&apos;ve ditched the spreadsheets.
            Start your free trial today—no credit card required.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href={`${APP_URL}/signup`}>Start Free Trial</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="/contact">Talk to Sales</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
