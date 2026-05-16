import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AfroPattern from '@/components/AfroPattern';

gsap.registerPlugin(ScrollTrigger);

export default function Testimony() {
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const attributionRef = useRef<HTMLDivElement>(null);
  const bigQuoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bigQuoteRef.current) {
      gsap.from(bigQuoteRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bigQuoteRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (quoteRef.current) {
      gsap.from(quoteRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: 'expo.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (attributionRef.current) {
      gsap.from(attributionRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: attributionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section
      id="testimony"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ zIndex: 1, backgroundColor: '#8B1A1A' }}
    >
      <AfroPattern opacity={0.06} />

      <div
        ref={bigQuoteRef}
        className="absolute top-[-4rem] left-[-2rem] font-display pointer-events-none select-none leading-none"
        style={{ fontSize: '40vw', color: 'rgba(240,237,230,0.04)', fontWeight: 700, lineHeight: 1 }}
      >
        "
      </div>

      <div className="relative max-w-[900px] mx-auto px-6 md:px-8 text-center">

        <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase mb-20" style={{ color: 'rgba(240,237,230,0.35)' }}>
          What people are saying
        </p>

        <blockquote
          ref={quoteRef}
          className="font-display leading-[1.15] mb-16"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: '#F0EDE6',
            fontWeight: 500,
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
          }}
        >
          "The beat dropped. Then my walls did. I have not been the same since."
        </blockquote>

        <div ref={attributionRef} className="flex items-center justify-center gap-6">
          <div style={{ width: '40px', height: '0.5px', backgroundColor: 'rgba(240,237,230,0.2)' }} />
          <div className="text-center">
            <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(240,237,230,0.6)' }}>
              Tadala, 24
            </p>
            <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase mt-1" style={{ color: 'rgba(240,237,230,0.3)' }}>
              Lilongwe
            </p>
          </div>
          <div style={{ width: '40px', height: '0.5px', backgroundColor: 'rgba(240,237,230,0.2)' }} />
        </div>

        <p
          className="font-display italic mt-20 text-lg"
          style={{ color: 'rgba(240,237,230,0.25)' }}
        >
          More testimonies coming post-launch.
        </p>
      </div>
    </section>
  );
}
