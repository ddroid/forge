"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
  renderWord?: (word: string, index: number, total: number) => React.ReactNode;
}

export default function WordPullUp({
  words,
  renderWord,
  wrapperFramerProps = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  },
  className,
}: WordPullUpProps) {
  const wordsArray = words.split(" ");

  return (
    <motion.div
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {wordsArray.map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{
            display: "inline-block",
            paddingRight: "8px",
            willChange: "transform, opacity"
          }}
        >
          {renderWord ? renderWord(word, i, wordsArray.length) : word}
        </motion.span>
      ))}
    </motion.div>
  );
}
