import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { playCyberHover, playCyberClick, playCyberChirp } from '../utils/audio';
import GlitchText from './GlitchText';

// Custom SVG Icons with clean outline vs green filled crossfade
const techIcons = [
  {
    name: 'React',
    svgOutline: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    svgFilled: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#39FF6A" stroke="#39FF6A" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" fill="none" />
        <circle cx="12" cy="12" r="2.5" fill="#39FF6A" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    svgOutline: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8v8l7-8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    svgFilled: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#39FF6A" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" fill="rgba(57,255,106,0.1)" />
        <path d="M9 7.5v9l8-9.5v9.5" stroke="#39FF6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: 'Python',
    svgOutline: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C7 2 7 4 7 4v3h5v1H5s-3 0-3 5 2 5 2 5h2v-2.5c0-2 1.5-2.5 2.5-2.5h5s2.5-.5 2.5-2.5V4s0-2-7-2zm-2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        <path d="M12 22c5 0 5-2 5-2v-3h-5v-1h7s3 0 3-5-2-5-2-5h-2v2.5c0 2-1.5 2.5-2.5 2.5h-5s-2.5.5-2.5 2.5V20s0 2 7 2zm2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    ),
    svgFilled: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#39FF6A" stroke="#39FF6A" strokeWidth="1">
        <path d="M12 2C7 2 7 4 7 4v3h5v1H5s-3 0-3 5 2 5 2 5h2v-2.5c0-2 1.5-2.5 2.5-2.5h5s2.5-.5 2.5-2.5V4s0-2-7-2zm-2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        <path d="M12 22c5 0 5-2 5-2v-3h-5v-1h7s3 0 3-5-2-5-2-5h-2v2.5c0 2-1.5 2.5-2.5 2.5h-5s-2.5.5-2.5 2.5V20s0 2 7 2zm2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    )
  },
  {
    name: 'Tailwind',
    svgOutline: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6c-3.5 0-5.5 2-6 5 1.5-1.5 3-2 4.5-1.5 1 0.4 1.7 1.2 2.5 2 1.3 1.3 2.8 2.8 5 2.8 3.5 0 5.5-2 6-5-1.5 1.5-3 2-4.5 1.5-1-0.4-1.7-1.2-2.5-2C15.7 7.5 14.2 6 12 6z" />
      </svg>
    ),
    svgFilled: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#39FF6A" stroke="#39FF6A" strokeWidth="1.5">
        <path d="M12 6c-3.5 0-5.5 2-6 5 1.5-1.5 3-2 4.5-1.5 1 0.4 1.7 1.2 2.5 2 1.3 1.3 2.8 2.8 5 2.8 3.5 0 5.5-2 6-5-1.5 1.5-3 2-4.5 1.5-1-0.4-1.7-1.2-2.5-2C15.7 7.5 14.2 6 12 6z" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    svgOutline: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z" />
        <path d="M12 2v19.6" />
        <path d="M12 11.8l8.5-4.9" />
        <path d="M12 11.8L3.5 6.9" />
      </svg>
    ),
    svgFilled: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="rgba(57,255,106,0.2)" stroke="#39FF6A" strokeWidth="1.8">
        <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z" />
        <circle cx="12" cy="11.8" r="2" fill="#39FF6A" />
      </svg>
    )
  },
];

