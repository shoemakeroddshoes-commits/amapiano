import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'clip' | 'curtain' | 'rise';
  delay?: number;
  duration?: number;
  triggerStart?: string;
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  triggerStart = 'top 88%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const animations: Record<string, { from: gsap.TweenVars; to?: gsap.TweenVars }> = {
      fadeUp: {
        from: { y: 80, opacity: 0 },
      },
      fadeLeft: {
        from: { x: -80, opacity: 0 },
      },
      fadeRight: {
        from: { x: 80, opacity: 0 },
      },
      scale: {
        from: { scale: 0.85, opacity: 0 },
      },
      clip: {
        from: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      },
      // Curtain wipe — dramatic reveal from bottom
      curtain: {
        from: { clipPath: 'inset(100% 0 0 0)', opacity: 1 },
      },
      // Rise — text comes up from invisible
      rise: {
        from: { y: 120, opacity: 0, skewY: 3 },
      },
    };

    const { from } = animations[animation] || animations.fadeUp;

    gsap.from(el, {
      ...from,
      duration,
      delay,
      ease: animation === 'rise' ? 'expo.out' : 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        toggleActions: 'play none none none',
      },
    });
  }, [animation, delay, duration, triggerStart]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
}
