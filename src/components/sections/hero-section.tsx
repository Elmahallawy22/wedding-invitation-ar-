"use client";

import { useInvitationOpen } from "../providers/invitation-state";
import { MoveDownIcon, MoveLeft } from "lucide-react";
import Image from "next/image";
import Reveal from "../features/reveal";
import RevealAppear from "../features/reveal-appear";
import MotionImage from "../features/motion-image";

export default function HeroSection() {
  // Check if the invitation is open
  const isInvitationOpen = useInvitationOpen();

  // If the invitation is not open, render a placeholder section
  if (!isInvitationOpen) {
    return <section className="min-h-screen bg-gradient-dawn" />;
  }

  return (
    <section className="min-h-screen bg-gradient-dawn flex justify-center  overflow-x-hidden">
      <div className="container flex flex-col items-center justify-between pt-2 md:pt-10 pb-16 md:pb-24 lg:pb-12!">
        <p className="font-kufi tracking-widest text-sm">Y & H · 2026</p>
        <div className="flex justify-center items-center gap-5 xl:gap-20 w-full">
          <MotionImage className="hidden lg:block">
            <Image src="/assets/couples.jpeg" alt="Couple" width={300} height={300} className="w-70 h-80 xl:h-90 rounded-4xl rotate-5" />
          </MotionImage>
          {/* content  */}
          <div className="flex flex-col items-center gap-2 text-center">
            <Reveal delay={0.5} duration={2.7}>
              <h2 className="tracking-widest text-3xl md:text-6xl font-script">سنتزوج</h2>
            </Reveal>
            <RevealAppear className="text-5xl md:text-9xl font-bold font-arabic mb-4 ">يوسف</RevealAppear>
            <RevealAppear className="text-3xl md:text-6xl font-bold font-script leading-0 mt-2 md:mt-10 ">&</RevealAppear>
            <RevealAppear className="text-5xl md:text-9xl font-bold font-arabic ">هنا</RevealAppear>
            <Reveal delay={1} duration={2.7}>
              <div className="flex items-center gap-3 mt-1 md:mt-3">
                <p className="h-px w-8 bg-ink"></p>
                <p className="tracking-[0.2em]" dir="ltr">
                  9 . 11 . 2026
                </p>
                <p className="h-px w-8 bg-ink"></p>
              </div>
            </Reveal>
            <Reveal delay={1.2} duration={2.7}>
              <button className="bg-ink text-cream py-2.5 md:py-3 px-5 md:px-8 rounded-full font-semibold flex gap-3 animate-pulse">
                احفظ التاريخ <MoveLeft className="w-4" />
              </button>
            </Reveal>
          </div>
          <MotionImage value={-100} className="hidden lg:block">
            <Image
              src="/assets/couples-sm.jpeg"
              alt="Couple"
              width={300}
              height={300}
              className="w-70! h-80 xl:h-90 rounded-4xl hidden lg:block animate-slide-in-left -rotate-10"
            />
          </MotionImage>
        </div>
        {/* Images for mobiles */}
        <div className="flex items-center lg:hidden">
          <MotionImage>
            <Image
              src="/assets/couples.jpeg"
              alt="Couple"
              width={300}
              height={300}
              className="w-45 md:w-60 h-60 md:h-80 rounded-4xl rotate-5 animate-slide-in-right"
            />
          </MotionImage>
          <MotionImage value={-100}>
            <Image
              src="/assets/couples-sm.jpeg"
              alt="Couple"
              width={300}
              height={300}
              className="w-35 md:w-50 h-45 md:h-65 rounded-4xl -rotate-3 animate-slide-in-left"
            />
          </MotionImage>
        </div>
        {/* Scroll indicator */}
        <p className="font-sans text-2xl animate-bounce flex items-end">
          <MoveDownIcon className="h-4" /> مرِّر
        </p>
      </div>
    </section>
  );
}
