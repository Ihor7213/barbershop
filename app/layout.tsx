import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Frisor | Barbershop",
  description: "A hair salon for men in Kyiv. Мы эксперты в модных мужских стрижках.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white antialiased font-sans text-[#303030]">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
