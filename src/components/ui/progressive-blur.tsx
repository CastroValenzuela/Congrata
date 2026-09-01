'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressiveBlurProps {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  blurIntensity?: number;
  className?: string;
}

export function ProgressiveBlur({
  direction = 'left',
  blurIntensity = 1,
  className,
}: ProgressiveBlurProps) {
  const gradientMap = {
    left: 'linear-gradient(to right, #090D16 0%, rgba(9, 13, 22, 0.8) 40%, transparent 100%)',
    right: 'linear-gradient(to left, #090D16 0%, rgba(9, 13, 22, 0.8) 40%, transparent 100%)',
    top: 'linear-gradient(to bottom, #090D16 0%, rgba(9, 13, 22, 0.8) 40%, transparent 100%)',
    bottom: 'linear-gradient(to top, #090D16 0%, rgba(9, 13, 22, 0.8) 40%, transparent 100%)',
  };

  return (
    <div
      className={cn('pointer-events-none absolute z-10', className)}
      style={{
        background: gradientMap[direction],
        backdropFilter: `blur(${blurIntensity * 8}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity * 8}px)`,
      }}
    />
  );
}

export default ProgressiveBlur;
