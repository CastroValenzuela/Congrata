import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Sparkles, GraduationCap, Award, Briefcase, FileCheck, Layers } from 'lucide-react';

export interface TeamMember {
  id: string;
  category: 'management' | 'scientific';
  name: string;
  credentials?: string;
  role: string;
  institution?: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
  };
}

export const ALL_TEAM_MEMBERS: TeamMember[] = [
  // ── Management Team ──
  {
    id: '1',
    category: 'management',
    name: 'Luisa Kregel',
    credentials: 'MSc',
    role: 'FOUNDER – PRESIDENT – CEO',
    institution: 'Co-Founder MGREP (UC Irvine) • Univ. of Arizona • UMSNH • UC Berkeley',
    bio: 'With over 15 years of experience in technology transfer to various economic sectors: aerospace, scientific research, and marine technology. She maintains an active interest in topics of green manufacturing, renewable resources, sustainable production, health, ethics, science, and technologies. She co-founded the Mexico Graduate Research and Education Program (MGREP) at the University of California Irvine. Luisa earned her MSc in Management Information Systems from the University of Arizona; Bachelor of Science in Chemical Engineering from UMSNH; International Project Management from UC Berkeley.',
    image: '/images/team/luisa-kregel.jpg',
    social: { linkedin: '#' },
  },
  {
    id: '2',
    category: 'management',
    name: 'James M. Schmidt',
    credentials: 'CPA, MBA',
    role: 'CONTROLLER',
    institution: 'Ernst & Young CPAs (Silicon Valley) • UC Berkeley • George Washington Univ.',
    bio: 'Jim brings over 20 years of accounting and management experience. During his career as an auditor of high-tech companies in Silicon Valley with Ernst & Young CPAs. He has assisted start-up ventures with their financial strategy. Earned his MBA and BA degree in Economics from UC Berkeley. Jim also studied Public Policy and Governmental Process at George Washington University. Holds an active California CPA license.',
    image: '/images/team/james-schmidt.jpg',
    social: { linkedin: '#' },
  },

  // ── Scientific Board ──
  {
    id: '3',
    category: 'scientific',
    name: 'Dr. James Earthman',
    credentials: 'PhD.',
    role: 'PROFESSOR – UNIVERSITY OF CALIFORNIA IRVINE',
    institution: 'Research – Industry Liaison of CONGRATA • 5 Patents',
    bio: 'Dr. Earthman is the research – industry liaison of CONGRATA. His research activities include studies of a broad range of deformation and damage mechanisms in both model and advanced materials. His work also involves the development and use of computer-based techniques for determining the damping characteristics of biomaterials and mechanical biocompatibility, the corrosion behavior of metals exposed to living cells, and the nondestructive characterization of surface defects in situ. He is an inventor on five patents, two international patents and three pending patents.',
    image: '/images/team/james-earthman.jpg',
    social: { linkedin: '#' },
  },
  {
    id: '4',
    category: 'scientific',
    name: 'Dr. Juan Ignacio Rodriguez',
    credentials: 'PhD.',
    role: 'AEROSPACE & FLUID DYNAMICS CONSULTANT',
    institution: 'MIT (B.S. 2004) • UCLA (M.S., Ph.D.) • École Centrale Paris • MGREP (UC Irvine)',
    bio: 'Graduated from MIT in 2004 with a bachelor’s degree in Aerospace Engineering (Gas Turbine Lab, NASA Kennedy Space Center intern). He obtained his M.S. and Ph.D. at UCLA studying acoustic excitation on droplet combustion and coaxial jets. Postdoctoral appointment at École Centrale Paris on numerical modelling of trans critical coaxial jets. Following a period at the Air Force Research Lab in Edwards, CA, joined the Engineering Faculty of CETYS University (2015–2019). He currently serves as consultant for the Mexico Graduate Research and Education Program (MGREP) at UC Irvine.',
    image: '/images/team/juan-rodriguez.jpg',
    social: { linkedin: '#' },
  },
  {
    id: '5',
    category: 'scientific',
    name: 'Dr. Celestino Fernandez',
    credentials: 'PhD.',
    role: 'DISTINGUISHED OUTREACH PROFESSOR – UNIV. OF ARIZONA',
    institution: 'University of Arizona • Higher Education Commission • ETS Board',
    bio: 'Dr. Fernandez brings extensive leadership experience in education, institutional administration, cultural ethnicity, and diversity research. Received numerous recognitions during his executive positions at the University of Arizona, and as administrator and founder of 5 low income area high schools. Sits on the boards of the Commission on Higher Education, Educational Testing Service, Federation of State Humanities Councils, and La Frontera Arizona. Honored by the American Association for Higher Education and by the Governor of Arizona for distinguished leadership.',
    image: '/images/team/celestino-fernandez.jpg',
    social: { linkedin: '#' },
  },
  {
    id: '6',
    category: 'scientific',
    name: 'Dr. Luciana Astiz',
    credentials: 'PhD.',
    role: 'PROGRAM DIRECTOR, EDUCATION & HUMAN RESOURCES – NSF',
    institution: 'National Science Foundation • CALTECH (Ph.D.) • UNAM (B.S.) • UC San Diego',
    bio: 'Earned her doctoral degree from CALTECH and her BS degree from UNAM in geophysics. Her research expertise is in international seismology, including earthquake sources, tectonics, hazard assessment, and instrumentation. At the UC San Diego Array Network Facility, she managed data quality monitoring, instrumental calibrations, measurement of data performance, data retrieval, and assessment of data quality of broadband seismic data recordings across the continental U.S.',
    image: '/images/team/luciana-astiz.jpg',
    social: { linkedin: '#' },
  },
];

