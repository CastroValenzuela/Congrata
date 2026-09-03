import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, MapPin } from 'lucide-react';

export default function GraduateExperiences() {
  const experiences = [
    {
      name: "Diana Gimena Romero",
      title: "STEM Mobility Scholar",
      field: "Data Analysis & Solar Photovoltaics",
      institution: "CIC-IPN (Mexico City) & UC Mentorship",
      advisors: "Guidance of Dr. Escamilla-Ambrosio & Dr. Salma Elmalaki",
      quote: "My project about Data Analysis and Human Activity Modeling for Electricity and Solar Photovoltaic Electricity Generation at CIC-IPN in North of Mexico City under the guidance of Dr. Escamilla-Ambrosio and Dr. Salma Elmalaki was an unexpected experience which enriched my perspective of the importance of my field of research and its significant applications.",
      image: "/images/scholars/diana-gimena-romero.png",
      tag: "Solar Energy & Modeling",
    },
    {
      name: "Alex Nguyen",
      title: "Robotics Research Fellow",
      field: "Heterogeneous Multi-Robot Systems",
      institution: "ITESM Monterrey Tech (Mexico)",
      advisors: "Mutualistic Multi-Agent Systems Lab",
      quote: "Colleagues in Mexico welcome me with kindness and great hospitality. This positive environment made my research on Mutualistic Interactions in Heterogeneous Multi-Robot Systems broaden an unforgettable experience.",
      image: "/images/scholars/alex-nguyen.png",
      tag: "Robotics & AI",
    },
    {
      name: "Jon Liberzon",
      title: "Environmental Science Fellow",
      field: "Water Quality Provisions & Management",
      institution: "UC Irvine & Autonomous University of Aguascalientes (UAA)",
      advisors: "Playa Los Arellanos WRRF Project",
      quote: "My study and assessing Aguascalientes' Municipality Drinking and Industrial Water Quality Provisions, Management and Reuse, should be viewed as the initiation for a fruitful long-term collaboration. Moreover, the discussions, interviews, relationships, and reciprocal demonstrations of interest were of demonstrable educational value to participating graduate students and faculty.",
      image: "/images/scholars/jon-liberzon.png",
      tag: "Water & Sustainability",
    },
  ];

  return (
    <section id="experiences" className="py-24 relative overflow-hidden bg-[#F8FAF9]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/50 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Alumni Voices</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 font-heading">
            Beyond Our Own <span className="text-gradient-green">Boundaries</span>
          </h2>
          <p className="text-[#15736B] font-bold text-base sm:text-lg mb-4">
            Graduate Experiences in Scientific Mobility
          </p>
          <p className="text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed font-light">
            The experiences of our graduates speak to the transformative power of scientific mobility. Their stories offer a firsthand perspective on how working and learning across borders shapes not only their research, but also their confidence, aspirations, and vision for their scientific careers.
          </p>
        </div>

        {/* Real Scholar Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between relative group shadow-lg shadow-slate-900/5 hover:border-[#4EA840] hover:shadow-xl transition-all"
            >
              <div>
                {/* Scholar Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative flex-shrink-0">
                    <img
                      src={exp.image}
                      alt={exp.name}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border border-emerald-300 shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#4EA840] border-2 border-white flex items-center justify-center">
                      <Sparkles className="w-2.5 h-2.5 text-white" />
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading leading-tight">
                      {exp.name}
                    </h4>
                    <p className="text-xs font-mono text-[#15736B] font-bold mt-0.5">
                      {exp.field}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                      <MapPin className="w-3 h-3 text-[#4EA840] flex-shrink-0" />
                      <span className="line-clamp-1">{exp.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Advisors info */}
                <div className="mb-4 px-3 py-1.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-[11px] font-mono text-slate-600">
                  {exp.advisors}
                </div>

                {/* Verbatim Scholar Quote */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-light relative">
                  "{exp.quote}"
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono font-bold text-[#15736B] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {exp.tag}
                </span>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-2.5 py-0.5 rounded-full border border-emerald-200">
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
