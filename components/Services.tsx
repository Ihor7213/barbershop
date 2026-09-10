"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="w-full bg-[#111319] bg-[url('/images/services.png')] bg-no-repeat bg-cover bg-center relative">
      <div className="container mx-auto max-w-[1280px] px-[35px] py-[120px] md:pt-[130px]">
        
        <div className="flex items-center gap-5">
          <div className="w-[60px] h-0 border-t-[2px] border-[rgba(157,164,189,0.6)]"></div>
          <p className="font-semibold text-[11px] tracking-[0.1em] uppercase text-[rgba(157,164,189,0.6)]">
            {t.services.subtitle}
          </p>
        </div>
        
        <h2 className="font-bold text-[42px] tracking-[0.05em] text-white mt-5 mb-11">
          {t.services.title}
        </h2>

        <div className="flex flex-col lg:flex-row max-lg:bg-gradient-to-b max-lg:from-[#171a24] max-lg:to-[rgba(23,26,36,0.2)]">
          
          {/* Left Column */}
          <div className="flex-1 max-w-full lg:max-w-[585px] p-[30px_20px] sm:p-[30px_40px] lg:bg-gradient-to-b lg:from-[#171a24] lg:to-[rgba(23,26,36,0.2)] flex flex-col gap-5">
            {[
              { name: t.services.items.haircut, price: "300" },
              { name: t.services.items.beard, price: "200" },
              { name: t.services.items.mustache, price: "200" },
              { name: t.services.items.shave, price: "200" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-end text-[#9da4bd] font-normal text-[12px] sm:text-[15px] md:text-[18px] leading-[167%] tracking-[0.02em]">
                <span>{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#9da4bd]/70 -translate-y-[3px] sm:-translate-y-[6px] mx-2"></div>
                <span className="whitespace-nowrap">{t.services.from} {item.price} {t.services.currency}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 max-w-full lg:max-w-[585px] p-[30px_20px] sm:p-[30px_40px] lg:bg-gradient-to-b lg:from-[#090b13] lg:to-[rgba(9,11,19,0.2)] flex flex-col gap-5 lg:mt-0 max-lg:-mt-4">
            {[
              { name: t.services.items.trainee, price: "50" },
              { name: t.services.items.clipper, price: "200" },
              { name: t.services.items.kids, price: "300" },
              { name: t.services.items.gray, price: "200" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-end text-[#9da4bd] font-normal text-[12px] sm:text-[15px] md:text-[18px] leading-[167%] tracking-[0.02em]">
                <span>{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#9da4bd]/70 -translate-y-[3px] sm:-translate-y-[6px] mx-2"></div>
                <span className="whitespace-nowrap">{t.services.from} {item.price} {t.services.currency}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="flex justify-center mt-[50px]">
          <Link href="#contacts">
            <button className="font-semibold text-[11px] tracking-[0.09em] uppercase text-white border-2 border-[#ff6c00] rounded-[25px] px-[20px] py-[12px] hover:bg-[#ff6c00] transition-colors">
              {t.services.bookBtn}
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
