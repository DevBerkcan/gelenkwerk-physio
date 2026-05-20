import type { Metadata } from "next";
import Script from "next/script";
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
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wu4e1i9bsi");
        `}
      </Script>
    </html>
  );
}
