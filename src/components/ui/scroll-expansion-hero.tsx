'use client';

import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mouse, ChevronDown, Sparkles } from 'lucide-react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title = 'CONGRATA GLOBAL',
  date = 'TRANSNATIONAL MOBILITY',
  scrollToExpand = 'Scroll down to expand',
  textBlend = false,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: globalThis.WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 10) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0015;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 0.96) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.65) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: globalThis.TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 10) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.009 : 0.006;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 0.96) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.65) {
          setShowContent(false);
        }
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        ['ArrowDown', 'PageDown', 'Space'].includes(e.code) &&
        !mediaFullyExpanded
      ) {
        e.preventDefault();
        const newProgress = Math.min(scrollProgress + 0.15, 1);
        setScrollProgress(newProgress);
        if (newProgress >= 0.96) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        }
      } else if (
        ['ArrowUp', 'PageUp'].includes(e.code) &&
        mediaFullyExpanded &&
        window.scrollY <= 10
      ) {
        e.preventDefault();
        const newProgress = Math.max(scrollProgress - 0.15, 0);
        setScrollProgress(newProgress);
        if (newProgress < 0.96) {
          setMediaFullyExpanded(false);
        }
      }
    };

    const checkMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  // Refined initial canvas proportions matching museum-grade installation aesthetics
  const baseWidth = isMobileState ? 290 : 380;
  const baseHeight = isMobileState ? 390 : 500;
  const mediaWidth = baseWidth + scrollProgress * (isMobileState ? 700 : 1300);
  const mediaHeight = baseHeight + scrollProgress * (isMobileState ? 300 : 500);
  const textTranslateX = scrollProgress * (isMobileState ? 150 : 130);

  const firstWord = title ? title.split(' ')[0] : 'CONGRATA';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : 'GLOBAL';

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-x-hidden bg-[#090D16]"
    >
      {/* ── 100dvh Hero Stage ── */}
      <div className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Panoramic Landscape Layer */}
        <motion.div
          className="absolute inset-0 z-0 w-full h-full pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 - scrollProgress * 0.55 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={bgImageSrc}
            alt="Hero Panoramic Background"
            className="w-full h-full object-cover object-center scale-[1.02] filter brightness-105"
          />
          {/* Subtle natural lighting vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090D16]/25 via-transparent to-[#090D16]/85" />
        </motion.div>

        {/* Central Expanding Canvas Panel (Portal Effect) */}
        <div
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden border border-white/25 shadow-[0_25px_90px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
          style={{
            width: `${mediaWidth}px`,
            height: `${mediaHeight}px`,
            maxWidth: '96vw',
            maxHeight: '90vh',
            transition: 'border-radius 0.3s ease',
          }}
        >
          {mediaType === 'video' ? (
            <div className="relative w-full h-full pointer-events-none">
              <video
                src={mediaSrc}
                poster={posterSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                controls={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={mediaSrc}
                alt={title || 'Media content'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          )}

          {/* Subtitle & Date Badge positioned inside the central canvas */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-center z-20 px-4 pointer-events-none">
            {date && (
              <p
                className="text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase text-cyan-300 glass-pill px-4 py-1.5 rounded-full mb-2.5 border border-cyan-400/30 shadow-xl"
                style={{ transform: `translateX(-${textTranslateX}vw)` }}
              >
                {date}
              </p>
            )}
            {scrollToExpand && (
              <div
                className="flex items-center gap-2 text-slate-200 text-xs font-medium bg-black/65 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-xl"
                style={{ transform: `translateX(${textTranslateX}vw)` }}
              >
                <Mouse className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                <span>{scrollToExpand}</span>
              </div>
            )}
          </div>
        </div>

        {/* Splitting Title Overlay (Artistic Typography) */}
        <div
          className={`flex items-center justify-center text-center gap-3 sm:gap-6 w-full relative z-20 flex-col sm:flex-row pointer-events-none select-none ${
            textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
          }`}
        >
          <motion.h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white font-heading drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]"
            style={{ transform: `translateX(-${textTranslateX}vw)` }}
          >
            {firstWord}
          </motion.h2>
          <motion.h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-gradient-cyan font-heading drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]"
            style={{ transform: `translateX(${textTranslateX}vw)` }}
          >
            {restOfTitle}
          </motion.h2>
        </div>

      </div>

      {/* ── Content Revealed after Expansion ({children}) ── */}
      {showContent && (
        <motion.div
          className="relative z-20 flex flex-col w-full bg-[#090D16] pb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default ScrollExpandMedia;
