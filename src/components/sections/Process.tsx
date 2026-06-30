"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bridge: string;
  deliverables: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "DISCOVER & ART DIRECTION",
    subtitle: "Aligning branding, structural grid constraints, and visual tone.",
    description: "Before drawing a single layout, I map out typography scales, content hierarchies, and load performance budgets. We align on visual moodboards, typographic layouts, and competitive strategies.",
    bridge: "Design constraints are immediately translated into CSS variables, aligning the codebase's variables with design specifications from day one.",
    deliverables: ["Visual Art Direction", "Typography Pairings", "Performance Budgets"],
  },
  {
    number: "02",
    title: "EDITORIAL DESIGN & MOTION",
    subtitle: "High-fidelity grid mockups with integrated animation prototypes.",
    description: "Structuring layouts with confident negative space and strong typography. I define micro-interactions, custom cursor triggers, and scroll-linked spatial movements, preparing them for programmatic code execution.",
    bridge: "Framer Motion coordinates, easing variables, and timing profiles are structured alongside UI layouts to eliminate design-to-development translation loss.",
    deliverables: ["Figma Design Assets", "Interactive Prototypes", "Interaction Specs"],
  },
  {
    number: "03",
    title: "RIGOROUS ENGINEERING",
    subtitle: "Clean, type-safe Next.js component development.",
    description: "Building layouts using semantic HTML, Tailwind CSS, and strict TypeScript. I write clean, atomic React components, structure performant layouts, and program complex animations with Framer Motion.",
    bridge: "All component layouts and interface properties are strictly typed, turning visual design constraints into compile-time validations.",
    deliverables: ["Next.js App Router Structure", "Strict TypeScript UI Kit", "Performant Animation Code"],
  },
  {
    number: "04",
    title: "PERFORMANCE AUDIT & LAUNCH",
    subtitle: "Maximizing SEO ranking, accessibility standards, and load speed.",
    description: "Auditing production bundles to ensure perfect scores. I verify responsiveness, configure structured metadata, optimize static pages, and deploy to ultra-fast global networks.",
    bridge: "Automated auditing environments check core web vitals and semantic correctness before final deployment.",
    deliverables: ["Optimized Build Bundle", "Structured Schema Metadata", "Edge Deployment Setup"],
  },
];

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-24 md:py-36 bg-dark-bg border-t border-white/[0.04] px-6 md:px-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-6">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent font-semibold">
              02 / METHODOLOGY
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              HOW DESIGN FUSES WITH CODE.
            </h2>
            <p className="text-sm md:text-base text-muted-text font-normal leading-relaxed max-w-sm">
              I operate as both designer and engineer, bridging the gap between artistic expression and technical performance. Each phase ensures visual intent translates directly to production code.
            </p>

            <div className="hidden lg:block pt-8 text-[10px] font-mono text-white/30">
              [ HOVER OVER ANY PHASE TO EXPAND THE PIPELINE ]
            </div>
          </div>

          {/* Right Column: Expanding Steps */}
          <div className="lg:col-span-7 divide-y divide-white/[0.06] border-t border-b border-white/[0.06]">
            {steps.map((step, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={step.number}
                  className="py-8 md:py-10 transition-all duration-300 relative group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Step Title Header */}
                  <div className="flex items-start justify-between gap-6 relative z-10">
                    <div className="flex gap-6 md:gap-10 items-start">
                      <span className="text-xs md:text-sm font-mono text-accent font-semibold pt-1">
                        {step.number}
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-display font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-text max-w-md font-light">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Interactive indicator plus sign */}
                    <div className="relative w-4 h-4 mt-2 hidden sm:block">
                      <span className="absolute inset-y-0 left-1.5 w-0.5 bg-white/40 group-hover:bg-accent transition-all duration-300 group-hover:rotate-90" />
                      <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-white/40 group-hover:bg-accent transition-all duration-300 ${isHovered ? "rotate-90 scale-0" : ""}`} />
                    </div>
                  </div>

                  {/* Expandable Section */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      isHovered
                        ? { height: "auto", opacity: 1, marginTop: 24 }
                        : { height: 0, opacity: 0, marginTop: 0 }
                    }
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-12 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.04] text-xs text-muted-text leading-relaxed">
                      
                      {/* Left: Detail Description */}
                      <div className="space-y-4">
                        <p>{step.description}</p>
                        <div className="flex flex-col gap-1.5 pt-2">
                          <span className="text-[9px] font-mono tracking-widest uppercase text-white/50">Deliverables</span>
                          <div className="flex flex-wrap gap-1.5">
                            {step.deliverables.map((item) => (
                              <span key={item} className="px-2 py-0.5 rounded border border-white/[0.04] bg-white/[0.01] text-[8px] font-mono">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Design & Dev Bridge */}
                      <div className="p-4 rounded-lg bg-white/[0.01] border border-white/[0.04] flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="text-[9px] font-mono tracking-widest uppercase text-accent font-semibold">
                            DESIGN-CODE BRIDGE
                          </div>
                          <p className="text-[11px] text-white/70 font-light">
                            {step.bridge}
                          </p>
                        </div>
                        <span className="text-[8px] font-mono text-white/20 self-end mt-4">
                          [ SYNCED PIPELINE ]
                        </span>
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
