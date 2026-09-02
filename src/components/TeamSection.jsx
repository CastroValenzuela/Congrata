import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users2, 
  Sparkles, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  FileCheck2, 
  ArrowUpRight 
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

export const MANAGEMENT_MEMBERS = [
  {
    name: 'Luisa Kregel',
    credentials: 'MSc',
    role: 'Founder – President – CEO',
    image: '/images/team/luisa-kregel.jpg',
    highlights: [
      'Co-Founder MGREP (UC Irvine)',
      'MSc MIS (Univ. of Arizona)',
      'B.S. Chemical Engineering (UMSNH)',
      'Intl. Project Management (UC Berkeley)',
    ],
    bio: 'With over 15 years of experience in technology transfer to various economic sectors: aerospace, scientific research, and marine technology. She maintains an active interest in topics of green manufacturing, renewable resources, sustainable production, health, ethics, science, and technologies. She co-founded the Mexico Graduate Research and Education Program (MGREP) at the University of California Irvine. Luisa earned her MSc in Management Information Systems from the University of Arizona; Bachelor of Science in Chemical Engineering from UMSNH; International Project Management from UC Berkeley.',
    tag: 'Executive Leadership',
  },
  {
    name: 'James M. Schmidt',
    credentials: 'CPA, MBA',
    role: 'Controller',
    image: '/images/team/james-schmidt.jpg',
    highlights: [
      'Ernst & Young CPAs (Silicon Valley)',
      'MBA & BA Economics (UC Berkeley)',
      'Public Policy (George Washington Univ.)',
      'Active California CPA License',
    ],
    bio: 'Jim brings over 20 years of accounting and management experience. During his career as an auditor of high-tech companies in Silicon Valley with Ernst & Young CPAs. He has assisted start-up ventures with their financial strategy. Earned his MBA and BA degree in Economics from UC Berkeley. Jim also studied Public Policy and Governmental Process at George Washington University. Holds an active California CPA license.',
    tag: 'Financial Governance',
  },
];

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
            <span>Executive Governance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Management <span className="text-gradient-cyan">Team</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Seasoned leadership in transnational technology transfer, academic innovation, and Silicon Valley financial governance.
          </p>
        </div>

        {/* 2 Executive Member Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MANAGEMENT_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between relative group shadow-2xl overflow-hidden"
            >
              <div>
                {/* Top Profile Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-cyan-400/40 shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-mono text-[10px] font-bold shadow-md">
                      {member.credentials}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                        {member.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-heading tracking-tight">
                      {member.name}
                    </h3>
                    
                    <p className="text-cyan-300 text-sm font-semibold tracking-wide mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Institution / Highlight Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-xl bg-white/[0.04] text-slate-300 border border-white/10 font-mono"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Detailed Bio */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CONGRATA Leadership</span>
                </span>
                <span className="text-[11px] font-mono glass-pill px-3 py-1 rounded-full border border-white/10">
                  Executive Board
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
