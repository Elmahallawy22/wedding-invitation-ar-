"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type IntroScreenProps = {
  children: ReactNode;
  onOpen?: () => Promise<void> | void;
  onExitComplete?: () => void;
};

export default function IntroScreen({ children, onOpen, onExitComplete }: IntroScreenProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!showIntro) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showIntro]);

  const handleEnter = async () => {
    if (isOpening) return;
    setIsOpening(true);

    if (onOpen) {
      await onOpen();
    }

    setShowIntro(false);
  };

  return (
    <>
      <AnimatePresence onExitComplete={onExitComplete}>
        {showIntro && (
          <motion.div
            key="intro-container"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* the top panel */}
            <motion.div
              key="top-panel"
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-ink flex items-end justify-center "
            >
              <h1 className="text-cream font-arabic text-4xl md:text-6xl mb-16">يوسف</h1>
            </motion.div>
            {/* the bottom panel */}
            <motion.div
              key="bottom-panel"
              initial={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-ink flex justify-center "
            >
              <h1 className="text-cream font-arabic text-4xl md:text-6xl mt-12">هنا</h1>
            </motion.div>

            <motion.div
              key="seal-wrapper"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, rotate: -15 }}
              transition={{ duration: 0.5 }}
              className="z-20 flex items-center justify-center gap-10 cursor-pointer"
            >
              <motion.button
                onClick={handleEnter}
                type="button"
                aria-label="Click To Open"
                animate={isOpening ? { scale: 0.8 } : { scale: [1, 1.25, 1] }}
                transition={isOpening ? { duration: 0.3 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative text-center transition-all"
              >
                <svg
                  className="preloader-heart heart-beat size-12 sm:size-14 md:size-16"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21s-7-4.5-9.5-9C.8 8.5 2.6 4 6.5 4 9 4 10.5 5.5 12 7c1.5-1.5 3-3 5.5-3 3.9 0 5.7 4.5 4 8-2.5 4.5-9.5 9-9.5 9z"
                    fill="#333333"
                    stroke="#fff"
                  ></path>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
