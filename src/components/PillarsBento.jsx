import React from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff, ShieldCheck, Rocket, Sparkles, BookOpen, Users, ArrowRight } from 'lucide-react';

export default function PillarsBento() {
  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-[#F8FAF9]">
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
            A comprehensive, three-dimensional model engineered to accelerate scholars from foundational discovery to global impact.
          </p>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Pillar 1: Transnational Mobility (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-emerald-900/10 shadow-xl shadow-emerald-950/5 relative overflow-hidden flex flex-col justify-between group min-h-[480px] hover:border-[#4EA840] transition-all"
          >
            {/* Background Image Layer with Clean Gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                alt="Transnational Mobility"
                className="w-full h-full object-cover object-center opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#15736B] shadow-md group-hover:scale-105 transition-transform">
                  <PlaneTakeoff className="w-7 h-7 text-[#4EA840]" />
                </div>
                <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-emerald-50 text-[#15736B] border border-emerald-200">
                  PILLAR 01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight font-heading">
                Early Career Transnational Mobility
              </h3>
              
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Offered to first-generation Master’s and PhD researchers at recognized institutions. Scholars engage in 60-day intensive assignments abroad to observe new research frameworks, exchange knowledge, and broaden perspectives beyond institutional comfort zones.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <span className="text-xs px-3.5 py-1.5 rounded-xl bg-emerald-50 text-slate-700 border border-emerald-100 font-medium">
                🌍 60-Day Global Stays
              </span>
              <span className="text-xs px-3.5 py-1.5 rounded-xl bg-emerald-50 text-slate-700 border border-emerald-100 font-medium">
                🔬 Cross-Border Labs
              </span>
              <span className="text-xs px-3.5 py-1.5 rounded-xl bg-emerald-100 text-[#15736B] border border-emerald-300 font-bold">
                🏛️ UC System Heritage
              </span>
            </div>
          </motion.div>

          {/* Right Column (Span 5): 2 Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Pillar 2: Rewarding Stewardship Development & Colloquia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-emerald-900/10 shadow-lg shadow-emerald-950/5 relative overflow-hidden flex flex-col justify-between group flex-1 min-h-[230px] hover:border-[#4EA840] transition-all"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#15736B] shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#15736B]" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-teal-50 text-[#15736B] border border-teal-200">
                    PILLAR 02 • COLLOQUIA
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 tracking-tight font-heading">
                  Rewarding Stewardship Development
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  Viewing professional occupation as a lasting path for intellectual achievement and personal fulfillment. Through insightful Colloquia sessions, CONGRATA fosters <strong>meaningful stewardship</strong> that connects knowledge with society.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-teal-50 text-[#15736B] border border-teal-200 font-bold">
                  Colloquia Sessions
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  Ethical Leadership
                </span>
              </div>
            </motion.div>

            {/* Pillar 3: Social Entrepreneurship */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-amber-500/20 shadow-lg shadow-amber-950/5 relative overflow-hidden flex flex-col justify-between group flex-1 min-h-[230px] hover:border-amber-400 transition-all"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm">
                    <Rocket className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    PILLAR 03
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 tracking-tight font-heading">
                  Social Entrepreneurship
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  Through documentaries, mentorship, and relevant dialog, scholars learn from social leaders and entrepreneurs about their journeys, motivations, and experiences to create scalable societal impact.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 font-bold">
                  Documentaries & Mentorship
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  Scalable Solutions
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
