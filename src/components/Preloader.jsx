import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isGlitching, setIsGlitching] = useState(true);
  const [flickerOffset, setFlickerOffset] = useState({ x: 0, y: 0 });
  const count = useMotionValue(0);

  const text = "PRAYAS DEY";

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Animate percentage 0 -> 100 over 1.8s
    const controls = animate(count, 100, {
      duration: 1.8,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (latest) => {
        setPercent(Math.floor(latest));
      },
      onComplete: () => {
        // Settle clean for 0.3s
        setIsGlitching(false);
        setTimeout(() => {
          if (onComplete) onComplete();
          document.body.style.overflow = '';
        }, 300);
      }
    });

    // Random glitch jump every 150-250ms
    const interval = setInterval(() => {
      if (Math.random() > 0.35) {
        setFlickerOffset({
          x: (Math.random() - 0.5) * 8,
          y: (Math.random() - 0.5) * 4
        });
        setTimeout(() => {
          setFlickerOffset({ x: 0, y: 0 });
        }, 60);
      }
    }, 180);

    return () => {
      controls.stop();
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1]
        }
      }}
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#0A0A0A] p-6 sm:p-12 select-none overflow-hidden"
    >
      {/* HUD Corner Reticles */}
      <div className="pointer-events-none absolute inset-4 sm:inset-8 border border-[#39FF6A]/20">
        <span className="absolute -top-1.5 -left-1.5 font-mono text-xs text-[#39FF6A]">+</span>
        <span className="absolute -top-1.5 -right-1.5 font-mono text-xs text-[#39FF6A]">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-[#39FF6A]">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-[#39FF6A]">+</span>
      </div>

      {/* Top Preloader Status */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs tracking-widest text-[#8E8E93] uppercase">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#39FF6A] animate-ping" />
          <span className="text-[#39FF6A]">INITIALIZING SYS.DEV</span>
        </div>
        <div className="hidden sm:block">PORTFOLIO // 2026</div>
      </div>

      {/* Center Glitch Text */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
        <div 
          className="flex items-center justify-center font-heading text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#EDEDED] select-none"
          style={{
            transform: `translate(${flickerOffset.x}px, ${flickerOffset.y}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              data-text={char === ' ' ? '\u00A0' : char}
              className={`inline-block relative ${isGlitching ? 'glitch-slice' : ''}`}
              style={{
                color: isGlitching && Math.random() > 0.85 ? '#39FF6A' : '#EDEDED',
                marginRight: char === ' ' ? '0.35em' : '0.02em',
                textShadow: isGlitching ? '0 0 10px rgba(57, 255, 106, 0.4)' : 'none'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        
        <div className="mt-4 font-mono text-xs tracking-widest text-[#39FF6A]/80 uppercase">
          {isGlitching ? "DECIPHERING RUNTIME ENVIRONMENT..." : "SYSTEM READY"}
        </div>
      </div>

      {/* Bottom Counter & Progress Bar */}
      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-end justify-between font-mono">
          <div className="text-xs text-[#8E8E93]">
            STATUS: <span className="text-[#39FF6A]">{percent < 100 ? 'LOADING ASSETS' : 'DEPLOYED'}</span>
          </div>
          <div className="text-2xl sm:text-4xl font-semibold tracking-tighter text-[#39FF6A]">
            {percent < 10 ? `0${percent}` : percent}%
          </div>
        </div>

        {/* 2px Neon Green Progress Bar */}
        <div className="w-full h-[2px] bg-[#1a1a1a] overflow-hidden relative">
          <motion.div
            className="h-full bg-[#39FF6A] shadow-[0_0_12px_#39FF6A]"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
