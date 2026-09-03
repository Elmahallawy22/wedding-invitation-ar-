"use client";

import { useRef } from "react";

import IntroScreen from "@/components/features/intro-screen";
import PlayerSound, { PlayerSoundRef } from "@/components/features/player-sound";

type InvitationShellProps = {
  children: React.ReactNode;
};

export default function InvitationShell({ children }: InvitationShellProps) {
  const playerRef = useRef<PlayerSoundRef>(null);

  const handleOpen = async () => {
    await playerRef.current?.playMusic();
  };

  return (
    <IntroScreen onOpen={handleOpen}>
      <PlayerSound ref={playerRef} />
      {children}
    </IntroScreen>
  );
}
