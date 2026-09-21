import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';

// Official GeeksforGeeks Brand Logo SVG
export const GeeksforGeeksLogo = ({ className = "w-16 h-16" }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <title>GeeksforGeeks</title>
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"/>
  </svg>
);

const leftExperiences = [
  {
    id: 'gfg',
    num: '01',
    company: 'GEEKSFORGEEKS',
    role: 'CAMPUS MANTRI',
    displayLogoName: 'GeeksforGeeks',
    type: 'Apprenticeship',
    period: 'JUN 2026 — PRESENT',
    location: 'Kolkata, West Bengal · On-site',
    summary:
      'Official Campus Mantri (Student Ambassador) representing GeeksforGeeks at RCC Institute of Information Technology. Leading technical community initiatives, peer mentoring, and algorithmic problem-solving ecosystems.',
    details:
      'Spearheading campus-wide programming bootcamps, DSA roadmaps, and competitive coding contests powered by GeeksforGeeks. Organizing hands-on technical workshops, bridging collegiate engineers with industry-standard development practices.',
    badge: 'Campus Mantri Program',
    tags: ['GeeksforGeeks', 'Campus Mantri', 'DSA & Algorithms', 'Developer Advocacy', 'Technical Mentorship'],
    renderEmblem: (className) => <GeeksforGeeksLogo className={className} />,
  },
];

const rightExperiences = [];

const allExperiences = [...leftExperiences, ...rightExperiences];

