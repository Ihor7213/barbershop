"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Stats() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#171b23]">
      <div className="container mx-auto max-w-[1280px] px-[35px] py-[130px] lg:pb-[158px]">
        <div className="flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[130px] items-center lg:items-start justify-center">
          
          {/* Stats Boxes */}
          <div className="max-w-[365px] flex flex-wrap gap-4 sm:gap-[25px] lg:ml-[100px] justify-center">
            {[
              { num: "600", text: t.stats.clients },
              { num: "50", text: t.stats.awards },
              { num: "20", text: t.stats.masters },
              { num: "100", text: t.stats.gifts },
            ].map((stat, i) => (
              <div key={i} className="bg-[#4a4a4a] rounded-[10px] w-[calc(50%-8px)] sm:w-[170px] min-h-[133px] p-2 sm:p-[20px_24px] flex flex-col items-center justify-center shadow-sm">
                <h2 className="font-bold text-[48px] sm:text-[56px] tracking-[0.05em] text-white text-center leading-none mb-2">
                  {stat.num}
                </h2>
                <p className="font-semibold text-[12px] sm:text-[14px] text-[#f1f1f1] text-center leading-tight">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-5 max-w-[500px]">
            <div className="flex items-center gap-5">
              <div className="w-[60px] h-0 border-t-[2px] border-[rgba(157,164,189,0.6)]"></div>
              <p className="font-semibold text-[14px] tracking-[0.1em] uppercase text-[#9da4bd]">
                {t.stats.subtitle}
              </p>
            </div>
            
            <h2 className="font-bold text-[42px] tracking-[0.05em] text-white leading-tight">
              {t.stats.title}
            </h2>
            
            <p className="font-normal text-[20px] leading-[167%] tracking-[0.02em] text-[#d7dce7]">
              {t.stats.desc}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
