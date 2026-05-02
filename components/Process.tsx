"use client";

import React from "react";
import { process } from "../data/mock";

const Process = () => {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-[#0c0c0c] border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
            — PROCESS
          </span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#5a5a55]">
            FOUR STAGES / 05
          </span>
        </div>

        <div className="grid md:grid-cols-4 gap-0 border-t border-l border-[#1a1a1a]">
          {process.map((p, i) => (
            <div
              key={p.step}
              className="relative border-r border-b border-[#1a1a1a] p-8 md:p-10 group hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              {/* Gear-like number */}
              <div className="relative mb-10">
                <span className="font-display italic font-light text-7xl md:text-8xl text-[#1f1f1f] group-hover:text-[#c9a961]/20 transition-colors duration-500">
                  {p.step}
                </span>
                <div className="absolute top-3 left-0 font-mono text-[10px] tracking-[0.3em] text-[#c9a961]">
                  STAGE
                </div>
              </div>

              <h3 className="font-display text-3xl text-[#f5f5f0] group-hover:text-[#c9a961] transition-colors duration-500">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-[#8a8a85] leading-relaxed">
                {p.desc}
              </p>

              {/* Progress dot indicator */}
              <div className="absolute bottom-4 right-4 flex gap-1">
                {process.map((_, j) => (
                  <span
                    key={j}
                    className={`w-1.5 h-1.5 rounded-full ${
                      j <= i ? "bg-[#c9a961]" : "bg-[#1f1f1f]"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
