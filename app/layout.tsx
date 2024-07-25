import "@/styles/globals.css";
import { Metadata } from "next";

import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lato } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Sunline Energie",
    template: `Sunline Energie`,
  },
  description: "",
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
      <head />

      <body className={lato.className}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
