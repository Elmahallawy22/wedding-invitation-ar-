"use client";

import { useEffect, useState } from "react";
import Reveal from "./reveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function Timer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => setTimeLeft(getTimeLeft(targetDate));

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Helper function to format numbers with leading zeros
  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const timeBlocks = [
    { label: "يوم", value: timeLeft.days.toString() }, // Days don't strictly need 2-digit padding if over 99
    { label: "ساعة", value: formatNumber(timeLeft.hours) },
    { label: "دقيقة", value: formatNumber(timeLeft.minutes) },
    { label: "ثانية", value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-4 py-6 px-2">
      {timeBlocks.map((block, index) => (
        <div
          key={index}
          className="flex flex-col items-center font-arabic justify-center w-40 h-40 rounded-xl border border-[#0000001a] shadow-soft"
        >
          <Reveal>
            <span className="text-7xl mb-2">{block.value}</span>
          </Reveal>
          <Reveal>
            <span className="text-xl text-[#555]">{block.label}</span>
          </Reveal>
        </div>
      ))}
    </div>
  );
}
