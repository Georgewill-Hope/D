"use client";

import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "@/constants";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/assets/D-Perfumes_light_calligraphy-removebg-preview.png";

const Navbar = () => {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set("#menu-link-item-holder", {
        y: 75,
      });

      tl.current = gsap
        .timeline({ paused: true })
        .to("#menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to("#menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: containerRef }
  );

  useEffect(() => {
    tl.current?.[isMenuOpen ? "play" : "reverse"]();
  }, [isMenuOpen]);

  return (
    <nav className="text-black" ref={containerRef}>
      <div className="fixed top-0 left-0 w-full py-2 px-8 flex justify-between items-center z-999 backdrop-blur-2xl">
        <div className="box flex justify-between items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={200}
              className="w-32 md:w-40"
            />
          </Link>

          <button className="cursor-pointer" onClick={handleToggleMenu}>
            <FaBars size={30} color="black" />
          </button>
        </div>
      </div>

      <div
        id="menu-overlay"
        className="fixed top-0 left-0 w-full h-screen py-2 px-8 bg-[#c5fb45] z-999 flex flex-col justify-between [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]"
      >
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={200}
              className="w-32 md:w-40"
            />
          </Link>
          <button onClick={handleToggleMenu}>
            <CgClose size={30} className="cursor-pointer" />
          </button>
        </div>

        <div className="flex gap-20 lg:gap-32 xl:gap-56 h-full">
          <button
            className="self-end cursor-pointer hidden sm:block"
            onClick={handleToggleMenu}
          >
            <p className="text-[100px] leading-[70%] [-webkit-text-stroke:5px_#c5fb45]">
              &#x2715;
            </p>
          </button>

          <div className="flex flex-col pb-20 sm:pb-0 justify-between w-full md:w-fit">
            <div className="mt-10">
              {navLinks.map((link, index) => (
                <div
                  className="w-max [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"
                  key={index}
                >
                  <div
                    id="menu-link-item-holder"
                    className="relative"
                    onClick={handleToggleMenu}
                  >
                    <Link
                      href={link.href}
                      className="text-black text-[60px] sm:text-[80px] font-normal tracking-[-0.02em] leading-[85%]"
                    >
                      {link.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className=" flex justify-between items-end md:gap-20 lg:gap-32 xl:gap-56 w-full md:w-fit">
              <div className="flex flex-col">
                <a href="#">X &#8599;</a>
                <a href="#">Instargram &#8599;</a>
                <a href="#">LinkedIn &#8599;</a>
                <a href="#">Facebook &#8599;</a>
              </div>

              <div className="flex flex-col">
                <p>info@dummy.com</p>
                <p>+234 934 345 9990</p>
              </div>
            </div>
          </div>

          <div className="ml-auto self-end hidden md:block">
            <p>View Showreel</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
