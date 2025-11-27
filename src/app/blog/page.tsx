import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPostCard } from "@/components/blog";
import { getAllPosts, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and best practices for youth sports team treasurers. Learn how to manage team finances, track payments, and simplify your treasurer duties.",
  keywords: [
    "team treasurer blog",
    "youth sports finance tips",
    "team payment tracking",
    "sports team management",
    "treasurer best practices",
  ],
  openGraph: {
    title: "Blog - OrganizeMyTeam",
    description:
      "Tips and guides for youth sports team treasurers. Simplify your team finances.",
    type: "website",
    url: "https://organizemyteam.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - OrganizeMyTeam",
    description:
      "Tips and guides for youth sports team treasurers. Simplify your team finances.",
  },
  alternates: {
    canonical: "https://organizemyteam.com/blog",
  },
};

const POSTS_PER_PAGE = 9;

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const selectedCategory = params.category;

  let posts = getAllPosts();
  const categories = getAllCategories();

  // Filter by category if selected
  if (selectedCategory) {
    posts = posts.filter(
      (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  // Pagination
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "OrganizeMyTeam Blog",
            description:
              "Tips, guides, and best practices for youth sports team treasurers",
            url: "https://organizemyteam.com/blog",
            publisher: {
              "@type": "Organization",
              name: "OrganizeMyTeam",
              url: "https://organizemyteam.com",
            },
          }),
        }}
      />

      <section className="container-landing section-padding">
        {/* Header */}
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Blog
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tips for Team Treasurers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Practical advice, guides, and best practices for managing youth
            sports team finances. Written by treasurers, for treasurers.
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Link href="/blog">
              <Badge
                variant={!selectedCategory ? "default" : "outline"}
                className="cursor-pointer"
              >
                All
              </Badge>
            </Link>
            {categories.map((category) => (
              <Link key={category} href={`/blog?category=${category}`}>
                <Badge
                  variant={
                    selectedCategory?.toLowerCase() === category.toLowerCase()
                      ? "default"
                      : "outline"
                  }
                  className="cursor-pointer"
                >
                  {category}
                </Badge>
              </Link>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              No blog posts found. Check back soon for new content!
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {currentPage > 1 && (
              <Button variant="outline" asChild>
                <Link
                  href={`/blog?page=${currentPage - 1}${
                    selectedCategory ? `&category=${selectedCategory}` : ""
                  }`}
                >
                  Previous
                </Link>
              </Button>
            )}

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="icon"
                    asChild
                  >
                    <Link
                      href={`/blog?page=${page}${
                        selectedCategory ? `&category=${selectedCategory}` : ""
                      }`}
                    >
                      {page}
                    </Link>
                  </Button>
                )
              )}
            </div>

            {currentPage < totalPages && (
              <Button variant="outline" asChild>
                <Link
                  href={`/blog?page=${currentPage + 1}${
                    selectedCategory ? `&category=${selectedCategory}` : ""
                  }`}
                >
                  Next
                </Link>
              </Button>
            )}
          </div>
        )}
      </section>
    </>
  );
}
