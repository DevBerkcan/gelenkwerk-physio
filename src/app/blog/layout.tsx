import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
