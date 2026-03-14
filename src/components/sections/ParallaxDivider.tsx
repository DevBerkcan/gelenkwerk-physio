"use client";

import { PHOTOS } from "@/config/site";

export default function ParallaxDivider() {
  return (
    <div className="relative h-[300px] overflow-hidden">
      <div
        className="absolute inset-x-0 -inset-y-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${PHOTOS.physio2})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/10 to-brand-dark/35" />
    </div>
  );
}
