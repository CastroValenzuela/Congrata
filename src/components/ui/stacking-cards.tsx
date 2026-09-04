'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff, ShieldCheck, Rocket, Sparkles, CheckCircle2, Globe, GraduationCap } from 'lucide-react';

export interface StackingCardItem {
  id: string;
  pill: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tags: string[];
  image: string;
  color: string;
  badgeBg: string;
  icon: React.ElementType;
}

export const PILLARS_DATA: StackingCardItem[] = [
  {
    id: 'pillar-1',
    pill: 'PILLAR 01 • GLOBAL MOBILITY',
    title: 'Early Career Transnational Mobility',
    subtitle: '60-Day Immersive International STEM Assignments',
    description: 'Offered to first-generation Master’s and PhD researchers at recognized institutions. Scholars engage in intensive 60-day assignments abroad to observe cutting-edge research frameworks, exchange knowledge, and broaden perspectives beyond institutional comfort zones.',
    points: [
      'Observe novel problem-solving and experimental frameworks in top global labs.',
      'Strengthen cognitive, personal, and academic resilience in multicultural research teams.',
      'Comprehensive research report evaluated for continuing high-level international pathways.'
    ],
    tags: ['🌍 60-Day Global Stays', '🔬 Cross-Border Labs', '🏛️ UC System Heritage'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    color: '#4EA840',
    badgeBg: 'bg-emerald-50 text-[#15736B] border-emerald-200',
    icon: PlaneTakeoff,
  },
  {
    id: 'pillar-2',
    pill: 'PILLAR 02 • COLLOQUIA & STEWARDSHIP',
    title: 'Rewarding Stewardship Development',
    subtitle: 'Connecting Deep Scientific Knowledge with Ethical Society',
    description: 'Viewing professional occupation as a lasting path for intellectual achievement and personal fulfillment. Through insightful Colloquia sessions, CONGRATA fosters meaningful stewardship that empowers researchers to guide communities toward sustainable progress.',
    points: [
      'Interactive Colloquia sessions bridging advanced science with ethical policy.',
      'Mentorship on long-term career projection and scientific credibility.',
      'Developing empathetic leadership for ecological and social governance.'
    ],
    tags: ['💬 Colloquia Sessions', '🛡️ Ethical Leadership', '🌱 Meaningful Stewardship'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    color: '#15736B',
    badgeBg: 'bg-teal-50 text-[#15736B] border-teal-200',
    icon: ShieldCheck,
  },
  {
    id: 'pillar-3',
    pill: 'PILLAR 03 • SOCIAL ENTREPRENEURSHIP',
    title: 'Social Entrepreneurship & Scalable Impact',
    subtitle: 'Transforming Laboratory Discoveries into Community Solutions',
    description: 'Through documentary features, high-impact mentorship, and relevant dialog, scholars learn from established social leaders and innovators about their journeys, motivations, and strategies to build scalable, sustainable solutions for urgent global matters.',
    points: [
      'Direct dialogue with Silicon Valley and international social entrepreneurs.',
      'Documentary-driven case studies on green tech transfer, venture execution and patents.',
      'Bridging scientific rigor with financial sustainability and community impact.'
    ],
    tags: ['🚀 Social Entrepreneurship', '🎬 Documentaries & Dialogue', '⚡ Scalable Solutions'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    color: '#F5B942',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: Rocket,
  },
];

export default function StackingPillars() {
  return (
    <section id="pillars" className="py-24 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Strategic Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Our Three <span className="text-gradient-green">Pillars</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
            Explore the three interconnected dimensions engineered to accelerate scholars from foundational discovery to global impact.
          </p>
        </div>

        {/* ── Stacking Cards Deck (Sticky Overlapping Stack) ── */}
        <div className="relative space-y-16 sm:space-y-24 pb-20">
          {PILLARS_DATA.map((card, index) => {
            const Icon = card.icon;
            const topOffset = 110 + index * 36; // Staggered top offset so headers stay visible

            return (
              <div
                key={card.id}
                className="sticky transition-all duration-300"
                style={{
                  top: `${topOffset}px`,
                  zIndex: index + 10,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/95 backdrop-blur-2xl border border-emerald-900/15 shadow-[0_25px_60px_rgba(21,115,107,0.16)] relative overflow-hidden ring-1 ring-white/90"
                >
                  {/* Ambient Glow Accent */}
                  <div 
                    className="absolute -top-16 -right-16 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: card.color }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    
                    {/* Left Narrative Column (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Pillar Pill Header */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className={`text-[11px] font-mono font-bold px-3.5 py-1 rounded-full border shadow-sm ${card.badgeBg}`}>
                            {card.pill}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            0{index + 1} / 0{PILLARS_DATA.length}
                          </span>
                        </div>

                        {/* Card Title & Subtitle */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight font-heading leading-tight">
                          {card.title}
                        </h3>
                        
                        <p className="text-sm sm:text-base font-semibold text-[#15736B] mb-4">
                          {card.subtitle}
                        </p>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                          {card.description}
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-2.5 mb-6">
                          {card.points.map((pt, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-[#4EA840] flex-shrink-0 mt-1" />
                              <span className="text-xs sm:text-sm text-slate-700 font-light leading-snug">
                                {pt}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags Bottom Bar */}
                      <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-xl bg-slate-50 text-slate-700 border border-slate-200/80 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Photographic Visual Column (Span 5) */}
                    <div className="lg:col-span-5 relative">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-slate-200 shadow-xl group">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        
                        {/* Floating Icon Badge */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/40 shadow-lg">
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm"
                            style={{ backgroundColor: card.color }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="text-left">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                              Strategic Track
                            </div>
                            <div className="text-xs font-bold text-slate-900 font-heading">
                              CONGRATA Model
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
