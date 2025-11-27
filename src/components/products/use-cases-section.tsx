import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProductUseCase } from "@/lib/products";

interface UseCasesSectionProps {
  useCases: ProductUseCase[];
}

export function UseCasesSection({ useCases }: UseCasesSectionProps) {
  return (
    <section className="bg-muted/30">
      <div className="container-landing section-padding">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Real Treasurer Workflows
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how Team Manager helps treasurers tackle their most common
            challenges.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <Card key={useCase.title} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary/50" />
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {useCase.persona}
                </Badge>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
