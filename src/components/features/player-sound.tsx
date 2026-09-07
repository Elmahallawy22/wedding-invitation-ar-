"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";

export type PlayerSoundRef = {
  playMusic: () => Promise<void>;
  pauseMusic: () => void;
};

const PlayerSound = forwardRef<PlayerSoundRef>((_, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio playback failed:", error);
      setIsPlaying(false);
    }
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  useImperativeHandle(ref, () => ({
    playMusic,
    pauseMusic,
  }));

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await playMusic();
    } else {
      pauseMusic();
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audios/mabrouk.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-10 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-peach text-cream md:left-6 lg:h-12 lg:w-12"
      >
        {isPlaying ? <Pause className="h-4 w-4 lg:h-6 lg:w-6" /> : <Music2 className="h-4 w-4 lg:h-6 lg:w-6" />}
      </button>
    </>
  );
});

PlayerSound.displayName = "PlayerSound";

export default PlayerSound;
