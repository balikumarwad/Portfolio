"use client";

import React, { useState, useEffect } from "react";
import Magnetic from "../ui/Magnetic";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-dark-bg/80 backdrop-blur-xl border-b border-white/[0.06]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white">
          <span>Bali K. Wad</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent transition-all duration-500 group-hover:scale-150 group-hover:bg-accent-secondary" />
        </a>

        {/* Menu links */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-mono tracking-wider uppercase text-muted-text">
          <a 
            href="#work" 
            className="relative py-1 hover:text-white transition-colors duration-300 group"
          >
            <span>Work</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#process" 
            className="relative py-1 hover:text-white transition-colors duration-300 group"
          >
            <span>Process</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#contact" 
            className="relative py-1 hover:text-white transition-colors duration-300 group"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Call to action */}
        <Magnetic range={60} strength={0.35}>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest rounded-full border border-white/10 hover:border-accent/40 bg-white/[0.02] text-white hover:text-accent transition-all duration-300"
          >
            <span>Start Project</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-muted-text group-hover:text-accent" />
          </a>
        </Magnetic>
      </div>
    </header>
  );
}