export default function Hero() {
  const roleText = "AI/GenAI & Full-Stack Developer";
  const words = roleText.split(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background Infinitely Looping Marquee */}
      <div 
        className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <div className="flex whitespace-nowrap animate-marquee opacity-[0.06] font-heading font-bold text-[18vw] leading-none text-[#39FF6A] tracking-tighter">
          <span>BUILD — SHIP — REPEAT — BUILD — SHIP — REPEAT —&nbsp;</span>
          <span>BUILD — SHIP — REPEAT — BUILD — SHIP — REPEAT —&nbsp;</span>
        </div>
      </div>

      {/* Cyber Grid Subtle Texture */}
      <div className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-60 z-0" />

      {/* Main Two-Column Content */}
      <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Role */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* HUD Index Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="px-2 py-0.5 font-mono text-xs uppercase tracking-widest text-[#39FF6A] border border-[#39FF6A]/30 bg-[#141a14] hud-corner">
              SYS.ARCHITECT // 2026
            </span>
            <span className="font-mono text-xs text-[#8E8E93] tracking-widest uppercase">
              PORTFOLIO // V2.0
            </span>
          </motion.div>

          {/* Headline with clip-path mask reveal & cyber glitch text */}
          <motion.div
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-[#EDEDED] uppercase leading-[0.88] select-none">
              <GlitchText text="PRAYAS" className="block text-[#EDEDED]" /><br />
              <GlitchText text="DEY." className="text-[#39FF6A] drop-shadow-[0_0_35px_rgba(57,255,106,0.35)]" />
            </h1>
          </motion.div>

          {/* Role text with staggered fade-up per word */}
          <div className="mt-8 flex flex-wrap gap-x-2 gap-y-1 font-mono text-sm sm:text-base md:text-lg text-[#8E8E93] max-w-xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.08,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className={word.includes('AI/GenAI') || word.includes('Developer') ? 'text-[#EDEDED] font-semibold' : ''}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Quick CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#work"
              onClick={playCyberClick}
              onMouseEnter={playCyberHover}
              className="px-6 py-3 font-heading text-sm uppercase tracking-widest font-semibold bg-[#39FF6A] text-[#0A0A0A] hover:bg-[#00FF41] hover:shadow-[0_0_20px_#39FF6A] transition-all hud-corner"
            >
              EXPLORE WORK ↗
            </a>
            <a
              href="#contact"
              onClick={playCyberClick}
              onMouseEnter={playCyberHover}
              className="px-6 py-3 font-heading text-sm uppercase tracking-widest font-semibold text-[#EDEDED] border border-white/20 hover:border-[#39FF6A] hover:text-[#39FF6A] transition-all hud-corner bg-[#111111]/80"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Profile Image with Cyber Glitch & Seamless Bleed */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg select-none group cursor-pointer"
            onClick={() => {
              playCyberChirp();
            }}
            onMouseEnter={() => {
              playCyberHover();
            }}
          >
            {/* Ambient Neon Backlight Aura */}
            <div 
              className="pointer-events-none absolute inset-0 -inset-x-8 rounded-full bg-[radial-gradient(circle_at_60%_45%,rgba(57,255,106,0.2)_0%,rgba(0,255,65,0.06)_40%,transparent_75%)] blur-2xl animate-pulse-glow"
              aria-hidden="true" 
            />

            {/* Seamlessly Blended Portrait with Multi-Layer Glitch */}
            <div className="relative w-full overflow-visible">
              {/* Base Image with Aggressive Feather Mask to Completely Dissolve Any Edge */}
              <img
                src="/assets/prayas-portrait.jpg"
                alt="Prayas Dey portrait with glitch streak"
                className="relative z-10 w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                style={{
                  mixBlendMode: 'lighten',
                  filter: 'contrast(125%) brightness(96%) grayscale(100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 56% 45%, black 25%, rgba(0,0,0,0.8) 48%, transparent 72%)',
                  maskImage: 'radial-gradient(ellipse 75% 75% at 56% 45%, black 25%, rgba(0,0,0,0.8) 48%, transparent 72%)',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />

              {/* Red Chromatic Aberration Glitch Layer */}
              <img
                src="/assets/prayas-portrait.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none photo-glitch-slice-red z-20 group-hover:opacity-90"
                style={{
                  filter: 'contrast(135%) brightness(105%) grayscale(100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 56% 45%, black 25%, rgba(0,0,0,0.8) 48%, transparent 72%)',
                  maskImage: 'radial-gradient(ellipse 75% 75% at 56% 45%, black 25%, rgba(0,0,0,0.8) 48%, transparent 72%)',
                }}
              />

              {/* Cyan Chromatic Aberration Glitch Layer */}
              <img
                src="/assets/prayas-portrait.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none photo-glitch-slice-cyan z-20 group-hover:opacity-90"
                style={{
                  filter: 'contrast(135%) brightness(105%) grayscale(100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 56% 45%, black 25%, rgba(0,0,0,0.8) 48%, transparent 72%)',
                  maskImage: 'radial-gradient(ellipse 75% 75% at 56% 45%, black 25%, rgba(0,0,0,0.8) 48%, transparent 72%)',
                }}
              />

              {/* Subtle CRT Scanline Filter over Portrait */}
              <div 
                className="absolute inset-0 scanlines opacity-35 pointer-events-none z-30"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 56% 45%, black 25%, rgba(0,0,0,0.8) 48%, transparent 72%)',
                  maskImage: 'radial-gradient(ellipse 75% 75% at 56% 45%, black 25%, rgba(0,0,0,0.8) 48%, transparent 72%)',
                }}
              />

              {/* Fallback placeholder */}
              <div 
                className="hidden w-full aspect-[3/4] flex-col items-center justify-center p-6 text-center diagonal-lines rounded-xl"
                data-placeholder="hero-portrait"
              >
                <span className="font-mono text-xs text-[#39FF6A] uppercase mb-2">// HERO IMAGE</span>
                <span className="font-heading text-lg text-white">Prayas Dey</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Row: Tech Icons + Scroll Indicator */}
      <div className="relative z-10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5">
        {/* Horizontal Row of Tech Icons with Outline-to-Filled Crossfade */}
        <div className="flex items-center gap-6 sm:gap-8">
          <span className="hidden md:inline-block font-mono text-xs uppercase tracking-widest text-[#8E8E93]">
            // TECH MATRIX:
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                onMouseEnter={playCyberHover}
                className="group relative flex items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#39FF6A]/10"
                title={tech.name}
              >
                {/* Outline Icon */}
                <div className="text-[#8E8E93] transition-opacity duration-200 group-hover:opacity-0">
                  {tech.svgOutline}
                </div>
                {/* Filled / Illuminated Neon Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 drop-shadow-[0_0_8px_#39FF6A]">
                  {tech.svgFilled}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouncing "Scroll Down" Indicator */}
        <a
          href="#work"
          onClick={playCyberClick}
          onMouseEnter={playCyberHover}
          className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#8E8E93] hover:text-[#39FF6A] transition-colors cursor-pointer group"
        >
          <span className="uppercase">SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[#39FF6A] group-hover:translate-y-0.5 transition-transform" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
