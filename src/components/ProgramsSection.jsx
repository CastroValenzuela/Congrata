'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Clock, 
  Calendar, 
  BrainCircuit, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Plane
} from 'lucide-react';

export default function ProgramsSection() {
  const journeySteps = [
    {
      step: '01',
      title: 'Target Eligibility',
      tag: 'Admission Criteria',
      desc: 'Offered to first-generation early-career science graduate students regularly enrolled in Master’s and PhD programs at recognized institutions.',
      icon: GraduationCap,
    },
    {
      step: '02',
      title: '60-Day Global Mobility',
      tag: 'International Stays',
      desc: 'Scholars take selected assignments to observe new research frameworks, problem-solving methods, and technological advancements.',
      icon: Clock,
    },
    {
      step: '03',
      title: 'Cognitive & Career Projection',
      tag: 'Scientific Leadership',
      desc: 'Deepening analytical thinking, academic resilience, and assertive decision-making while immersing in international scientific cultures.',
      icon: BrainCircuit,
    },
    {
      step: '04',
      title: 'Final Evaluation & Report',
      tag: 'Continuing Pathways',
      desc: 'At the end of their stay, scholars submit an in-depth research report evaluated for future high-level international mobility pathways.',
      icon: FileCheck,
    },
  ];

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-[#F8FAF9]">
      
      {/* Background Topographic Accent Line */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/60 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Academic Programs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Scholars <span className="text-gradient-green">Global Mobility</span>
          </h2>
          <p className="text-slate-600 max-w-3xl text-base sm:text-lg leading-relaxed font-light">
            A transformative 60-day international research experience designed to expand the frontiers, analytical capabilities, and leadership of emerging STEM pioneers.
          </p>
        </div>

        {/* Featured 60-Day Immersive Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-900/10 mb-16 relative overflow-hidden shadow-xl shadow-emerald-950/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#15736B] text-xs font-mono font-bold border border-emerald-200 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#4EA840]" />
                <span>60-Day Immersive STEM Stays Abroad</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-snug font-heading">
                Accelerating Master's & PhD Scientific Potential
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
                During a 60-day period, STEM mobility scholars take selected assignments with the purpose of observing and learning new approaches to problem solving and research, while exchanging knowledge and learning about other cultures’ ways of living, decision making, and perceiving technological and economic advancements.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4EA840] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">
                    <strong>Deepen analytical thinking</strong> and strengthen cognitive, personal, and academic skills.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#15736B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">
                    <strong>Assertive decision-making</strong> and long-term scientific career projection.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4EA840] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">
                    <strong>Comprehensive final report</strong> submitted and evaluated for continuing research pathways.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Application Callout Card (Maxmont Pill Style) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50 border border-emerald-200 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#15736B] font-bold">
                    Current Cycle
                  </span>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#4EA840] animate-pulse" />
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 font-heading">
                  Global Scholars Cohort
                </div>

                <div className="flex items-center gap-2 text-slate-600 text-sm mb-6">
                  <Calendar className="w-4 h-4 text-[#15736B]" />
                  <span>Applications deadline: <strong className="text-slate-900 font-mono">Before May 2027</strong></span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-light">
                  Open to enrolled Master’s and Doctoral researchers in STEM disciplines from recognized academic institutions.
                </p>

                {/* High Contrast Pill Action Button (Maxmont Style) */}
                <a 
                  href="#engage" 
                  className="w-full justify-center px-8 py-4 rounded-full font-bold text-slate-950 bg-[#F5B942] hover:bg-[#E5A830] shadow-lg shadow-amber-500/25 border border-white/40 transition-all flex items-center gap-2 text-sm text-center group active:scale-95"
                >
                  <span>Apply for Global Mobility</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Step Executive Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[#4EA840] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-[#15736B]/25 group-hover:text-[#4EA840] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#15736B] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#4EA840]" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {step.tag}
                  </span>

                  <h4 className="text-lg font-bold text-slate-900 mb-2.5 font-heading group-hover:text-[#15736B] transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#15736B]">
                  <span>Phase {step.step} of 04</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
