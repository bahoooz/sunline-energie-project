import "@/styles/globals.css";
import { Metadata } from "next";

import { fontSans } from "@/config/fonts";
import NavbarComponent from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Sunline Energie",
    template: `Sunline Energie`,
  },
  description:
    "",
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

      <body>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
