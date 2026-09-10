"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import Header from "./Header";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-[#1a1a1a]">
      <Image
        src="/images/Slider.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden scale-x-[1.005] object-cover object-[right_center] md:block"
      />
      <Image
        src="/images/Header_media-768px.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-x-[1.005] object-cover object-center md:hidden"
      />
      <Header />
      
      <div className="relative z-10 container mx-auto max-w-[1280px] px-[35px] h-full flex flex-col justify-center">
        <div className="flex flex-col mt-[80px] md:mt-[150px] max-w-[580px] items-start md:ml-0 max-md:ml-[15%] max-sm:ml-0 max-sm:max-w-[306px]">
          <div className="flex items-center gap-5">
            <div className="hidden max-md:block w-[60px] h-0 border-t-[2px] border-[rgba(157,164,189,0.6)]"></div>
            <p className="font-semibold text-[11px] md:text-[13px] tracking-[0.1em] uppercase text-[rgba(157,164,189,0.6)]">
              {t.header.subtitle}
            </p>
          </div>
          
          <h1 className="font-bold text-[43px] md:text-[58px] tracking-[0.05em] text-white mt-5 mb-[30px]">
            {t.header.title}
          </h1>
          
          <p className="font-light md:font-normal text-[16px] leading-[162%] tracking-[0.02em] text-[#9da4bd]">
            {t.header.promise}
          </p>
        </div>
      </div>
    </div>
  );
}
