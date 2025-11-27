"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DocSection } from "@/lib/docs";

interface DocsSearchProps {
  navigation: DocSection[];
}

export function DocsSearch({ navigation }: DocsSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const allDocs = useMemo(() => {
    return navigation.flatMap((section) =>
      section.items.map((item) => ({
        ...item,
        sectionTitle: section.title,
      }))
    );
  }, [navigation]);

  const filteredDocs = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    return allDocs.filter(
      (doc) =>
        doc.title.toLowerCase().includes(lowerQuery) ||
        doc.description.toLowerCase().includes(lowerQuery) ||
        doc.sectionTitle.toLowerCase().includes(lowerQuery)
    );
  }, [query, allDocs]);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search docs..."
          className="pl-9 h-9"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        />
      </div>

      {isFocused && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 max-h-80 overflow-auto">
          {filteredDocs.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground text-center">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <ul className="py-2">
              {filteredDocs.map((doc) => (
                <li key={doc.slug.join("/")}>
                  <Link
                    href={`/docs/${doc.slug.join("/")}`}
                    className="block px-4 py-2 hover:bg-accent transition-colors"
                    onClick={() => setQuery("")}
                  >
                    <div className="text-sm font-medium">{doc.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {doc.sectionTitle} &middot; {doc.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
