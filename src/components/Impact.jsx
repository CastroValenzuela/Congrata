import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building2, 
  Globe2, 
  BookOpenCheck, 
  TrendingUp, 
} from 'lucide-react';
import { Globe } from '@/components/ui/globe';

export default function Impact() {
  const impactItems = [
    {
      icon: Users,
      title: 'Young STEM Innovators & Future Leaders',
      desc: 'Nurturing early-career researchers with the confidence, global networks, and interdisciplinary mindset to spearhead groundbreaking advancements.',
    },
    {
      icon: Building2,
      title: 'Partners in Academia, Corporations & Public Institutions',
      desc: 'Creating high-value cross-sector alliances that bridge scientific research with industry application and public policy impact.',
    },
    {
      icon: Globe2,
      title: 'Communities, Countries & Regions',
      desc: 'Generating lasting social and economic benefits by addressing localized challenges through internationally informed scientific methods.',
    },
    {
      icon: BookOpenCheck,
      title: 'Scholarly Collaboration & Transnational Research',
      desc: 'Catalyzing meaningful publications, shared patents, and sustained institutional exchange across borders.',
    },
  ];

  return (
    <section 
      id="impact" 
      className="py-28 relative overflow-hidden bg-[#F8FAF9] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] -mt-12 sm:-mt-16 z-40 border-t border-slate-200/80 shadow-[0_-30px_70px_rgba(0,0,0,0.12)] before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-emerald-500/30 before:to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/50 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Transnational Corridors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            CONGRATA <span className="text-gradient-green">Impact</span>
          </h2>
          <p className="text-slate-600 max-w-3xl text-base sm:text-lg leading-relaxed font-light">
            Unlike traditional programs, CONGRATA mentors the next generation of interdisciplinary STEM innovators and globally minded leaders by integrating international mobility, cross-disciplinary collaboration, stewardship, and social entrepreneurship.
          </p>
        </div>

        {/* 2-Column Split: 3D Interactive Globe on Right, Impact Dimensions on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Span 6): Impact 4 Dimension Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {impactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 flex gap-4 sm:gap-5 relative overflow-hidden border border-slate-200/90 shadow-md hover:border-[#4EA840] hover:shadow-lg transition-all group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15736B] group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-[#4EA840]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug font-heading">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column (Span 6): Interactive 3D Globe Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#0F2D28] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden border border-emerald-500/30 shadow-2xl min-h-[520px]"
          >
            {/* Top Badge & Interactive Hint */}
            <div className="w-full flex items-center justify-between z-10 mb-2">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#4EA840] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
                  Global Mobility Grid
                </span>
              </div>
              <span className="text-[11px] text-emerald-100 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                🖱️ Drag to rotate globe
              </span>
            </div>

            {/* Interactive 3D Canvas */}
            <div className="relative w-full aspect-square max-w-[480px] flex items-center justify-center">
              <Globe
                size={480}
                dotColor="rgba(78, 168, 64, ALPHA)"
                arcColor="rgba(78, 168, 64, 0.55)"
                markerColor="rgba(245, 185, 66, 1)"
                autoRotateSpeed={0.0018}
                className="w-full h-full max-w-full"
              />
            </div>

            {/* Bottom Mobility Hub Badges */}
            <div className="w-full pt-4 border-t border-emerald-800 flex flex-wrap items-center justify-between gap-2 z-10">
              <div className="flex items-center gap-2 text-xs text-emerald-100">
                <span className="w-2 h-2 rounded-full bg-[#4EA840]" />
                <span>UC California</span>
                <span className="text-emerald-400">↔</span>
                <span className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
                <span>Mexico City</span>
                <span className="text-emerald-400">↔</span>
                <span className="w-2 h-2 rounded-full bg-[#F5B942]" />
                <span>Global Hubs</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-900/80 px-2.5 py-0.5 rounded-md border border-emerald-700">
                Transnational Corridors
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
