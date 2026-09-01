import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Award, 
  Rocket, 
  ArrowUpRight, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import AuroraBackground from './ui/AuroraBackground';
import MagicButton from './ui/MagicButton';
import TextReveal from './ui/TextReveal';
import SpotlightCard from './ui/SpotlightCard';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <AuroraBackground className="pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Animated Shimmer Pill Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-xs sm:text-sm font-medium text-cyan-300 shadow-xl overflow-hidden group">
              <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-slate-300">Empowering Global STEM Innovators</span>
              <span className="text-cyan-400 font-semibold tracking-wide">• 2026 Edition</span>
            </div>
          </motion.div>

          {/* Text Reveal Animated Main Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <TextReveal
              text="CONGRATA PAGE 2026"
              highlight="2026"
              highlightClass="text-gradient-cyan"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08] font-heading"
              delay={0.15}
            />
          </motion.div>

          {/* Subtitle with philosophical quote punch */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg sm:text-2xl font-light text-slate-200 mb-6 max-w-3xl leading-relaxed tracking-tight"
          >
            "The world’s greatest challenges won’t be solved by one discipline, one region, or one perspective."
          </motion.p>

          {/* Body Description */}
          <motion.p 
            variants={itemVariants} 
            className="text-base sm:text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed"
          >
            CONGRATA empowers trailblazers to cross boundaries, build connections, and create lasting economic, cultural, and community impact.
          </motion.p>

          {/* 21st.dev Magic Action Buttons Group */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-20"
          >
            {/* Primary Magic Button */}
            <MagicButton href="#engage" variant="primary" icon={ArrowRight}>
              Become a Scholar
            </MagicButton>

            {/* Secondary Shimmer Button */}
            <MagicButton href="#engage" variant="secondary" icon={ArrowUpRight}>
              Partner with Us
            </MagicButton>

            {/* Tertiary Amber Glow Button */}
            <MagicButton href="#engage" variant="amber" icon={Sparkles}>
              Support Our Mission
            </MagicButton>
          </motion.div>

          {/* 3 Interactive 21st.dev Spotlight Bento Cards */}
          <motion.div 
            variants={itemVariants}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {/* Spotlight Card 1 */}
            <SpotlightCard 
              spotlightColor="rgba(34, 211, 238, 0.15)"
              className="group cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Mobility
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Transnational Mobility
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Empowering scholars to cross institutional and geopolitical borders for scientific and research excellence.
              </p>
            </SpotlightCard>

            {/* Spotlight Card 2 */}
            <SpotlightCard 
              spotlightColor="rgba(13, 148, 136, 0.18)"
              className="group cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  10+ Yrs UC
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                Decade of Excellence
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Proven track record in partnership with the University of California, fostering first-gen and women STEM leaders.
              </p>
            </SpotlightCard>

            {/* Spotlight Card 3 */}
            <SpotlightCard 
              spotlightColor="rgba(245, 158, 11, 0.15)"
              className="group cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Impact
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Social Entrepreneurship
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Translating rigorous academic discoveries into real-world economic, cultural, and community prosperity.
              </p>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
