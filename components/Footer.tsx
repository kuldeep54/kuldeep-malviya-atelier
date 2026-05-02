"use client";

import React from "react";
import { profile } from "../data/mock";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="font-display italic text-3xl text-[#c9a961] mb-6">
              {profile.name}.
            </div>
            <div className="flex gap-8">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-mono text-[10px] tracking-[0.3em] text-[#5a5a55] hover:text-[#c9a961] transition-colors"
                >
                  {s.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#3a3a37] uppercase">
              © 2025 ATELIER MALVIYA · ALL RIGHTS RESERVED
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#3a3a37] uppercase mt-2">
              DESIGNED WITH PRECISION · GREATER NOIDA · INDIA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
