import React, { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

export const CONGRATA_TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Elena Ramos',
    role: 'FOUNDER & EXECUTIVE DIRECTOR',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '2',
    name: 'Dr. Carlos Mendoza',
    role: 'DIRECTOR OF TRANSNATIONAL MOBILITY',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '3',
    name: 'Dr. Amina Al-Mansoor',
    role: 'HEAD OF SCIENTIFIC STEWARDSHIP',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'Mateo Silva, Ph.D.',
    role: 'LEAD OF SOCIAL ENTREPRENEURSHIP',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '5',
    name: 'Dr. Sofia Valenzuela',
    role: 'DIRECTOR OF INSTITUTIONAL ALLIANCES',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '6',
    name: 'Dr. Liam Chen',
    role: 'ALUMNI AMBASSADOR & SENIOR FELLOW',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    social: { linkedin: '#', instagram: '#' },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
  className?: string;
}

export default function TeamShowcase({ members = CONGRATA_TEAM_MEMBERS, className }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className={cn("flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-sans", className)}>
      {/* ── Left: staggered 3-column photo grid ── */}
      <div className="flex gap-2.5 md:gap-3.5 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2.5 md:gap-3.5">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 (Offset top) */}
        <div className="flex flex-col gap-2.5 md:gap-3.5 mt-[44px] sm:mt-[52px] md:mt-[64px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 (Offset top) */}
        <div className="flex flex-col gap-2.5 md:gap-3.5 mt-[20px] sm:mt-[24px] md:mt-[30px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list ── */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-6 pt-0 md:pt-4 flex-1 w-full">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
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
        'overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-400 border border-white/10 shadow-lg',
        className,
        isDimmed ? 'opacity-40 scale-95' : 'opacity-100 scale-100',
        isActive ? 'border-cyan-400/60 shadow-cyan-500/25 ring-2 ring-cyan-400/30' : ''
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1.05)' : 'grayscale(1) brightness(0.65)',
        }}
      />
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
  const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

  return (
    <div
      className={cn(
        'cursor-pointer transition-all duration-300 p-2.5 rounded-xl',
        isDimmed ? 'opacity-40' : 'opacity-100',
        isActive ? 'bg-white/[0.04] backdrop-blur-md' : 'hover:bg-white/[0.02]'
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social */}
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'h-2.5 rounded-full flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-cyan-400 w-6 shadow-[0_0_10px_#22D3EE]' : 'bg-white/20 w-3',
          )}
        />
        <span
          className={cn(
            'text-base md:text-lg font-bold leading-none tracking-tight transition-colors duration-300 font-heading',
            isActive ? 'text-white' : 'text-slate-300',
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-2 ml-1 transition-all duration-200',
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
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={12} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={12} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={12} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-2 pl-[24px] text-[10px] md:text-xs font-mono font-medium uppercase tracking-[0.18em] text-cyan-400/80">
        {member.role}
      </p>
    </div>
  );
}
