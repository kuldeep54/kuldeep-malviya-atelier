"use client";

import React from "react";
import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "../data/mock";

const KineticText = ({ text }: { text: string }) => (
  <span>
    {text.split("").map((ch, i) => (
      <span key={i} className="kinetic-letter">
        {ch === " " ? "\u00A0" : ch}
      </span>
    ))}
  </span>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen carbon-texture grain overflow-hidden pt-28 pb-16">
      {/* Ambient gold glow */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,169,97,0.18), transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,169,97,0.10), transparent 70%)",
          filter: "blur(30px)",
        }}
        aria-hidden
      />

      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20 relative z-10">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-[#8a8a85]">
            <span className="w-2 h-2 rounded-full bg-[#c9a961] animate-pulse" />
            AVAILABLE · Q3 2025
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-[#8a8a85]">
            <MapPin size={12} />
            {profile.location.toUpperCase()}
          </div>
        </div>

        {/* Main display */}
        <div className="fade-up">
          <p className="font-mono text-[11px] tracking-[0.35em] text-[#c9a961] mb-8">
            — CREATIVE DIRECTOR / DESIGN ATELIER
          </p>

          <h1 className="font-display font-light text-[#f5f5f0] leading-[0.88] tracking-tight text-[14vw] md:text-[11vw] lg:text-[9.5rem] xl:text-[11rem]">
            <KineticText text="Designed" />
            <br />
            <span className="italic text-[#c9a961]">
              <KineticText text="with Precision." />
            </span>
          </h1>

          <h2 className="font-display font-light italic text-[#8a8a85] text-[6vw] md:text-[4vw] lg:text-5xl xl:text-6xl mt-4">
            Engineered for emotion.
          </h2>
        </div>

        {/* Intro + CTA */}
        <div className="mt-20 grid md:grid-cols-12 gap-10 items-end">
          <p className="md:col-span-6 md:col-start-2 text-[#c6c6c0] text-lg md:text-xl leading-relaxed font-light">
            {profile.intro}
          </p>

          <div className="md:col-span-4 flex flex-col gap-4 items-start md:items-end w-full">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] px-7 py-4 bg-[#c9a961] text-[#0a0a0a] hover:bg-[#d4b571] transition-all w-full md:w-auto justify-center"
            >
              VIEW SELECTED WORK
              <ArrowDownRight
                size={16}
                className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-[0.25em] text-[#c6c6c0] hover:text-[#c9a961] transition-colors link-sweep"
            >
              OR COMMISSION A PROJECT →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom hairline with coords */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20 mt-20 md:mt-28">
        <div className="hairline opacity-60" />
        <div className="flex items-center justify-between mt-4 font-mono text-[10px] tracking-[0.3em] text-[#5a5a55]">
          <span>LAT 28.4744° N</span>
          <span>CHASSIS N° 04 / 04 YRS</span>
          <span>LON 77.5040° E</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
