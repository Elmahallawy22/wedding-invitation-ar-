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

  return (
    <InvitationOpenProvider value={isInvitationOpen}>
      <IntroScreen onOpen={handleOpen} onExitComplete={() => setIsInvitationOpen(true)}>
        <PlayerSound ref={playerRef} />
        {children}
      </IntroScreen>
    </InvitationOpenProvider>
  );
}
