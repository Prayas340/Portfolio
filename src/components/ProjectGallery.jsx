import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Code2 } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';
import PixelDissolve from './PixelDissolve';
import AboutDeck from './AboutDeck';
import ProjectPixelReveal from './ProjectPixelReveal';

const projects = [
  {
    id: 'sahara',
    title: 'SAHARA',
    category: 'CASE STUDY',
    type: 'WEB APP',
    summary: 'Cloud-native analytics platform & responsive web ecosystem.',
    demo: 'https://sahara-lac.vercel.app/',
    github: 'https://github.com/Prayas340/sahara',
    offsetY: 'translate-y-4',
    mockupType: 'dashboard',
  },
  {
    id: 'jan-setu-ai',
    title: 'JANSETU AI',
    category: 'CIVIC TECH',
    type: 'AI TOOL',
    summary: 'Generative AI civic assistant navigating public schemes & policies.',
    demo: 'https://jan-setu-ai-tawny.vercel.app/',
    github: 'https://github.com/Prayas340/JanSetu-AI',
    offsetY: '-translate-y-4',
    mockupType: 'civic',
  },
  {
    id: 'macos-portfolio',
    title: 'MAC OS PORTFOLIO',
    category: 'WEB DESIGN',
    type: 'INTERACTIVE',
    summary: 'Interactive browser-based macOS desktop simulation with native apps.',
    demo: 'https://mac-os-portfolio-bice.vercel.app/',
    github: 'https://github.com/Prayas340/Mac-OS-Portfolio',
    offsetY: 'translate-y-3',
    mockupType: 'macos',
  },
  {
    id: 'career-forge-ai',
    title: 'CAREER FORGE AI',
    category: 'AI TOOL',
    type: 'GEN AI',
    summary: 'Automated resume analysis, ATS scoring & real-time interview simulator.',
    demo: 'https://career-forge-ai-omega.vercel.app/',
    github: 'https://github.com/Prayas340/CareerForge-AI',
    offsetY: '-translate-y-4',
    mockupType: 'career',
  },
  {
    id: 'youtube-copilot',
    title: 'YOUTUBE COPILOT (RAG)',
    category: 'AI TOOL',
    type: 'RAG / SEARCH',
    summary: 'Vector-indexed video transcript search and contextual question answering.',
    demo: 'https://youtube-copilot-rag.vercel.app/',
    github: 'https://github.com/Prayas340/Youtube-copilot-Rag-',
    offsetY: 'translate-y-4',
    mockupType: 'copilot',
  },
  {
    id: 'personal-ai-journal',
    title: 'PERSONAL AI JOURNAL',
    category: 'APP DESIGN',
    type: 'AI APP',
    summary: 'Intelligent reflection companion with emotional trends & breakthrough analytics.',
    demo: 'https://applet-azure.vercel.app/',
    github: 'https://github.com/Prayas340/personal-ai-journal',
    offsetY: '-translate-y-3',
    mockupType: 'journal',
  },
];

