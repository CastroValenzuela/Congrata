'use client';

import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
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
  title = 'CONGRATA',
  subtitle = 'Consortium for Green Research and Technology Advancement',
  date = 'TRANSNATIONAL GREEN RESEARCH',
  scrollToExpand = 'Scroll down to expand',
  textBlend = false,
  children,
}: ScrollExpandMediaProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  // Native scroll-driven progress via Framer Motion useScroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Smooth out the raw scroll progress with a spring
  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 200 });

  // Derive all visual transforms from scroll progress
  const bgOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.5]);
  const frameScale = useTransform(smoothProgress, [0, 0.8], [0.45, 1]);
  const frameRadius = useTransform(smoothProgress, [0, 0.8], [24, 0]);
  const frameBorderOpacity = useTransform(smoothProgress, [0.5, 0.8], [0.8, 0]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const titleBlur = useTransform(smoothProgress, [0, 0.4], [0, 8]);
  const titleScale = useTransform(smoothProgress, [0, 0.4], [1, 0.88]);
  const badgesOpacity = useTransform(smoothProgress, [0.1, 0.5], [1, 0]);
  const scrollHintOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  // 3D Mouse Parallax Tilt physics for museum-grade installation feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxSpring = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), parallaxSpring);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), parallaxSpring);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    const checkMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hasMultipleWords = Boolean(title && title.trim().includes(' '));
  const firstWord = hasMultipleWords ? title.trim().split(/\s+/)[0] : (title || 'CONGRATA');
  const restOfTitle = hasMultipleWords ? title.trim().split(/\s+/).slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} className="relative w-full bg-[#F8FAF9]">
      {/* ── Scroll spacer: the section height defines how long the scroll-driven expansion lasts ── */}
      <div className="relative" style={{ height: isMobileState ? '160vh' : '200vh' }}>
        {/* ── Sticky Hero Stage (pinned during scroll) ── */}
        <div
          ref={stickyRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="sticky top-0 w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
          style={{ perspective: '1200px' }}
        >
          {/* Background Panoramic Landscape Layer */}
          <motion.div
            className="absolute inset-0 z-0 w-full h-full pointer-events-none"
            style={{ opacity: bgOpacity }}
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
              rotateX,
              rotateY,
              scale: frameScale,
              borderRadius: frameRadius,
              transformStyle: 'preserve-3d',
            }}
            className="absolute z-10 inset-4 sm:inset-6 md:inset-8 overflow-hidden border-2 border-white/80 shadow-[0_30px_100px_rgba(21,115,107,0.35)] ring-2 ring-[#4EA840]/30 backdrop-blur-[1px]"
          >
            {/* Full viewport media layer synchronized with background */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={bgImageSrc}
                alt="Synchronized Artwork Piece"
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105 saturate-110"
              />

              {/* Living Motion Video Overlay */}
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
            <motion.div
              className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none shadow-[inset_0_0_25px_rgba(255,255,255,0.25)]"
              style={{ opacity: frameBorderOpacity }}
            />

            {/* Date / Subtitle Badge */}
            <motion.div
              className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-center z-20 px-4 pointer-events-none"
              style={{ opacity: badgesOpacity }}
            >
              {date && (
                <p className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-emerald-950 bg-white/95 px-4 py-1.5 rounded-full mb-2.5 border border-emerald-500/30 shadow-2xl backdrop-blur-md">
                  {date}
                </p>
              )}
              {scrollToExpand && (
                <motion.div
                  className="flex items-center gap-2 text-white text-xs font-semibold bg-emerald-950/75 backdrop-blur-lg px-4 py-1.5 rounded-full border border-white/25 shadow-2xl"
                  style={{ opacity: scrollHintOpacity }}
                >
                  <Mouse className="w-3.5 h-3.5 text-[#4EA840] animate-bounce" />
                  <span>{scrollToExpand}</span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Title Overlay */}
          {hasMultipleWords ? (
            <motion.div
              className={`flex items-center justify-center text-center gap-3 sm:gap-6 w-full relative z-20 flex-col sm:flex-row pointer-events-none select-none ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
              }`}
              style={{ opacity: titleOpacity, scale: titleScale }}
            >
              <motion.h2
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white font-heading drop-shadow-[0_15px_45px_rgba(0,0,0,0.85)]"
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-emerald-300 font-heading drop-shadow-[0_15px_45px_rgba(0,0,0,0.85)]"
              >
                {restOfTitle}
              </motion.h2>
            </motion.div>
          ) : (
            <div
              className={`flex items-center justify-center text-center w-full relative z-20 pointer-events-none select-none px-4 ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
              }`}
            >
              <motion.h2
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white font-heading drop-shadow-[0_15px_45px_rgba(0,0,0,0.85)]"
                style={{
                  opacity: titleOpacity,
                  scale: titleScale,
                  filter: useTransform(titleBlur, (v) => `blur(${v}px)`),
                }}
              >
                {firstWord}
              </motion.h2>
            </div>
          )}
        </div>
      </div>

      {/* ── Page Content (always mounted, scrolls naturally after hero) ── */}
      <div className="relative z-20 flex flex-col w-full bg-transparent">
        {children}
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
