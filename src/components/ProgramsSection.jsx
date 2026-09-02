import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Clock, 
  Calendar, 
  BrainCircuit, 
  Globe, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import MagicButton from '@/components/ui/MagicButton';

export default function ProgramsSection() {
  const journeySteps = [
    {
      step: '01',
      title: 'Target Eligibility',
      desc: 'Offered to first-generation early-career science graduate students regularly enrolled in Master’s and PhD programs at recognized institutions.',
      icon: GraduationCap,
    },
    {
      step: '02',
      title: '60-Day Global Mobility',
      desc: 'During a 60-day period, scholars take selected assignments to observe new research frameworks, problem-solving methods, and technological advancements.',
      icon: Clock,
    },
    {
      step: '03',
      title: 'Cognitive & Career Projection',
      desc: 'Deepening analytical thinking, academic resilience, and assertive decision-making while immersing in international scientific cultures.',
      icon: BrainCircuit,
    },
    {
      step: '04',
      title: 'Final Evaluation & Report',
      desc: 'At the end of their stay, scholars submit an in-depth research report evaluated for future high-level international mobility pathways.',
      icon: FileCheck,
    },
  ];

  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-teal-400 mb-4 border border-teal-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Programs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Scholars <span className="text-gradient-cyan">Global Mobility</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-base sm:text-lg leading-relaxed">
            A transformative 60-day international research experience designed to expand the frontiers, analytical capabilities, and leadership of emerging STEM pioneers.
          </p>
        </div>

        {/* Featured 60-Day Immersive Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 mb-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/20 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>60-Day Immersive STEM Stays Abroad</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug font-heading">
                Accelerating Master's & PhD Scientific Potential
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                During a 60-day period, STEM mobility scholars take selected assignments with the purpose of observing and learning new approaches to problem solving and research, while exchanging knowledge and learning about other cultures’ ways of living, decision making, and perceiving technological and economic advancements.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">
                    <strong>Deepen analytical thinking</strong> and strengthen cognitive, personal, and academic skills.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">
                    <strong>Assertive decision-making</strong> and long-term scientific career projection.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">
                    <strong>Comprehensive final report</strong> submitted and evaluated for continuing research pathways.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Application Callout Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-400/30 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-transparent relative overflow-hidden shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                    Current Cycle
                  </span>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-heading">
                  Cohort 2026-2027
                </div>

                <div className="flex items-center gap-2 text-slate-300 text-sm mb-6">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Applications deadline: <strong className="text-white font-mono">Before May 2027</strong></span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Open to enrolled Master’s and Doctoral researchers in STEM disciplines from recognized academic institutions.
                </p>

                <MagicButton href="#engage" variant="primary" icon={ArrowRight} className="w-full justify-center">
                  Apply for Global Mobility
                </MagicButton>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Step Process Timeline Cards */}
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
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400/30 group-hover:text-cyan-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-heading">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
