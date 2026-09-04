'use client';

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only activate on desktop devices with fine pointer (mouse / trackpad)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    // Hide native browser cursor when custom cursor is active
    document.body.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // GSAP quickSetter for instantaneous zero-lag dot positioning
    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotX(mouseX);
      setDotY(mouseY);
      setIsVisible(true);

      // Check context under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = target.closest('a, button, [role="button"], input, select, textarea');
        setCursorText('');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing physics for the outer ring / pill
    let rafId: number;
    const render = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      gsap.set(ring, {
        x: ringX,
        y: ringY,
      });

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none hidden md:block">
      {/* Central Precise Emerald Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#4EA840] shadow-[0_0_12px_#4EA840] transition-opacity duration-150 ${
          isVisible ? (cursorText ? 'opacity-0' : 'opacity-100') : 'opacity-0'
        }`}
      />

      {/* Smooth Trailing Follower Ring / Dynamic Context Pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorText
            ? 'px-3.5 py-1.5 rounded-full bg-[#071917]/95 border border-emerald-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(78,168,64,0.35)] backdrop-blur-md scale-100'
            : isHovered
            ? 'w-10 h-10 rounded-full border border-emerald-400/80 bg-emerald-500/15 shadow-[0_0_20px_rgba(78,168,64,0.25)] scale-110'
            : 'w-7 h-7 rounded-full border border-emerald-500/40 bg-transparent scale-100'
        }`}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-300 whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
