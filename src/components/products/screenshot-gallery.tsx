"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ProductScreenshot } from "@/lib/products";

interface ScreenshotGalleryProps {
  screenshots: ProductScreenshot[];
  productName: string;
}

export function ScreenshotGallery({
  screenshots,
  productName,
}: ScreenshotGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  if (screenshots.length === 0) {
    return null;
  }

  const selectedScreenshot = screenshots[selectedIndex];

  return (
    <section className="container-landing section-padding">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          See {productName} in Action
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore the intuitive interface designed for busy treasurers.
        </p>
      </div>

      <div className="mt-12">
        {/* Main Screenshot Display */}
        <div className="overflow-hidden rounded-xl border bg-muted/50 shadow-lg">
          <div className="relative aspect-[16/9] w-full">
            {/* Placeholder for actual screenshot */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="text-center p-8">
                <ScreenshotPlaceholder />
                <p className="mt-4 text-lg font-medium">
                  {selectedScreenshot.alt}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {selectedScreenshot.caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {screenshots.length > 1 && (
          <div className="mt-6 flex justify-center gap-4">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "overflow-hidden rounded-lg border-2 transition-all",
                  index === selectedIndex
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-transparent hover:border-muted-foreground/30"
                )}
                aria-label={`View ${screenshot.alt}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              >
                <div className="relative h-16 w-28 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                    <span className="text-xs text-muted-foreground">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Caption */}
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {selectedScreenshot.caption}
        </p>
      </div>
    </section>
  );
}

function ScreenshotPlaceholder() {
  return (
    <svg
      className="h-24 w-24 text-primary/30 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
