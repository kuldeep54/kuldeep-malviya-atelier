"use client";

import React from "react";
import { profile } from "../data/mock";

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#0c0c0c] border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20 grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Portrait */}
        <div className="md:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
              <img
                src={profile.portrait}
                alt={profile.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,10,10,0) 60%, rgba(10,10,10,0.7) 100%)",
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 border border-[#c9a961] bg-[#0a0a0a] px-5 py-3 font-mono text-[10px] tracking-[0.3em] text-[#c9a961]">
              EST. 2022 · SOFTWARE_ATELIER
            </div>
          </div>

          {/* Signature */}
          <div className="mt-12 font-display italic text-4xl text-[#c9a961]">
            {profile.name}.
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-7 md:pl-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
              — STUDIO
            </span>
            <span className="font-mono text-[10px] tracking-[0.35em] text-[#5a5a55]">
              / 03
            </span>
          </div>

          <h2 className="font-display font-light text-4xl md:text-6xl text-[#f5f5f0] leading-[1.05]">
            A small atelier for <br />
            <span className="italic text-[#c9a961]">
              uncompromising clients.
            </span>
          </h2>

          <p className="mt-10 text-lg md:text-xl text-[#c6c6c0] leading-relaxed font-light">
            {profile.aboutLong}
          </p>

          {/* Pillars */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                k: "I.",
                t: "Craft",
                d: "Obsessive attention to typography, material and detail.",
              },
              {
                k: "II.",
                t: "Restraint",
                d: "Luxury is what remains when the unnecessary is removed.",
              },
              {
                k: "III.",
                t: "Velocity",
                d: "Small team, senior hands, no middle layer.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="border-l border-[#1f1f1f] pl-5 hover:border-[#c9a961] transition-colors duration-500"
              >
                <div className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961]">
                  {p.k}
                </div>
                <div className="font-display text-2xl text-[#f5f5f0] mt-2">
                  {p.t}
                </div>
                <div className="text-sm text-[#8a8a85] mt-2 leading-relaxed">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
