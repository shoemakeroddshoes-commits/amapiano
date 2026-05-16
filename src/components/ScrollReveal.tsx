import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'clip';
  delay?: number;
  duration?: number;
  stagger?: number;
  triggerStart?: string;
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  triggerStart = 'top 85%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const animations: Record<string, gsap.TweenVars> = {
      fadeUp: { y: 60, opacity: 0 },
      fadeLeft: { x: -60, opacity: 0 },
      fadeRight: { x: 60, opacity: 0 },
      scale: { scale: 0.9, opacity: 0 },
      clip: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    };

    const fromVars = animations[animation] || animations.fadeUp;

    gsap.from(el, {
      ...fromVars,
      duration,
      delay,
      ease: 'power3.out',
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
