import React from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff, Award, Lightbulb, ShieldCheck, Rocket, Sparkles, BookOpen, Video, Users } from 'lucide-react';

export default function PillarsBento() {
  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Our Three <span className="text-gradient-cyan">Pillars</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
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
            className="lg:col-span-7 glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group min-h-[480px]"
          >
            {/* Background Photographic Layer with Glass Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                alt="Transnational Mobility"
                className="w-full h-full object-cover object-center opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/80 to-[#090D16]/40" />
            </div>

            {/* Glowing Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl group-hover:bg-cyan-500/25 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-500/10 group-hover:scale-105 transition-transform">
                  <PlaneTakeoff className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-semibold px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                  PILLAR 01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight font-heading">
                Early Career Transnational Mobility
              </h3>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Offered to first-generation Master’s and PhD researchers at recognized institutions. Scholars engage in 60-day intensive assignments abroad to observe new research frameworks, exchange knowledge, and broaden perspectives beyond institutional comfort zones.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-xs px-3.5 py-1.5 rounded-xl bg-white/5 text-slate-200 border border-white/10 backdrop-blur-md">
                🌍 60-Day Global Stays
              </span>
              <span className="text-xs px-3.5 py-1.5 rounded-xl bg-white/5 text-slate-200 border border-white/10 backdrop-blur-md">
                🔬 Cross-Border Labs
              </span>
              <span className="text-xs px-3.5 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
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
              className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group flex-1 min-h-[230px]"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/25">
                    PILLAR 02 • COLLOQUIA
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight font-heading">
                  Rewarding Stewardship Development
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  Viewing professional occupation as a lasting path for intellectual achievement and personal fulfillment. Through insightful Colloquia sessions, CONGRATA fosters <strong>meaningful stewardship</strong> that connects knowledge with society.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/20 font-medium">
                  Colloquia Sessions
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300">
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
              className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group flex-1 min-h-[230px]"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shadow-md">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    PILLAR 03
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight font-heading">
                  Social Entrepreneurship
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  Through documentaries, mentorship, and relevant dialog, scholars learn from social leaders and entrepreneurs about their journeys, motivations, and experiences to create scalable societal impact.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                  Documentaries & Mentorship
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300">
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
