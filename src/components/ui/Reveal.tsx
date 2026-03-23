"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

type RevealVariants = Record<string, Variants>;

const VARIANTS: RevealVariants = {
  up:    { hidden: { opacity: 0, y: 40 },    visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 },   visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 40 },    visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 },   visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const v = VARIANTS[direction];
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={v}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
