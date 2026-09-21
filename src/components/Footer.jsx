import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { playCyberHover, playCyberClick } from '../utils/audio';

// Interactive Dot Matrix Canvas Banner for "PORTFOLIO/PRAYAS"
function DotMatrixBanner({ text = "PORTFOLIO/PRAYAS" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      if (width <= 0) return;

      // Aspect ratio for the huge banner: height scales with width
      const height = Math.max(110, Math.min(260, width * 0.17));

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Offscreen canvas for raster text sampling
      const off = document.createElement('canvas');
      const offCtx = off.getContext('2d');
      off.width = Math.floor(width);
      off.height = Math.floor(height);

      // Measure font size to span ~98% of container width
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

      // Sample raster pixel data
      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;

      // Clear main canvas (background shows the lime green)
      ctx.clearRect(0, 0, width, height);

      // Dot Matrix settings (grid steps)
      const dotStep = Math.max(4.5, Math.min(8.5, width / 175));
      const dotSize = dotStep * 0.72; // Square pixel dots matching reference
      const mouse = mousePosRef.current;

      for (let y = dotStep / 2; y < height; y += dotStep) {
        for (let x = dotStep / 2; x < width; x += dotStep) {
          const pixelIndex = (Math.floor(y) * width + Math.floor(x)) * 4;
          const alpha = data[pixelIndex + 3] || 0;

          // Interactive magnetic wave with cursor
          const dist = Math.hypot(x - mouse.x, y - mouse.y);
          const isNear = dist < 80;
          const boost = isNear ? (1 - dist / 80) * 0.45 : 0;

          if (alpha > 75) {
            // Lit text dot: Solid black square pixel
            ctx.fillStyle = '#080A08';
            const s = dotSize * (1 + boost * 0.25);
            ctx.fillRect(x - s / 2, y - s / 2, s, s);
          } else {
            // Unlit background matrix dot: Faint translucent square pixel
            ctx.fillStyle = isNear ? `rgba(0, 0, 0, ${0.14 + boost * 0.2})` : 'rgba(0, 0, 0, 0.085)';
            const s = (dotSize * 0.5) * (1 + boost * 0.4);
            ctx.fillRect(x - s / 2, y - s / 2, s, s);
          }
        }
      }

      ctx.restore();
    };

    // Render initially and on font load
    if (document.fonts) {
      document.fonts.ready.then(render);
    }
    render();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 };
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
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
  return (
    <footer
      id="contact"
      className="relative pt-16 sm:pt-24 pb-8 px-6 sm:px-12 lg:px-20 bg-[#8EE929] text-black overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Top Section: Heading + Buttons on Left, Directory Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-black/20">
          
          {/* Left Column: Stamp, Big Headline, Action Buttons */}
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

          {/* Right Column: Clean 3-Column Directory matching reference photo */}
          <div className="lg:col-span-6 lg:border-l lg:border-black/20 lg:pl-10 xl:pl-16 pt-2">
            <div className="grid grid-cols-3 gap-6 sm:gap-8 font-mono text-xs sm:text-sm">
              
              {/* Category Column */}
              <div className="flex flex-col gap-4 text-black/55 font-mono text-xs uppercase tracking-widest font-bold">
                <span>PORTFOLIO</span>
                <span>CODE & DEV</span>
                <span>PRACTICE</span>
                <span>SOCIAL</span>
                <span>DIRECT LINE</span>
              </div>

              {/* Primary Links Column */}
              <div className="flex flex-col gap-4 font-mono font-bold text-black uppercase">
                <a
                  href="#projects"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>WORK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/Prayas340"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://leetcode.com/u/Prayas_dey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>LEETCODE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prayas-dey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:deyprayas3@gmail.com"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Secondary Links Column */}
              <div className="flex flex-col gap-4 font-mono font-bold text-black uppercase">
                <a
                  href="#experience"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>EXPERIENCE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/Prayas340?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>REPOSITORIES</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://leetcode.com/u/Prayas_dey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>SOLUTIONS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>TWITTER</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:+918444807833"
                  onMouseEnter={playCyberHover}
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>CALL DIRECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Giant Screen-Spanning Dot-Matrix Banner: "PORTFOLIO/PRAYAS" */}
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
  );
}
