import React from 'react';
import { motion } from 'framer-motion';
import { Users2, Sparkles } from 'lucide-react';
import TeamShowcase from '@/components/ui/team-showcase';

export default function TeamSection() {
  return (
    <section id="team" className="pt-24 pb-36 sm:pb-44 relative overflow-hidden bg-[#F8FAF9]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/50 shadow-sm">
            <Users2 className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Executive & Academic Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Our Mentors & <span className="text-gradient-green">Leadership</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
            Guiding first-generation STEM innovators through transnational academic research, Silicon Valley financial governance, and global university alliances.
          </p>
        </div>

        {/* Team Showcase Interactive Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-900/10 shadow-xl shadow-emerald-950/5 relative overflow-hidden"
        >
          <TeamShowcase />
        </motion.div>
      </div>
    </section>
  );
}
