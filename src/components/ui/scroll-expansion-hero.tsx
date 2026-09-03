'use client';

import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mouse, Sparkles, Compass } from 'lucide-react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
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
  subtitle = 'Consortium for Green Research and Technology Advancement',
  date = 'TRANSNATIONAL GREEN RESEARCH',
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

  // 3D Mouse Parallax Tilt physics for museum-grade installation feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mediaFullyExpanded) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
        const scrollDelta = e.deltaY * 0.0016;
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

  const baseWidth = isMobileState ? 290 : 380;
  const baseHeight = isMobileState ? 390 : 510;
  const mediaWidth = baseWidth + scrollProgress * (isMobileState ? 700 : 1300);
  const mediaHeight = baseHeight + scrollProgress * (isMobileState ? 300 : 500);
  const textTranslateX = scrollProgress * (isMobileState ? 150 : 130);

  const firstWord = title ? title.split(' ')[0] : 'CONGRATA';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : 'GLOBAL';

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-x-hidden bg-[#F8FAF9]"
    >
      {/* ── 100dvh Hero Stage with 3D Mouse Parallax ── */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden perspective-[1200px]"
      >
        
        {/* Background Panoramic Landscape Layer (The Base Wall) */}
        <motion.div
          className="absolute inset-0 z-0 w-full h-full pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 - scrollProgress * 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={bgImageSrc}
            alt="Hero Panoramic Background"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-100"
          />
          {/* Natural soft atmosphere gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#F8FAF9]" />
        </motion.div>

        {/* ── Central Pixel-Perfect Puzzle Piece Panel (The Floating Artwork) ── */}
        <motion.div
          style={{
            rotateX: mediaFullyExpanded ? 0 : rotateX,
            rotateY: mediaFullyExpanded ? 0 : rotateY,
            width: `${mediaWidth}px`,
            height: `${mediaHeight}px`,
            maxWidth: '98vw',
            maxHeight: '92vh',
            transformStyle: 'preserve-3d',
          }}
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden border-2 border-white/80 shadow-[0_30px_100px_rgba(21,115,107,0.35)] ring-2 ring-[#4EA840]/30 backdrop-blur-[1px]"
        >
          {/* 100% Synchronized Puzzle-Piece Viewport Anchor */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden"
            style={{
              width: '100vw',
              height: '100dvh',
              maxWidth: '100vw',
              maxHeight: '100dvh',
            }}
          >
            {/* Exactly matching image that aligns seamlessly with the background mural */}
            <img
              src={bgImageSrc}
              alt="Synchronized Artwork Piece"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105 saturate-110"
            />

            {/* Living Motion Video Overlay (Smoothly blended inside the puzzle piece) */}
            {mediaType === 'video' && (
              <video
                src={mediaSrc}
                poster={posterSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-screen"
                controls={false}
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
          </div>

          {/* Glowing Border Reflection Accent */}
          <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none shadow-[inset_0_0_25px_rgba(255,255,255,0.25)]" />

          {/* Date / Subtitle Badge */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-center z-20 px-4 pointer-events-none">
            {date && (
              <p
                className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-emerald-950 bg-white/95 px-4 py-1.5 rounded-full mb-2.5 border border-emerald-500/30 shadow-2xl backdrop-blur-md"
                style={{ transform: `translateX(-${textTranslateX}vw)` }}
              >
                {date}
              </p>
            )}
            {scrollToExpand && (
              <div
                className="flex items-center gap-2 text-white text-xs font-semibold bg-emerald-950/75 backdrop-blur-lg px-4 py-1.5 rounded-full border border-white/25 shadow-2xl"
                style={{ transform: `translateX(${textTranslateX}vw)` }}
              >
                <Mouse className="w-3.5 h-3.5 text-[#4EA840] animate-bounce" />
                <span>{scrollToExpand}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Splitting Title Overlay (Luminous Clean Typography) */}
        <div
          className={`flex items-center justify-center text-center gap-3 sm:gap-6 w-full relative z-20 flex-col sm:flex-row pointer-events-none select-none ${
            textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
          }`}
        >
          <motion.h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white font-heading drop-shadow-[0_15px_45px_rgba(0,0,0,0.85)]"
            style={{ transform: `translateX(-${textTranslateX}vw)` }}
          >
            {firstWord}
          </motion.h2>
          <motion.h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-emerald-300 font-heading drop-shadow-[0_15px_45px_rgba(0,0,0,0.85)]"
            style={{ transform: `translateX(${textTranslateX}vw)` }}
          >
            {restOfTitle}
          </motion.h2>
        </div>

      </div>

      {/* ── Content Revealed after Expansion ({children}) ── */}
      {showContent && (
        <motion.div
          className="relative z-20 flex flex-col w-full bg-[#F8FAF9] pb-16"
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