export default function Experience() {
  const [selectedId, setSelectedId] = useState('gfg');

  const selectedItem =
    allExperiences.find((item) => item.id === selectedId) || allExperiences[0];

  const handleSelect = (id) => {
    if (id !== selectedId) {
      playCyberClick();
      setSelectedId(id);
    }
  };

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-14 bg-[#0A0A0A] border-b border-[#39FF6A]/10 select-none overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header: Title is EXPERIENCE in font-title */}
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

        {/* 3-Column Interface: Left tab, Center box, Symmetrical grid balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 01 GeeksforGeeks Tab */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 order-2 lg:order-1">
            {leftExperiences.map((item) => {
              const isActive = selectedId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  onMouseEnter={playCyberHover}
                  className={`w-full cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'bg-[#EDECE6] cyber-chamfer-left-active shadow-[0_0_20px_rgba(237,236,230,0.15)]'
                      : 'bg-white/10 hover:bg-[#39FF6A]/40 cyber-chamfer-left-inactive p-[1px] group'
                  }`}
                >
                  <div
                    className={`w-full flex items-center gap-3.5 px-4 py-3.5 transition-colors ${
                      isActive
                        ? 'bg-[#EDECE6] text-black pr-6'
                        : 'bg-[#0B0D0C] hover:bg-[#121714] cyber-chamfer-left-inactive text-[#EDEDED]'
                    }`}
                  >
                    {/* Index Number */}
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold shrink-0 ${
                        isActive ? 'text-[#1F1F1F]' : 'text-[#39FF6A]/80 group-hover:text-[#39FF6A]'
                      }`}
                    >
                      {item.num}
                    </span>

                    {/* Company and Role Info */}
                    <div className="min-w-0 text-left">
                      <h4
                        className={`font-heading font-black text-sm sm:text-base tracking-wider uppercase truncate leading-tight ${
                          isActive ? 'text-black' : 'text-white/90 group-hover:text-white'
                        }`}
                      >
                        {item.company}
                      </h4>
                      <p
                        className={`font-mono text-[10px] sm:text-[11px] tracking-wider uppercase truncate mt-0.5 ${
                          isActive ? 'text-[#444444] font-semibold' : 'text-[#8E8E93] group-hover:text-[#A1A1AA]'
                        }`}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Squared Box with Crosshairs & Glitched Logo */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
            {/* Squared Box (Aspect Square, 4 Corner Crosshairs '+') */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square bg-[#060807] border border-white/15 p-6 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              
              {/* Four Corner Crosshairs '+' */}
              <span className="absolute top-1 left-1.5 text-white/40 font-mono text-xs leading-none select-none pointer-events-none">
                +
              </span>
              <span className="absolute top-1 right-1.5 text-white/40 font-mono text-xs leading-none select-none pointer-events-none">
                +
              </span>
              <span className="absolute bottom-1 left-1.5 text-white/40 font-mono text-xs leading-none select-none pointer-events-none">
                +
              </span>
              <span className="absolute bottom-1 right-1.5 text-white/40 font-mono text-xs leading-none select-none pointer-events-none">
                +
              </span>

              {/* Ambient Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,106,0.14)_0%,rgba(0,0,0,0.95)_75%)] pointer-events-none" />

              {/* Glitched Logo Display Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative z-10 flex flex-col items-center justify-center text-center select-none"
                >
                  {/* Layer 1: Red Chromatic Slices Glitch */}
                  <div
                    aria-hidden="true"
                    className="absolute text-[#FF0055] photo-glitch-slice-red opacity-80 pointer-events-none transform -translate-x-1"
                  >
                    {selectedItem.renderEmblem("w-28 h-28 sm:w-36 sm:h-36")}
                  </div>

                  {/* Layer 2: Cyan Chromatic Slices Glitch */}
                  <div
                    aria-hidden="true"
                    className="absolute text-[#00FFFF] photo-glitch-slice-cyan opacity-80 pointer-events-none transform translate-x-1"
                  >
                    {selectedItem.renderEmblem("w-28 h-28 sm:w-36 sm:h-36")}
                  </div>

                  {/* Layer 3: Main Glowing Logo with Twitch Animation */}
                  <div className="relative text-[#39FF6A] logo-glitch-active drop-shadow-[0_0_20px_rgba(57,255,106,0.45)]">
                    {selectedItem.renderEmblem("w-28 h-28 sm:w-36 sm:h-36")}
                  </div>

                  {/* Logo Brand Name Text Below Emblem */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-6 flex flex-col items-center"
                  >
                    <span className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-wider text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                      {selectedItem.displayLogoName}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-[#39FF6A] uppercase mt-1">
                      {selectedItem.badge}
                    </span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

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

            {/* Description & Role Details Under Center Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-xl text-center mt-6 flex flex-col items-center gap-3"
              >
                {/* Meta Badge Row */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-mono text-xs text-[#8E8E93]">
                  <span className="text-[#39FF6A] flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{selectedItem.period}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-white/70">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedItem.location}</span>
                  </span>
                </div>

                {/* Primary Role Summary Paragraph */}
                <p className="font-sans text-sm sm:text-base text-[#EDEDED] font-normal leading-relaxed text-center px-4">
                  {selectedItem.summary}
                </p>

                {/* GFG Campus Mantri Highlight Card */}
                <div className="w-full mt-2 p-3 sm:p-3.5 rounded-lg border border-[#39FF6A]/30 bg-gradient-to-r from-[#0d160f] to-[#0a0f0b] flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-white text-black font-heading font-black text-xs flex flex-col items-center justify-center tracking-tighter p-1 text-center shadow shrink-0">
                      <span className="text-[9px] text-[#2F8D46] font-bold">GFG</span>
                      <span className="leading-none text-[8px]">MANTRI</span>
                    </div>
                    <div>
                      <div className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                        <span>Campus Mantri Program</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39FF6A] animate-ping" />
                      </div>
                      <p className="font-mono text-[10px] text-[#8E8E93]">
                        Official Ambassador Initiative by GeeksforGeeks
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:inline-block font-mono text-[11px] text-[#39FF6A] px-2.5 py-1 rounded bg-[#39FF6A]/10 border border-[#39FF6A]/25 shrink-0">
                    MENTOR & REP
                  </div>
                </div>

                {/* Skill / Technology Tags */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 font-mono text-[11px] text-[#39FF6A] bg-[#121913] border border-[#39FF6A]/20 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Symmetrical Grid Balancer (Preserves central positioning) */}
          <div className="lg:col-span-3 hidden lg:block order-3" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
}
