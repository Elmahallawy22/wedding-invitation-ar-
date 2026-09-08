"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, index) => ({
    id: index,
    left: (index * 37) % 100,
    size: 10 + ((index * 7) % 12),
    duration: 8 + ((index * 5) % 6),
    delay: (index * 3) % 8,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map(({ id, left, size, duration, delay }) => (
        <motion.span
          key={id}
          className="absolute bottom-7.5 text-peach"
          style={{ left: `${left}%`, fontSize: `${size}px` }}
          animate={{ y: ["0vh", "-115vh"], x: [0, 20, -20, 10, 0], opacity: [0, 0.5, 0.35, 0.2, 0], rotate: [0, 10, -10, 5, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
