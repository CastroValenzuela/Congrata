'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressiveBlurProps {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  blurIntensity?: number;
  color?: string; // Hex, rgb or rgba string (defaults to #F8FAF9)
  className?: string;
}

export function ProgressiveBlur({
  direction = 'left',
  blurIntensity = 1,
  color = '#F8FAF9',
  className,
}: ProgressiveBlurProps) {
  // Convert hex to rgb or rgba for smooth gradient fade
  const isHex = color.startsWith('#');
  const baseColor = isHex ? color : '#F8FAF9';

  const gradientMap = {
    left: `linear-gradient(to right, ${baseColor} 0%, color-mix(in srgb, ${baseColor} 80%, transparent) 40%, transparent 100%)`,
    right: `linear-gradient(to left, ${baseColor} 0%, color-mix(in srgb, ${baseColor} 80%, transparent) 40%, transparent 100%)`,
    top: `linear-gradient(to bottom, ${baseColor} 0%, color-mix(in srgb, ${baseColor} 80%, transparent) 40%, transparent 100%)`,
    bottom: `linear-gradient(to top, ${baseColor} 0%, color-mix(in srgb, ${baseColor} 80%, transparent) 40%, transparent 100%)`,
  };

  return (
    <div
      className={cn('pointer-events-none absolute z-10', className)}
      style={{
        background: gradientMap[direction],
        backdropFilter: blurIntensity > 0 ? `blur(${blurIntensity * 4}px)` : undefined,
        WebkitBackdropFilter: blurIntensity > 0 ? `blur(${blurIntensity * 4}px)` : undefined,
      }}
    />
  );
}

export default ProgressiveBlur;
