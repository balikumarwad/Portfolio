"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Magnetic from "../ui/Magnetic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement
  const springX = useSpring(mouseX, { stiffness: 45, damping: 22, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 22, mass: 0.1 });

  const springXSlow = useSpring(mouseX, { stiffness: 25, damping: 25, mass: 0.1 });
  const springYSlow = useSpring(mouseY, { stiffness: 25, damping: 25, mass: 0.1 });

  // Transforms to set radial gradients directly
  const primaryGlow = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(550px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.09), transparent 80%)`
  );

  const secondaryGlow = useTransform(
    [springXSlow, springYSlow],
    ([x, y]) => `radial-gradient(850px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.05), transparent 75%)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-dark-bg grid-bg pt-32 pb-12 px-6 md:px-12 select-none"
    >
      {/* Background Interactive Glow Blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: primaryGlow }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: secondaryGlow }}
      />

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-8"
        >
          {/* Subtitle / Status tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent font-semibold">
              Available for Freelance & Selected Contracts
            </span>
          </motion.div>

          {/* Heading */}
          <div className="relative">
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-display font-extrabold tracking-tighter leading-[0.85] text-white"
            >
              ENGINEERING INTENT.
            </motion.h1>
            
            <motion.div 
              variants={itemVariants} 
              className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium tracking-tight text-white/90">
                Bali Kumar Wad &mdash; Developer
              </h2>
              
              <p className="max-w-xl text-sm md:text-base text-neutral-400 font-normal leading-relaxed md:text-right font-sans">
                I am a Computer Engineering student and full-stack developer based in Nepal. I bridge the gap between rigorous technical architecture and minimalist design to build scalable applications and digital startups.
              </p>
            </motion.div>
          </div>

          {/* Structural Line Divider */}
          <motion.div 
            variants={lineVariants} 
            className="h-[1px] bg-white/[0.08] w-full"
          />

          {/* Core Skills monospaced tags */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-mono tracking-wider uppercase text-muted-text"
          >
            <span className="hover:text-accent transition-colors duration-300"># Next.js (App Router)</span>
            <span className="hover:text-accent transition-colors duration-300"># TypeScript</span>
            <span className="hover:text-accent transition-colors duration-300"># Tailwind CSS</span>
            <span className="hover:text-accent transition-colors duration-300"># Framer Motion</span>
            <span className="hover:text-accent transition-colors duration-300"># Design Systems</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Footer: Location & Scroll down indicator */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex items-center justify-between border-t border-white/[0.04] pt-8 mt-12">
        <div className="text-[10px] font-mono tracking-widest text-muted-text uppercase">
          Based in Nepal &bull; Operating globally
        </div>

        <Magnetic range={50} strength={0.35}>
          <a
            href="#work"
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-accent hover:text-accent bg-white/[0.02] text-white transition-all duration-300"
            aria-label="Scroll to Featured Work"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </Magnetic>
      </div>
    </section>
  );
}
