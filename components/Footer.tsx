"use client";

import React from "react";
import { profile } from "../data/mock";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialIcons: Record<string, JSX.Element> = {
    LinkedIn: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    GitHub: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    Email: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  };

  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="grid md:grid-cols-3 gap-12 items-end">
          {/* Brand */}
          <div>
            <div className="font-display italic text-3xl text-[#c9a961] mb-2">
              {profile.name}.
            </div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#3a3a37] uppercase">
              Full-Stack Developer &amp; AI Explorer
            </p>
          </div>

          {/* Social Links with icons */}
          <div className="flex gap-4 md:justify-center">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-10 h-10 flex items-center justify-center border border-[#1f1f1f] text-[#5a5a55] hover:text-[#c9a961] hover:border-[#c9a961] transition-all duration-300"
              >
                {socialIcons[s.label] ?? (
                  <span className="font-mono text-[9px] tracking-widest">{s.label[0]}</span>
                )}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#3a3a37] uppercase">
              © {year} Atelier Malviya · All Rights Reserved
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#3a3a37] uppercase mt-2">
              Designed with Precision · Greater Noida · India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
