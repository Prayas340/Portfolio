import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';
import GlitchText from './GlitchText';

// Green Glassmorphic Pillar Card with Cursor Tracking Distortion
function PillarCard({ pillar, idx }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // 3D Magnetic Tilt & Distortion Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 260 };
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-120, 120], [-10, 10]), springConfig);

  // Micro-lens distortion offsets
  const distortX = useSpring(useTransform(x, [-120, 120], [-5, 5]), springConfig);
  const distortY = useSpring(useTransform(y, [-80, 80], [-5, 5]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    setCursorPos({ x: clientX, y: clientY });
    x.set(clientX - rect.width / 2);
    y.set(clientY - rect.height / 2);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playCyberHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 900,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: 1.025 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="group relative p-3 sm:p-4 rounded-xl green-glass-panel overflow-hidden cursor-default transition-all duration-300"
    >
      {/* 1. Dynamic Cursor Spotlight (Neon Green Caustic Glass Glow) */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(220px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(57, 255, 106, 0.28), rgba(0, 255, 100, 0.08) 45%, transparent 80%)`,
          }}
        />
      )}

      {/* 2. Interactive Neon Border Glow tracking cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-xl transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(160px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(57, 255, 106, 0.85), transparent 70%)`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1px',
          }}
        />
      )}

      {/* 3. Glass Specular Diagonal Reflection Sheen */}
      <div className="absolute inset-0 glass-specular-shine opacity-60 pointer-events-none" />

      {/* 4. Mouse-reactive Cyber Distortion Grid Wave */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          x: distortX,
          y: distortY,
          backgroundImage: 'radial-gradient(rgba(57, 255, 106, 0.4) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* 5. Optical Distortion Lens Slice reacting to cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-35 cyber-lens-active"
          style={{
            background: `radial-gradient(130px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 255, 255, 0.18), rgba(255, 0, 85, 0.14) 55%, transparent 75%)`,
            mixBlendMode: 'screen',
          }}
        />
      )}

      {/* 6. Card Content with 3D Depth Layering */}
      <div className="relative z-20 flex flex-col h-full justify-between" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-center gap-2 sm:justify-between sm:mb-2 font-mono text-[10px] sm:text-xs">
          <GlitchText
            text={pillar.num}
            triggerOnView={true}
            delay={650 + idx * 100}
            className="text-[#39FF6A] font-bold drop-shadow-[0_0_8px_rgba(57,255,106,0.6)]"
          />
          <GlitchText
            as="h3"
            text={pillar.title}
            triggerOnView={true}
            delay={700 + idx * 100}
            className="font-heading text-xs sm:text-sm font-bold text-[#EDEDED] group-hover:text-white tracking-wide uppercase group-hover:drop-shadow-[0_0_12px_rgba(57,255,106,0.4)] transition-all"
          />
        </div>
        <p className="mt-1.5 font-sans text-[11px] sm:text-xs text-[#9DA3AF] group-hover:text-[#D1D5DB] leading-snug hidden xs:block sm:block transition-colors">
          <GlitchText text={pillar.desc} enableScramble={true} />
        </p>

        {/* Subtle Bottom Status Indicator */}
        <div className="mt-3 flex items-center justify-between font-mono text-[8px] text-[#39FF6A]/40 group-hover:text-[#39FF6A]/80 transition-colors">
          <span>// PROTOCOL: ACTIVE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#39FF6A] opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutDeck() {
  const pillars = [
    {
      num: '01',
      title: 'FULL-STACK SYSTEMS',
      desc: 'High-throughput cloud architectures, REST/GraphQL APIs, resilient caching, and real-time event pipelines.',
    },
    {
      num: '02',
      title: 'GEN AI & RAG RETRIEVAL',
      desc: 'Vector-indexed semantic retrieval, dynamic prompt synthesis, contextual embeddings, and autonomous agent loops.',
    },
    {
      num: '03',
      title: 'MOTION CRAFT & INTERACTION',
      desc: 'Visceral 60fps kinetic interfaces, spatial WebGL simulations, micro-haptics, and audio-reactive cyber ergonomics.',
    },
  ];

  return (
    <div
      id="about"
      className="shrink-0 w-screen sm:w-[85vw] lg:w-[1100px] h-full flex flex-col justify-center items-center px-4 sm:px-14 lg:px-20 bg-[#0A0A0A] border-l border-white/10 relative select-none"
    >
      {/* Background Cyber Grid Lines */}
      <div className="absolute inset-0 cyber-grid-bg opacity-35 pointer-events-none" />

      {/* Centered Constrained Content Container - Fits 100% within mobile viewport */}
      <div className="relative z-10 w-full max-w-[92vw] sm:max-w-4xl flex flex-col justify-center my-auto py-16 sm:py-8">
        {/* Top HUD Row */}
        <div className="flex items-center justify-between pb-3 sm:pb-5 border-b border-white/10 font-mono text-[10px] sm:text-xs text-white/50">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF6A] animate-pulse" />
            <GlitchText
              text="// 02 — PHILOSOPHY & ABOUT"
              triggerOnView={true}
              className="text-[#39FF6A] font-bold tracking-wider uppercase text-[10px] sm:text-xs"
            />
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-white/70">
              <GlitchText text="SYS: ONLINE" triggerOnView={true} delay={150} />
            </span>
            <GlitchText text="EST. 2026" className="text-white/40 hidden xs:inline" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="mt-3 sm:mt-6">
          <h2 className="font-heading text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#EDEDED] leading-tight">
            <GlitchText text="ARCHITECTING SYSTEMS WITH " triggerOnView={true} delay={100} />
            <GlitchText
              text="SOUL"
              triggerOnView={true}
              delay={250}
              glitchColor="#39FF6A"
              className="text-[#39FF6A] underline decoration-[#39FF6A]/40 underline-offset-4"
            />{' '}
            <GlitchText text="AND SPEED." triggerOnView={true} delay={350} />
          </h2>

          {/* Punchy Editorial Statement */}
          <p className="mt-2.5 sm:mt-5 text-xs sm:text-base lg:text-lg text-[#B0B4C0] font-sans leading-relaxed">
            I am an engineer and designer obsessively driven by the friction point where{' '}
            <GlitchText text="complex computational intelligence" triggerOnView={true} delay={400} className="text-white font-medium hover:text-[#39FF6A] transition-colors" />{' '}
            meets{' '}
            <GlitchText text="motion-forward web craft" triggerOnView={true} delay={450} className="text-white font-medium hover:text-[#39FF6A] transition-colors" />.{' '}
            Specializing in{' '}
            <GlitchText text="full-stack architecture" triggerOnView={true} delay={500} className="text-white font-medium hover:text-[#39FF6A] transition-colors" />{' '}
            and{' '}
            <GlitchText text="Generative AI" triggerOnView={true} delay={550} className="text-white font-medium hover:text-[#39FF6A] transition-colors" />, I bridge theoretical algorithms with{' '}
            <GlitchText text="visceral, cinematic human tools" triggerOnView={true} delay={600} glitchColor="#39FF6A" className="text-[#39FF6A] font-medium" />.
          </p>

          {/* 3 Technical Architecture Pillars - Green Glassmorphic with Mouse Cursor Distortion Tracking */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 mt-3 sm:mt-6">
            {pillars.map((pillar, idx) => (
              <PillarCard key={pillar.num} pillar={pillar} idx={idx} />
            ))}
          </div>
        </div>

        {/* Bottom Affiliation & Scroll Cue */}
        <div className="mt-3 sm:mt-6 pt-3 sm:pt-5 border-t border-white/10 flex items-center justify-between font-mono text-[10px] sm:text-xs text-white/50">
          <div className="flex items-center gap-2 sm:gap-3">
            <GlitchText
              text="RCC Institute of Information Technology"
              triggerOnView={true}
              delay={800}
              className="text-[#39FF6A] font-semibold truncate max-w-[200px] sm:max-w-none"
            />
            <span className="text-white/20">·</span>
            <GlitchText text="BTech CSE" className="hidden xs:inline text-white/50" />
          </div>

          {/* Cue that vertical scroll is next */}
          <a
            href="#experience"
            onClick={playCyberClick}
            onMouseEnter={playCyberHover}
            className="flex items-center gap-1.5 text-[#39FF6A] text-[10px] sm:text-[11px] font-bold shrink-0 hover:underline cursor-pointer"
          >
            <GlitchText text="EXPERIENCE" triggerOnView={true} delay={850} />
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
}


