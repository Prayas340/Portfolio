import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'framer-motion';
import { playCyberHover } from '../utils/audio';

const CYBER_GLYPHS = "!<>-_\\/[]{}—=+*^?#_01アイウエオカキクケコ";

export default function GlitchText({ 
  text, 
  className = "", 
  glitchColor = "#39FF6A",
  as: Component = "span",
  enableScramble = true,
  triggerOnView = false,
  delay = 0,
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const hasTriggeredRef = useRef(false);

  const scramble = useCallback(() => {
    if (!enableScramble) return;
    setIsGlitching(true);
    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }

      iteration += 1 / 2;
    }, 28);
  }, [enableScramble, text]);

  // Trigger scramble on entrance when card/section scrolls into view
  useEffect(() => {
    if (triggerOnView && isInView && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      const timeout = setTimeout(() => {
        scramble();
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [triggerOnView, isInView, delay, scramble]);

  // Periodic subtle glitch twitch
  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.65) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 220);
      }
    }, 4500 + Math.random() * 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Component
      ref={containerRef}
      onMouseEnter={() => {
        playCyberHover();
        scramble();
      }}
      data-text={displayText}
      className={`relative inline-block glitch-hover-trigger ${isGlitching ? 'glitch-slice glitch-active' : ''} ${className}`}
      style={{
        textShadow: isGlitching ? `2px 0 ${glitchColor}, -2px 0 #00ffff` : 'none',
      }}
    >
      <span className="relative z-10">{displayText}</span>

      {/* Persistent subtle RGB chromatic aberration on pseudo elements */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 left-0 -z-10 transition-opacity text-[#ff0055] ${isGlitching ? 'opacity-90' : 'opacity-0 group-hover:opacity-80'}`}
        style={{ transform: 'translate(1.5px, -1px)', clipPath: 'polygon(0 30%, 100% 30%, 100% 50%, 0 50%)' }}
      >
        {displayText}
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 left-0 -z-10 transition-opacity text-[#00ffff] ${isGlitching ? 'opacity-90' : 'opacity-0 group-hover:opacity-80'}`}
        style={{ transform: 'translate(-1.5px, 1px)', clipPath: 'polygon(0 60%, 100% 60%, 100% 85%, 0 85%)' }}
      >
        {displayText}
      </span>
    </Component>
  );
}

