'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollWordRevealProps {
  children: string;
  className?: string;
  highlightClass?: string;
}

function Word({ 
  children, 
  progress, 
  range 
}: { 
  children: string; 
  progress: MotionValue<number>; 
  range: [number, number] 
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ['#94A3B8', '#0F172A']);

  return (
    <span className="relative mr-2.5 mt-1 inline-block select-none">
      <motion.span style={{ opacity, color }} className="transition-colors duration-200">
        {children}
      </motion.span>
    </span>
  );
}

export function ScrollWordReveal({ children, className = '' }: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.5'],
  });

  const words = children.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(start + 1.5 / words.length, 1);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default ScrollWordReveal;
