"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Magnetic from "../ui/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

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

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  // Header slide-down variant for page load sequence
  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-neutral-50/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-neutral-900/[0.06] dark:border-neutral-50/[0.06]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:focus-visible:ring-indigo-400 rounded px-1"
          aria-label="Bali Kumar Wad - Home"
        >
          <span>Bali Kumar Wad</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-500 group-hover:scale-150 group-hover:bg-violet-600 dark:group-hover:bg-violet-400" />
        </a>

        {/* Menu links with layout-linked sliding highlight */}
        <nav 
          className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400 relative"
          aria-label="Main Navigation"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="relative py-2 px-3 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:focus-visible:ring-indigo-400 rounded"
              onMouseEnter={() => setHoveredLink(link.name)}
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredLink === link.name && !shouldReduceMotion && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-neutral-900/[0.04] dark:bg-neutral-50/[0.04] rounded-md"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action controls (CTA & Theme Toggle) */}
        <div className="flex items-center gap-4">
          <Magnetic range={60} strength={0.35}>
            <a
              href="#contact"
              className="group relative overflow-hidden flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest rounded-full border border-neutral-900/10 dark:border-neutral-50/10 text-neutral-900 dark:text-neutral-50 hover:text-white dark:hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:focus-visible:ring-indigo-400 transition-all duration-300"
              aria-label="Start a project with Bali"
            >
              <span className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-2">
                <span>Start Project</span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500 dark:text-neutral-400 group-hover:text-white dark:group-hover:text-neutral-900" />
              </span>
            </a>
          </Magnetic>

          {/* Theme Toggle Button with Hydration Mismatch Safety */}
          <Magnetic range={40} strength={0.3}>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-neutral-900/10 dark:border-neutral-50/10 hover:border-indigo-600/40 dark:hover:border-indigo-400/40 bg-neutral-900/[0.02] dark:bg-neutral-50/[0.02] text-neutral-900 dark:text-neutral-50 hover:text-indigo-600 dark:hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:focus-visible:ring-indigo-400 transition-all duration-300 cursor-pointer"
              aria-label={mounted ? (resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme") : "Loading theme option"}
              aria-live="polite"
            >
              {mounted ? (
                resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />
              ) : (
                <div className="w-[15px] h-[15px] rounded-full border border-neutral-900/20 dark:border-neutral-50/20 opacity-50 animate-pulse" />
              )}
            </button>
          </Magnetic>
        </div>
      </div>
    </motion.header>
  );
}
