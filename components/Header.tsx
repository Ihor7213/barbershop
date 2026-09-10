"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/context/LanguageContext";

export default function Header() {
  const { t, language, setLanguage } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLangChange = (lang: Language) => setLanguage(lang);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto max-w-[1280px] px-[35px] pt-8 flex justify-between items-center gap-[30px]">
        {/* Logo */}
        <div className="min-w-[66px] min-h-[56px]">
          <Link href="/">
            <Image src="/images/header_logo.png" alt="logo" width={66} height={56} />
          </Link>
        </div>

        {/* Mobile Burger Icon */}
        <button
          className="md:hidden flex flex-col justify-between w-[30px] h-[18px] cursor-pointer relative z-[60] focus:outline-none"
          onClick={toggleMenu}
        >
          <span className={`h-[2px] w-full bg-white transition-all duration-300 origin-center ${isMenuOpen ? "translate-y-[8px] -rotate-45 !bg-black" : ""}`}></span>
          <span className={`h-[2px] w-[80%] self-end bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-[2px] w-full bg-white transition-all duration-300 origin-center ${isMenuOpen ? "-translate-y-[8px] rotate-45 !bg-black" : ""}`}></span>
        </button>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-[40] md:hidden" 
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-[80%] sm:w-[350px] bg-white z-[50] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden overflow-y-auto`}>
          <div className="flex flex-col ml-[49px]">
            <nav className="mt-[118px]">
              <ul className="flex flex-col gap-6">
                <li><Link href="#info" onClick={toggleMenu} className="font-semibold text-[18px] tracking-[0.1em] text-[#303030] hover:text-[#ff6c00]">{t.nav.about}</Link></li>
                <li><Link href="#services" onClick={toggleMenu} className="font-semibold text-[18px] tracking-[0.1em] text-[#303030] hover:text-[#ff6c00]">{t.nav.services}</Link></li>
                <li><Link href="#masters" onClick={toggleMenu} className="font-semibold text-[18px] tracking-[0.1em] text-[#303030] hover:text-[#ff6c00]">{t.nav.masters}</Link></li>
                <li><Link href="#contacts" onClick={toggleMenu} className="font-semibold text-[18px] tracking-[0.1em] text-[#303030] hover:text-[#ff6c00]">{t.nav.contacts}</Link></li>
              </ul>
            </nav>
            <div className="mt-[64px] mb-[41px] flex flex-col gap-6 w-[190px]">
              <p className="font-semibold text-[18px] tracking-[0.1em] uppercase text-[#303030]">{t.header.phone}</p>
              <Link href="#contacts" onClick={toggleMenu}>
                <button className="border border-[#ff6c00] rounded-[25px] w-[160px] h-[40px] text-[#303030] hover:bg-[#ff6c00] hover:text-white transition-colors">
                  {t.header.bookOnline}
                </button>
              </Link>
            </div>
            <div className="flex gap-4 pb-10">
              <button onClick={() => { handleLangChange("uk"); toggleMenu(); }} className={`font-semibold text-sm tracking-widest transition-colors hover:text-[#ff6c00] ${language === "uk" ? "text-[#ff6c00]" : "text-[#303030]"}`}>UK</button>
              <button onClick={() => { handleLangChange("en"); toggleMenu(); }} className={`font-semibold text-sm tracking-widest transition-colors hover:text-[#ff6c00] ${language === "en" ? "text-[#ff6c00]" : "text-[#303030]"}`}>EN</button>
              <button onClick={() => { handleLangChange("ru"); toggleMenu(); }} className={`font-semibold text-sm tracking-widest transition-colors hover:text-[#ff6c00] ${language === "ru" ? "text-[#ff6c00]" : "text-[#303030]"}`}>RU</button>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block w-full max-w-[600px]">
          <ul className="flex justify-between w-full">
            <li><Link href="#info" className="font-semibold text-sm tracking-[0.06em] text-white hover:text-[#ff6c00] transition-colors">{t.nav.about}</Link></li>
            <li><Link href="#services" className="font-semibold text-sm tracking-[0.06em] text-white hover:text-[#ff6c00] transition-colors">{t.nav.services}</Link></li>
            <li><Link href="#masters" className="font-semibold text-sm tracking-[0.06em] text-white hover:text-[#ff6c00] transition-colors">{t.nav.masters}</Link></li>
            <li><Link href="#contacts" className="font-semibold text-sm tracking-[0.06em] text-white hover:text-[#ff6c00] transition-colors">{t.nav.contacts}</Link></li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4 h-full">
          {/* Language Switcher */}
          <div className="flex gap-2 mr-2">
            <button onClick={() => handleLangChange("uk")} className={`font-semibold text-xs tracking-wider transition-colors hover:text-[#ff6c00] ${language === "uk" ? "text-[#ff6c00]" : "text-white"}`}>UK</button>
            <span className="text-white/50">|</span>
            <button onClick={() => handleLangChange("en")} className={`font-semibold text-xs tracking-wider transition-colors hover:text-[#ff6c00] ${language === "en" ? "text-[#ff6c00]" : "text-white"}`}>EN</button>
            <span className="text-white/50">|</span>
            <button onClick={() => handleLangChange("ru")} className={`font-semibold text-xs tracking-wider transition-colors hover:text-[#ff6c00] ${language === "ru" ? "text-[#ff6c00]" : "text-white"}`}>RU</button>
          </div>
          <Link href="#contacts">
            <button className="font-semibold text-sm tracking-[0.09em] uppercase whitespace-nowrap text-white border-2 border-[#ff6c00] rounded-[25px] px-[18px] py-[12px] hover:bg-[#ff6c00] transition-colors">
              {t.header.bookOnline}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
