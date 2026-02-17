import Image, { StaticImageData } from "next/image";
import cardImage from "@/public/assets/nick-nice-gPm8h3DS1s4-unsplash.jpg"

const Card = ({src}: { src: StaticImageData }) => {
  return (
    <div className="relative h-72 w-full">
      <Image
        src={src}
        alt="card image"
        fill
        className="object-center object-cover"
      />
    </div>
  );
};

export default Card;
