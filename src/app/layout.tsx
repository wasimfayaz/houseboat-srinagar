import type { Metadata } from "next";
import BackToTop from "@/components/BackToTop";
import TemplateBadge from "@/components/TemplateBadge";
import "./globals.css";

export const metadata: Metadata = {
  title: "[YOUR HOUSEBOAT NAME] | Luxury Houseboat Stay on Dal Lake, Kashmir",
  description: "[YOUR TAGLINE] — Experience the timeless elegance of a Kashmiri houseboat on Dal Lake. Handcrafted luxury, traditional cuisine, and curated Himalayan experiences.",
  keywords: "Kashmir houseboat, Dal Lake, luxury houseboat, Kashmir tourism, Srinagar houseboat, Kashmir travel",
  openGraph: {
    title: "[YOUR HOUSEBOAT NAME] | Luxury Stay on Dal Lake",
    description: "[YOUR TAGLINE] — A floating sanctuary of Kashmiri elegance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackToTop />
        <TemplateBadge />
      </body>
    </html>
  );
}
