import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { playCyberHover, playCyberClick, playCyberChirp, toggleSound, isSoundEnabled } from '../utils/audio';

const GitHubIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.216 5.216 0 0 0-3.79-1.57c-1.42 0-2.84.542-3.924 1.626L3.99 12.37c-2.167 2.167-2.167 5.68 0 7.848l4.332 4.363c1.084 1.084 2.504 1.626 3.924 1.626s2.84-.542 3.924-1.626l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038z" />
    <path d="M20.811 13.01H10.666c-.754 0-1.365.611-1.365 1.365s.611 1.365 1.365 1.365h10.145c.754 0 1.365-.611 1.365-1.365s-.611-1.365-1.365-1.365z" fill="#FFA116" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundActive(newState);
  };

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { num: '01', name: 'LinkedIn', url: 'https://www.linkedin.com/in/prayas-dey/', icon: <LinkedInIcon /> },
    { num: '02', name: 'GitHub', url: 'https://github.com/Prayas340', icon: <GitHubIcon /> },
    { num: '03', name: 'LeetCode', url: 'https://leetcode.com/u/Prayas_dey/', icon: <LeetCodeIcon /> },
  ];

  const handleNavClick = (href) => {
    playCyberClick();
    setIsOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    playCyberChirp();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-5 sm:px-10 border-b border-[#39FF6A]/10 bg-[#0A0A0A]/70 backdrop-blur-md">
        {/* Left Initials / Monogram Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            playCyberClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onMouseEnter={playCyberHover}
          className="group flex items-center gap-2 cursor-pointer font-heading tracking-widest text-lg font-bold text-[#EDEDED]"
        >
          <div className="relative px-2 py-0.5 border border-[#39FF6A]/30 bg-[#121612] text-[#39FF6A] text-xs font-mono hud-corner transition-colors duration-200 group-hover:border-[#39FF6A] group-hover:bg-[#39FF6A] group-hover:text-[#0A0A0A]">
            PD // 01
          </div>
          <span className="hidden sm:inline-block font-mono text-xs tracking-wider text-[#8E8E93] group-hover:text-[#EDEDED] transition-colors">
            PRAYAS.DEY
          </span>
        </a>

        {/* Center Technical Metadata (Curtis Designr style) */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs text-[#8E8E93]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF6A] animate-pulse" />
            <span className="text-[#EDEDED]">AVAILABLE FOR ROLES</span>
          </div>
          <div className="hidden lg:block">
            KOLKATA, IN
          </div>
        </div>

        {/* Right Controls: Sound Toggle + Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={handleSoundToggle}
            onMouseEnter={playCyberHover}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-[#8E8E93] border border-white/10 hover:border-[#39FF6A]/40 hover:text-[#EDEDED] transition-colors cursor-pointer hud-corner bg-[#111111]"
            title="Toggle Sound Effects"
          >
            {soundActive ? <Volume2 className="w-3.5 h-3.5 text-[#39FF6A]" /> : <VolumeX className="w-3.5 h-3.5 text-[#8E8E93]" />}
            <span className="uppercase">Sound: <span className={soundActive ? 'text-[#39FF6A]' : 'text-[#8E8E93]'}>{soundActive ? 'ON' : 'OFF'}</span></span>
          </button>

          {/* Menu Button with Morphing Hamburger */}
          <button
            type="button"
            onClick={toggleMenu}
            onMouseEnter={playCyberHover}
            className="relative flex items-center justify-center gap-2.5 h-10 px-4 font-heading text-sm uppercase tracking-wider font-semibold text-[#EDEDED] border border-[#39FF6A]/30 bg-[#121713] hover:border-[#39FF6A] hover:bg-[#18241a] transition-all cursor-pointer hud-corner"
            aria-label="Toggle menu"
          >
            <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
            
            {/* Morphing Hamburger / X Icon */}
            <div className="w-4 h-4 relative flex flex-col justify-center items-center">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-[1.5px] bg-[#39FF6A] block absolute"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="w-4 h-[1.5px] bg-[#39FF6A] block absolute"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-[1.5px] bg-[#39FF6A] block absolute"
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[95] flex flex-col justify-between bg-[#070707] p-8 sm:p-16 border-b border-[#39FF6A]/20 cyber-grid-bg"
          >
            {/* Top Row inside menu */}
            <div className="flex items-center justify-between pt-12 sm:pt-10 font-mono text-xs text-[#8E8E93] border-b border-white/10 pb-4">
              <span className="text-[#39FF6A] uppercase">// NAVIGATION MATRIX</span>
              <span>EST. 2026</span>
            </div>

            {/* Main Links */}
            <div className="my-auto py-8">
              <ul className="flex flex-col gap-5 sm:gap-7">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + idx * 0.06,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      onMouseEnter={playCyberHover}
                      className="group relative inline-block font-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-normal text-[#EDEDED] transition-colors duration-200 hover:text-white"
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Green Underline Width 0% -> 100% */}
                      <span className="absolute left-0 -bottom-1 h-1 w-0 bg-[#39FF6A] transition-all duration-300 ease-out origin-left group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Socials & Metadata */}
            <div className="border-t border-white/10 pt-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#8E8E93] mb-4">
                // CONNECT
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playCyberHover}
                    onClick={playCyberClick}
                    className="group flex items-center justify-between p-3 border border-white/10 bg-[#111111] hover:border-[#39FF6A]/50 transition-colors hud-corner"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#39FF6A]">{s.num}</span>
                      <span className="text-[#8E8E93] group-hover:text-[#39FF6A] transition-colors">
                        {s.icon}
                      </span>
                      <span className="font-heading text-sm uppercase tracking-wider text-[#EDEDED] group-hover:text-white">
                        {s.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#39FF6A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
