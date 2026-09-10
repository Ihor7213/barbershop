"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Masters() {
  const { t } = useTranslation();

  const masters = [
    { name: "John Smith", img: "/images/masters_img_1.jpg" },
    { name: "Michele Doe", img: "/images/masters_img2.jpg" },
    { name: "Alan Black", img: "/images/masters_img3.jpg" },
  ];

  return (
    <section id="masters" className="w-full bg-[#faf9f6]">
      <div className="container mx-auto max-w-[1280px] px-[35px] py-[120px]">
        
        <div className="flex flex-col gap-5 mb-11">
          <div className="flex items-center gap-5">
            <div className="w-[60px] h-0 border-t-[2px] border-black"></div>
            <p className="font-semibold text-[11px] tracking-[0.1em] uppercase text-[#303030]">
              {t.masters.subtitle}
            </p>
          </div>
          
          <h2 className="font-bold text-[42px] tracking-[0.05em] text-[#303030] font-mono">
            {t.masters.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center">
          {masters.map((master, index) => (
            <div key={index} className="flex flex-col max-w-[370px] w-full group">
              <div className="relative w-full aspect-[370/346] overflow-hidden bg-gray-200 mb-[30px]">
                <Image 
                  src={master.img} 
                  alt={master.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col items-center">
                <p className="font-normal text-[18px] tracking-[0.02em] text-[#303030] mb-2">
                  {master.name}
                </p>
                <p className="font-normal text-[14px] tracking-[0.02em] text-[#ff6c00] mb-4">
                  {t.masters.role}
                </p>
              </div>

              <ul className="flex justify-center gap-4">
                {[
                  { icon: "/images/master_insta.png", href: "https://instagram.com" },
                  { icon: "/images/master_tvit.png", href: "https://x.com" },
                  { icon: "/images/master_fase.png", href: "https://facebook.com" },
                  { icon: "/images/master_in.png", href: "https://linkedin.com" },
                ].map((social, idx) => (
                  <li key={idx} className="w-[44px] h-[44px] rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <Image src={social.icon} alt="social icon" width={20} height={20} className="opacity-80 hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
