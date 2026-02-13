"use client";

import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { TbStarFilled } from "react-icons/tb";
import Image from "next/image";
import heroImage from "@/public/assets/gift-habeshaw-9I_hAW8JUUg-unsplash-removebg-preview.png";
import groupImage from "@/public/assets/group.avif";
import vectorImage from "@/public/assets/vector1.avif";
import lineImage from "@/public/assets/vector2.avif";
import cloudImage from "@/public/assets/chuttersnap-9AqIdzEc9pY-unsplash.jpg";
import miniCloudImage from "@/public/assets/jose-ramos-BWCgQw25XUE-unsplash-removebg-preview.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!heroRef.current || !imageRef.current) return;

  const hero = heroRef.current;
  const image = imageRef.current;
  const orangeSection = hero.querySelector(".orange-section") as HTMLElement;

  if (!orangeSection) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=100%",
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const calculate = () => {
      const startRect = image.getBoundingClientRect();
      const endRect = orangeSection.getBoundingClientRect();

      const deltaX =
        endRect.left +
        endRect.width / 2 -
        (startRect.left + startRect.width / 2);

      const deltaY =
        endRect.top +
        endRect.height / 2 -
        (startRect.top + startRect.height / 2);

      tl.to(
        image,
        {
          x: deltaX,
          y: deltaY,
          scale: 0.75,
          ease: "power1.in",
        },
        0
      );
    };

    calculate();
    ScrollTrigger.addEventListener("refreshInit", calculate);
  }, heroRef);

  return () => ctx.revert();
}, []);


  return (
    <section className="w-full" ref={heroRef}>
      <div className="min-h-screen md:h-[90vh] w-full flex lime-glow text-black relative">
        <Image
          src={cloudImage}
          alt="cloud"
          fill
          className="object-cover object-center opacity-70"
        />

        <div className="absolute z-2 top-0">
          <Image
            src={miniCloudImage}
            alt="DD Perfume"
            width={500}
            height={500}
            priority
            className="object-cover object-bottom w-3xl opacity-20"
          />
        </div>
        <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0">
          <div className="box h-full flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-7xl">
                Feel the{" "}
                <span className="font-bold"> Natural Power Elevate</span> Your
                Energy <br />
                and Focus
              </h1>
              <p className="font-extralight tracking-wider text-sm">
                Unlock your full potential with a natural blend designed to
                elevate your confidence <br /> Enhance mental clarity and keep
                you at your best anytime, anywhere
              </p>
              <Button />
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <TbStarFilled size={30} color="orange" />
                  <TbStarFilled size={30} color="orange" />
                  <TbStarFilled size={30} color="orange" />
                  <TbStarFilled size={30} color="orange" />
                  <TbStarFilled size={30} color="orange" />
                </div>

                <p className="font-semibold tracking-wider">
                  47,281 Verified 5-star review
                </p>
              </div>
            </div>

            <div className="relative size-200" ref={imageRef}>
              <Image
                src={heroImage}
                alt="DD Perfume"
                fill
                priority
                className="object-cover object-center"
              />

              {/* <div className="absolute z-10 top-24 left-10">
              <Image
                src={groupImage}
                alt="DD Perfume"
                width={70}
                height={100}
                priority
                className="object-cover object-center"
              />
            </div>
            <div className="absolute z-10 top-48 right-24">
              <Image
                src={vectorImage}
                alt="DD Perfume"
                width={50}
                height={50}
                priority
                className="object-cover object-center"
              />
            </div>
            <div className="absolute z-10 top-52 right-24">
              <Image
                src={lineImage}
                alt="DD Perfume"
                width={50}
                height={50}
                priority
                className="object-cover object-center"
              />
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="orange-section bg-orange-500 w-full h-screen flex items-center justify-center"></div>
    </section>
  );
};

export default Hero;
