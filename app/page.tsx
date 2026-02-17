import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Image from "next/image";
import bannerImage from "@/public/assets/saman-taheri-79FmeCtL9NE-unsplash.jpg"

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
