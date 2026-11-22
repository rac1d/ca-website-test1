import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { useBlogPosts } from '@/data/blogs';

export default function Blog() {
  const posts = useBlogPosts();

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageHeader
          eyebrow="/ insights"
          title="Blog"
          subtitle="Practical articles on bookkeeping, financial planning, and preparing for the conversations that matter to your business."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
          showContact={false}
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {posts.status === 'loading' && <p role="status" className="text-navy/75">Loading articles…</p>}
          {posts.status === 'error' && <p role="alert" className="text-navy/75">Articles could not be loaded. Refresh the page to try again.</p>}
          {posts.status === 'ready' && (
            posts.data.length
              ? posts.data.map((post) => <BlogCard key={post.id} post={post} />)
              : <p className="text-navy/75">No articles have been published yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
