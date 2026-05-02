"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, profile } from "../data/mock";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20 flex items-center justify-between py-5">
        {/* Emblem */}
        <a href="#" className="flex items-center gap-3 group">
          <span
            className="w-8 h-8 rounded-full border border-[#c9a961] flex items-center justify-center"
            aria-hidden
          >
            <span className="font-display text-[#c9a961] text-lg leading-none italic">
              a
            </span>
          </span>
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#f5f5f0] group-hover:text-[#c9a961] transition-colors">
            {profile.name.toUpperCase()}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              className="font-mono text-[11px] tracking-[0.25em] text-[#c6c6c0] hover:text-[#c9a961] transition-colors link-sweep"
            >
              <span className="text-[#5a5a55] mr-2">0{i + 1}</span>
              {n.label.toUpperCase()}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-[#c6c6c0] hover:text-[#c9a961] transition-colors"
          >
            VIEW_RESUME
            <ArrowUpRight size={14} />
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-[11px] tracking-[0.25em] px-5 py-2.5 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0a0a0a] transition-colors"
        >
          COMMISSION
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#f5f5f0] hover:text-[#c9a961] transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-md">
          <nav className="px-8 flex flex-col py-6 gap-5">
            {navigation.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[0.25em] text-[#c6c6c0] hover:text-[#c9a961]"
              >
                <span className="text-[#5a5a55] mr-3">0{i + 1}</span>
                {n.label.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 font-mono text-[11px] tracking-[0.25em] px-5 py-3 border border-[#c9a961] text-[#c9a961] text-center"
            >
              COMMISSION
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
