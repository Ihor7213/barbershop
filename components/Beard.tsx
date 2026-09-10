"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function Beard() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#faf9f6]">
      <div className="container mx-auto max-w-[1280px] px-[35px] py-[120px]">
        
        <div className="flex flex-col gap-11 mb-11">
          <p className="font-semibold text-[11px] tracking-[0.1em] uppercase text-[#303030] text-center max-w-[400px] mx-auto hidden md:block">
            {t.beard.quote}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {[
            "/images/beard__container__title__works-1.jpg",
            "/images/beard__container__title__works-2.jpg",
            "/images/beard__container__title__works-3.jpg",
            "/images/beard__container__title__works-4.jpg",
          ].map((src, i) => (
            <div key={i} className="relative w-full aspect-[270/360]">
              <Image 
                src={src} 
                alt="beard style" 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
