'use client';

import * as React from 'react';
import { PlaneTakeoff, ShieldCheck, Rocket, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const PILLARS_DATA = [
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

export default function CardsStack() {
  return (
    <section id="pillars" className="py-24 bg-[#F8FAF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            Scroll down to see the three dimensions stack into place, accelerating scholars from foundational discovery to global impact.
          </p>
        </div>

        {/* ── True Sticky Stacking Cards Deck (Rock Solid Native CSS) ── */}
        <div className="relative w-full pb-32">
          {PILLARS_DATA.map((card, index) => {
            const Icon = card.icon;
            // Progressive top offset so Card 1 and Card 2 remain visible at the top as a tabbed deck
            const topOffset = 110 + index * 42;

            return (
              <div
                key={card.id}
                className="sticky mb-[24vh] last:mb-0 transition-all duration-300"
                style={{
                  top: `${topOffset}px`,
                  zIndex: index + 10,
                }}
              >
                <div className="w-full rounded-3xl bg-white border border-emerald-900/15 shadow-[0_25px_60px_rgba(21,115,107,0.18)] ring-1 ring-white/90 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
                    
                    {/* Left Column: Text & Content (Span 7) */}
                    <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white relative z-10">
                      <div>
                        {/* Header Pill & Step Counter */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className={`text-[11px] font-mono font-bold px-3.5 py-1 rounded-full border shadow-sm ${card.badgeBg}`}>
                            {card.pill}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            0{index + 1} / 0{PILLARS_DATA.length}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight font-heading leading-snug">
                          {card.title}
                        </h3>

                        <p className="text-sm font-semibold text-[#15736B] mb-4">
                          {card.subtitle}
                        </p>

                        <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                          {card.description}
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-2 mb-6">
                          {card.points.map((pt, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#4EA840] flex-shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-slate-700 font-light leading-snug">
                                {pt}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA & Tags Footer */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2.5 py-0.5 rounded-lg bg-emerald-50/60 text-slate-700 border border-emerald-100 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#engage"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15736B] hover:text-[#4EA840] transition-colors"
                        >
                          <span>Explore Track</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Full-Height Photographic Visual (Span 5) */}
                    <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-slate-100">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/40 shadow-lg">
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-sm"
                          style={{ backgroundColor: card.color }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left">
                          <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                            Pillar Track
                          </div>
                          <div className="text-xs font-bold text-slate-900 font-heading">
                            CONGRATA Foundation
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
