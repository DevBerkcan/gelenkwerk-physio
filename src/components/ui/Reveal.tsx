"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

const TRANSFORM_MAP: Record<string, string> = {
  up: "translateY(48px)",
  down: "translateY(-48px)",
  left: "translateX(48px)",
  right: "translateX(-48px)",
  scale: "scale(0.92)",
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0) scale(1)" : TRANSFORM_MAP[direction],
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
