import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Compass, ArrowUpRight, Quote, Heart } from 'lucide-react';

export default function GraduateExperiences() {
  const experiences = [
    {
      name: "Valeria Morales, Ph.D. Candidate",
      field: "Biotechnology & Genomics",
      origin: "UNAM Mexico",
      destination: "UC Berkeley / Lawrence Lab",
      quote: "Working alongside international teams expanded my perspective beyond the bench. I returned with the confidence to lead cross-border research and publish in high-impact journals.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Dr. Rodrigo Alarcón",
      field: "Clean Energy & Nanomaterials",
      origin: "CINVESTAV",
      destination: "UC San Diego Energy Hub",
      quote: "CONGRATA gave me the mentorship to turn basic materials research into an applied social venture. Navigating new lab cultures taught me how global innovation truly happens.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Ana Lucía Domínguez, M.Sc.",
      field: "Computational Epidemiology",
      origin: "Tec de Monterrey",
      destination: "UCSF Global Health Center",
      quote: "Beyond the technical advancements, the 60-day mobility broke feelings of isolation. Having a global network of fellow first-gen researchers changed the trajectory of my career.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section id="experiences" className="py-24 relative overflow-hidden bg-[#070A12]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4 border border-cyan-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Alumni Voices</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Beyond Our Own <span className="text-gradient-cyan">Boundaries</span>
          </h2>
          <p className="text-cyan-300 font-medium text-base sm:text-lg mb-3">
            Graduate Experiences in Scientific Mobility
          </p>
          <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            The experiences of our graduates speak to the transformative power of scientific mobility. Their stories offer a firsthand perspective on how working and learning across borders shapes not only their research, but also their confidence, aspirations, and vision for their scientific careers.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-panel glass-panel-hover rounded-3xl p-7 border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top scholar info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-cyan-500/30 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white font-heading leading-tight">
                      {exp.name}
                    </h4>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">
                      {exp.field}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {exp.origin} <span className="text-cyan-500 font-bold">→</span> {exp.destination}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed italic font-light relative">
                  "{exp.quote}"
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Transnational Fellow</span>
                </span>
                <span className="text-[11px] glass-pill px-2.5 py-0.5 rounded-full border border-white/10">
                  Verified Scholar
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
