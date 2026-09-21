import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import SkillsMarquee from './components/SkillsMarquee';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#EDEDED] selection:bg-[#39FF6A] selection:text-[#0A0A0A]">
      {/* Glitch-Tech Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Overall Cyber Page Glitch Atmosphere: Scanline Sweep & CRT Raster */}
      <div className="cyber-scanline-beam" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-[9990] scanlines opacity-[0.08]" aria-hidden="true" />

      {/* Main Single-Page Experience on top of sticky footer */}
      <CustomCursor />
      <Nav />
      <main className="relative z-10 bg-[#0A0A0A] shadow-[0_50px_100px_rgba(0,0,0,0.95)]">
        <Hero />
        <SkillsMarquee />
        <ProjectGallery />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
