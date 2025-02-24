import "@/styles/globals.css";
import { Metadata } from "next";

import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lato } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: {
    default: "Sunline Energie - Expert du Photovoltaïque",
    template: `%s - Sunline Energie`,
  },
  description:
    "Découvrez Sunline, expert des panneaux photovoltaïques en Nouvelle-Aquitaine. Solutions sur mesure, et services professionnels pour particuliers et entreprises.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.sunline-energie.com",
    title: "Sunline Energie - Expert du Photovoltaïque",
    description:
      "Découvrez Sunline, expert des panneaux photovoltaïques en Nouvelle-Aquitaine. Solutions sur mesure, et services professionnels pour particuliers et entreprises.",
    images: [
      {
        url: "/assets/logo.png", // Image pour réseaux sociaux
        width: 1200,
        height: 630,
        alt: "Sunline Energie",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sunline Energie - Expert du Photovoltaïque" />
        <meta property="og:description" content="Découvrez Sunline, expert des panneaux photovoltaïques en Nouvelle-Aquitaine. Solutions sur mesure, et services professionnels pour particuliers et entreprises." />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:url" content="https://www.sunline-energie.com" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.sunline-energie.com" />

        {/* Favicon */}
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization", 
              "name": "Sunline Energie",
              "url": "https://www.sunline-energie.com",
              "logo": "https://www.sunline-energie.com/assets/logo.png",
              "sameAs": [
                "https://www.facebook.com/sunlineenergie",
                "https://www.linkedin.com/company/sunline-energie/"
              ]
            })
          }}
        />
      </head>

      <body className={lato.className}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
