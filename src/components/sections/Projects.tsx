"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../ui/Magnetic";

interface Project {
  id: string;
  title: string;
  outcome: string;
  tags: string[];
  role: string;
  link: string;
  previewType: "analytics" | "typography" | "studio";
}

const projects: Project[] = [
  {
    id: "01",
    title: "Nagarik Awaz",
    outcome: "A civic engagement platform allowing citizens to report local issues directly to ward offices. Features a secure, citizen-centric user login flow optimized for public accessibility.",
    tags: ["Next.js", "FastAPI", "Tailwind CSS"],
    role: "Full-stack Developer & UX Architect",
    link: "#",
    previewType: "analytics",
  },
  {
    id: "02",
    title: "Mero-Bus",
    outcome: "A crowdsourced transit tracker for private buses in Kathmandu. Concept and implementation strategy developed and executed during a 48-hour hackathon.",
    tags: ["React", "Python", "System Design"],
    role: "Lead Systems Engineer",
    link: "#",
    previewType: "typography",
  },
  {
    id: "03",
    title: "PixelDev Nepal",
    outcome: "An AI-augmented web and brand studio aimed at elevating local SMEs with high-performance, minimalist digital experiences.",
    tags: ["Next.js", "AI Agents", "UI/UX"],
    role: "Founder & Technical Lead",
    link: "#",
    previewType: "studio",
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="relative py-24 md:py-36 bg-background px-6 md:px-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-foreground/[0.06] pb-12 mb-16 md:mb-24 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent font-semibold">
              01 / SELECTED WORK
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-foreground">
              FEATURED CASE STUDIES
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-text font-normal leading-relaxed">
            A small collection of digital experiences combining high-fidelity aesthetics with performant code.
          </p>
        </div>

        {/* Projects Layout (Staggered alternating, collapsing to single column on mobile) */}
        <div className="space-y-24 md:space-y-40">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={shouldReduceMotion ? { duration: 0.1 } : { type: "spring", stiffness: 60, damping: 14 }}
                className={`flex flex-col gap-8 md:gap-16 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center`}
              >
                {/* 1. Project Information */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
                  {/* Number & Role */}
                  <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-muted-text uppercase">
                    <span className="text-accent font-semibold">{project.id}</span>
                    <span>&mdash;</span>
                    <span>{project.role}</span>
                  </div>

                  {/* Title & Outcome */}
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-300">
                      <a 
                        href={project.link}
                        className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        aria-label={`View details for ${project.title}`}
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-mono tracking-wider text-muted-text rounded-full border border-card-border bg-card-bg/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link CTA */}
                  <div className="pt-4">
                    <Magnetic range={40} strength={0.3}>
                      <a
                        href={project.link}
                        className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded px-1 transition-all duration-300"
                        aria-label={`Case study details for ${project.title}`}
                      >
                        <span>View Project Details</span>
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-muted-text group-hover:text-accent"
                        />
                      </a>
                    </Magnetic>
                  </div>
                </div>

                {/* 2. Custom Rendered Visual Mockup (Keyboard focusable, theme-responsive card) */}
                <motion.a 
                  href={project.link}
                  whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.005 }}
                  whileFocus={shouldReduceMotion ? {} : { y: -8, scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="w-full lg:w-7/12 aspect-[4/3] rounded-2xl border border-card-border bg-card-bg/40 backdrop-blur-sm overflow-hidden relative group cursor-pointer shadow-2xl hover:border-accent/40 focus:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-500 block"
                  aria-label={`Interactive case study preview for ${project.title}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10 opacity-60 group-hover:opacity-20 transition-all duration-500" />
                  
                  {/* Inner Mockup Container */}
                  <div className="w-full h-full p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
                    {project.previewType === "analytics" && (
                      <div className="w-full h-full rounded-lg border border-white/[0.04] bg-neutral-950 overflow-hidden shadow-inner flex flex-col relative">
                        {/* Window Bar */}
                        <div className="h-8 border-b border-white/[0.04] px-4 flex items-center gap-1.5 shrink-0 bg-white/[0.01]">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                          <div className="text-[9px] font-mono text-muted-text ml-auto">nagarik_awaz_report.ts</div>
                        </div>
                        {/* Workspace */}
                        <div className="flex-grow p-4 grid grid-cols-3 gap-3 relative grid-bg">
                          {/* Glow Blob */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
                          {/* Card A */}
                          <div className="col-span-2 rounded-md border border-white/[0.04] bg-white/[0.02] p-3 flex flex-col justify-between h-[120px] z-10">
                            <span className="text-[8px] font-mono text-muted-text uppercase tracking-widest">Active Civic Reports</span>
                            <span className="text-xl font-display font-semibold text-white tracking-tight">1,248 filed</span>
                            <div className="h-10 w-full overflow-hidden mt-2 relative">
                              <svg viewBox="0 0 100 20" className="w-full h-full stroke-accent stroke-[1.5] fill-none">
                                <path d="M0,15 Q15,5 30,12 T60,2 T80,14 T100,6" />
                                <path d="M0,15 Q15,5 30,12 T60,2 T80,14 T100,6 L100,20 L0,20 Z" className="fill-accent/5 stroke-none" />
                              </svg>
                            </div>
                          </div>
                          {/* Card B */}
                          <div className="col-span-1 rounded-md border border-white/[0.04] bg-white/[0.02] p-3 flex flex-col justify-between h-[120px] z-10">
                            <span className="text-[8px] font-mono text-muted-text uppercase tracking-widest">Resolution Rate</span>
                            <div className="flex items-center justify-center flex-grow py-1">
                              <svg viewBox="0 0 36 36" className="w-12 h-12 stroke-[2.5]">
                                <path className="stroke-white/[0.05] fill-none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="stroke-accent-secondary fill-none" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-mono text-white text-center">88% RESOLVED</span>
                          </div>
                          {/* Card C */}
                          <div className="col-span-3 rounded-md border border-white/[0.04] bg-white/[0.02] p-3 flex items-center justify-between z-10">
                            <div className="flex gap-2 items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                              <span className="text-[8px] font-mono text-muted-text uppercase">Ward Office Synced</span>
                            </div>
                            <span className="text-[8px] font-mono text-accent uppercase tracking-widest">Real-time reports</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.previewType === "typography" && (
                      <div className="w-full h-full rounded-lg border border-white/[0.04] bg-neutral-950 overflow-hidden shadow-inner flex flex-col relative grid-bg">
                        <div className="absolute inset-0 bg-radial from-accent-secondary/10 to-transparent blur-2xl pointer-events-none" />
                        <div className="flex-grow flex items-center justify-center p-6 relative">
                          {/* Graphic elements */}
                          <div className="absolute inset-x-8 top-8 bottom-8 border border-white/[0.03] flex items-center justify-center">
                            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.03]" />
                            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.03]" />
                          </div>

                          {/* Massive Letter */}
                          <span className="text-[12rem] md:text-[15rem] font-display font-extrabold text-white/[0.02] select-none absolute">
                            M
                          </span>

                          {/* Kinetic overlapping typography lines */}
                          <div className="text-center relative z-10 space-y-2">
                            <div className="text-3xl md:text-4xl font-display font-bold text-white tracking-widest leading-none">
                              MERO BUS
                            </div>
                            <div className="text-[9px] font-mono text-accent-secondary tracking-[0.3em] uppercase">
                              [ KTM TRANSIT LOG &bull; GPS LIVE ]
                            </div>
                            <div className="text-white/40 text-[10px] max-w-[200px] mx-auto leading-relaxed pt-2">
                              Transit matrix tracker & routes visualization dashboard.
                            </div>
                          </div>

                          {/* monospaced diagnostics */}
                          <div className="absolute bottom-4 left-4 text-[7px] font-mono text-white/30 space-y-0.5">
                            <div>PING: 12ms / API_SYNC: 99.8%</div>
                            <div>CROWDSOURCED_PINGS: 42k/hr</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.previewType === "studio" && (
                      <div className="w-full h-full rounded-lg border border-white/[0.04] bg-neutral-950 overflow-hidden shadow-inner flex flex-col relative">
                        <div className="flex-grow p-6 flex flex-col justify-between relative">
                          {/* Accent Glow */}
                          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-secondary/5 blur-3xl pointer-events-none" />
                          
                          {/* Grid Layout Representing Editorial Studio */}
                          <div className="grid grid-cols-5 gap-4 items-start">
                            {/* Left layout details */}
                            <div className="col-span-2 border-r border-white/[0.05] pr-4 h-full flex flex-col justify-between">
                              <div className="space-y-1">
                                <div className="text-[8px] font-mono text-white/40 uppercase">PixelDev Nepal</div>
                                <div className="text-[11px] font-display font-medium text-white">SME PLATFORM</div>
                              </div>
                              <div className="pt-8 text-[7px] font-mono text-muted-text leading-normal">
                                Lalitpur, NP &mdash;<br/>Established 2026
                              </div>
                            </div>

                            {/* Right mock photographic frame */}
                            <div className="col-span-3 aspect-[4/3] rounded border border-white/[0.06] bg-white/[0.01] p-1.5 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                              <div className="w-full h-full bg-gradient-to-tr from-neutral-900 to-neutral-800 flex items-center justify-center relative">
                                {/* Asymmetric composition lines */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-[85%] h-[85%] border border-white/5 flex items-center justify-center">
                                    <span className="text-[10px] font-mono text-white/10">03_AI_SYSTEMS</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom row status */}
                          <div className="flex justify-between items-end border-t border-white/[0.04] pt-4 mt-6">
                            <span className="text-[8px] font-mono text-muted-text">STUDIO DEPLOYMENTS</span>
                            <span className="text-[8px] font-mono text-white/70">ACTIVE BRANDS: 12</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
