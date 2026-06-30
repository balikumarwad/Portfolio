"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import Magnetic from "../ui/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-foreground/[0.06]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          aria-label="Bali Kumar Wad - Home"
        >
          <span>Bali K. Wad</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent transition-all duration-500 group-hover:scale-150 group-hover:bg-accent-secondary" />
        </a>

        {/* Menu links */}
        <nav 
          className="hidden md:flex items-center gap-10 text-xs font-mono tracking-wider uppercase text-muted-text"
          aria-label="Main Navigation"
        >
          <a 
            href="#work" 
            className="relative py-1 hover:text-foreground transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          >
            <span>Work</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#process" 
            className="relative py-1 hover:text-foreground transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          >
            <span>Process</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#contact" 
            className="relative py-1 hover:text-foreground transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Action controls (CTA & Theme Toggle) */}
        <div className="flex items-center gap-4">
          <Magnetic range={60} strength={0.35}>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest rounded-full border border-foreground/10 hover:border-accent/40 bg-foreground/[0.02] text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-300"
              aria-label="Start a project with Bali"
            >
              <span>Start Project</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-muted-text group-hover:text-accent" />
            </a>
          </Magnetic>

          {/* Theme Toggle Button */}
          {mounted && (
            <Magnetic range={40} strength={0.3}>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-foreground/10 hover:border-accent/40 bg-foreground/[0.02] text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-300 cursor-pointer"
                aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                aria-live="polite"
              >
                {resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </Magnetic>
          )}
        </div>
      </div>
    </header>
  );
}
