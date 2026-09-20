import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MapPin, Award, ExternalLink, Users, BookOpen } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';

// Official GeeksforGeeks Brand Logo SVG
export const GeeksforGeeksLogo = ({ className = "w-6 h-6" }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <title>GeeksforGeeks</title>
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"/>
  </svg>
);

const experienceItems = [
  {
    num: '01',
    role: 'Campus Mantri (Student Ambassador)',
    organization: 'GeeksforGeeks',
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
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Expanded by default

  const toggleItem = (index) => {
    playCyberClick();
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section
      id="experience"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A] border-b border-[#39FF6A]/10 select-none"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-[#39FF6A]/20 pb-6"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#39FF6A] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39FF6A] animate-pulse" />
              <span>// 03 — EXPERIENCE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#EDEDED]">
              EXPERIENCE
            </h2>
          </div>
          <div className="font-mono text-xs text-[#8E8E93] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#39FF6A]">
              [STATUS: ACTIVE 2026]
            </span>
          </div>
        </motion.div>

        {/* Experience List */}
        <div className="flex flex-col divide-y divide-white/10">
          {experienceItems.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="py-6 sm:py-8 group"
              >
                {/* Accordion Header Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  onMouseEnter={playCyberHover}
                  className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0 pr-4">
                    {/* Index Number */}
                    <span className="font-mono text-lg sm:text-2xl font-bold text-[#39FF6A] shrink-0">
                      {item.num}
                    </span>

                    {/* GeeksforGeeks Brand Logo Badge */}
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-lg bg-white/5 border border-[#39FF6A]/30 p-2 flex items-center justify-center shrink-0 group-hover:border-[#39FF6A] group-hover:bg-[#39FF6A]/10 transition-all duration-200 shadow-[0_0_15px_rgba(57,255,106,0.15)]">
                      <GeeksforGeeksLogo className="w-7 h-7 text-[#39FF6A]" />
                    </div>

                    {/* Organization and Role Title */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-heading text-xl sm:text-3xl font-bold uppercase tracking-tight text-[#EDEDED] group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                          {item.organization}
                        </h3>
                        <span className="px-2 py-0.5 rounded-sm bg-[#39FF6A]/10 border border-[#39FF6A]/30 font-mono text-[10px] sm:text-xs text-[#39FF6A] font-semibold uppercase">
                          {item.type}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs sm:text-sm text-[#8E8E93]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Period + Rotating Toggle Icon */}
                  <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                    <span className="hidden md:inline-block font-mono text-xs text-[#8E8E93] bg-white/5 px-3 py-1 rounded border border-white/10">
                      {item.period}
                    </span>

                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="w-8 h-8 rounded-full border border-[#39FF6A]/30 flex items-center justify-center bg-[#131914] group-hover:border-[#39FF6A] transition-colors"
                    >
                      <Plus className="w-4 h-4 text-[#39FF6A]" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 sm:pl-20 max-w-4xl flex flex-col gap-5">
                        {/* Meta Row: Period & Location */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#8E8E93] border-b border-white/10 pb-4">
                          <div className="flex items-center gap-1.5 text-[#39FF6A]">
                            <Award className="w-4 h-4" />
                            <span className="font-bold">{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-white/40" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {/* Summary & Core Contributions */}
                        <p className="font-sans text-base sm:text-lg text-[#EDEDED] font-medium leading-relaxed">
                          {item.summary}
                        </p>
                        <p className="font-sans text-sm sm:text-base text-[#8E8E93] leading-relaxed">
                          {item.details}
                        </p>

                        {/* Campus Mantri Program Card (Matches user reference card) */}
                        <div className="mt-2 p-4 rounded-lg border border-[#39FF6A]/30 bg-gradient-to-r from-[#0d160f] to-[#0a0f0b] flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-white text-black font-heading font-black text-xs flex flex-col items-center justify-center tracking-tighter p-1 text-center shadow">
                              <span className="text-[9px] text-[#2F8D46] font-bold">GFG</span>
                              <span className="leading-none text-[8px]">MANTRI</span>
                            </div>
                            <div>
                              <div className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                <span>{item.programBadge}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF6A] animate-ping" />
                              </div>
                              <p className="font-mono text-[11px] text-[#8E8E93]">
                                Official Ambassador Initiative by GeeksforGeeks
                              </p>
                            </div>
                          </div>

                          <div className="font-mono text-xs text-[#39FF6A] px-3 py-1 rounded bg-[#39FF6A]/10 border border-[#39FF6A]/20">
                            MENTOR & REPRESENTATIVE
                          </div>
                        </div>

                        {/* Tech & Skill Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 font-mono text-xs text-[#39FF6A] bg-[#121913] border border-[#39FF6A]/25 rounded hud-corner"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
