import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG, CONTACT } from "@/config/site";
import { BLOG_POSTS, getPostBySlug, BlogCategory } from "@/config/blog-posts";
import { GelenkwerkLogo } from "@/components/ui";
import { ChevronLeft, Clock, Calendar, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    title: `${post.de.title} | ${SITE_CONFIG.name} Basel`,
    description: post.de.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.de.title,
      description: post.de.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Kiriaki Chatzidimitriadou"],
      siteName: SITE_CONFIG.fullName,
      images: [{ url: post.image, alt: post.de.title }],
    },
  };
}

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  physio:  "Physiotherapie",
  massage: "Massage",
  lymph:   "Lymphdrainage",
};

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  physio:  "bg-teal-pale text-teal",
  massage: "bg-[#fdf0e8] text-[#c4622d]",
  lymph:   "bg-[#eef4fb] text-[#2d6a9f]",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const content = post.de;
  const dateStr = new Date(post.date).toLocaleDateString("de-CH", {
    day: "numeric", month: "long", year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.title,
    description: content.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    inLanguage: "de-CH",
    author: {
      "@type": "Person",
      name: "Kiriaki Chatzidimitriadou",
      jobTitle: "Dipl. Physiotherapeutin",
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: SITE_CONFIG.fullName,
      url: SITE_CONFIG.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.city,
        postalCode: CONTACT.address.zip,
        addressCountry: "CH",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-cream">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Bar */}
      <header className="bg-white border-b border-teal-pale py-4 px-6 sticky top-0 z-50">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <GelenkwerkLogo size={36} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-teal font-body text-[13px] font-semibold no-underline hover:underline"
          >
            <ChevronLeft size={15} />
            Alle Beiträge
          </Link>
        </div>
      </header>

      <main className="max-w-[780px] mx-auto px-6 py-14">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 font-body text-[12px] text-brand-muted flex-wrap">
          <Link href="/" className="hover:text-teal no-underline transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-teal no-underline transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-brand-text font-semibold line-clamp-1">{content.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <span className={`inline-block px-3.5 py-1 rounded-full font-body text-[11px] font-bold tracking-wide mb-4 ${CATEGORY_COLORS[post.category]}`}>
            {CATEGORY_LABELS[post.category]}
          </span>
          <h1 className="font-display text-[clamp(28px,4vw,42px)] font-normal text-brand-text leading-tight mb-5">
            {content.title}
          </h1>
          <div className="flex items-center gap-4 font-body text-[13px] text-brand-muted">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {dateStr}
            </span>
            <span className="text-brand-muted/30">·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime} Min. Lesezeit
            </span>
            <span className="text-brand-muted/30">·</span>
            <span>Kiriaki Chatzidimitriadou</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-10 h-[300px]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          />
        </div>

        {/* Excerpt */}
        <p className="font-display text-[18px] italic text-brand-muted leading-relaxed mb-8 pb-8 border-b border-teal-pale">
          {content.excerpt}
        </p>

        {/* Article Content */}
        <article
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />

        {/* CTA Box */}
        <div className="mt-14 p-8 rounded-2xl bg-teal/5 border border-teal/15 text-center">
          <div className="font-display text-[22px] text-brand-text mb-2">
            Termin vereinbaren
          </div>
          <p className="font-body text-[14px] text-brand-muted mb-5">
            Praxis Gelenkwerk · Elisabethenstrasse 41 · 4051 Basel
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors duration-300"
          >
            Jetzt Termin buchen
            <ArrowRight size={15} />
          </Link>
        </div>
      </main>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="bg-white py-16 px-6 mt-10">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-display text-[24px] text-brand-text mb-8 text-center">
              Weitere Beiträge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-4 p-5 rounded-xl border border-teal-pale bg-cream no-underline hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className="w-20 h-20 rounded-xl flex-shrink-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full font-body text-[10px] font-bold mb-1.5 ${CATEGORY_COLORS[p.category]}`}>
                      {CATEGORY_LABELS[p.category]}
                    </span>
                    <h3 className="font-display text-[15px] text-brand-text leading-snug group-hover:text-teal transition-colors line-clamp-2">
                      {p.de.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-brand-dark py-8 px-6 text-center">
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
