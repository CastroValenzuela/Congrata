import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  AlertTriangle, 
  Leaf, 
  HeartPulse, 
  Zap, 
  Sprout, 
  Wind, 
  Sparkles,
  Droplets,
  ThermometerSun,
  Globe2,
  ArrowRight
} from 'lucide-react';

export default function AboutSection() {
  const planetaryMetrics = [
    {
      stat: '4.5 B',
      label: 'Years for Earth Formation',
      desc: '10–20 million years required for planetary biodiversity to rebound after major extinction events.',
      color: 'text-[#15736B]',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-50/50'
    },
    {
      stat: '.17° C',
      label: 'Annual Warming Rate',
      desc: 'Average rate of yearly global surface temperature rise demanding rapid technological decarbonization.',
      color: 'text-amber-600',
      border: 'border-amber-500/20',
      bg: 'bg-amber-50/50'
    },
    {
      stat: '40 %',
      label: 'Compromised US Lakes',
      desc: 'Over 40% of surveyed freshwater lakes in the U.S. are impaired, threatening aquatic and regional ecology.',
      color: 'text-emerald-700',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-50/50'
    },
    {
      stat: '2.5 %',
      label: 'Accessible Freshwater',
      desc: 'Only 2.5% of total Earth water is freshwater, making sustainable treatment, reuse, and filtration crucial.',
      color: 'text-[#15736B]',
      border: 'border-teal-500/20',
      bg: 'bg-teal-50/50'
    },
  ];

  const greenResearchFocus = [
    {
      icon: HeartPulse,
      title: 'HEALTHCARE',
      desc: 'Identifying reliable and affordable biomedical treatments, distributed health sensing, and right medications for vulnerable populations.',
      tag: 'Biomedical Discovery',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      icon: Zap,
      title: 'SMART ENERGY MANAGEMENT',
      desc: 'Energy, software, and systems efficiency in the management of big data, smart grid optimization, and solar photovoltaic integration.',
      tag: 'Decarbonization & AI',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      icon: Sprout,
      title: 'FARMING & AGRICULTURE',
      desc: 'A disruptive perspective of global sustainable farming, soil micro-biology resilience, and regional agricultural innovations.',
      tag: 'AgTech & Food Security',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#F8FAF9]">
      {/* Subtle organic light green radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/50 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Consortium for Green Research & Tech Advancement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Equipping Leaders for an <span className="text-gradient-green">Interconnected World</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
            Empowering first-generation Master’s and PhD researchers to transform cross-disciplinary discoveries into lasting social, ecological, and economic impact.
          </p>
        </div>

        {/* ── 4 Authentic Planetary Metrics (From Live CONGRATA Site) ── */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {planetaryMetrics.map((item, idx) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-6 sm:p-8 bg-white border ${item.border} shadow-lg shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden group hover:border-[#4EA840] transition-all`}
              >
                <div>
                  <div className={`text-4xl sm:text-5xl font-black ${item.color} mb-3 font-heading tracking-tight`}>
                    {item.stat}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading uppercase tracking-wide">
                    {item.label}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#15736B]">
                  <Globe2 className="w-3.5 h-3.5 text-[#4EA840]" />
                  <span>CONGRATA Climate Baseline</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 2-Column Split: The Challenge on Left, Vision on Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* The Challenge Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-xl shadow-slate-900/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  The Global Challenge
                </h3>
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-light">
                Today’s first-generation professionals enter a workforce shaped by global competition that extends beyond institutional boundaries.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Success now requires grounded, knowledgeable leaders who can think globally, collaborate across cultures, and turn scientific expertise into sustainable social and economic impact.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <span className="text-amber-700 font-semibold font-mono">Global Competition</span>
              <span>•</span>
              <span className="text-[#15736B] font-semibold font-mono">Transnational Mindset</span>
              <span>•</span>
              <span className="text-[#4EA840] font-semibold font-mono">Sustainable Impact</span>
            </div>
          </motion.div>

          {/* Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-50 via-white to-teal-50/40 border border-emerald-200 shadow-xl shadow-emerald-900/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#15736B]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Our Mission & Vision
                </h3>
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-light">
                CONGRATA guides emerging thinkers to work across areas of knowledge, communities, and frontiers through exploration, innovation, international connectivity, collaborative learning, stewardship, and social entrepreneurship.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                By combining global experience with cross-disciplinary education, we support scholars to address pressing environmental concerns, strengthen the ecosystem, and build scientific credibility.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-200/60 flex items-center gap-2 text-xs text-[#15736B] font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4EA840] animate-pulse" />
              <span>Cultivating Research Excellence & Scientific Credibility</span>
            </div>
          </motion.div>
        </div>

        {/* ── 3 Green Research Focus Areas (From Live Site Captures) ── */}
        <div>
          <div className="text-center mb-10">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">
              Core Green Research Focus Areas
            </h4>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-light">
              Pioneering disruptive perspectives for sustainable living, health equity, and clean technology advancement:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {greenResearchFocus.map((focus, idx) => {
              const Icon = focus.icon;
              return (
                <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:border-[#4EA840] hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15736B] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-[#4EA840]" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${focus.badgeBg}`}>
                        {focus.tag}
                      </span>
                    </div>

                    <h5 className="text-lg font-bold text-slate-900 font-heading mb-3">
                      {focus.title}
                    </h5>

                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {focus.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#15736B] group-hover:text-[#4EA840] transition-colors">
                    <span>Explore Research Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
