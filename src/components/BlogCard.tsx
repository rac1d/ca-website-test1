import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatBlogDate, type BlogPost } from '@/data/blogs';

export function BlogFeaturedImage({ post }: { post: BlogPost }) {
  if (post.featuredImage) {
    return (
      <img
        src={post.featuredImage.src}
        alt={post.featuredImage.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <div aria-hidden="true" className="absolute inset-0 grid place-items-center bg-gradient-to-br from-primary-hover to-primary text-accent">
      <BookOpen className="h-12 w-12" strokeWidth={1.5} />
    </div>
  );
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="h-full">
      <Link
        to={`/blog/${post.slug}`}
        aria-labelledby={`${post.id}-action ${post.id}-title`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
      >
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <BlogFeaturedImage post={post} />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-inter text-sm">
            <span className="font-semibold text-primary">{post.topic}</span>
            <time dateTime={post.publishedOn} className="text-navy/70">
              {formatBlogDate(post.publishedOn)}
            </time>
          </div>
          <h2 id={`${post.id}-title`} className="mt-2 font-display text-2xl font-bold text-navy">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 font-inter text-base leading-relaxed text-navy/75">
            {post.excerpt}
          </p>
          <span id={`${post.id}-action`} className="mt-5 font-inter text-sm font-semibold text-primary group-hover:underline">
            Read More
          </span>
        </div>
      </Link>
    </article>
  );
}
