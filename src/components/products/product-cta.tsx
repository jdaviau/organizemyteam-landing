import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCTAProps {
  productName: string;
  ctaText: string;
  ctaHref: string;
}

export function ProductCTA({ productName, ctaText, ctaHref }: ProductCTAProps) {
  const isExternal = ctaHref.startsWith("http");

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-landing section-padding">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Try {productName}?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Join hundreds of treasurers who&apos;ve simplified their team
            finances. Start your free trial today—no credit card required.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              {isExternal ? (
                <a href={ctaHref}>{ctaText}</a>
              ) : (
                <Link href={ctaHref}>{ctaText}</Link>
              )}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
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
