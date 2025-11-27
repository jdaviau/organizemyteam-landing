import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{post.category}</Badge>
        </div>
        <CardTitle className="line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
