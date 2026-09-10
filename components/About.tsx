"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="info" className="w-full bg-[#faf9f6]">
      <div className="container mx-auto max-w-[1280px] px-[35px] py-[121px] md:pt-[139px] flex flex-col xl:flex-row gap-[30px] xl:gap-[30px] justify-center items-center xl:items-stretch">
        
        {/* Images */}
        <div className="hidden md:flex gap-[30px] xl:gap-[30px] w-[90%] xl:w-[calc(50%-15px)]">
          <div className="w-[calc(50%-15px)] relative h-[445px]">
            <Image 
              src="/images/info_img_1.jpg" 
              alt="Barber working" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-[calc(50%-15px)] relative h-[445px]">
            <Image 
              src="/images/info_img_2.jpg" 
              alt="Barber tools" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col w-full xl:w-[calc(50%-15px)] items-start">
          <div className="flex items-center gap-5 mb-5 w-full">
            <div className="w-[60px] h-0 border-t-[2px] border-black max-sm:-ml-[60%]"></div>
            <p className="font-semibold text-[11px] tracking-[0.1em] uppercase text-[#303030]">
              {t.about.subtitle}
            </p>
          </div>
          
          <h2 className="font-bold text-[42px] tracking-[0.05em] text-[#303030] mb-5 font-mono">
            {t.about.title}
          </h2>
          
          <p className="font-normal text-[17px] leading-[167%] tracking-[0.02em] text-[#555] mb-5">
            {t.about.desc1}
          </p>
          
          <p className="font-normal text-[13px] leading-[186%] tracking-[0.02em] text-[#555] mb-10">
            {t.about.desc2}
          </p>
          
          <Link href="#contacts">
            <button className="border border-[#ff6c00] rounded-[25px] w-[160px] h-[40px] text-[#303030] uppercase text-[11px] font-semibold tracking-[0.09em] hover:bg-[#ff6c00] hover:text-white transition-colors">
              {t.about.bookBtn}
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
