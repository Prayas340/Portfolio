import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';

// Official GeeksforGeeks Brand Logo SVG
export const GeeksforGeeksLogo = ({ className = "w-16 h-16" }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <title>GeeksforGeeks</title>
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"/>
  </svg>
);

const gfgExperience = {
  num: '01',
  company: 'GEEKSFORGEEKS',
  role: 'Campus Mantri (Student Ambassador)',
  displayLogoName: 'GeeksforGeeks',
  type: 'Apprenticeship',
  period: 'JUN 2026 — PRESENT',
  location: 'Kolkata, West Bengal, India · On-site',
  summary:
    'Official Campus Mantri (Student Ambassador) representing GeeksforGeeks at RCC Institute of Information Technology. Leading technical community initiatives, peer mentoring, and algorithmic problem-solving ecosystems.',
  details:
    'Spearheading campus-wide programming bootcamps, DSA roadmaps, and competitive coding contests powered by GeeksforGeeks. Organizing hands-on technical workshops, bridging collegiate engineers with industry-standard development practices, and driving engagement across software engineering disciplines.',
  programBadge: 'Campus Mantri Program',
  tags: [
    'GeeksforGeeks',
    'Campus Mantri',
    'DSA & Problem Solving',
    'Community Leadership',
    'Technical Mentorship',
    'Developer Advocacy',
  ],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-14 bg-[#0A0A0A] border-b border-[#39FF6A]/10 select-none overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header: Title changed to EXPERIENCE in font-title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[#39FF6A] mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#39FF6A] animate-pulse" />
            <span>// 03 — EXPERIENCE</span>
          </div>

          <h2 className="font-title text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-wide text-[#EDEDED] text-center">
            EXPERIENCE
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3 font-mono text-xs text-[#8E8E93]">
            <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#39FF6A]">
              [STATUS: ACTIVE 2026]
            </span>
          </div>
        </motion.div>

        {/* 2-Column Experience Console Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Chamfered Tab + Detailed Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1"
          >
            {/* Active Chamfered Tab pointing right towards the squared box */}
            <div
              onClick={playCyberClick}
              onMouseEnter={playCyberHover}
              className="w-full bg-[#EDECE6] cyber-chamfer-left-active shadow-[0_0_25px_rgba(237,236,230,0.18)] cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <div className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-black pr-8">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-mono text-base sm:text-lg font-black text-[#1F1F1F] shrink-0">
                    {gfgExperience.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading font-black text-lg sm:text-xl tracking-wider uppercase truncate leading-tight text-black">
                      {gfgExperience.company}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm tracking-wider uppercase truncate text-[#444444] font-semibold mt-0.5">
                      {gfgExperience.role}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-sm bg-black/10 border border-black/20 font-mono text-[10px] text-black font-bold uppercase shrink-0">
                  {gfgExperience.type}
                </span>
              </div>
            </div>

            {/* Metadata Row: Period & Location */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-[#8E8E93] border-b border-white/10 pb-3">
              <div className="flex items-center gap-1.5 text-[#39FF6A] font-bold">
                <Award className="w-4 h-4" />
                <span>{gfgExperience.period}</span>
              </div>
              <span className="text-white/30">•</span>
              <div className="flex items-center gap-1.5 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-white/40" />
                <span>{gfgExperience.location}</span>
              </div>
            </div>

            {/* Primary Summary */}
            <p className="font-sans text-base sm:text-lg text-[#EDEDED] font-medium leading-relaxed">
              {gfgExperience.summary}
            </p>

            {/* Extended Contributions */}
            <p className="font-sans text-sm sm:text-base text-[#8E8E93] leading-relaxed">
              {gfgExperience.details}
            </p>

            {/* Campus Mantri Program Card */}
            <div className="p-4 rounded-lg border border-[#39FF6A]/30 bg-gradient-to-r from-[#0d160f] to-[#0a0f0b] flex flex-wrap items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded bg-white text-black font-heading font-black text-xs flex flex-col items-center justify-center tracking-tighter p-1 text-center shadow shrink-0">
                  <span className="text-[9px] text-[#2F8D46] font-bold">GFG</span>
                  <span className="leading-none text-[8px]">MANTRI</span>
                </div>
                <div>
                  <div className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span>{gfgExperience.programBadge}</span>
                    <span className="w-2 h-2 rounded-full bg-[#39FF6A] animate-ping" />
                  </div>
                  <p className="font-mono text-xs text-[#8E8E93]">
                    Official Ambassador Initiative by GeeksforGeeks
                  </p>
                </div>
              </div>

              <div className="font-mono text-xs text-[#39FF6A] px-3 py-1 rounded bg-[#39FF6A]/10 border border-[#39FF6A]/25 shrink-0">
                MENTOR & REPRESENTATIVE
              </div>
            </div>

            {/* Skill / Technology Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {gfgExperience.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 font-mono text-xs text-[#39FF6A] bg-[#121913] border border-[#39FF6A]/25 rounded hud-corner"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Squared Box with Crosshairs & Glitched GFG Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            {/* Squared Box (Aspect Square, 4 Corner Crosshairs '+') */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square bg-[#060807] border border-white/15 p-6 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_45px_rgba(0,0,0,0.85)] group">
              
              {/* Four Corner Crosshairs '+' */}
              <span className="absolute top-1.5 left-2 text-white/40 font-mono text-xs leading-none select-none pointer-events-none">
                +
              </span>
              <span className="absolute top-1.5 right-2 text-white/40 font-mono text-xs leading-none select-none pointer-events-none">
                +
              </span>
              <span className="absolute bottom-1.5 left-2 text-white/40 font-mono text-xs leading-none select-none pointer-events-none">
                +
              </span>
              <span className="absolute bottom-1.5 right-2 text-white/40 font-mono text-xs leading-none select-none pointer-events-none">
                +
              </span>

              {/* Ambient Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,106,0.16)_0%,rgba(0,0,0,0.95)_75%)] pointer-events-none" />

              {/* Glitched Logo Display Container */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center select-none">
                {/* Layer 1: Red Chromatic Slices Glitch */}
                <div
                  aria-hidden="true"
                  className="absolute text-[#FF0055] photo-glitch-slice-red opacity-80 pointer-events-none transform -translate-x-1"
                >
                  <GeeksforGeeksLogo className="w-32 h-32 sm:w-40 sm:h-40" />
                </div>

                {/* Layer 2: Cyan Chromatic Slices Glitch */}
                <div
                  aria-hidden="true"
                  className="absolute text-[#00FFFF] photo-glitch-slice-cyan opacity-80 pointer-events-none transform translate-x-1"
                >
                  <GeeksforGeeksLogo className="w-32 h-32 sm:w-40 sm:h-40" />
                </div>

                {/* Layer 3: Main Glowing Logo with Twitch Animation */}
                <div className="relative text-[#39FF6A] logo-glitch-active drop-shadow-[0_0_25px_rgba(57,255,106,0.5)]">
                  <GeeksforGeeksLogo className="w-32 h-32 sm:w-40 sm:h-40" />
                </div>

                {/* Logo Brand Name Text Below Emblem */}
                <div className="mt-6 flex flex-col items-center">
                  <span className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-wider text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {gfgExperience.displayLogoName}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[#39FF6A] uppercase mt-1">
                    {gfgExperience.programBadge}
                  </span>
                </div>
              </div>

              {/* Authentic LED Matrix Raster Overlay (Pixel Dots Grid) */}
              <div
                className="pointer-events-none absolute inset-0 led-matrix-raster z-20 opacity-85"
                aria-hidden="true"
              />

              {/* Authentic CRT Scanlines Overlay */}
              <div
                className="pointer-events-none absolute inset-0 crt-scanlines z-20 opacity-60"
                aria-hidden="true"
              />

              {/* Vignette Edge Shading */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] z-20"
                aria-hidden="true"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
