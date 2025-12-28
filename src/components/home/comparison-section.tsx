import { Badge } from "@/components/ui/badge";
import { competitiveAdvantage } from "@/lib/content";

export function ComparisonSection() {

  return (
    <section className="bg-muted/30">
      <div className="container-landing section-padding">
        {/* Section Header */}
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Why Switch?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {competitiveAdvantage.headline}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            While other products are great for scheduling and communication, Team
            Manager is built specifically for the financial side of running a
            team.
          </p>
        </div>

        {/* Competitive Advantages */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {competitiveAdvantage.points.map((point) => (
            <div key={point.title} className="rounded-lg border bg-background p-6">
              <h3 className="font-semibold text-primary">{point.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
