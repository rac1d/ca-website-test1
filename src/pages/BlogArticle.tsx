import { useEffect } from 'react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { Link, useParams } from 'react-router-dom';
import { BlogFeaturedImage } from '@/components/BlogCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { formatBlogDate, useBlogArticle } from '@/data/blogs';

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-4 font-inter text-base leading-relaxed text-navy/80">{children}</p>,
    h2: ({ children }) => <h2 className="mt-9 font-display text-2xl font-bold text-navy">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 font-display text-xl font-bold text-navy">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="mt-6 border-l-4 border-primary pl-4 font-inter italic text-navy/80">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 font-inter text-navy/80">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 font-inter text-navy/80">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href: unknown = value?.href;
      return typeof href === 'string' && /^(https?:\/\/|mailto:|tel:|#|\/(?![\/\\]))/i.test(href)
        ? <a href={href} className="font-semibold text-primary underline underline-offset-4">{children}</a>
        : <>{children}</>;
    },
  },
};

export default function BlogArticle() {
  const { slug } = useParams();
  const article = useBlogArticle(slug);
  const post = article.status === 'ready' ? article.data : null;
  const title = post?.title ?? (
    article.status === 'ready' ? 'Article not found'
      : article.status === 'error' ? 'Article could not be loaded'
        : 'Loading article…'
  );

  useEffect(() => {
    if (!post) return;
    const originalTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const originalDescription = description?.content;

    document.title = post.seoTitle?.trim() || post.title;
    if (description) description.content = post.metaDescription?.trim() || post.excerpt;

    return () => {
      document.title = originalTitle;
      if (description && originalDescription !== undefined) description.content = originalDescription;
    };
  }, [post]);

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageHeader
          eyebrow={post ? post.topic : '/ blog'}
          title={title}
          subtitle={article.status === 'ready' && !post
            ? 'This article may have moved or the address may be incorrect.'
            : undefined}
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }]}
          showContact={false}
        />
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <Link to="/blog" className="font-inter text-sm font-semibold text-primary underline-offset-4 hover:underline">
            Back to Blogs
          </Link>
          {article.status === 'loading' && <p role="status" className="sr-only">Loading article…</p>}
          {article.status === 'error' && <p role="alert" className="mt-6 text-navy/75">Refresh the page to try loading the article again.</p>}
          {post && (
            <article className="mt-6">
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-inter text-sm text-navy/70">
                {post.author && <span>By {post.author}</span>}
                <time dateTime={post.publishedOn}>{formatBlogDate(post.publishedOn)}</time>
              </div>
              <div className="relative my-6 aspect-video overflow-hidden rounded-2xl">
                <BlogFeaturedImage post={post} />
              </div>
              <p className="font-inter text-lg leading-relaxed text-navy/80">{post.excerpt}</p>
              <PortableText value={post.body} components={bodyComponents} />
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
