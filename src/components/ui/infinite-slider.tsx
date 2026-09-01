'use client';

import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  speed?: number; // duration in seconds or speed factor
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 64,
  speed = 35,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const currentDuration = isHovered && speedOnHover ? speedOnHover : speed;

  return (
    <div
      className={cn('overflow-hidden flex w-full select-none', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex shrink-0 items-center justify-around"
        style={{
          gap: `${gap}px`,
          animation: `infinite-marquee ${currentDuration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: isHovered && speedOnHover === 0 ? 'paused' : 'running',
        }}
      >
        {children}
      </div>

      <div
        className="flex shrink-0 items-center justify-around"
        aria-hidden="true"
        style={{
          gap: `${gap}px`,
          animation: `infinite-marquee ${currentDuration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: isHovered && speedOnHover === 0 ? 'paused' : 'running',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default InfiniteSlider;
