import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Modules from '@/pages/Modules';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogArticle from '@/pages/BlogArticle';

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center grain">
      <p className="font-mono-display text-sm font-bold uppercase tracking-wider text-gold">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-cream sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-inter text-base text-cream/60">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-grotesk text-base font-bold text-navy transition-all hover:scale-105 hover:bg-gold-light"
      >
        Back to home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
