"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DocSection } from "@/lib/docs";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DocsSidebarProps {
  navigation: DocSection[];
}

export function DocsSidebar({ navigation }: DocsSidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(
    navigation.map((s) => s.slug)
  );

  const toggleSection = (slug: string) => {
    setExpandedSections((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  return (
    <nav className="space-y-2">
      {navigation.map((section) => {
        const isExpanded = expandedSections.includes(section.slug);
        const sectionHasActiveItem = section.items.some(
          (item) => pathname === `/docs/${item.slug.join("/")}`
        );

        return (
          <div key={section.slug} className="space-y-1">
            <button
              onClick={() => toggleSection(section.slug)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                sectionHasActiveItem && "text-primary"
              )}
            >
              <span>{section.title}</span>
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>

            {isExpanded && (
              <div className="ml-3 space-y-1 border-l pl-3">
                {section.items.map((item) => {
                  const href = `/docs/${item.slug.join("/")}`;
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={item.slug.join("/")}
                      href={href}
                      className={cn(
                        "block rounded-md px-3 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
