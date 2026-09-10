"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    // Mock submit, reset after 3s
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contacts" className="w-full bg-[#191c26]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row">
        
        {/* Form Section */}
        <div className="flex-1 lg:max-w-[50%] p-[50px_35px] md:p-[130px_35px] lg:pl-[100px] flex flex-col justify-center">
          <h2 className="font-bold text-[42px] tracking-[0.05em] text-white font-mono mb-[10px]">
            {t.contact.formTitle}
          </h2>
          <div className="flex items-center gap-2 mb-[44px]">
            <Phone className="w-5 h-5 text-[#ff6c00]" />
            <a href="tel:0444449834" className="text-white text-lg font-bold tracking-widest hover:text-[#ff6c00] transition-colors">0444449834</a>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-[44px] w-full max-w-[330px]">
            <div className="flex flex-col sm:flex-row gap-[30px]">
              <input 
                required
                type="text" 
                placeholder={t.contact.name}
                className="w-full bg-transparent border-b border-[rgba(157,164,189,0.4)] pb-2 text-white text-[11px] font-semibold tracking-[0.1em] uppercase focus:outline-none focus:border-white transition-colors placeholder:text-[rgba(157,164,189,0.4)]"
              />
              <input 
                required
                type="tel" 
                placeholder={t.contact.phone}
                className="w-full bg-transparent border-b border-[rgba(157,164,189,0.4)] pb-2 text-white text-[11px] font-semibold tracking-[0.1em] uppercase focus:outline-none focus:border-white transition-colors placeholder:text-[rgba(157,164,189,0.4)]"
              />
            </div>
            
            <input 
              required
              type="text" 
              placeholder={t.contact.message}
              className="w-full bg-transparent border-b border-[rgba(157,164,189,0.4)] pb-2 text-white text-[11px] font-semibold tracking-[0.1em] uppercase focus:outline-none focus:border-white transition-colors placeholder:text-[rgba(157,164,189,0.4)]"
            />
            
            <button 
              type="submit"
              className="border border-[#ff6c00] rounded-[25px] w-[160px] h-[40px] text-white uppercase text-[11px] font-semibold tracking-[0.09em] hover:bg-[#ff6c00] transition-colors mt-[44px]"
            >
              {status === "success" ? "✓" : t.contact.submit}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-sm mt-2">{t.contact.success}</p>
            )}
          </form>
        </div>

        {/* Contacts Info Section */}
        <div className="flex-1 lg:max-w-[50%] bg-[url('/images/Bg_form.png')] bg-no-repeat bg-cover bg-center p-[50px_35px] md:p-[130px_35px] lg:pl-[100px] flex flex-col justify-center">
          <h2 className="font-bold text-[42px] tracking-[0.05em] text-white font-mono mb-10">
            {t.contact.infoTitle}
          </h2>
          
          <ul className="flex flex-col gap-5 mb-[70px]">
            <li className="flex items-center gap-4 text-[#9da4bd] font-normal text-[18px] leading-[167%] tracking-[0.02em]">
              <MapPin className="w-6 h-6 text-[#9da4bd]" />
              <span>{t.contact.address}</span>
            </li>
            <li className="flex items-center gap-4 text-[#9da4bd] font-normal text-[18px] leading-[167%] tracking-[0.02em]">
              <Phone className="w-6 h-6 text-[#9da4bd]" />
              <span>{t.contact.phone}</span>
            </li>
            <li className="flex items-center gap-4 text-[#9da4bd] font-normal text-[18px] leading-[167%] tracking-[0.02em]">
              <Mail className="w-6 h-6 text-[#9da4bd]" />
              <a href={`mailto:${t.contact.email}`} className="underline hover:text-white transition-colors">{t.contact.email}</a>
            </li>
          </ul>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="w-[60px] h-0 border-t-[2px] border-[rgba(157,164,189,0.6)]"></div>
              <p className="font-semibold text-[11px] tracking-[0.1em] uppercase text-white">
                {t.contact.workingHoursLabel}
              </p>
            </div>
            <p className="font-normal text-[18px] leading-[167%] tracking-[0.02em] text-[#9da4bd]">
              {t.contact.workingHours}
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
