import React from 'react';
import { motion } from 'framer-motion';

export default function AuroraBackground({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Animated Aurora Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Layer 1: Primary Cyan Aurora Wave */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: ['-5%', '5%', '-5%'],
            y: ['0%', '-8%', '0%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-[20%] left-[10%] w-[800px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-teal-500/15 to-transparent rounded-full blur-[120px] opacity-70"
        />

        {/* Layer 2: Indigo & Violet Core Glow */}
        <motion.div
          animate={{
            scale: [1.1, 0.95, 1.1],
            x: ['5%', '-8%', '5%'],
            y: ['-5%', '8%', '-5%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-[10%] right-[15%] w-[700px] h-[450px] bg-gradient-to-bl from-blue-600/15 via-indigo-500/10 to-transparent rounded-full blur-[130px] opacity-60"
        />

        {/* Layer 3: Warm Amber Highlight Pulse */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[40%] left-[30%] w-[500px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-orange-500/5 to-transparent rounded-full blur-[110px]"
        />

        {/* Layer 4: Overlay Grid & Radial Fade Mask */}
        <div className="absolute inset-0 bg-grid-subtle opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090D16_80%)]" />
      </div>

      {/* Foreground Content */}
      {children}
    </div>
  );
}
