"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { profile } from "../data/mock";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onChange = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Uses the internal Next.js API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting brief:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#0c0c0c] border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#c9a961]">
                — COMMISSION
              </span>
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#5a5a55]">
                / 07
              </span>
            </div>

            <h2 className="font-display font-light text-5xl md:text-7xl text-[#f5f5f0] leading-[0.95]">
              Begin a <br />
              <span className="italic text-[#c9a961]">private</span> brief.
            </h2>

            <p className="mt-8 text-[#c6c6c0] leading-relaxed">
              The studio accepts a limited number of engagements each quarter.
              Share a few details — we’ll respond personally within 48 hours.
            </p>

            <div className="mt-12 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 text-[#f5f5f0] hover:text-[#c9a961] transition-colors duration-300 group"
              >
                <span className="w-10 h-10 flex items-center justify-center border border-[#1f1f1f] group-hover:border-[#c9a961]">
                  <Mail size={14} />
                </span>
                <span className="font-mono text-sm tracking-wider">
                  {profile.email}
                </span>
              </a>
              <div className="flex items-center gap-4 text-[#c6c6c0]">
                <span className="w-10 h-10 flex items-center justify-center border border-[#1f1f1f]">
                  <Phone size={14} />
                </span>
                <span className="font-mono text-sm tracking-wider">
                  {profile.phone}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#c6c6c0]">
                <span className="w-10 h-10 flex items-center justify-center border border-[#1f1f1f]">
                  <MapPin size={14} />
                </span>
                <span className="font-mono text-sm tracking-wider">
                  {profile.location}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="md:col-span-7 border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="Name"
                code="01"
                value={form.name}
                onChange={onChange("name")}
                placeholder="Your full name"
              />
              <Field
                label="Email"
                code="02"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                placeholder="you@domain.com"
              />
              <Field
                label="Company"
                code="03"
                value={form.company}
                onChange={onChange("company")}
                placeholder="Optional"
              />
              <Field
                label="Budget"
                code="04"
                value={form.budget}
                onChange={onChange("budget")}
                placeholder="€ / $"
              />
            </div>
            <div className="mt-6">
              <label className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961]">
                  05
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#8a8a85] uppercase">
                  Project brief
                </span>
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={onChange("message")}
                placeholder="Tell us about the work..."
                className="w-full bg-transparent border-b border-[#1f1f1f] focus:border-[#c9a961] outline-none py-3 text-[#f5f5f0] placeholder-[#3a3a37] transition-colors duration-300 resize-none"
              />
            </div>

            <div className="mt-10 flex items-center gap-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] px-8 py-4 bg-[#c9a961] text-[#0a0a0a] hover:bg-[#d4b571] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND BRIEF"}
                {!isSubmitting && (
                  <ArrowUpRight
                    size={16}
                    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  />
                )}
              </button>
              
              {status === "success" && (
                <span className="font-mono text-[10px] tracking-widest text-[#c9a961] animate-pulse">
                  SECURE_TRANSMISSION_COMPLETE
                </span>
              )}
              {status === "error" && (
                <span className="font-mono text-[10px] tracking-widest text-red-500">
                  TRANSMISSION_FAILED // RETRY
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, code, value, onChange, placeholder, type = "text" }: any) => (
  <div>
    <label className="flex items-center gap-3 mb-3">
      <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961]">
        {code}
      </span>
      <span className="font-mono text-[10px] tracking-[0.3em] text-[#8a8a85] uppercase">
        {label}
      </span>
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-[#1f1f1f] focus:border-[#c9a961] outline-none py-3 text-[#f5f5f0] placeholder-[#3a3a37] transition-colors duration-300"
    />
  </div>
);

export default Contact;
