'use client';

import React, { MouseEvent } from 'react';

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = '', style, ...props }: SpotlightCardProps) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative ${className}`}
      style={style}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(78, 168, 64, 0.06), transparent 40%)',
        }}
      />
      {children}
    </div>
  );
}

export default SpotlightCard;
