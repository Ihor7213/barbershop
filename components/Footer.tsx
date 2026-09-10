"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2f2f2f]">
      <div className="container mx-auto max-w-[1280px] px-[35px] py-[30px] flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="min-w-[66px]">
          <Link href="/">
            <Image 
              src="/images/Copyright.png" 
              alt="Copyright" 
              width={160} 
              height={40} 
              className="object-contain"
            />
          </Link>
        </div>

        <div>
          <ul className="flex flex-col md:flex-row gap-[24px]">
            <li>
              <a 
                href="https://www.instagram.com/frisorworkshop/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-[14px] tracking-[0.2em] text-[#f1f1f1] hover:text-[#ff6c00] transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/shorts/_iTrK3Ju42U" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-[14px] tracking-[0.2em] text-[#f1f1f1] hover:text-[#ff6c00] transition-colors"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
