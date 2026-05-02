"use client";

import React from "react";

const Credentials = () => {
  const skills = {
    frontend: ["React 19", "Next.js", "Tailwind CSS", "Three.js", "JavaScript"],
    backend: ["Java", "Spring Boot", "Node.js", "Express.js", "Python"],
    database: ["MongoDB", "SQL", "MongoDB Atlas"],
    tools: ["GitHub", "Git", "Postman", "VS Code", "AWS AI-ML"]
  };

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Galgotias University",
      duration: "2022 - 2026",
      status: "Pursuing · High Performance",
    },
    {
      degree: "Senior Secondary (Class XII) - Science",
      institution: "ST. Joseph's School (ICSE)",
      duration: "2021 - 2022",
      status: "Completed · Honors",
    }
  ];

  return (
    <section id="credentials" className="relative py-28 md:py-36 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="grid md:grid-cols-12 gap-16">
          
          {/* Technical Blueprint (Skills) */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
                — STACK_SPECIFICATIONS
              </span>
              <div className="flex-1 h-px bg-[#1f1f1f]" />
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-mono text-[10px] tracking-[0.3em] text-[#5a5a55] uppercase mb-5">
                    {category} // 01
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {items.map((skill) => (
                      <span key={skill} className="font-display text-xl text-[#f5f5f0] hover:text-[#c9a961] transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Foundation (Education) */}
          <div className="md:col-span-5 border-l border-[#1a1a1a] md:pl-16">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
                — CHASSIS_ORIGIN
              </span>
            </div>

            <div className="space-y-12">
              {education.map((edu, i) => (
                <div key={i} className="group">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961] mb-3">
                    {edu.duration}
                  </div>
                  <h3 className="font-display text-2xl text-[#f5f5f0] group-hover:text-[#c9a961] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-[#8a8a85] mt-2 uppercase">
                    {edu.institution}
                  </p>
                  <div className="mt-4 inline-block px-3 py-1 border border-[#1f1f1f] font-mono text-[9px] tracking-widest text-[#5a5a55]">
                    {edu.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Credentials;
