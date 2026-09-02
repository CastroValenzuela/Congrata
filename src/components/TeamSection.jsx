import React from 'react';
import { motion } from 'framer-motion';
import { Users2, Sparkles } from 'lucide-react';
import TeamShowcase from '@/components/ui/team-showcase';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4 border border-cyan-500/20">
            <Users2 className="w-3.5 h-3.5" />
            <span>Advisory & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Our Mentors & <span className="text-gradient-cyan">Leadership</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            An interdisciplinary council of educators, university researchers, and social entrepreneurs dedicated to expanding opportunities for emerging scientific talent.
          </p>
        </div>

        {/* Team Showcase Interactive Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <TeamShowcase />
        </motion.div>
      </div>
    </section>
  );
}
