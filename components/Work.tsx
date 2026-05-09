"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/mock";

const Work = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-28 md:py-36 bg-[#0a0a0a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        {/* Section head */}
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
                — SELECTED WORK
              </span>
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#5a5a55]">
                / 02
              </span>
            </div>
            <h2 className="font-display font-light text-5xl md:text-7xl text-[#f5f5f0] leading-[0.95]">
              Commissions &amp; <br />
              <span className="italic text-[#c9a961]">collaborations.</span>
            </h2>
          </div>
          <a
            href="#work"
            className="hidden md:inline-block font-mono text-[11px] tracking-[0.25em] text-[#c6c6c0] hover:text-[#c9a961] link-sweep"
          >
            FULL ARCHIVE →
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-28">
          {projects.map((p, idx) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className={`project-card group block ${
                idx % 2 === 1 ? "md:mt-28" : ""
              }`}
            >
              <div className="relative overflow-hidden bg-[#0c0c0c] aspect-[4/5] border border-[#1a1a1a] group-hover:border-[#c9a961]/40 transition-colors duration-500">
                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <img
                  src={p.cover}
                  alt={p.title}
                  className="project-img w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
                  loading="lazy"
                />
                
                {/* Architectural Frame Overlay */}
                <div className="absolute inset-0 z-10 border-[12px] border-[#0a0a0a] pointer-events-none" />
                
                {/* Index badge */}
                <div className="absolute top-8 left-8 z-30 font-mono text-[9px] tracking-[0.3em] text-[#c9a961] bg-[#0a0a0a]/80 backdrop-blur-md px-3 py-1.5 border border-[#c9a961]/20">
                  REF_N° 0{idx + 1}
                </div>
                
                {/* Hover reveal */}
                <div
                  className={`absolute inset-x-8 bottom-8 z-30 p-5 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#1a1a1a] transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100`}
                >
                  <p className="text-[#8a8a85] text-[11px] leading-relaxed tracking-wider font-mono uppercase">
                    {p.summary}
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961] mb-2">
                    {p.category.toUpperCase()} · {p.year}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-[#f5f5f0] group-hover:text-[#c9a961] transition-colors duration-500">
                    {p.title}
                  </h3>
                  <div className="font-mono text-[11px] tracking-[0.2em] text-[#5a5a55] mt-2">
                    FOR {p.client.toUpperCase()}
                  </div>
                </div>
                <ArrowUpRight
                  size={28}
                  className="text-[#5a5a55] group-hover:text-[#c9a961] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
