import React, { useRef, useEffect } from 'react';

// Deterministic pseudo-random generator so the pattern is consistent across renders
function pseudoNoise(x, y) {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

export default function PixelDissolve({ scrollYProgress, startProgress = 0.48, endProgress = 0.74 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cols = 18;
    const rows = 11;

    // Precompute tile thresholds
    // Left side (c=0) is adjacent to the green projects area -> threshold is HIGH (stays green longest)
    // Right side (c=cols-1) is adjacent to the black About deck -> threshold is LOW (dissolves early)
    const grid = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const rand = pseudoNoise(c + 1, r + 1);
        const leftFactor = (cols - 1 - c) / (cols - 1);
        const threshold = leftFactor * 0.70 + rand * 0.30;
        grid.push({ c, r, threshold });
      }
    }

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Get current scroll progress from Framer Motion value
      const scrollVal = scrollYProgress.get ? scrollYProgress.get() : 0;
      let progress = 0;
      if (scrollVal <= startProgress) {
        progress = 0;
      } else if (scrollVal >= endProgress) {
        progress = 1;
      } else {
        progress = (scrollVal - startProgress) / (endProgress - startProgress);
      }

      const cellW = width / cols;
      const cellH = height / rows;

      ctx.fillStyle = '#8fd92f';
      ctx.strokeStyle = '#7ec524';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < grid.length; i++) {
        const { c, r, threshold } = grid[i];
        const diff = threshold - progress;

        if (diff > 0) {
          // Tile is visible: smoothly pop/shrink when near threshold
          const scale = Math.min(1, Math.max(0, diff / 0.08));
          const drawW = cellW * scale;
          const drawH = cellH * scale;
          const x = c * cellW + (cellW - drawW) / 2;
          const y = r * cellH + (cellH - drawH) / 2;

          ctx.fillRect(x, y, drawW, drawH);
          ctx.strokeRect(x, y, drawW, drawH);
        }
      }

      ctx.restore();
    };

    render();

    // High-frequency, buttery smooth reactive listener (works instantly on forward & reverse scroll)
    const unsubscribe = scrollYProgress.on('change', () => {
      requestAnimationFrame(render);
    });

    window.addEventListener('resize', render);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', render);
    };
  }, [scrollYProgress, startProgress, endProgress]);

  return (
    <div className="relative shrink-0 w-screen sm:w-[70vw] lg:w-[60vw] h-full flex items-center justify-center overflow-hidden select-none bg-[#0A0A0A]">
      {/* Background layer: Deep Cyber Black with HUD Details (revealed as green pixels dissolve) */}
      <div className="absolute inset-0 bg-[#0A0A0A] flex flex-col justify-between p-6 sm:p-10 pointer-events-none">
        {/* HUD Top Status */}
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-white/40 tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#39FF6A] animate-pulse" />
            <span className="text-[#39FF6A] font-bold">KOLKATA, IN</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>SYS.TRANSITION // 01 → 02</span>
            <span className="text-white/60">60 FPS MATRIX</span>
          </div>
        </div>

        {/* Central HUD Target Reticle */}
        <div className="relative my-auto flex items-center justify-center">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-white/20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-t-2 border-[#39FF6A] animate-spin" style={{ animationDuration: '8s' }} />
            <div className="w-2 h-2 rounded-full bg-[#39FF6A]" />
            <span className="absolute -top-3 font-mono text-[9px] text-[#39FF6A]">+</span>
            <span className="absolute -bottom-3 font-mono text-[9px] text-[#39FF6A]">+</span>
            <span className="absolute -left-3 font-mono text-[9px] text-[#39FF6A]">+</span>
            <span className="absolute -right-3 font-mono text-[9px] text-[#39FF6A]">+</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <span className="font-title text-5xl sm:text-7xl font-extrabold uppercase tracking-normal text-white/20">
              PHILOSOPHY
            </span>
          </div>
        </div>

        {/* HUD Bottom Status */}
        <div className="flex items-center justify-between font-mono text-[10px] text-white/30 border-t border-white/10 pt-3">
          <span>PIXEL MATRIX // RESOLUTION 18x11</span>
          <span className="text-[#39FF6A]">DISSOLVING INTO CORE PROTOCOL</span>
        </div>
      </div>

      {/* GPU Accelerated Canvas Pixel Dissolve Matrix */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle Trace Line */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="40%" x2="45%" y2="40%" stroke="#6fb816" strokeWidth="1.5" />
          <line x1="45%" y1="40%" x2="60%" y2="65%" stroke="#39FF6A" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="60%" y1="65%" x2="100%" y2="65%" stroke="#39FF6A" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
