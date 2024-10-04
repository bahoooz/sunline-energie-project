import "@/styles/globals.css";
import { Metadata } from "next";

import NavbarComponent from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Lato } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default:
      "Sunline Energie - Expert du Photovoltaïque",
    template: Sunline Energie - Expert du Photovoltaïque,
  },
  description:
    "Découvrez Sunline, expert du panneaux photovoltaïques en Nouvelle-Aquitaine. Solutions sur mesure, et services professionnels pour particuliers et entreprises.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:type" content="website" />

          <link rel="icon" href="/assets/favicon.ico" sizes="any" />

        </Head>
      <head />

      <body className={lato.className}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
