import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MagicButton({
  children,
  href = '#',
  variant = 'primary', // 'primary' | 'secondary' | 'amber'
  icon: Icon,
  className = '',
  onClick,
}) {
  if (variant === 'primary') {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`relative inline-flex h-13 overflow-hidden rounded-2xl p-[1.5px] focus:outline-none group shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 active:scale-95 ${className}`}
      >
        {/* Animated Rotating Gradient Border */}
        <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#0891B2_0%,#22D3EE_35%,#FFFFFF_50%,#2DD4BF_75%,#0891B2_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />
        
        {/* Inner Glass Body */}
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2.5 rounded-[14px] bg-[#090D16]/90 backdrop-blur-xl px-7 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[#090D16]/75 group-hover:text-cyan-200">
          <span>{children}</span>
          {Icon ? <Icon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" /> : <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />}
        </span>
      </a>
    );
  }

  if (variant === 'amber') {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`relative inline-flex h-13 overflow-hidden rounded-2xl p-[1.5px] focus:outline-none group shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 transition-all duration-300 active:scale-95 ${className}`}
      >
        <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#D97706_0%,#F59E0B_40%,#FEF3C7_50%,#EA580C_80%,#D97706_100%)] opacity-70 group-hover:opacity-100 transition-opacity" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#0B0F19]/90 backdrop-blur-xl px-6 py-3 text-sm font-medium text-amber-200 transition-all duration-300 group-hover:bg-[#0B0F19]/70 group-hover:text-amber-100">
          <span>{children}</span>
          {Icon ? <Icon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" /> : <Sparkles className="w-4 h-4 text-amber-400" />}
        </span>
      </a>
    );
  }

  // Secondary Glass Button with Shimmer Sweep
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-flex h-13 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-xl px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 hover:text-white hover:shadow-lg active:scale-95 group items-center justify-center gap-2 ${className}`}
    >
      {/* Shimmer Sweep Effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />}
    </a>
  );
}
