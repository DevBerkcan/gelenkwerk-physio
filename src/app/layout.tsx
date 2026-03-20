import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.fullName,
  description: SITE_CONFIG.description,
  icons: {
    icon: "/logoo_transparent.png",
    shortcut: "/logoo_transparent.png",
    apple: "/logoo_transparent.png",
  },
  openGraph: {
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/logoo_transparent.png",
        width: 1600,
        height: 675,
        alt: SITE_CONFIG.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    images: ["/logoo_transparent.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nunito+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased"><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
