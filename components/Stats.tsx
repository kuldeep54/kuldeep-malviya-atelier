"use client";

import React from "react";
import { stats, performance } from "../data/mock";

const Stats = () => {
  return (
    <section className="relative py-24 border-t border-b border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
            — TELEMETRY
          </span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#5a5a55]">
            PERFORMANCE / 01
          </span>
        </div>

        {/* Top stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="group">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-light text-6xl md:text-7xl text-[#f5f5f0] group-hover:text-[#c9a961] transition-colors duration-500">
                  {s.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#c9a961]">
                  {s.unit}
                </span>
              </div>
              <div className="mt-2 font-mono text-[11px] tracking-[0.25em] text-[#8a8a85] uppercase">
                {s.label}
              </div>
              <div className="mt-3 h-px w-10 bg-[#c9a961]" />
            </div>
          ))}
        </div>

        {/* Dashboard row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {performance.map((p, i) => (
            <div
              key={p.metric}
              className="relative border border-[#1f1f1f] bg-[#0a0a0a] p-6 hover:border-[#c9a961]/60 transition-colors duration-500"
            >
              {/* Corner index */}
              <span className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.25em] text-[#5a5a55]">
                0{i + 1}
              </span>

              {/* Tacho */}
              <div className="relative w-12 h-12 mb-5">
                <div className="absolute inset-0 rounded-full tacho-ring opacity-80" />
                <div className="absolute inset-2 rounded-full border border-[#1f1f1f] flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-[#c9a961]" />
                </div>
              </div>

              <div className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961]">
                {p.metric}
              </div>
              <div className="font-display text-2xl text-[#f5f5f0] mt-2">
                {p.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-[#5a5a55] uppercase mt-2">
                {p.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
