import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Image from "next/image";
import bannerImage from "@/public/assets/saman-taheri-79FmeCtL9NE-unsplash.jpg"
import { Metadata } from "next";

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

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <div className="relative w-full h-screen">
        <Image src={bannerImage} alt="banner" fill className="object-center object-cover"/>
      </div>
    </div>
  );
}
