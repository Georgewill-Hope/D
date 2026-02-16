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
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { GiPerfumeBottle } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

const HeroCard = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      {/* <LiaBalanceScaleSolid /> */}
      <GiPerfumeBottle size={30} />
      <div>
        <h3 className="font-bold tracking-wider">Balancing</h3>
        <p className="font-extralight tracking-wider text-xs text-gray-500 md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

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
    <section className="w-full bg-gray-50 text-black" ref={heroRef}>
      <div className="min-h-screen h-fit md:h-[90vh] w-full flex lime-glow text-black relative">
        <Image
          src={cloudImage}
          alt="cloud"
          fill
          className="object-cover object-center opacity-70"
        />
        <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0">
          <div className="box h-full flex flex-col lg:flex-row items-center justify-center py-40 px-8">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl">
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
              <div className="flex flex-col-reverse md:flex-row md:items-center gap-3">
                <div className="flex items-center gap-1">
                  <TbStarFilled size={30} color="orange" />
                  <TbStarFilled size={30} color="orange" />
                  <TbStarFilled size={30} color="orange" />
                  <TbStarFilled size={30} color="orange" />
                  <TbStarFilled size={30} color="orange" />
                </div>

                <p className="font-semibold tracking-wider text-xs md:text-lg">
                  47,281 Verified 5-star review
                </p>
              </div>
            </div>

            <div className="relative size-150 xl:size-200 hidden lg:block" ref={imageRef}>
              <Image
                src={heroImage}
                alt="DD Perfume"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen flex gap-10 flex-col py-14 md:py-32 box px-8">
        <div className="text-center">
          <h2 className="font-bold text-2xl md:text-3xl">Our Product Benefits</h2>
          <p className="text-gray-500 text-sm md:text-lg">
            Unlock your triue potential with a natural fragrance designed to
            elevate and enhance mental clarity and keep you <br /> at your best
            anywhere, anytime
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-40 flex-1 orange-section">
          <div className="flex flex-col gap-10 md:gap-20">
            <HeroCard />
            <HeroCard />
          </div>
          <div className="flex flex-col gap-10 md:gap-20">
            <HeroCard />
            <HeroCard />
          </div>
        </div>

        <div className="flex items-center justify-center z-50 mt-14 md:mt-0">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
