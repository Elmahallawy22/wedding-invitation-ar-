"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import IntroScreen from "@/components/features/intro-screen";
import PlayerSound, { PlayerSoundRef } from "@/components/features/player-sound";
import { InvitationOpenProvider } from "@/components/providers/invitation-state";

export default function InvitationShell({ children }: { children: ReactNode }) {
  const playerRef = useRef<PlayerSoundRef>(null);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpen = async () => {
    await playerRef.current?.playMusic();
  };
  // 
  const handleIntroExitComplete = () => {
    setIsInvitationOpen(true);

    let animationId: number;
    let isAutoScrolling = true;

    const autoScroll = () => {
      if (!isAutoScrolling) return;

      window.scrollBy(0, 15);

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (!isAtBottom) {
        animationId = requestAnimationFrame(autoScroll);
      }
    };

    const stopAutoScroll = () => {
      isAutoScrolling = false;
      cancelAnimationFrame(animationId);

      window.removeEventListener("touchstart", stopAutoScroll);
      window.removeEventListener("wheel", stopAutoScroll);
    };

    // Stop auto-scroll when user interacts
    window.addEventListener("touchstart", stopAutoScroll, { once: true });
    window.addEventListener("wheel", stopAutoScroll, { once: true });

    // Start auto-scroll
    animationId = requestAnimationFrame(autoScroll);
  };

  return (
    <InvitationOpenProvider value={isInvitationOpen}>
      <IntroScreen onOpen={handleOpen} onExitComplete={handleIntroExitComplete}>
        <PlayerSound ref={playerRef} />
        {children}
      </IntroScreen>
    </InvitationOpenProvider>
  );
}
