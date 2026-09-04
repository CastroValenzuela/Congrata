'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NumberTicker from '@/components/ui/number-ticker';
import SpotlightCard from '@/components/ui/spotlight-card';
import { 
  Compass, 
  AlertTriangle, 
  Leaf, 
  HeartPulse, 
  Zap, 
  Sprout, 
  Sparkles,
  Globe2,
  ArrowRight,
  TrendingUp,
  Waves,
  ShieldCheck,
  Cpu,
  MapPin
} from 'lucide-react';

export default function AboutSection() {
  const planetaryMetrics = [
    {
      value: 4.5,
      unit: 'Years',
      suffix: ' B',
      decimalPlaces: 1,
      label: 'Earth Formation & Biosphere',
      desc: '10–20 million years are mathematically required for global biodiversity to recover following major planetary extinction events.',
      color: 'text-[#4EA840]',
      tag: 'Geological Baseline'
    },
    {
      value: 0.17,
      unit: 'Rise / Decade',
      prefix: '+',
      suffix: '° C',
      decimalPlaces: 2,
      label: 'Global Surface Warming',
      desc: 'Average rate of annual planetary temperature increase, driving urgent demand for cross-border clean technology transfer.',
      color: 'text-[#F5B942]',
      tag: 'Climate Threshold'
    },
    {
      value: 40,
      unit: 'Impaired',
      suffix: ' %',
      decimalPlaces: 0,
      label: 'Compromised US Lakes',
      desc: 'Over four in ten surveyed lakes in North America are compromised, threatening regional aquatic ecosystems and food webs.',
      color: 'text-emerald-300',
      tag: 'Water Ecosystem'
    },
    {
      value: 2.5,
      unit: 'Accessible',
      suffix: ' %',
      decimalPlaces: 1,
      label: 'Total Accessible Freshwater',
      desc: 'A scarce fraction of Earth water supports human and ecological survival, making breakthrough circular water filtration critical.',
      color: 'text-teal-300',
      tag: 'Resource Security'
    },
  ];

  const greenResearchFocus = [
    {
      track: 'TRACK 01',
      icon: HeartPulse,
      title: 'Healthcare & Biomedical Phenomics',
      desc: 'Identifying reliable, low-cost biomedical therapies, micro-sensing technologies, and equitable medication pipelines for vulnerable communities.',
      tag: 'Biomedical Innovation',
      image: '/images/biomedical-phenomics.jpg',
      metric: 'Affordable Therapeutics',
      badgeBg: 'bg-rose-950/80 text-rose-300 border-rose-800/40'
    },
    {
      track: 'TRACK 02',
      icon: Zap,
      title: 'Smart Energy & AI Grid Management',
      desc: 'Pioneering energy efficiency, software architectures, and automated distribution systems in the management of big data and solar storage.',
      tag: 'Decarbonization & Systems',
      image: '/images/smart-energy.jpg',
      metric: 'AI-Driven Clean Grids',
      badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-800/40'
    },
    {
      track: 'TRACK 03',
      icon: Sprout,
      title: 'Sustainable Agriculture & Soil Bio-Tech',
      desc: 'A disruptive approach to regional sustainable farming, rhizosphere microbiome resilience, and regenerative regional crop cycles.',
      tag: 'AgTech & Food Security',
      image: '/images/sustainable-agro.jpg',
      metric: 'Circular Food Systems',
      badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/40'
    },
  ];

  return (
    <section 
      id="about" 
      className="pt-24 pb-36 sm:pb-44 relative overflow-hidden bg-[#071917] text-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] -mt-12 sm:-mt-16 relative z-10 border-t border-emerald-500/25 shadow-[0_-30px_70px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-emerald-400/40 before:to-transparent"
    >
      
      {/* Background Topographic Wave SVG (Maxmont & Pixl Bio Sonar Aesthetic) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" fill="none">
          <path d="M-100,200 C300,50 600,350 1000,100 C1200,-50 1400,200 1600,150" stroke="#4EA840" strokeWidth="2" />
          <path d="M-100,400 C400,250 700,550 1100,300 C1300,150 1500,400 1700,350" stroke="#4EA840" strokeWidth="2" />
          <path d="M-100,600 C500,450 800,750 1200,500 C1400,350 1600,600 1800,550" stroke="#4EA840" strokeWidth="2" />
          <path d="M-100,800 C600,650 900,950 1300,700 C1500,550 1700,800 1900,750" stroke="#4EA840" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3 border border-emerald-500/30 shadow-sm backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Consortium for Green Research & Technology Advancement</span>
          </div>

          {/* GPS Telemetry Active Node Ribbon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-emerald-500/20 text-[10px] font-mono text-emerald-400/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4EA840] animate-pulse" />
            <span>NODES: UC BERKELEY [37.87°N, 122.27°W] • UNAM [19.33°N, 99.18°W] • ITESM [25.65°N, 100.28°W]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Equipping Leaders for an <span className="text-[#4EA840]">Interconnected World</span>
          </h2>
          <p className="text-emerald-100/70 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
            Empowering first-generation Master’s and PhD researchers to transform laboratory breakthroughs into tangible social, ecological, and economic reality.
          </p>
        </div>

        {/* ── Maxmont-Style Monumental Impact Typography in Obsidian Cards ── */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planetaryMetrics.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-7 sm:p-8 bg-[#0C2421]/90 backdrop-blur-xl border border-emerald-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(78,168,64,0.18)] hover:border-[#4EA840]/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle emerald corner glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400/60 font-semibold">
                      {item.unit}
                    </span>
                  </div>

                  {/* Monumental Animated Number with NumberTicker */}
                  <NumberTicker
                    value={item.value}
                    prefix={item.prefix || ''}
                    suffix={item.suffix || ''}
                    decimalPlaces={item.decimalPlaces}
                    className={`text-5xl sm:text-6xl lg:text-7xl font-black ${item.color} mb-3 font-heading tracking-tighter leading-none drop-shadow-sm`}
                  />

                  <h4 className="text-sm font-bold text-white mb-2 font-heading tracking-wide uppercase">
                    {item.label}
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-950/80 flex items-center justify-between text-[11px] font-mono font-semibold text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4EA840] animate-pulse" />
                    <span>Climate Metric</span>
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500/60 group-hover:text-[#4EA840] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 2-Column Split: The Challenge & The Mission ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* The Challenge Card (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-[#0C1F1D]/90 backdrop-blur-xl border border-amber-500/20 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-[#F5B942] shadow-sm">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                    Global Context
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    The Global Challenge
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4 font-light">
                Today’s first-generation professionals enter a workforce shaped by worldwide technological competition that extends far beyond institutional boundaries.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                Success requires grounded, knowledgeable leaders who can think across cultures, navigate unfamiliar systems, and convert advanced research into long-term community value.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-950/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-medium text-slate-400">
              <span>Transnational Competition</span>
              <span>•</span>
              <span>Interdisciplinary Rigor</span>
              <span>•</span>
              <span className="text-[#4EA840] font-bold">Ethical Stewardship</span>
            </div>
          </motion.div>

          {/* Our Vision Card (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0D2D28] via-[#0A221E] to-[#071917] border border-emerald-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center text-[#4EA840] shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
                    CONGRATA Mandate
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Our Mission & Vision
                  </h3>
                </div>
              </div>

              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed mb-4 font-light">
                CONGRATA guides emerging thinkers to work across fields of science, borders, and communities through exploration, international connectivity, collaborative mentorship, and social entrepreneurship.
              </p>

              <p className="text-emerald-100/70 text-sm sm:text-base leading-relaxed font-light">
                By combining immersive global mobility with ethical leadership colloquia, we support scholars in solving pressing environmental matters and establishing lasting scientific credibility.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-900/60 flex items-center gap-2 text-xs text-emerald-300 font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4EA840] animate-pulse" />
              <span>Cultivating Research Excellence & Scientific Credibility</span>
            </div>
          </motion.div>

        </div>

        {/* ── Pixl Bio Style Bio-Tech Research Bento Modules ── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300 mb-2 border border-emerald-500/30">
                <Cpu className="w-3.5 h-3.5 text-[#4EA840]" />
                <span>Scientific Tracks</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Core Green Research Focus Areas
              </h4>
            </div>
            <p className="text-emerald-100/60 text-sm max-w-md font-light">
              Pioneering disruptive perspectives for sustainable living, health equity, and clean technology advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {greenResearchFocus.map((focus, idx) => {
              const Icon = focus.icon;
              return (
                <motion.div
                  key={focus.title}
                  data-cursor="EXPLORE"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl bg-[#0C2421]/90 backdrop-blur-xl border border-emerald-500/20 shadow-2xl hover:border-[#4EA840] hover:shadow-[0_20px_50px_rgba(78,168,64,0.15)] transition-all duration-400 overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  <SpotlightCard className="flex flex-col justify-between h-full">
                    {/* Visual Header Image with Micro-Badge Overlay (Pixl Bio Style) */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={focus.image}
                        alt={focus.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C2421] via-black/30 to-black/20" />
                      
                      {/* Track Pill */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                        <Icon className="w-3 h-3 text-[#4EA840]" />
                        <span>{focus.track}</span>
                      </div>

                      {/* Metric Badge */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-xs font-semibold drop-shadow-sm font-heading">
                          {focus.metric}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${focus.badgeBg} border`}>
                          {focus.tag}
                        </span>
                      </div>
                    </div>

                    {/* Body Text */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                      <div>
                        <h5 className="text-lg sm:text-xl font-bold text-white font-heading mb-3 leading-snug group-hover:text-emerald-300 transition-colors">
                          {focus.title}
                        </h5>

                        <p className="text-slate-300 text-sm leading-relaxed font-light">
                          {focus.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-emerald-950/80 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-[#4EA840] transition-colors">
                        <span>Explore Specialized Track</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
