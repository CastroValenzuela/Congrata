import React, { useState } from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Sparkles, Building2, GraduationCap } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  credentials?: string;
  role: string;
  image: string;
  institution?: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export const CONGRATA_TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Luisa Kregel',
    credentials: 'MSc',
    role: 'FOUNDER – PRESIDENT – CEO',
    institution: 'Co-Founder MGREP (UC Irvine) • Univ. of Arizona • UMSNH • UC Berkeley',
    bio: 'With over 15 years of experience in technology transfer to aerospace, scientific research, and marine technology. She co-founded the Mexico Graduate Research and Education Program (MGREP) at UC Irvine.',
    image: '/images/team/luisa-kregel.jpg',
    social: { linkedin: '#' },
  },
  {
    id: '2',
    name: 'James M. Schmidt',
    credentials: 'CPA, MBA',
    role: 'CONTROLLER',
    institution: 'Ernst & Young CPAs (Silicon Valley) • UC Berkeley • George Washington Univ.',
    bio: 'Jim brings over 20 years of accounting and management experience auditing high-tech companies in Silicon Valley with Ernst & Young CPAs. Holds an active California CPA license.',
    image: '/images/team/james-schmidt.jpg',
    social: { linkedin: '#' },
  },
  {
    id: '3',
    name: 'Dr. Salma Elmalaki',
    credentials: 'Ph.D.',
    role: 'SENIOR RESEARCH ADVISOR',
    institution: 'University of California • Faculty Mentor',
    bio: 'Leading research initiatives in smart energy systems, distributed sensing, and human activity modeling for transnational scholar research.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    social: { linkedin: '#' },
  },
  {
    id: '4',
    name: 'Dr. Escamilla-Ambrosio',
    credentials: 'Ph.D.',
    role: 'ACADEMIC COLLABORATION ADVISOR',
    institution: 'CIC-IPN (Mexico) • Solar Energy & AI',
    bio: 'Guiding cross-border investigations in solar photovoltaic energy generation and multi-sensor data analysis for early-career scholars.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    social: { linkedin: '#' },
  },
  {
    id: '5',
    name: 'Dr. Sofia Valenzuela',
    credentials: 'Ph.D.',
    role: 'DIRECTOR OF INSTITUTIONAL ALLIANCES',
    institution: 'Global Laboratories & Research Network',
    bio: 'Fostering bilateral academic exchange programs and strategic laboratory partnerships across Latin America, the US, and Europe.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    social: { linkedin: '#' },
  },
  {
    id: '6',
    name: 'Dr. Liam Chen',
    credentials: 'Ph.D.',
    role: 'ALUMNI AMBASSADOR & SENIOR FELLOW',
    institution: 'Transnational Research Alumni Network',
    bio: 'Supporting emerging scholars through peer mentorship, thesis defense preparation, and international fellowship navigation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    social: { linkedin: '#' },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
  className?: string;
}

export default function TeamShowcase({ members = CONGRATA_TEAM_MEMBERS, className }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>('1'); // Luisa active by default

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  const activeMember = members.find((m) => m.id === hoveredId) || members[0];

  return (
    <div className={cn("flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 select-none w-full max-w-6xl mx-auto py-4 font-sans", className)}>
      
      {/* ── Left: staggered 3-column photo grid with interactive hover ── */}
      <div className="flex gap-3 sm:gap-4 flex-shrink-0 overflow-x-auto pb-2 lg:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[120px] h-[135px] sm:w-[145px] sm:h-[160px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 (Offset top) */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-[36px] sm:mt-[48px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[130px] h-[145px] sm:w-[155px] sm:h-[170px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 (Offset top) */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-[18px] sm:mt-[24px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[125px] h-[140px] sm:w-[150px] sm:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list & active bio preview ── */}
      <div className="flex flex-col gap-3 pt-2 flex-1 w-full">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}

        {/* Active Member Highlight Box */}
        {activeMember && (
          <div className="mt-4 p-5 sm:p-6 rounded-2xl glass-panel border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 via-white/[0.02] to-transparent transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                {activeMember.name} • {activeMember.credentials}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {activeMember.role}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-2">
              {activeMember.bio}
            </p>
            {activeMember.institution && (
              <p className="text-[11px] text-teal-400/90 font-mono flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{activeMember.institution}</span>
              </p>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card with interactive hover grayscale/color
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-400 border border-white/10 shadow-lg relative group',
        className,
        isDimmed ? 'opacity-40 scale-95' : 'opacity-100 scale-100',
        isActive ? 'border-cyan-400/80 shadow-cyan-500/30 ring-2 ring-cyan-400/40 scale-105 z-10' : ''
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(member.id)} // retain active on card
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1.05)' : 'grayscale(1) brightness(0.65)',
        }}
      />
      {member.credentials && (
        <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-md bg-[#090D16]/80 backdrop-blur-md text-[9px] font-mono font-bold text-cyan-300 border border-white/10">
          {member.credentials}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name row with social reveal
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter ?? member.social?.linkedin;

  return (
    <div
      className={cn(
        'cursor-pointer transition-all duration-300 p-2.5 sm:p-3 rounded-xl border',
        isDimmed ? 'opacity-45 border-transparent' : 'opacity-100',
        isActive ? 'bg-white/[0.05] backdrop-blur-md border-cyan-500/30 shadow-md' : 'hover:bg-white/[0.02] border-transparent'
      )}
      onMouseEnter={() => onHover(member.id)}
    >
      {/* Name + role */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              'h-2.5 rounded-full flex-shrink-0 transition-all duration-300',
              isActive ? 'bg-cyan-400 w-6 shadow-[0_0_10px_#22D3EE]' : 'bg-white/20 w-3',
            )}
          />
          <div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'text-sm sm:text-base font-bold leading-none tracking-tight transition-colors duration-300 font-heading',
                  isActive ? 'text-white' : 'text-slate-300',
                )}
              >
                {member.name}
              </span>
              {member.credentials && (
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.2 rounded border border-cyan-500/20">
                  {member.credentials}
                </span>
              )}
            </div>
            <p className="mt-1 text-[10px] sm:text-xs font-mono font-medium uppercase tracking-[0.15em] text-cyan-300/80">
              {member.role}
            </p>
          </div>
        </div>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={12} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
