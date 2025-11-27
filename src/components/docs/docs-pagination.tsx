import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DocMeta } from "@/lib/docs";

interface DocsPaginationProps {
  prevDoc: DocMeta | null;
  nextDoc: DocMeta | null;
}

export function DocsPagination({ prevDoc, nextDoc }: DocsPaginationProps) {
  return (
    <div className="mt-12 flex items-center justify-between border-t pt-6">
      {prevDoc ? (
        <Link
          href={`/docs/${prevDoc.slug.join("/")}`}
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Previous</div>
            <div className="font-medium text-foreground">{prevDoc.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextDoc ? (
        <Link
          href={`/docs/${nextDoc.slug.join("/")}`}
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <div>
            <div className="text-xs text-muted-foreground">Next</div>
            <div className="font-medium text-foreground">{nextDoc.title}</div>
          </div>
          <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
