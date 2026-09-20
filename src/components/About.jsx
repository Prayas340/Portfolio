import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const bioLines = [
    "I am an engineer and designer obsessively driven by the friction point where complex computational intelligence meets motion-forward web craft.",
    "Specializing in full-stack architecture and Generative AI, I build ultra-responsive digital systems designed to feel immediate, visceral, and uncompromisingly precise.",
    "I architect next-generation web applications, interactive 3D spaces, and AI-native workflows that turn theoretical algorithms into captivating human tools."
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A] border-b border-[#39FF6A]/10">
      {/* Background Cyber Texture */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#39FF6A] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#39FF6A]" />
          <span>// 02 — PHILOSOPHY & ABOUT</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#EDEDED] mb-10"
        >
          Architecting systems with <span className="text-[#39FF6A]">soul</span> and speed.
        </motion.h2>

        {/* Paragraph Lines with Masked Overflow Staggered Reveal */}
        {/* PLACEHOLDER — insert Prayas's real bio text here once provided */}
        <div className="flex flex-col gap-6 max-w-[68ch]">
          {bioLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + idx * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="font-sans text-lg sm:text-2xl text-[#b0b4c0] leading-[1.6] font-normal"
              >
                {idx === 1 ? (
                  <>
                    Specializing in full-stack architecture and Generative AI, I believe in{' '}
                    <span className="text-[#39FF6A] font-medium underline decoration-[#39FF6A]/40 underline-offset-4">
                      bridging raw computational intelligence with fluid, high-craft aesthetics
                    </span>
                    —turning complex systems into effortless, cinematic interactions.
                  </>
                ) : (
                  line
                )}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Metadata Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs sm:text-sm text-[#8E8E93]"
        >
          <span className="text-[#39FF6A] font-semibold">RCC Institute of Information Technology</span>
          <span className="text-white/20">·</span>
          <span>BTech CSE, 1st Year</span>
        </motion.div>
      </div>
    </section>
  );
}
