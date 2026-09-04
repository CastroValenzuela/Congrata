'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = '', delay = 0, ...props }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
