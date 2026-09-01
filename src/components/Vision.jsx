import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Network, ShieldCheck, HeartHandshake, Rocket } from 'lucide-react';

export default function Vision() {
  const visionHighlights = [
    {
      icon: Compass,
      title: 'Exploration & Innovation',
      desc: 'Venturing into uncharted scientific domains with boundary-pushing methods.',
    },
    {
      icon: Network,
      title: 'International Connectivity',
      desc: 'Forging deep cross-border ties between global research hubs and scholars.',
    },
    {
      icon: HeartHandshake,
      title: 'Collaborative Learning',
      desc: 'Multidisciplinary peer-to-peer knowledge sharing and collective growth.',
    },
    {
      icon: ShieldCheck,
      title: 'Stewardship & Inclusion',
      desc: 'Cultivating ethical science and building a just, sustainable society.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-teal-400 mb-4 border border-teal-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="text-gradient-cyan">Vision</span>
          </h2>
          
          {/* Main Statement in High-Contrast Glass Container */}
          <div className="glass-panel rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden border border-white/10 max-w-4xl">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light mb-6">
              CONGRATA guides emerging thinkers to work across areas of knowledge, communities, and frontiers through exploration, innovation, international connectivity, collaborative learning, stewardship, and social entrepreneurship.
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              By combining global experience with cross-disciplinary education, we support scholars to address pressing social concerns, strengthen the eco-system, and help build a more just, inclusive, and sustainable society; aiming to cultivate research excellence, and build scientific credibility.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Vision Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
