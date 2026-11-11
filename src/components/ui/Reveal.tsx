'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'header';
};

/**
 * Subtle scroll-in reveal. Motion is intentionally small (14px, 0.7s) and is
 * disabled entirely for visitors who prefer reduced motion.
 */
export function Reveal({ children, delay = 0, y = 14, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : delay },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
