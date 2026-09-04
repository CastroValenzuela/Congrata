'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Award, 
  Building2, 
  Globe2, 
  FileText,
  DollarSign
} from 'lucide-react';

export default function PhilanthropySection() {
  const [frequency, setFrequency] = useState('one-time');
  const [selectedTier, setSelectedTier] = useState(2);

  const tiers = [
    {
      id: 1,
      name: 'Field Research Supplies',
      amount: 500,
      badge: 'SUPPORTER',
      tagline: 'Equip an Early-Career Scholar',
      description: 'Funds laboratory experimental consumables, micro-sensing kits, software licenses, and local transit during research assignments.',
      highlights: [
        'Experimental field supplies & sensor calibration',
        'Official recognition in CONGRATA Annual Dispatch',
        'Direct tax deduction receipt under 501(c)(3)',
      ],
      color: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
      actionText: 'Support with $500',
    },
    {
      id: 2,
      name: 'Transnational Mobility Grant',
      amount: 2500,
      badge: 'MOST IMPACTFUL',
      isPopular: true,
      tagline: 'Fund a 60-Day Global Stay',
      description: 'Provides round-trip international transit, lodging stipend, and international emergency insurance for one first-generation scholar.',
      highlights: [
        'Covers complete 60-day living & transit stipend',
        'Connects student with top host lab in Mexico / US',
        'Personalized research report letter from the scholar',
        'Official IRS 501(c)(3) tax-exempt receipt',
      ],
      color: 'border-[#4EA840] ring-1 ring-[#4EA840]/60 shadow-[0_0_35px_rgba(78,168,64,0.25)]',
      badgeBg: 'bg-[#4EA840] text-slate-950 font-extrabold',
      actionText: 'Fund a Grant ($2,500)',
    },
    {
      id: 3,
      name: 'Lab Bio-Sensing & Prototypes',
      amount: 5000,
      badge: 'INNOVATION TIER',
      tagline: 'Advance Experimental Validation',
      description: 'Accelerates testing in biomedical phenomics, AI smart grid algorithms, or rhizosphere soil microbiome regeneration.',
      highlights: [
        'High-throughput assay consumables & micro-chips',
        'Accelerates prototype to peer-reviewed publication',
        'Invitation to Annual Scientific Advisory Assembly',
        'Named acknowledgment in published white papers',
      ],
      color: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
      actionText: 'Advance Lab ($5,000)',
    },
    {
      id: 4,
      name: 'Full Named Fellowship',
      amount: 15000,
      badge: '★ PREMIER HONOR',
      tagline: 'Endow a Named Scholar in STEM',
      description: 'Endow a full fellowship bearing your name or family foundation (e.g., The Family Fellow). The pinnacle of scientific philanthropy.',
      highlights: [
        'Full fellowship permanently named in your honor',
        'Dedicated copy of the complete thesis & research dossier',
        'Private 1-on-1 briefing with the scholar & faculty co-advisor',
        'VIP status at UC System and CONGRATA leadership dinners',
      ],
      color: 'border-[#F5B942]/60 ring-1 ring-[#F5B942]/40 shadow-[0_0_35px_rgba(245,185,66,0.2)]',
      badgeBg: 'bg-[#F5B942] text-slate-950 font-extrabold',
      actionText: 'Endow Fellowship ($15,000)',
    },
  ];

  const handleGivingSelect = (tierAmount, tierName) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-scholar-modal', {
          detail: {
            type: 'endowment',
            note: `Philanthropic pledge: ${tierName} ($${tierAmount.toLocaleString()} USD - ${frequency})`,
          },
        })
      );
    }
  };

  return (
    <section 
      id="giving" 
      className="pt-24 pb-32 sm:pb-40 relative overflow-hidden bg-[#071917] text-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] mt-8 sm:mt-12 relative z-20 border-t border-emerald-500/25 shadow-[0_-30px_70px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-emerald-400/40 before:to-transparent"
    >
      {/* Background Topographic Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 mb-4 border border-emerald-500/30 shadow-md backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>501(c)(3) Tax-Exempt Scientific Foundation • Corona Del Mar, CA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Invest in Tomorrow's <br className="hidden sm:inline" />
            <span className="text-[#4EA840]">Scientific Pioneers</span>
          </h2>

          <p className="text-emerald-100/70 max-w-2xl text-base sm:text-lg leading-relaxed font-light mb-8">
            Your philanthropic support breaks financial barriers for first-generation researchers, transforming exploratory science into real-world environmental and health solutions.
          </p>

          {/* Giving Cadence Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-emerald-950/90 border border-emerald-500/30 shadow-lg">
            <button
              type="button"
              onClick={() => setFrequency('one-time')}
              className={`px-6 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
                frequency === 'one-time'
                  ? 'bg-gradient-to-r from-[#4EA840] to-[#15736B] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ONE-TIME CONTRIBUTION
            </button>
            <button
              type="button"
              onClick={() => setFrequency('annual')}
              className={`px-6 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-1.5 ${
                frequency === 'annual'
                  ? 'bg-gradient-to-r from-[#4EA840] to-[#15736B] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>ANNUAL ENDOWMENT</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-extrabold">
                IMPACT
              </span>
            </button>
          </div>
        </div>

        {/* 4 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {tiers.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tier.id * 0.08 }}
                onClick={() => setSelectedTier(tier.id)}
                className={`rounded-3xl p-6 sm:p-7 bg-[#0C2421]/90 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 relative group cursor-pointer ${
                  tier.color
                } ${isSelected ? 'scale-[1.02]' : 'hover:border-emerald-400/50'}`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${tier.badgeBg}`}>
                      {tier.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      USD / {frequency === 'annual' ? 'yr' : 'gift'}
                    </span>
                  </div>

                  {/* Amount Display */}
                  <div className="mb-2">
                    <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline gap-1">
                      <span className="text-[#4EA840] text-2xl sm:text-3xl">$</span>
                      <span>{tier.amount.toLocaleString()}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1">
                    {tier.name}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-300 mb-3">
                    {tier.tagline}
                  </p>

                  <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                    {tier.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-emerald-950/80 mb-6">
                    {tier.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                        <Check className="w-3.5 h-3.5 text-[#4EA840] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button Action */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGivingSelect(tier.amount, tier.name);
                  }}
                  className={`w-full py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                    tier.isPopular || tier.id === 4
                      ? 'bg-[#F5B942] hover:bg-[#E5A830] text-slate-950 shadow-lg shadow-amber-500/20'
                      : 'bg-emerald-900/60 hover:bg-emerald-800 text-white border border-emerald-500/30'
                  }`}
                >
                  <span>{tier.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Major Gifts, Wire Transfers & DAFs Institutional Ribbon */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#061614] border border-emerald-500/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F5B942] uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Major Gifts • Wire Transfer, Stock Equities & DAFs</span>
            </div>
            <p className="text-sm text-slate-300 font-light max-w-2xl">
              For corporate matching programs, foundation grants, or bank wire transfer instructions, our Corona Del Mar executive office provides direct banking routing and tax acknowledgment documentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(
                    new CustomEvent('open-scholar-modal', {
                      detail: {
                        type: 'endowment',
                        note: 'Inquiry regarding Institutional Wire Transfer / Stock Gift / DAF',
                      },
                    })
                  );
                }
              }}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-bold tracking-wider border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>REQUEST WIRE INSTRUCTIONS</span>
            </button>
          </div>
        </div>

        {/* Legal Tax Exemption Footer Notice */}
        <div className="mt-8 text-center text-xs font-mono text-slate-400 max-w-3xl mx-auto leading-relaxed">
          <p>
            CONGRATA is an exempt organization under Section 501(c)(3) of the Internal Revenue Code. All contributions are tax-deductible to the extent permitted by law. Official Address: P.O. Box 1197, Corona Del Mar, CA 92625 • EIN available upon request.
          </p>
        </div>

      </div>
    </section>
  );
}
