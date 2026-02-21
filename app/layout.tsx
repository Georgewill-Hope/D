import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | DD Perfumes",
  description: "Best Selling Perfume in the world",
  keywords: ["DD", "Perfumes", "Oil Perfumes", "DD Oil Perfumes"],
  openGraph: {
    title: "Home | DD Perfumes",
    description: "Best Selling Perfume in the world",
    siteName: "https://dd-perfumes-hopedev.vercel.app",
    locale: "en_US",
    images: ["https://dd-perfumes-hopedev.vercel.app/opengraph-image.png"],
  },
  twitter: {
    title: "Home | DD Perfumes",
    description: "Best Selling Perfume in the world",
    card: "summary_large_image",
    images: ["https://dd-perfumes-hopedev.vercel.app/opengraph-image.png"],
    creator: "@Hopedev_",
  },
  authors: [{ name: "DD Prefumes" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