interface TeamShowcaseProps {
  className?: string;
}

export default function TeamShowcase({ className }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string>('1');

  const managementMembers = ALL_TEAM_MEMBERS.filter((m) => m.category === 'management');
  const scientificMembers = ALL_TEAM_MEMBERS.filter((m) => m.category === 'scientific');

  const col1 = ALL_TEAM_MEMBERS.filter((_, i) => i % 3 === 0);
  const col2 = ALL_TEAM_MEMBERS.filter((_, i) => i % 3 === 1);
  const col3 = ALL_TEAM_MEMBERS.filter((_, i) => i % 3 === 2);

  const activeMember = ALL_TEAM_MEMBERS.find((m) => m.id === hoveredId) || ALL_TEAM_MEMBERS[0];

  return (
    <div className={cn("flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 select-none w-full max-w-6xl mx-auto font-sans overflow-hidden", className)}>
      
      {/* ── Left: Staggered 3-Column Interactive Photo Grid ── */}
      <div className="flex gap-3 sm:gap-4 flex-shrink-0 justify-center w-full lg:w-auto no-scrollbar overflow-visible py-2">
        {/* Column 1 */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[105px] h-[120px] sm:w-[130px] sm:h-[145px] lg:w-[135px] lg:h-[150px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 (Offset Top) */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-[28px] sm:mt-[36px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[110px] h-[125px] sm:w-[135px] sm:h-[150px] lg:w-[140px] lg:h-[155px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 (Offset Top) */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-[14px] sm:mt-[18px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[105px] h-[120px] sm:w-[130px] sm:h-[145px] lg:w-[135px] lg:h-[150px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: Grouped Lists (Management Team & Scientific Board) ── */}
      <div className="flex flex-col gap-5 pt-1 flex-1 w-full no-scrollbar">
        
        {/* Category 1: Management Team */}
        <div>
          <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-emerald-900/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4EA840] shadow-[0_0_8px_#4EA840]" />
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#15736B]">
              Management Team
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            {managementMembers.map((member) => (
              <MemberRow
                key={member.id}
                member={member}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>

        {/* Category 2: Scientific Board */}
        <div>
          <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-emerald-900/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#15736B] shadow-[0_0_8px_#15736B]" />
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#15736B]">
              Scientific Board & Academic Advisors
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            {scientificMembers.map((member) => (
              <MemberRow
                key={member.id}
                member={member}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Bio & Credentials Inspection Box */}
        {activeMember && (
          <div className="p-6 rounded-3xl bg-white border border-emerald-500/20 shadow-xl shadow-emerald-950/5 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-slate-900 font-heading">
                  {activeMember.name}
                </span>
                {activeMember.credentials && (
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#15736B] border border-emerald-200">
                    {activeMember.credentials}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50/80 px-2.5 py-0.5 rounded-md border border-emerald-200">
                {activeMember.category === 'management' ? 'Management Team' : 'Scientific Board'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-3">
              {activeMember.bio}
            </p>

            {activeMember.institution && (
              <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-[11px] font-mono text-[#15736B] font-semibold">
                <GraduationCap className="w-4 h-4 flex-shrink-0 text-[#4EA840] mt-0.5" />
                <span>{activeMember.institution}</span>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}

/* ─────────────────────────────────────────
   Photo Card Component
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string;
  onHover: (id: string) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-300 border shadow-md relative group',
        className,
        isDimmed ? 'opacity-40 scale-95 border-slate-200' : 'opacity-100 scale-100 border-slate-200',
        isActive ? 'border-[#4EA840] shadow-xl shadow-emerald-500/20 ring-2 ring-[#4EA840]/50 scale-105 z-10' : ''
      )}
      onMouseEnter={() => onHover(member.id)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1.02)' : 'grayscale(0.8) brightness(0.9)',
        }}
      />
      {member.credentials && (
        <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-[9px] font-mono font-bold text-[#15736B] border border-emerald-200 shadow-sm">
          {member.credentials}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Member Row Component
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string;
  onHover: (id: string) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'cursor-pointer transition-all duration-300 p-2 sm:p-2.5 rounded-xl border',
        isDimmed ? 'opacity-50 border-transparent' : 'opacity-100',
        isActive ? 'bg-emerald-50/80 border-[#4EA840]/40 shadow-sm' : 'hover:bg-slate-50 border-transparent'
      )}
      onMouseEnter={() => onHover(member.id)}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              'h-2.5 rounded-full flex-shrink-0 transition-all duration-300',
              isActive ? 'bg-[#4EA840] w-5 shadow-[0_0_8px_#4EA840]' : 'bg-slate-300 w-2.5',
            )}
          />
          <div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'text-xs sm:text-sm font-bold leading-none tracking-tight transition-colors duration-300 font-heading',
                  isActive ? 'text-slate-900' : 'text-slate-700',
                )}
              >
                {member.name}
              </span>
              {member.credentials && (
                <span className="text-[9px] font-mono font-semibold text-[#15736B] bg-emerald-100/60 px-1.5 py-0.2 rounded border border-emerald-200">
                  {member.credentials}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-[0.1em] text-[#15736B]">
              {member.role}
            </p>
          </div>
        </div>

        {member.social?.linkedin && (
          <div
            className={cn(
              'flex items-center gap-1.5 transition-all duration-200',
              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
            )}
          >
            <span className="p-1 rounded-lg text-slate-500 hover:text-[#15736B] hover:bg-emerald-100 transition-all">
              <FaLinkedinIn size={12} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
