"use client";
import { motion } from "motion/react";

type MotionImageProps = {
  children: React.ReactNode;
  value?: number;
  className?: string;
};
export default function MotionImage({ children, value = 100, className }: MotionImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: value }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
