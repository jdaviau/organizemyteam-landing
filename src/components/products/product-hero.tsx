import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ProductHeroProps {
  name: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export function ProductHero({
  name,
  tagline,
  description,
  ctaText,
  ctaHref,
}: ProductHeroProps) {
  const isExternal = ctaHref.startsWith("http");

  return (
    <section className="container-landing section-padding">
      <div className="flex flex-col items-center text-center">
        <Badge variant="secondary" className="mb-4">
          Product
        </Badge>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {name}
        </h1>

        <p className="mt-4 text-xl text-primary font-medium">{tagline}</p>

        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          {description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            {isExternal ? (
              <a href={ctaHref}>{ctaText}</a>
            ) : (
              <Link href={ctaHref}>{ctaText}</Link>
            )}
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#features">Explore Features</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
