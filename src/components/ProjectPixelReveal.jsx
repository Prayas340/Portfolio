import React, { useRef, useMemo, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

function pseudoNoise(x, y) {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

export default function ProjectPixelReveal({ index = 0, scrollDirection = 'down' }) {
  const ref = useRef(null);
  // Trigger reveal when card is 35% inside the viewport
  const isInView = useInView(ref, { amount: 0.35, once: false });

  // Grid resolution: 8 columns x 5 rows of chunky blocks
  const cols = 8;
  const rows = 5;

  // Track the direction locked in when the card enters the view
  const prevIsInViewRef = useRef(false);
  const [activeDirection, setActiveDirection] = useState(scrollDirection);

  useEffect(() => {
    // When the card transitions into view, lock the reveal direction based on scrollDirection and entry position
    if (isInView && !prevIsInViewRef.current) {
      let resolvedDir = scrollDirection;

      // Geometrical verification: if entering from the left edge of viewport (during reverse/up scroll),
      // or entering from the right edge (during forward/down scroll)
      if (ref.current && typeof window !== 'undefined') {
        const rect = ref.current.getBoundingClientRect();
        if (rect.right < window.innerWidth * 0.6) {
          resolvedDir = 'up';
        } else if (rect.left > window.innerWidth * 0.4) {
          resolvedDir = 'down';
        }
      }

      setActiveDirection(resolvedDir);
    }
    prevIsInViewRef.current = isInView;
  }, [isInView, scrollDirection]);

  const tiles = useMemo(() => {
    const list = [];
    const isReverse = activeDirection === 'up';

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const rand = pseudoNoise(c + 1 + index * 10, r + 1 + index * 5);
        // Stagger left-to-right (c=0 to cols-1) on scroll down,
        // Stagger right-to-left (c=cols-1 to 0) on scroll up / backwards
        const colIndex = isReverse ? cols - 1 - c : c;
        const delay = (colIndex / (cols - 1)) * 0.38 + rand * 0.18;
        list.push({
          id: `${c}-${r}`,
          c,
          r,
          delay,
          isSemi: rand > 0.75, // some edge blocks semi-transparent as seen in reference
        });
      }
    }
    return list;
  }, [cols, rows, index, activeDirection]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {tiles.map((tile) => (
        <motion.div
          key={tile.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={
            isInView
              ? { opacity: 0, scale: 0 }
              : { opacity: tile.isSemi ? 0.6 : 1, scale: 1 }
          }
          transition={{
            duration: 0.32,
            delay: isInView ? tile.delay : 0,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="w-full h-full origin-center"
          style={{
            backgroundColor: tile.isSemi ? '#4E169E' : '#3E1280',
            border: '0.5px solid rgba(80, 21, 168, 0.3)',
          }}
        />
      ))}
    </div>
  );
}
