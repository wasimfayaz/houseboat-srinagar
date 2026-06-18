import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nagin Nest Houseboats | Luxury Houseboat Stay on Dal Lake, Kashmir",
  description: "Experience the timeless elegance of a Kashmiri houseboat on Dal Lake. Nagin Nest offers handcrafted luxury, traditional Wazwan cuisine, and curated Himalayan experiences. Book your stay in paradise.",
  keywords: "Kashmir houseboat, Dal Lake, luxury houseboat, Kashmir tourism, Nagin Lake, Srinagar houseboat, Kashmir travel",
  openGraph: {
    title: "Nagin Nest Houseboats | Luxury Stay on Dal Lake",
    description: "Where the Himalayas meet the water — a floating sanctuary of Kashmiri elegance.",
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
      <body>{children}</body>
    </html>
  );
}
