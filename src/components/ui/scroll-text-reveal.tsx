'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollWordRevealProps {
  children: string;
  className?: string;
  startColor?: string;
  endColor?: string;
  startOpacity?: number;
  endOpacity?: number;
}

function Word({ 
  children, 
  progress, 
  range,
  startColor,
  endColor,
  startOpacity,
  endOpacity,
}: { 
  children: string; 
  progress: MotionValue<number>; 
  range: [number, number];
  startColor: string;
  endColor: string;
  startOpacity: number;
  endOpacity: number;
}) {
  const opacity = useTransform(progress, range, [startOpacity, endOpacity]);
  const color = useTransform(progress, range, [startColor, endColor]);

  return (
    <span className="relative mr-2.5 mt-1 inline-block select-none">
      <motion.span style={{ opacity, color }} className="transition-colors duration-150 font-heading">
        {children}
      </motion.span>
    </span>
  );
}

export function ScrollWordReveal({ 
  children, 
  className = '',
  startColor = 'rgba(255, 255, 255, 0.16)',
  endColor = '#FFFFFF',
  startOpacity = 0.2,
  endOpacity = 1,
}: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const words = children.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(start + 1.2 / words.length, 1);
        return (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
            startColor={startColor}
            endColor={endColor}
            startOpacity={startOpacity}
            endOpacity={endOpacity}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default ScrollWordReveal;
