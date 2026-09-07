"use client";

import { motion } from "framer-motion";

type RevealAppearProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RevealAppear({ children, className }: RevealAppearProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}