export default function ProjectGallery() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [scrollRange, setScrollRange] = useState(4800);
  const [scrollDirection, setScrollDirection] = useState('down');

  // Dynamic track measurement covering Projects + Pixel Dissolve + About Deck
  useEffect(() => {
    const updateScrollRange = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const aboutDeck = track.querySelector('#about');

      if (aboutDeck && viewportWidth < 768) {
        // Precise center-lock on mobile: align AboutDeck squarely in the center of the viewport
        const centerOffset = (viewportWidth - aboutDeck.offsetWidth) / 2;
        const targetDistance = aboutDeck.offsetLeft - Math.max(0, centerOffset);
        setScrollRange(Math.max(1400, targetDistance));
      } else {
        const targetDistance = totalWidth - viewportWidth;
        setScrollRange(Math.max(1800, targetDistance));
      }
    };

    updateScrollRange();
    const timer = setTimeout(updateScrollRange, 200);
    window.addEventListener('resize', updateScrollRange);

    const observer = new ResizeObserver(updateScrollRange);
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateScrollRange);
      observer.disconnect();
    };
  }, []);

  // Framer Motion scroll hook tracking the outer tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Strict horizontal lock:
  // Completes 100% of translation by 0.82 of vertical scroll!
  // From 0.82 to 1.0, the complete Philosophy & About section rests calmly before unpinning to vertical scroll.
  const x = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    [0, -scrollRange, -scrollRange]
  );

  // Track scroll direction: 'down' (forward) vs 'up' (backward)
  useEffect(() => {
    let lastProgress = scrollYProgress.get();
    let lastY = typeof window !== 'undefined' ? window.scrollY : 0;

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const diff = latest - lastProgress;
      if (Math.abs(diff) > 0.0001) {
        setScrollDirection(diff > 0 ? 'down' : 'up');
        lastProgress = latest;
      }
    });

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastY;
      if (Math.abs(diff) > 1) {
        setScrollDirection(diff > 0 ? 'down' : 'up');
        lastY = currentY;
      }
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 0.5) {
        setScrollDirection(e.deltaY > 0 ? 'down' : 'up');
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        touchStartY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const touchY = e.touches[0].clientY;
        const diff = touchStartY - touchY;
        if (Math.abs(diff) > 4) {
          setScrollDirection(diff > 0 ? 'down' : 'up');
          touchStartY = touchY;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [scrollYProgress]);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
      className="relative select-none w-full bg-[#0A0A0A]"
      style={{
        // 750vh ensures generous horizontal scrolling runway for all 6 projects + pixel dissolve + about deck
        height: shouldReduceMotion ? 'auto' : '750vh',
      }}
    >
      {/* Interactive Drag Cursor following mouse in this section */}
      {!shouldReduceMotion && isSectionHovered && (
        <motion.div
          className="fixed pointer-events-none z-[85] hidden md:flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070210] text-[#39FF6A] font-mono text-[11px] font-bold shadow-2xl border border-[#39FF6A]/30"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        >
          <ArrowLeft className="w-3 h-3 text-[#39FF6A]" />
          <span>DRAG / SCROLL</span>
          <ArrowRight className="w-3 h-3 text-[#39FF6A]" />
        </motion.div>
      )}

      {/* Sticky Pinned 100vh Viewport Container */}
      <div
        className={
          shouldReduceMotion
            ? 'py-20 px-6 max-w-7xl mx-auto'
            : 'sticky top-0 h-screen w-full flex items-center overflow-hidden z-20 bg-[#0A0A0A]'
        }
      >
        {/* Fallback View for Reduced Motion */}
        {shouldReduceMotion ? (
          <div className="py-12 flex flex-col gap-20">
            <div className="bg-[#8fd92f] p-8 rounded-xl">
              <span className="inline-block px-3 py-1 font-mono text-xs uppercase tracking-widest bg-black text-[#8fd92f] rounded mb-4">
                SELECTED WORK
              </span>
              <h2 className="font-title text-6xl font-extrabold uppercase tracking-normal text-[#3E1280] leading-[0.9]">
                SELECTED<br />WORK
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {projects.map((project, index) => (
                  <ProjectCardItem
                    key={project.id}
                    project={project}
                    index={index}
                    isMobile={true}
                    scrollDirection={scrollDirection}
                  />
                ))}
              </div>
            </div>
            <AboutDeck />
          </div>
        ) : (
          /* Pinned Horizontal Translating Track */
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center will-change-transform h-full"
          >
            {/* 1. Projects Section with its OWN permanent, 100% solid #8fd92f background */}
            <div className="relative shrink-0 h-full flex items-center gap-12 sm:gap-20 pl-8 sm:pl-16 pr-14 bg-[#8fd92f]">
              {/* Ambient Circuit Trace Lines in Background */}
              <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#6fb816" strokeWidth="1.5" />
                  <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#6fb816" strokeWidth="1.5" />
                  <polyline points="200,35% 350,35% 420,50% 700,50% 850,65% 1200,65%" fill="none" stroke="#6fb816" strokeWidth="1.5" />
                  <polyline points="800,35% 1050,35% 1150,20% 1600,20% 1750,35%" fill="none" stroke="#6fb816" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Title Panel */}
              <div className="shrink-0 flex flex-col justify-center w-[280px] sm:w-[350px] lg:w-[380px] pr-4 z-20">
                {/* "KEEP SCROLLING" Pill Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest bg-[#070210] text-[#8fd92f] rounded-sm shadow-md">
                    KEEP SCROLLING
                  </span>
                </div>

                {/* Massive "SELECTED WORK" Headline */}
                <h2 className="font-title text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-bold uppercase tracking-normal text-[#3E1280] leading-[0.9] select-none">
                  SELECTED<br />
                  WORK
                </h2>

                {/* Subtitle */}
                <p className="mt-4 font-mono text-xs text-[#070210]/75 max-w-[280px]">
                  I'm glad you're still here lol. Production web apps, AI systems & creative tools.
                </p>

                {/* "EXPLORE MORE" Action Button */}
                <div className="mt-6">
                  <a
                    href="https://github.com/Prayas340?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playCyberHover}
                    onClick={playCyberClick}
                    className="inline-flex items-center justify-center px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-[#070210] border border-[#070210] hover:bg-[#070210] hover:text-[#8fd92f] transition-all duration-200"
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </div>

              {/* 6 Alternating Staggered Project Cards (Always on solid green background!) */}
              {projects.map((project, index) => (
                <ProjectCardItem
                  key={project.id}
                  project={project}
                  index={index}
                  scrollDirection={scrollDirection}
                />
              ))}
            </div>

            {/* 2. Pixel Blend-Out Transition (Canvas based, 60fps GPU, bidirectional) */}
            <PixelDissolve
              scrollYProgress={scrollYProgress}
              startProgress={0.48}
              endProgress={0.76}
            />

            {/* 3. Philosophy & About Deck (Included inside horizontal scroll) */}
            <AboutDeck />

            {/* 4. Trailing space on desktop, zero overshoot on mobile */}
            <div className="hidden sm:block w-[8vw] shrink-0" />
          </motion.div>
        )}

        {/* Bottom Pinned Progress Indicator */}
        {!shouldReduceMotion && (
          <div className="absolute bottom-3 sm:bottom-6 left-4 sm:left-16 right-4 sm:right-16 flex items-center justify-between font-mono text-[10px] sm:text-xs text-white/70 pointer-events-none z-30 mix-blend-difference">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#39FF6A] animate-pulse" />
              <span className="font-bold tracking-wider">WORK → PHILOSOPHY</span>
            </div>
            <div className="w-24 sm:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#39FF6A]"
                style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Single Project Card Item with Alternating Stagger & UI Mockup
function ProjectCardItem({ project, index, isMobile, scrollDirection }) {
  return (
    <div
      className={`project-card-item shrink-0 w-[85vw] sm:w-[460px] md:w-[500px] lg:w-[540px] transition-transform duration-300 ${
        isMobile ? '' : 'sm:' + project.offsetY
      }`}
    >
      {/* Mockup Preview Window */}
      <div className="group relative rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.25)] border border-black/15 bg-[#0e120f] transition-all duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)] hover:scale-[1.015]">
        {/* Render Rich Mockup Interface based on Project Type */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0d0b]">
          {renderMockupContent(project.mockupType, project.title)}

          {/* Curtis Designr Pixelated Construction Reveal Animation */}
          <ProjectPixelReveal index={index} scrollDirection={scrollDirection} />

          {/* Corner Crosshairs */}
          <span className="absolute top-2 left-2 font-mono text-[10px] text-white/50 font-bold select-none z-35 pointer-events-none">+</span>
          <span className="absolute top-2 right-2 font-mono text-[10px] text-white/50 font-bold select-none z-35 pointer-events-none">+</span>
          <span className="absolute bottom-2 left-2 font-mono text-[10px] text-white/50 font-bold select-none z-35 pointer-events-none">+</span>
          <span className="absolute bottom-2 right-2 font-mono text-[10px] text-white/50 font-bold select-none z-35 pointer-events-none">+</span>

          {/* Black Category Badge in Bottom-Left */}
          <div className="absolute bottom-3 left-3 z-40">
            <span className="px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider bg-black text-white rounded-sm shadow-md">
              {project.category}
            </span>
          </div>

          {/* Hover Green Glow Overlay */}
          <div className="absolute inset-0 bg-[#8fd92f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
        </div>
      </div>

      {/* Under-Card Metadata (Project Name Left, Visit & Code Right) */}
      <div className="mt-3 flex items-center justify-between font-heading">
        {/* Project Title */}
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#070210]">
            {project.title}
          </span>
          <span className="font-mono text-[11px] text-[#070210]/60 lowercase hidden sm:inline-block">
            / {project.type}
          </span>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playCyberHover}
            onClick={playCyberClick}
            className="flex items-center gap-1 font-mono text-xs font-semibold text-[#070210]/80 hover:text-[#070210] hover:underline transition-all"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CODE</span>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playCyberHover}
            onClick={playCyberClick}
            className="group/link flex items-center gap-1 font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-[#070210] hover:opacity-80 transition-all"
          >
            <span>VISIT</span>
            <span className="text-sm font-bold group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform inline-block">
              ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

// Helper to render high-fidelity mockups for Prayas's projects
function renderMockupContent(type, title) {
  switch (type) {
    case 'dashboard': // Sahara
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#121614] to-[#0a0d0b] text-white">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF6A]" />
              <span className="text-white font-bold">SAHARA // CLOUD SYS</span>
            </div>
            <span>METRICS: 99.98% UP</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="p-2.5 rounded bg-black/40 border border-white/5">
              <div className="text-[9px] font-mono text-white/40">LATENCY</div>
              <div className="text-sm font-bold text-[#39FF6A]">18ms</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/5">
              <div className="text-[9px] font-mono text-white/40">NODES</div>
              <div className="text-sm font-bold text-white">64 ACTIVE</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/5">
              <div className="text-[9px] font-mono text-white/40">INGESTION</div>
              <div className="text-sm font-bold text-[#39FF6A]">4.8 GB/s</div>
            </div>
          </div>
          <div className="h-10 w-full bg-black/30 rounded border border-white/5 flex items-end px-2 py-1 gap-1.5">
            {[40, 65, 30, 85, 95, 75, 60, 90, 80, 100, 85, 90, 70, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-[#39FF6A]/60 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );

    case 'civic': // JanSetu AI
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#0c131a] to-[#070b10] text-white">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff]" />
              <span className="text-white font-bold">JANSETU // CIVIC AI</span>
            </div>
            <span>SCHEMES INDEXED: 1,420+</span>
          </div>
          <div className="flex flex-col gap-2 my-auto">
            <div className="self-end max-w-[80%] p-2 rounded-lg bg-[#00d2ff]/20 border border-[#00d2ff]/40 text-xs text-white">
              "How do I apply for the PM Digital Literacy Certificate?"
            </div>
            <div className="self-start max-w-[85%] p-2 rounded-lg bg-black/50 border border-white/10 text-xs text-white/80 flex items-start gap-2">
              <span className="text-[#00d2ff] font-bold">AI:</span>
              <span>Requirements: Valid Aadhaar, age 14-60. Direct portal link generated.</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-t border-white/5 pt-1.5">
            <span>NATURAL LANGUAGE MULTILINGUAL</span>
            <span className="text-[#00d2ff]">STATUS: DEPLOYED</span>
          </div>
        </div>
      );

    case 'macos': // Mac OS Portfolio
      return (
        <div className="w-full h-full p-3 flex flex-col bg-[#14151a] text-white">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-[10px] text-white/60">PrayasDey — zsh — 80x24</span>
            <div className="w-8" />
          </div>
          <div className="font-mono text-[11px] p-2 text-white/90 flex flex-col gap-1 my-auto">
            <div><span className="text-[#39FF6A]">prayas@macbook</span>:<span className="text-[#00d2ff]">~</span>$ neofetch</div>
            <div className="text-white/60">OS: macOS Sonoma 14.5 Interactive Web Simulator</div>
            <div className="text-white/60">Host: Portfolio Canvas Engine (WebGL + React)</div>
            <div className="text-[#39FF6A]">Kernel: 23.5.0 Darwin Kernel Version</div>
            <div><span className="text-[#39FF6A]">prayas@macbook</span>:<span className="text-[#00d2ff]">~</span>$ npm run dev <span className="animate-pulse">_</span></div>
          </div>
          <div className="mx-auto px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md flex items-center gap-2 border border-white/10">
            {['Finder', 'Terminal', 'Safari', 'Projects', 'Settings'].map((app, i) => (
              <div key={i} className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center text-[8px] font-bold">
                {app[0]}
              </div>
            ))}
          </div>
        </div>
      );

    case 'career': // Career Forge AI
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#161220] to-[#0a0812] text-white">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#905cff]" />
              <span className="text-white font-bold">CAREER FORGE // ATS ENGINE</span>
            </div>
            <span className="text-[#39FF6A]">SCORE: 94 / 100</span>
          </div>
          <div className="grid grid-cols-2 gap-3 my-auto">
            <div className="p-2.5 rounded bg-black/40 border border-white/5 flex flex-col">
              <span className="text-[9px] font-mono text-white/40">ACTION VERB DENSITY</span>
              <span className="text-sm font-bold text-white mt-1">STRONG (88%)</span>
              <div className="w-full bg-white/10 h-1 rounded mt-2">
                <div className="bg-[#905cff] h-full w-[88%] rounded" />
              </div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/5 flex flex-col">
              <span className="text-[9px] font-mono text-white/40">KEYWORD MATCH</span>
              <span className="text-sm font-bold text-[#39FF6A] mt-1">OPTIMIZED (96%)</span>
              <div className="w-full bg-white/10 h-1 rounded mt-2">
                <div className="bg-[#39FF6A] h-full w-[96%] rounded" />
              </div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-white/60 bg-black/30 p-1.5 rounded border border-white/5">
            Suggested: Quantify impact in full-stack architecture section
          </div>
        </div>
      );

    case 'copilot': // YouTube Copilot
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#1c1214] to-[#0a0808] text-white">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3b00]" />
              <span className="text-white font-bold">YT COPILOT // RAG VECTORS</span>
            </div>
            <span>EMBEDDINGS: 12,800</span>
          </div>
          <div className="p-2.5 rounded bg-black/40 border border-white/5 my-auto flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50">
              <span>QUERY: "EXPLAIN TRANSFORMER ATTENTION"</span>
              <span className="text-[#39FF6A]">TIMESTAMP: 14:32</span>
            </div>
            <div className="text-xs text-white/90">
              "Attention scores are calculated via scaled dot-product of queries & keys, then softmaxed."
            </div>
          </div>
          <div className="flex items-center gap-2 text-[9px] font-mono text-white/40">
            <span className="px-2 py-0.5 rounded bg-white/10 text-white">CHUNKING: 512 T</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white">FAISS / PINECONE</span>
          </div>
        </div>
      );

    case 'journal': // Personal AI Journal
    default:
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#101815] to-[#070d0a] text-white">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF6A]" />
              <span className="text-white font-bold">AI JOURNAL // REFLECTION</span>
            </div>
            <span>STREAK: 42 DAYS</span>
          </div>
          <div className="my-auto p-2.5 rounded bg-black/40 border border-white/5 flex flex-col gap-1">
            <span className="text-[9px] font-mono text-white/40">SENTIMENT DISCOVERY</span>
            <p className="text-xs text-white/90 italic">
              "High creative momentum detected after deploying the neural indexing pipeline."
            </p>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-1.5 border-t border-white/5">
            <span>EMOTIONAL TREND: ↗ POSITIVE</span>
            <span className="text-[#39FF6A]">SYNCHRONIZED</span>
          </div>
        </div>
      );
  }
}
