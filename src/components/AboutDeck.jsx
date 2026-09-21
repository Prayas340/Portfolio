import React from 'react';
import { ArrowDown } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';
import GlitchText from './GlitchText';

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

          {/* 3 Technical Architecture Pillars - Optimized for mobile fit */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-3 sm:mt-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.num}
                onMouseEnter={playCyberHover}
                className="group p-2.5 sm:p-4 rounded-md border border-white/10 bg-[#111412] hover:border-[#39FF6A]/60 hover:bg-[#151c16] transition-all duration-200 cursor-default"
              >
                <div className="flex items-center gap-2 sm:justify-between sm:mb-2 font-mono text-[10px] sm:text-xs">
                  <GlitchText
                    text={pillar.num}
                    triggerOnView={true}
                    delay={650 + idx * 100}
                    className="text-[#39FF6A] font-bold"
                  />
                  <GlitchText
                    as="h3"
                    text={pillar.title}
                    triggerOnView={true}
                    delay={700 + idx * 100}
                    className="font-heading text-xs sm:text-sm font-bold text-[#EDEDED] group-hover:text-white tracking-wide uppercase"
                  />
                </div>
                <p className="mt-1 font-sans text-[11px] sm:text-xs text-[#8E8E93] group-hover:text-[#B0B4C0] leading-snug hidden xs:block sm:block transition-colors">
                  <GlitchText text={pillar.desc} enableScramble={true} />
                </p>
              </div>
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

