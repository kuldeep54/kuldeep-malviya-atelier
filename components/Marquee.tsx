"use client";

import React from "react";
import { clients } from "../data/mock";

const Marquee = () => {
  const loop = [...clients, ...clients];
  return (
    <section className="py-10 overflow-hidden border-b border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-10 px-10 font-display italic font-light text-4xl md:text-5xl text-[#2a2a27] hover:text-[#c9a961] transition-colors duration-500"
          >
            {c}
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a961]/60" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
