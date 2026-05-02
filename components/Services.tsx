"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../data/mock";

const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
                — CAPABILITIES
              </span>
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#5a5a55]">
                / 04
              </span>
            </div>
            <h2 className="font-display font-light text-5xl md:text-7xl text-[#f5f5f0] leading-[0.95]">
              Four <span className="italic text-[#c9a961]">disciplines.</span>
              <br />
              One standard.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border-t border-l border-[#1a1a1a]">
          {services.map((s) => (
            <a
              key={s.code}
              href="#contact"
              className="group relative p-8 md:p-12 border-r border-b border-[#1a1a1a] hover:bg-[#0e0e0e] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961]">
                  {s.code}
                </span>
                <ArrowRight
                  size={20}
                  className="text-[#3a3a37] group-hover:text-[#c9a961] group-hover:translate-x-1 transition-all duration-500"
                />
              </div>

              <h3 className="font-display font-light text-4xl md:text-5xl text-[#f5f5f0] group-hover:text-[#c9a961] transition-colors duration-500">
                {s.title}
              </h3>
              <p className="mt-5 text-[#8a8a85] leading-relaxed max-w-md">
                {s.desc}
              </p>

              {/* Decorative gold line that sweeps */}
              <div className="mt-10 h-px w-0 group-hover:w-full bg-[#c9a961] transition-all duration-700" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
