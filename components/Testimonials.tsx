"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/mock";

const Testimonials = () => {
  const [i, setI] = useState(0);
  const total = testimonials.length;

  const prev = () => setI((i - 1 + total) % total);
  const next = () => setI((i + 1) % total);

  const t = testimonials[i];

  return (
    <section className="relative py-28 md:py-36 bg-[#0a0a0a] border-t border-[#1a1a1a] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,169,97,0.07), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20 relative">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
            — IN THE WORDS OF CLIENTS
          </span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#5a5a55]">
            / 06
          </span>
        </div>

        <div className="max-w-4xl">
          <Quote
            size={40}
            className="text-[#c9a961] mb-8 opacity-80"
            aria-hidden
          />
          <blockquote className="font-display font-light italic text-3xl md:text-5xl text-[#f5f5f0] leading-[1.2]">
            “{t.quote}”
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-10 h-px bg-[#c9a961]" />
            <div>
              <div className="font-mono text-[11px] tracking-[0.25em] text-[#f5f5f0]">
                {t.name.toUpperCase()}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#8a8a85] mt-1">
                {t.role}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center justify-between">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#5a5a55]">
            0{i + 1} &nbsp;/&nbsp; 0{total}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border border-[#1f1f1f] text-[#c6c6c0] hover:border-[#c9a961] hover:text-[#c9a961] flex items-center justify-center transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-[#1f1f1f] text-[#c6c6c0] hover:border-[#c9a961] hover:text-[#c9a961] flex items-center justify-center transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
