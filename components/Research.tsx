"use client";

import React from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";

const Research = () => {
  return (
    <section id="research" className="relative py-28 md:py-36 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Label */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
                — PEER_REVIEWED_RESEARCH
              </span>
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#5a5a55]">
                / 02.B
              </span>
            </div>
            
            <h2 className="font-display font-light text-5xl md:text-6xl text-[#f5f5f0] leading-[0.95] mb-10">
              Published <br />
              <span className="italic text-[#c9a961]">specifications.</span>
            </h2>

            <div className="hidden md:block">
              <div className="w-16 h-px bg-[#c9a961]/30 mb-8" />
              <p className="font-mono text-[11px] leading-relaxed tracking-wider text-[#5a5a55] uppercase">
                Exploring the frontiers of <br />
                on-device intelligence and <br />
                real-time linguistic systems.
              </p>
            </div>
          </div>

          {/* Paper Content */}
          <div className="md:col-span-8">
            <div className="group relative border border-[#1a1a1a] bg-[#0c0c0c] p-8 md:p-12 hover:border-[#c9a961]/40 transition-all duration-700">
              {/* Paper Meta */}
              <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center border border-[#1f1f1f] text-[#c9a961] group-hover:border-[#c9a961] transition-colors">
                    <BookOpen size={18} />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961]">
                      IEEE ESIC-2026
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-[#5a5a55] mt-1 uppercase">
                      6th Int. Conference
                    </div>
                  </div>
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-[#c6c6c0] hover:text-[#c9a961] transition-colors group/link"
                >
                  IEEE_ARCHIVE_LINK
                  <ArrowUpRight size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl md:text-5xl text-[#f5f5f0] leading-tight mb-8">
                "A Lightweight Real-Time Multilingual Video Communication System using On-Device Speech Translation"
              </h3>

              {/* Technical Abstract */}
              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-[#5a5a55] uppercase mb-4">
                    // Abstract
                  </div>
                  <p className="text-[#c6c6c0] text-sm leading-relaxed font-light">
                    Designed and evaluated an on-device speech translation pipeline using Whisper ASR and Google Translate API, enabling real-time multilingual video communication with low latency across 10+ language pairs.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-[#5a5a55] uppercase mb-4">
                    // Methodology
                  </div>
                  <p className="text-[#c6c6c0] text-sm leading-relaxed font-light">
                    Published and presented at the 6th International Conference on Emerging Systems and Intelligent Computing (ESIC-2026) in collaboration with IEEE; co-authored with a peer researcher under faculty mentorship.
                  </p>
                </div>
              </div>

              {/* Tech Stack used in Research */}
              <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-wrap gap-x-8 gap-y-4">
                {["Whisper ASR", "Google Translate API", "PyTorch", "RTC Systems", "Latency Analysis"].map(tech => (
                  <span key={tech} className="font-mono text-[9px] tracking-[0.3em] text-[#c9a961]/60 uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
