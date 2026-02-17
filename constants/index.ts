import { linksType } from "@/types";
import Burberry from "@/public/assets/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg";
import DKNY from "@/public/assets/deanna-alys-xQwRvghauaU-unsplash.jpg";
import DnG from "@/public/assets/dmitry-vechorko-3u7d2CqjOnM-unsplash.jpg";
import Nitro from "@/public/assets/pavlo-talpa-1Mhre9qvZeY-unsplash.jpg";
import Khadlaj from "@/public/assets/laura-chouette-gbT2KAq1V5c-unsplash.jpg";
import { StaticImageData } from "next/image";

const navLinks: linksType[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Perfumes",
    href: "/perfumes",
  },
  {
    id: 3,
    name: "About",
    href: "/about",
  },
];

const featuredData: StaticImageData[] = [Burberry, DnG, DKNY, Khadlaj, Nitro];

const footerData = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Perfumes",
    href: "/perfumes",
  },
  {
    id: 3,
    name: "About",
    href: "/about",
  },
];

export { navLinks, featuredData, footerData };
