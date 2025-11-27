import { getDocNavigation } from "@/lib/docs";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsSearch } from "@/components/docs/docs-search";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = getDocNavigation();

  return (
    <div className="container max-w-7xl py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-64 md:shrink-0">
          <div className="sticky top-24 space-y-4">
            <DocsSearch navigation={navigation} />
            <DocsSidebar navigation={navigation} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
