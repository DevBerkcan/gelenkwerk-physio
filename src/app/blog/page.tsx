import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { BLOG_POSTS } from "@/config/blog-posts";
import { GelenkwerkLogo } from "@/components/ui";
import { ChevronLeft } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: `Blog & Ratgeber | ${SITE_CONFIG.name} Basel`,
  description:
    "Informationen rund um Physiotherapie, Massage und Lymphdrainage in Basel. Ratgeber und Fachbeiträge von Gelenkwerk Physiotherapie.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  openGraph: {
    title: `Blog & Ratgeber | Gelenkwerk Physiotherapie Basel`,
    description:
      "Informationen rund um Physiotherapie, Massage und Lymphdrainage in Basel.",
    url: `${SITE_CONFIG.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Simple Top Bar */}
      <header className="bg-white border-b border-teal-pale py-4 px-6 sticky top-0 z-50">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <GelenkwerkLogo size={36} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-teal font-body text-[13px] font-semibold no-underline hover:underline"
          >
            <ChevronLeft size={15} />
            Zur Praxis
          </Link>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 font-body text-[12px] text-brand-muted">
          <Link href="/" className="hover:text-teal no-underline transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-text font-semibold">Blog</span>
        </nav>

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="section-label text-teal mb-2">Wissen & Gesundheit</div>
          <h1 className="font-display text-[clamp(32px,5vw,52px)] font-normal text-brand-text leading-tight mb-4">
            Blog & Ratgeber
          </h1>
          <div className="w-12 h-[3px] bg-teal-light rounded-sm mx-auto mb-5" />
          <p className="font-body text-[15px] text-brand-muted max-w-[520px] mx-auto">
            Informationen rund um Physiotherapie, Massage und Gesundheit — aus der Praxis Gelenkwerk in Basel.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} lang="de" featured />
          ))}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="mt-20 bg-brand-dark py-8 px-6 text-center">
        <Link href="/" className="no-underline">
          <GelenkwerkLogo size={28} className="mx-auto mb-2 opacity-70" />
        </Link>
        <p className="font-body text-[12px] text-white/40">
          © {new Date().getFullYear()} Gelenkwerk · Praxis Elisabethen, Basel
        </p>
      </footer>
    </div>
  );
}
