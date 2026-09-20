import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, FileText, Send } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';
import GlitchText from './GlitchText';

const GitHubIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.216 5.216 0 0 0-3.79-1.57c-1.42 0-2.84.542-3.924 1.626L3.99 12.37c-2.167 2.167-2.167 5.68 0 7.848l4.332 4.363c1.084 1.084 2.504 1.626 3.924 1.626s2.84-.542 3.924-1.626l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038z" />
    <path d="M20.811 13.01H10.666c-.754 0-1.365.611-1.365 1.365s.611 1.365 1.365 1.365h10.145c.754 0 1.365-.611 1.365-1.365s-.611-1.365-1.365-1.365z" fill="#FFA116" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

export default function Footer() {
  const socialColumns = [
    {
      category: 'Code',
      label: 'GitHub',
      url: 'https://github.com/Prayas340',
      handle: '@Prayas340',
      icon: <GitHubIcon />,
    },
    {
      category: 'Practice',
      label: 'LeetCode',
      url: 'https://leetcode.com/u/Prayas_dey/',
      handle: '@Prayas_dey',
      icon: <LeetCodeIcon />,
    },
    {
      category: 'Social',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prayas-dey/',
      handle: 'prayas-dey',
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col justify-between"
      >
        {/* Top HUD Tag */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#39FF6A] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#39FF6A]" />
          <span>// 04 — TRANSMISSION</span>
        </div>

        {/* Large Closing Headline with Cyber Glitch Effect */}
        <div className="mb-12 select-none">
          <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-[#EDEDED] leading-[0.88]">
            <GlitchText text="LET'S BUILD" className="block text-[#EDEDED]" /><br />
            <GlitchText text="SOMETHING." className="text-[#39FF6A] drop-shadow-[0_0_35px_rgba(57,255,106,0.35)]" />
          </h2>
        </div>

        {/* Two Main Call-to-Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
          {/* Shoot a message Button */}
          <a
            href="mailto:deyprayas3@gmail.com"
            onMouseEnter={playCyberHover}
            onClick={playCyberClick}
            className="group flex items-center gap-3 px-8 py-4 font-heading text-base sm:text-lg font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#39FF6A] hover:bg-[#00FF41] hover:shadow-[0_0_25px_#39FF6A] hover:scale-[1.02] transition-all hud-corner"
          >
            <Send className="w-4 h-4 text-[#0A0A0A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span>Shoot a message</span>
          </a>

          {/* Download CV Button */}
          <a
            href="/SWE_Resume_Template.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Prayas_Dey_Resume.pdf"
            onClick={playCyberClick}
            onMouseEnter={playCyberHover}
            className="group flex items-center gap-3 px-8 py-4 font-heading text-base sm:text-lg font-bold uppercase tracking-wider text-[#39FF6A] bg-[#121813] border border-[#39FF6A]/40 hover:border-[#39FF6A] hover:bg-[#182319] hover:scale-[1.02] transition-all hud-corner cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#39FF6A]" />
            <span>DOWNLOAD CV</span>
          </a>
        </div>

        {/* Three-Column Link List + Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-y border-[#39FF6A]/15">
          {/* 3-Column Social & Code Links */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {socialColumns.map((col, idx) => (
              <div key={col.label} className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E93]">
                  // {col.category}
                </span>
                <a
                  href={col.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="group inline-flex items-center gap-2.5 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#EDEDED] hover:text-[#39FF6A] transition-colors"
                >
                  <span className="text-[#EDEDED] group-hover:text-[#39FF6A] group-hover:drop-shadow-[0_0_8px_#39FF6A] transition-all duration-200">
                    {col.icon}
                  </span>
                  <span>{col.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#39FF6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
                <span className="font-mono text-xs text-[#8E8E93]">
                  {col.handle}
                </span>
              </div>
            ))}
          </div>

          {/* Direct Contact Row */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E93]">
              // DIRECT LINE
            </span>
            <div className="flex flex-col gap-2.5 font-mono text-sm">
              <a
                href="mailto:deyprayas3@gmail.com"
                onMouseEnter={playCyberHover}
                onClick={playCyberClick}
                className="flex items-center gap-2.5 text-[#EDEDED] hover:text-[#39FF6A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#39FF6A]" />
                <span>deyprayas3@gmail.com</span>
              </a>
              <a
                href="tel:+918444807833"
                onMouseEnter={playCyberHover}
                onClick={playCyberClick}
                className="flex items-center gap-2.5 text-[#EDEDED] hover:text-[#39FF6A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#39FF6A]" />
                <span>+91 8444807833</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright + Signature */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8E8E93]">
          <div>
            © 2026 by Prayas Dey. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[#8E8E93]">
            <span>DESIGNED WITH MOTION & CRAFT</span>
            <span className="text-[#39FF6A]">SYS: ONLINE</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
