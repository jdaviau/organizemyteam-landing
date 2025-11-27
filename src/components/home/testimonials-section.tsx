import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon, Star } from "lucide-react";
import { testimonials } from "@/lib/content";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="container-landing section-padding">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by Team Treasurers
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Hear from treasurers who&apos;ve made the switch to stress-free
          financial management.
        </p>
      </div>

      {/* Testimonial Cards - Top Row */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <Card key={testimonial.id} className="relative">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <QuoteIcon className="h-8 w-8 text-primary/20" />
                <StarRating rating={testimonial.rating} />
              </div>
              <blockquote className="text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {getInitials(testimonial.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.team}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional testimonials in a different layout */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.slice(3, 5).map((testimonial) => (
          <Card key={testimonial.id} className="relative">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-3">
                <QuoteIcon className="h-6 w-6 text-primary/20" />
                <StarRating rating={testimonial.rating} />
              </div>
              <blockquote className="text-sm text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {getInitials(testimonial.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.team}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
