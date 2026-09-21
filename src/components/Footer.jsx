import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';

// Official Brand SVGs
const GitHubIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LeetCodeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.216 5.216 0 0 0-3.79-1.57c-1.42 0-2.84.542-3.924 1.626L3.99 12.37c-2.167 2.167-2.167 5.68 0 7.848l4.332 4.363c1.084 1.084 2.504 1.626 3.924 1.626s2.84-.542 3.924-1.626l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038z" />
    <path d="M20.811 13.01H10.666c-.754 0-1.365.611-1.365 1.365s.611 1.365 1.365 1.365h10.145c.754 0 1.365-.611 1.365-1.365s-.611-1.365-1.365-1.365z" fill="#FFA116" />
  </svg>
);

const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

// Liquid Wave Ripple Dot Matrix Canvas for "PORTFOLIO/PRAYAS"
function DotMatrixBanner({ text = "PORTFOLIO/PRAYAS" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isHovering: false,
    speed: 0,
    waveEnergy: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    let cachedImgData = null;
    let cachedWidth = 0;
    let cachedHeight = 0;

    const generateTextRaster = (width, height) => {
      if (!width || !height || width <= 0 || height <= 0) return;
      const off = document.createElement('canvas');
      const offCtx = off.getContext('2d');
      off.width = Math.floor(width);
      off.height = Math.floor(height);

      let fontSize = height * 0.92;
      offCtx.font = `900 ${fontSize}px 'Arial Black', Impact, 'Rajdhani', sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      let metrics = offCtx.measureText(text);
      if (metrics.width > 0) {
        fontSize = fontSize * ((width * 0.97) / metrics.width);
        offCtx.font = `900 ${fontSize}px 'Arial Black', Impact, 'Rajdhani', sans-serif`;
      }

      offCtx.fillStyle = '#000000';
      offCtx.fillText(text, width / 2, height / 2 + fontSize * 0.04);

      cachedImgData = offCtx.getImageData(0, 0, width, height);
      cachedWidth = width;
      cachedHeight = height;
    };

    const loop = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      if (width <= 0) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      const height = Math.floor(Math.max(110, Math.min(260, width * 0.17)));

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        generateTextRaster(width, height);
      } else if (!cachedImgData || cachedWidth !== width || cachedHeight !== height) {
        generateTextRaster(width, height);
      }

      const mouse = mouseRef.current;

      // Smooth lerp mouse towards pointer position
      if (mouse.isHovering) {
        const dx = mouse.targetX - mouse.x;
        const dy = mouse.targetY - mouse.y;
        mouse.speed = Math.hypot(dx, dy);
        mouse.x += dx * 0.22;
        mouse.y += dy * 0.22;
        mouse.waveEnergy = Math.min(1, mouse.waveEnergy + 0.12);
      } else {
        mouse.waveEnergy *= 0.93;
        mouse.speed *= 0.88;
        if (mouse.waveEnergy < 0.005) {
          mouse.waveEnergy = 0;
        }
      }

      time += 0.045;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const dotStep = Math.max(4.5, Math.min(8.5, width / 175));
      const dotSize = dotStep * 0.72;
      const radius = 175; // wave ripple radius
      const data = cachedImgData ? cachedImgData.data : null;

      for (let y = dotStep / 2; y < height; y += dotStep) {
        for (let x = dotStep / 2; x < width; x += dotStep) {
          let alpha = 0;
          if (data) {
            const pixelIndex = (Math.floor(y) * width + Math.floor(x)) * 4;
            alpha = data[pixelIndex + 3] || 0;
          }

          let finalX = x;
          let finalY = y;
          let factor = 0;

          if (mouse.waveEnergy > 0) {
            const dist = Math.hypot(x - mouse.x, y - mouse.y);
            if (dist < radius) {
              factor = Math.pow(1 - dist / radius, 1.35) * mouse.waveEnergy;
              const angle = Math.atan2(y - mouse.y, x - mouse.x);

              // Traveling ripple wave + fluid sinusoidal undulation matching the screenshot
              const ripple = Math.sin(dist * 0.075 - time * 3.8) * factor * 22;
              const harmonicX = Math.sin(y * 0.055 + time * 2.2) * factor * 12;
              const harmonicY = Math.cos(x * 0.055 + time * 2.2) * factor * 14;

              finalX = x + Math.cos(angle) * ripple + harmonicX;
              finalY = y + Math.sin(angle) * ripple + harmonicY;
            }
          }

          if (alpha > 70) {
            // Lit text dot: Solid black with chromatic deep purple/violet wave shift
            if (factor > 0.035) {
              const r = Math.round(8 + factor * 85);
              const g = Math.round(10 + factor * 10);
              const b = Math.round(8 + factor * 145);
              ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            } else {
              ctx.fillStyle = '#080A08';
            }
            const s = dotSize * (1 + factor * 0.28);
            ctx.fillRect(finalX - s / 2, finalY - s / 2, s, s);
          } else {
            // Background unlit dot
            if (factor > 0.035) {
              const r = Math.round(factor * 65);
              const b = Math.round(factor * 115);
              const alphaVal = 0.08 + factor * 0.25;
              ctx.fillStyle = `rgba(${r}, 12, ${b}, ${alphaVal})`;
            } else {
              ctx.fillStyle = 'rgba(0, 0, 0, 0.085)';
            }
            const s = (dotSize * 0.5) * (1 + factor * 0.35);
            ctx.fillRect(finalX - s / 2, finalY - s / 2, s, s);
          }
        }
      }

      // Cursor Ring (matching the circular ring in reference screenshot)
      if (mouse.isHovering && mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 22, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(10, 20, 10, 0.75)';
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (cachedWidth > 0 && cachedHeight > 0) {
          generateTextRaster(cachedWidth, cachedHeight);
        }
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouse = mouseRef.current;
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
      if (mouse.x < -500) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    const handleMouseEnter = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouse = mouseRef.current;
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.x = mouse.targetX;
      mouse.y = mouse.targetY;
      mouse.isHovering = true;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [text]);

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden select-none my-2">
      <canvas ref={canvasRef} className="block w-full cursor-crosshair" />
      <span className="sr-only">{text}</span>
    </div>
  );
}

export default function Footer() {
  const socialProfiles = [
    {
      category: 'CODE & REPOSITORIES',
      label: 'GITHUB',
      handle: '@Prayas340',
      url: 'https://github.com/Prayas340',
      icon: <GitHubIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
      badgeBg: 'bg-black text-[#8EE929]',
    },
    {
      category: 'ALGORITHMS & PRACTICE',
      label: 'LEETCODE',
      handle: '@Prayas_dey',
      url: 'https://leetcode.com/u/Prayas_dey/',
      icon: <LeetCodeIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
      badgeBg: 'bg-black text-[#FFA116]',
    },
    {
      category: 'SOCIAL & NETWORK',
      label: 'LINKEDIN',
      handle: 'prayas-dey',
      url: 'https://www.linkedin.com/in/prayas-dey/',
      icon: <LinkedInIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
      badgeBg: 'bg-black text-[#0A66C2]',
    },
  ];

  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(footerRef.current);

    window.addEventListener('resize', updateHeight);
    if (document.fonts) {
      document.fonts.ready.then(updateHeight);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div
      id="contact"
      className="relative w-full [clip-path:polygon(0%_0,100%_0%,100%_100%,0%_100%)] z-0 pointer-events-auto"
      style={{ height: footerHeight ? `${footerHeight}px` : 'auto' }}
    >
      <div
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full z-0 pointer-events-auto"
      >
        <footer
          className="relative pt-16 sm:pt-24 pb-8 px-6 sm:px-12 lg:px-20 bg-[#8EE929] text-black overflow-hidden select-none"
        >
          <div className="max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Top Section: Heading + Buttons on Left, Social Profiles with Logos on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-black/20">
          
          {/* Left Column: Stamp, Big Headline in Neoradical font, Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Spinning Stamp Emblem */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-black/40 flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                className="w-full h-full flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full p-1.5 overflow-visible">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="font-mono text-[9.5px] uppercase font-bold tracking-[2.5px] fill-black">
                    <textPath href="#circlePath">
                      ★ PRAYAS DEY ★ PORTFOLIO 2026
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <span className="absolute w-2 h-2 rounded-full bg-black" />
            </div>

            {/* Main Headline in Neoradical font */}
            <h2 className="font-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-black leading-[0.92] mb-8 select-none">
              LET'S CREATE<br />
              GOOD STUFF<br />
              TOGETHER
            </h2>

            {/* Action Buttons: Shoot a message + Download CV */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="mailto:deyprayas3@gmail.com"
                onMouseEnter={playCyberHover}
                onClick={playCyberClick}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-md border border-black/35 hover:border-black bg-black/5 hover:bg-black text-black hover:text-[#8EE929] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                SHOOT A MESSAGE
              </a>

              <a
                href="/SWE_Resume_Template.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Prayas_Dey_Resume.pdf"
                onMouseEnter={playCyberHover}
                onClick={playCyberClick}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-md border border-black/35 hover:border-black bg-black/5 hover:bg-black text-black hover:text-[#8EE929] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <span>DOWNLOAD CV</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Column: Exclusively GitHub, LeetCode & LinkedIn with Brand Logos beside Titles */}
          <div className="lg:col-span-6 lg:border-l lg:border-black/20 lg:pl-10 xl:pl-16 flex flex-col justify-center gap-7 sm:gap-9 pt-2">
            {socialProfiles.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5 group">
                <span className="font-mono text-[11px] uppercase tracking-widest text-black/60 font-bold">
                  // {item.category}
                </span>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-3.5 text-black hover:opacity-80 transition-all duration-200"
                >
                  {/* Brand Logo beside the title */}
                  <span className={`shrink-0 p-2 sm:p-2.5 rounded-lg ${item.badgeBg} shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    {item.icon}
                  </span>

                  {/* Profile Title */}
                  <span className="font-heading text-2xl sm:text-4xl font-black uppercase tracking-tight text-black group-hover:underline decoration-2 underline-offset-4">
                    {item.label}
                  </span>

                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black/60 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Handle under the title */}
                <span className="font-mono text-xs sm:text-sm text-black/70 pl-12 sm:pl-15 font-semibold">
                  {item.handle}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Giant Screen-Spanning Dot-Matrix Banner with Liquid Wave Distortion */}
        <div className="pt-4 sm:pt-6">
          <DotMatrixBanner text="PORTFOLIO/PRAYAS" />
        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-black/75 font-semibold border-t border-black/15">
          <div>
            © 2026 by Prayas Dey. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-black">
            <span>DESIGNED WITH MOTION & CRAFT</span>
            <span className="font-bold bg-black text-[#8EE929] px-2 py-0.5 rounded-sm">
              SYS: ONLINE
            </span>
          </div>
        </div>

      </div>
        </footer>
      </div>
    </div>
  );
}
