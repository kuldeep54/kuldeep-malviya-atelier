"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Marquee from "../components/Marquee";
import Work from "../components/Work";
import Research from "../components/Research";
import About from "../components/About";
import Credentials from "../components/Credentials";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <main className="relative bg-[#0a0a0a] text-[#f5f5f0] min-h-screen selection:bg-[#c9a961] selection:text-[#0a0a0a]">
      <Header />
      <Hero />
      <Stats />
      <Marquee />
      <Work />
      <Research />
      <About />
      <Credentials />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
