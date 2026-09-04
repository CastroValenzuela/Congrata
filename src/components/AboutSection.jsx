'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  Cpu
} from 'lucide-react';

export default function AboutSection() {
  const planetaryMetrics = [
    {
      stat: '4.5 B',
      unit: 'Years',
      label: 'Earth Formation & Biosphere',
      desc: '10–20 million years are mathematically required for global biodiversity to recover following major planetary extinction events.',
      color: 'text-[#15736B]',
      border: 'border-emerald-500/20',
      tag: 'Geological Baseline'
    },
    {
      stat: '.17° C',
      unit: 'Rise / Decade',
      label: 'Global Surface Warming',
      desc: 'Average rate of annual planetary temperature increase, driving urgent demand for cross-border clean technology transfer.',
      color: 'text-amber-600',
      border: 'border-amber-500/20',
      tag: 'Climate Threshold'
    },
    {
      stat: '40 %',
      unit: 'Impaired',
      label: 'Compromised US Lakes',
      desc: 'Over four in ten surveyed lakes in North America are compromised, threatening regional aquatic ecosystems and food webs.',
      color: 'text-[#4EA840]',
      border: 'border-emerald-500/20',
      tag: 'Water Ecosystem'
    },
    {
      stat: '2.5 %',
      unit: 'Accessible',
      label: 'Total Accessible Freshwater',
      desc: 'A scarce fraction of Earth water supports human and ecological survival, making breakthrough circular water filtration critical.',
      color: 'text-teal-700',
      border: 'border-teal-500/20',
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
      image: 'https://images.unsplash.com/photo-1579165466791-788226ab6fb3?q=80&w=800&auto=format&fit=crop',
      metric: 'Affordable Therapeutics',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      track: 'TRACK 02',
      icon: Zap,
      title: 'Smart Energy & AI Grid Management',
      desc: 'Pioneering energy efficiency, software architectures, and automated distribution systems in the management of big data and solar storage.',
      tag: 'Decarbonization & Systems',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
      metric: 'AI-Driven Clean Grids',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      track: 'TRACK 03',
      icon: Sprout,
      title: 'Sustainable Agriculture & Soil Bio-Tech',
      desc: 'A disruptive approach to regional sustainable farming, rhizosphere microbiome resilience, and regenerative regional crop cycles.',
      tag: 'AgTech & Food Security',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop',
      metric: 'Circular Food Systems',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#F8FAF9]">
      
      {/* Background Topographic Wave SVG (Maxmont Inspired) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" fill="none">
          <path d="M-100,200 C300,50 600,350 1000,100 C1200,-50 1400,200 1600,150" stroke="#15736B" strokeWidth="2" />
          <path d="M-100,400 C400,250 700,550 1100,300 C1300,150 1500,400 1700,350" stroke="#15736B" strokeWidth="2" />
          <path d="M-100,600 C500,450 800,750 1200,500 C1400,350 1600,600 1800,550" stroke="#15736B" strokeWidth="2" />
          <path d="M-100,800 C600,650 900,950 1300,700 C1500,550 1700,800 1900,750" stroke="#15736B" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/60 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Consortium for Green Research & Technology Advancement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Equipping Leaders for an <span className="text-gradient-green">Interconnected World</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
            Empowering first-generation Master’s and PhD researchers to transform laboratory breakthroughs into tangible social, ecological, and economic reality.
          </p>
        </div>

        {/* ── Maxmont-Style Monumental Impact Typography (100px Scale Numbers) ── */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planetaryMetrics.map((item, idx) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-7 sm:p-8 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(21,115,107,0.12)] hover:border-[#4EA840]/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle light corner shimmer */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-100/40 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      {item.unit}
                    </span>
                  </div>

                  {/* Monumental Number (Maxmont Style) */}
                  <div className={`text-5xl sm:text-6xl lg:text-7xl font-black ${item.color} mb-3 font-heading tracking-tighter leading-none`}>
                    {item.stat}
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading tracking-wide uppercase">
                    {item.label}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-semibold text-[#15736B]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4EA840] animate-pulse" />
                    <span>Climate Metric</span>
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#4EA840] transition-colors" />
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
            className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold">
                    Global Context
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    The Global Challenge
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-light">
                Today’s first-generation professionals enter a workforce shaped by worldwide technological competition that extends far beyond institutional boundaries.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Success requires grounded, knowledgeable leaders who can think across cultures, navigate unfamiliar systems, and convert advanced research into long-term community value.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-medium text-slate-500">
              <span>Transnational Competition</span>
              <span>•</span>
              <span>Interdisciplinary Rigor</span>
              <span>•</span>
              <span className="text-[#15736B] font-bold">Ethical Stewardship</span>
            </div>
          </motion.div>

          {/* Our Vision Card (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/40 border border-emerald-200 shadow-xl shadow-emerald-900/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/90 border border-emerald-300 flex items-center justify-center text-[#15736B] shadow-sm">
                  <Sparkles className="w-6 h-6 text-[#4EA840]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#15736B] font-bold">
                    CONGRATA Mandate
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Our Mission & Vision
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-light">
                CONGRATA guides emerging thinkers to work across fields of science, borders, and communities through exploration, international connectivity, collaborative mentorship, and social entrepreneurship.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                By combining immersive global mobility with ethical leadership colloquia, we support scholars in solving pressing environmental matters and establishing lasting scientific credibility.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-200/60 flex items-center gap-2 text-xs text-[#15736B] font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4EA840] animate-pulse" />
              <span>Cultivating Research Excellence & Scientific Credibility</span>
            </div>
          </motion.div>

        </div>

        {/* ── Pixl Bio Style Bio-Tech Research Bento Modules ── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-mono font-bold uppercase tracking-wider text-[#15736B] mb-2 border border-emerald-200">
                <Cpu className="w-3.5 h-3.5 text-[#4EA840]" />
                <span>Scientific Tracks</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Core Green Research Focus Areas
              </h4>
            </div>
            <p className="text-slate-500 text-sm max-w-md font-light">
              Pioneering disruptive perspectives for sustainable living, health equity, and clean technology advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {greenResearchFocus.map((focus, idx) => {
              const Icon = focus.icon;
              return (
                <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:border-[#4EA840] hover:shadow-2xl transition-all duration-400 overflow-hidden flex flex-col justify-between group"
                >
                  {/* Visual Header Image with Micro-Badge Overlay (Pixl Bio Style) */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={focus.image}
                      alt={focus.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Track Pill */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
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
                      <h5 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-3 leading-snug group-hover:text-[#15736B] transition-colors">
                        {focus.title}
                      </h5>

                      <p className="text-slate-600 text-sm leading-relaxed font-light">
                        {focus.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#15736B] group-hover:text-[#4EA840] transition-colors">
                      <span>Explore Specialized Track</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
