"use client";

import React from "react";
import Magnetic from "../ui/Magnetic";
import { Github, Linkedin, FileText, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 md:py-32 bg-dark-bg border-t border-white/[0.04] px-6 md:px-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between">
        
        {/* Large Call To Action */}
        <div className="space-y-6 max-w-4xl">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent font-semibold">
            03 / CONNECT
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tighter text-white leading-tight">
            LET'S SHAPE THE<br />
            NEXT DIGITAL FRONTIER.
          </h2>
          
          <div className="pt-6">
            <Magnetic range={80} strength={0.25}>
              <a
                href="mailto:hello@baliwad.dev"
                className="group relative inline-block text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white hover:text-accent transition-colors duration-300"
              >
                <span>hello@baliwad.dev</span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Footer Sub-row: Social links & copyright */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-t border-white/[0.06] pt-12 mt-20 gap-8">
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Magnetic range={40} strength={0.35}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-text hover:text-white transition-colors duration-300"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </Magnetic>
            
            <Magnetic range={40} strength={0.35}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-text hover:text-white transition-colors duration-300"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </Magnetic>

            <Magnetic range={40} strength={0.35}>
              <a
                href="https://read.cv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-text hover:text-white transition-colors duration-300"
              >
                <FileText size={14} />
                <span>Read.cv</span>
              </a>
            </Magnetic>

            <Magnetic range={40} strength={0.35}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-text hover:text-white transition-colors duration-300"
              >
                <Twitter size={14} />
                <span>Twitter</span>
              </a>
            </Magnetic>
          </div>

          {/* Copyright details */}
          <div className="text-[10px] font-mono text-muted-text md:text-right space-y-1">
            <div>&copy; {new Date().getFullYear()} Bali Kumar Wad &bull; Crafted with Next.js & Tailwind</div>
            <div className="opacity-40">All rights reserved &bull; 27.7172&deg; N, 85.3240&deg; E</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
