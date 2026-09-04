'use client';

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MetricIntroLoaderProps {
  onComplete?: () => void;
  videoSrc?: string;
  posterSrc?: string;
  wordmark?: string;
}

export const MetricIntroLoader: React.FC<MetricIntroLoaderProps> = ({
  onComplete,
  videoSrc = 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
  posterSrc = 'https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=1200&auto=format&fit=crop',
  wordmark = 'CONGRATA',
}) => {
  const [phase, setPhase] = useState<'fill' | 'dot' | 'fadeText' | 'expand' | 'done'>('fill');
  const [isVisible, setIsVisible] = useState(true);
  const [dotBounds, setDotBounds] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Measure dot exact screen coordinates
  const measureDot = () => {
    if (dotRef.current) {
      const rect = dotRef.current.getBoundingClientRect();
      setDotBounds({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  useLayoutEffect(() => {
    measureDot();
    window.addEventListener('resize', measureDot);
    return () => window.removeEventListener('resize', measureDot);
  }, []);

  // Lock scroll while intro is playing
  useEffect(() => {
    if (isVisible) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isVisible]);

  // Precise timeline sequence replicating Metric Civil
  useEffect(() => {
    // T = 0.95s: Logo fill finishes -> reveal video dot
    const tDot = setTimeout(() => {
      measureDot();
      setPhase('dot');
    }, 950);

    // T = 1.6s: Text gently dissolves out
    const tFadeText = setTimeout(() => {
      setPhase('fadeText');
    }, 1600);

    // T = 1.9s: The dot expands into fullscreen hero
    const tExpand = setTimeout(() => {
      setPhase('expand');
    }, 1900);

    // T = 3.05s: Transition completes, dissolve loader
    const tDone = setTimeout(() => {
      setPhase('done');
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 500);
    }, 3050);

    // Keyboard shortcut (Escape or Space) to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        skipIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(tDot);
      clearTimeout(tFadeText);
      clearTimeout(tExpand);
      clearTimeout(tDone);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const skipIntro = () => {
    setPhase('done');
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="metric-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#071917] select-none overflow-hidden cursor-pointer"
          onClick={skipIntro}
          title="Click to skip"
        >
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(21,115,107,0.22),transparent_70%)] pointer-events-none" />

          {/* Central Logo Wrapper */}
          <div className="relative flex items-end justify-center px-4">
            {/* Wordmark Container */}
            <motion.div
              animate={
                phase === 'fadeText' || phase === 'expand'
                  ? { opacity: 0, y: -12, filter: 'blur(8px)' }
                  : { opacity: 1, y: 0, filter: 'blur(0px)' }
              }
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-flex items-baseline"
            >
              {/* Base faint text (semi-transparent outline tone) */}
              <span className="font-heading font-black tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-none text-white/15 drop-shadow-sm">
                {wordmark}
              </span>

              {/* Solid Fill text that wipes from left to right */}
              <motion.div
                className="absolute left-0 top-0 overflow-hidden whitespace-nowrap"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-heading font-black tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-none text-[#F8FAF9]">
                  {wordmark}
                </span>
              </motion.div>
            </motion.div>

            {/* Placeholder anchor element for dot measurement */}
            <div
              ref={dotRef}
              className="relative ml-2 sm:ml-3 md:ml-4 mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 shrink-0"
            />
          </div>

          {/* The Hero Video Dot that transforms into Fullscreen */}
          {dotBounds && (
            <motion.div
              initial={{
                position: 'fixed',
                left: dotBounds.x,
                top: dotBounds.y,
                width: dotBounds.width,
                height: dotBounds.height,
                borderRadius: '6px',
                opacity: 0,
                scale: 0.7,
              }}
              animate={
                phase === 'fill'
                  ? {
                      position: 'fixed',
                      left: dotBounds.x,
                      top: dotBounds.y,
                      width: dotBounds.width,
                      height: dotBounds.height,
                      borderRadius: '6px',
                      opacity: 0,
                      scale: 0.7,
                    }
                  : phase === 'dot' || phase === 'fadeText'
                  ? {
                      position: 'fixed',
                      left: dotBounds.x,
                      top: dotBounds.y,
                      width: dotBounds.width,
                      height: dotBounds.height,
                      borderRadius: '6px',
                      opacity: 1,
                      scale: 1,
                      boxShadow: '0 0 25px rgba(78,168,64,0.6)',
                    }
                  : {
                      // EXPAND: Morph to full viewport seamlessly with numeric pixels
                      position: 'fixed',
                      left: 0,
                      top: 0,
                      width: typeof window !== 'undefined' ? window.innerWidth : '100vw',
                      height: typeof window !== 'undefined' ? window.innerHeight : '100vh',
                      borderRadius: '0px',
                      opacity: 1,
                      scale: 1,
                      boxShadow: 'none',
                    }
              }
              transition={{
                duration: phase === 'expand' ? 1.15 : 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden z-20 pointer-events-none"
            >
              {/* Media element inside the expanding frame */}
              <div 
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${posterSrc})` }}
              >
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={posterSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Cinematic Vignette Overlay during expansion */}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: phase === 'expand' ? 0.45 : 0.15 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#071917] via-transparent to-[#071917]/30 pointer-events-none"
                />

                {/* Amber/Emerald specular corner badge while in dot state */}
                {phase !== 'expand' && (
                  <div className="absolute inset-0 border border-[#4EA840]/60 rounded-[6px] pointer-events-none" />
                )}
              </div>
            </motion.div>
          )}

          {/* Bottom discrete skip indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-300/40 uppercase">
            <span>Click or Space to skip</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MetricIntroLoader;
