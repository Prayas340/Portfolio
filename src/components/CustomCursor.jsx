import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#39FF6A] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovered ? 44 : 26,
          height: isHovered ? 44 : 26,
          backgroundColor: isHovered ? 'rgba(57, 255, 106, 0.15)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(57, 255, 106, 0.5)' : 'none',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
      {/* Inner Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#39FF6A] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  );
}
