import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  AlertTriangle, 
  Flame, 
  ShieldAlert, 
  Leaf, 
  HeartPulse, 
  Scale, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function AboutSection() {
  const urgentMatters = [
    {
      icon: Flame,
      title: 'Climate Change',
      desc: 'Developing sustainable energy, decarbonization solutions, and climate resilience models across ecosystems.',
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30'
    },
    {
      icon: ShieldAlert,
      title: 'Misinformation & Disinformation',
      desc: 'Advancing data integrity, rigorous scientific communication, and trustworthy technology frameworks.',
      color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30'
    },
    {
      icon: Leaf,
      title: 'Biodiversity Loss',
      desc: 'Preserving natural habitats, genetic diversity, and pioneering conservation biotechnologies.',
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
      icon: HeartPulse,
      title: 'Public Health',
      desc: 'Accelerating translational biomedical research and addressing epidemiological disparities in vulnerable populations.',
      color: 'from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30'
    },
    {
      icon: Scale,
      title: 'Economic Inequality',
      desc: 'Empowering first-generation scholars through high-value STEM entrepreneurship and international wealth generation.',
      color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30'
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4 border border-cyan-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>About Us & The Global Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
            Equipping Leaders for an <span className="text-gradient-cyan">Interconnected World</span>
          </h2>
        </div>

        {/* 2-Column Split: The Challenge on Left, Vision on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* The Challenge Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  The Challenge
                </h3>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Today’s first-generation professionals enter a workforce shaped by global competition that extends beyond institutional boundaries.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Success now requires grounded, knowledgeable leaders who can think globally, collaborate across cultures, and turn scientific expertise into sustainable social and economic impact.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="text-amber-400 font-semibold font-mono">Global Competition</span>
              <span>•</span>
              <span className="text-cyan-400 font-semibold font-mono">Transnational Mindset</span>
              <span>•</span>
              <span className="text-teal-400 font-semibold font-mono">Sustainable Impact</span>
            </div>
          </motion.div>

          {/* Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/20 relative overflow-hidden bg-gradient-to-br from-cyan-950/20 to-transparent flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
                CONGRATA guides emerging thinkers to work across areas of knowledge, communities, and frontiers through exploration, innovation, international connectivity, collaborative learning, stewardship, and social entrepreneurship.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                By combining global experience with cross-disciplinary education, we support scholars to address pressing social concerns, strengthen the eco-system, and help build a more just, inclusive, and sustainable society; aiming to cultivate research excellence, and build scientific credibility.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-cyan-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Cultivating Research Excellence & Scientific Credibility</span>
            </div>
          </motion.div>
        </div>

        {/* Urgent Matters Grid (From official document) */}
        <div>
          <div className="text-center mb-8">
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
              Addressing Urgent Global Matters
            </h4>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Equipping our scholars with cross-disciplinary tools to solve challenges that span specialties, ethnicities, and geo-political barriers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {urgentMatters.map((matter, idx) => {
              const Icon = matter.icon;
              return (
                <motion.div
                  key={matter.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`glass-panel glass-panel-hover rounded-2xl p-6 border flex flex-col justify-between ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${matter.color} border flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="text-base sm:text-lg font-bold text-white font-heading">
                        {matter.title}
                      </h5>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {matter.desc}
                    </p>
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
