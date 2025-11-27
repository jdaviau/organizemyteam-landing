import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface DocsBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function DocsBreadcrumb({ items }: DocsBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-4 w-4" />}
              {isLast ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
