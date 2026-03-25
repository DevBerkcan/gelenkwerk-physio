import Link from "next/link";
import { BlogPost, BlogCategory } from "@/config/blog-posts";
import { ArrowRight, Clock } from "lucide-react";

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  physio:  "bg-teal-pale text-teal",
  massage: "bg-[#fdf0e8] text-[#c4622d]",
  lymph:   "bg-[#eef4fb] text-[#2d6a9f]",
};

interface BlogCardProps {
  post: BlogPost;
  lang: "de" | "en";
  featured?: boolean;
}

export default function BlogCard({ post, lang, featured = false }: BlogCardProps) {
  const content = post[lang];
  const catColor = CATEGORY_COLORS[post.category];
  const dateStr = new Date(post.date).toLocaleDateString(
    lang === "de" ? "de-CH" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );
  const readLabel = lang === "de" ? "Min. Lesezeit" : "min read";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-[20px] bg-white border border-teal-pale overflow-hidden no-underline transition-all duration-300 hover:shadow-[0_16px_40px_rgba(26,138,125,0.12)] hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[4s] group-hover:scale-105"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full font-body text-[11px] font-bold tracking-wide ${catColor}`}>
          {content.categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3 font-body text-[12px] text-brand-muted">
          <span>{dateStr}</span>
          <span className="text-brand-muted/30">·</span>
          <Clock size={12} className="inline -mt-px" />
          <span>{post.readTime} {readLabel}</span>
        </div>

        <h3 className={`font-display text-brand-text leading-tight mb-3 ${featured ? "text-[20px]" : "text-[17px]"}`}>
          {content.title}
        </h3>

        <p className="font-body text-[14px] text-brand-muted leading-relaxed line-clamp-3 flex-1 mb-5">
          {content.excerpt}
        </p>

        <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-teal group-hover:gap-2.5 transition-all duration-200">
          {lang === "de" ? "Weiterlesen" : "Read more"}
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
