"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/config/blog-posts";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="bg-cream px-6 py-24">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="section-label text-teal">
            {lang === "de" ? "Wissen & Gesundheit" : "Health & Knowledge"}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            {lang === "de" ? "Blog & Ratgeber" : "Blog & Guides"}
          </h2>
          <div className="section-divider bg-teal-light" />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-body text-[15px] text-brand-muted text-center max-w-[580px] mx-auto mb-14">
            {lang === "de"
              ? "Informationen rund um Physiotherapie, Massage und Gesundheit — aus der Praxis für Sie."
              : "Information about physiotherapy, massage and health — from our practice for you."}
          </p>
        </Reveal>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={0.1 + i * 0.12}>
              <BlogCard post={post} lang={lang} />
            </Reveal>
          ))}
        </div>

        {/* Link to /blog */}
        <Reveal delay={0.4}>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-teal/20 text-teal font-body text-[14px] font-semibold no-underline transition-all duration-300 hover:bg-teal hover:text-white hover:border-teal"
            >
              {lang === "de" ? "Alle Beiträge" : "All articles"}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
