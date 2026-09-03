import type { Metadata } from "next";
import { Aref_Ruqaa, Amiri, Reem_Kufi, Vibes } from "next/font/google";
import "./globals.css";

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
});

const vibes = Vibes({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-vibes",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-kufi",
});

export const metadata: Metadata = {
  title: "يوسف و هنا",
  description: "دعوات زفاف إلكترونية جميلة، من إعداد يوسف المحلاوي",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${arefRuqaa.variable} ${vibes.variable} ${amiri.variable} ${reemKufi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
