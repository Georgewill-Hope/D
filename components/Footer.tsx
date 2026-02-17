import React from "react";
import Button from "./Button";
import Link from "next/link";
import { footerData } from "@/constants";



const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#1b1e18] via-[#394526] to-[#394526] range-600 lg:mt-20 xl:mt-0 overflow-hidden">
      <div className="box flex flex-col gap-10 sm:rounded-lg py-10 sm:py-20 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 hidden sm:flex items-center justify-center">
          <p className="text-9xl md:text-[150px] lg:text-[200px] xl:text-[240px] font-extrabold bg-linear-180 from-[white] via-[#4d5d2a] via-70% to-[#4d5d2a] text-transparent bg-clip-text opacity-20">
            Perfumes
          </p>
        </div>
        <div className="w-full z-20">
          <div className="mb-9">
            <h5 className="text-4xl lg:text-5xl font-extrabold font-mono text-gray-100 mb-2 leading-12">
              Build <span>Your Confidence</span> Today?
            </h5>
            <p className="text-white font-bold text-sm font-sans leading-6 tracking-wider">
              Sign in for the first time and get up to 30% free tdiscount
            </p>
          </div>

          <Button />
        </div>

        <div className="w-full h-0.5 bg-white rounded-full z-20" />

        <div className="w-full flex flex-col gap-3 sm:flex-row sm:items-center justify-between z-20">
          <ul className="flex items-center gap-10">
            {footerData.map((item) => (
              <li
                key={item.id}
                className="font-sora text-xs tracking-widest text-white hover:text-gray-900 hover:scale-125 duration-500"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <small className="font-sora text-xs tracking-wider text-white">
            2026 All Right Reservered @hopedev_
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
