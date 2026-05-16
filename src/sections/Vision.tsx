import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const attributionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current.querySelectorAll('.vision-line'), {
        y: 120,
        opacity: 0,
        duration: 1.3,
        stagger: 0.12,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (bodyRef.current) {
      gsap.from(bodyRef.current.querySelectorAll('p'), {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bodyRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (attributionRef.current) {
      gsap.from(attributionRef.current, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
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
      id="vision"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ zIndex: 1, backgroundColor: '#F0EDE6' }}
    >
      {/* Watermark */}
      <div
        className="absolute bottom-0 right-[-2rem] font-display pointer-events-none select-none leading-none"
        style={{ fontSize: '22vw', color: 'rgba(10,10,10,0.03)', fontWeight: 700 }}
      >
        SEND
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">

        <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase mb-14" style={{ color: 'rgba(10,10,10,0.35)' }}>
          The vision
        </p>

        {/* Heading */}
        <div ref={headingRef} className="mb-14 overflow-hidden">
          <div style={{ overflow: 'hidden' }}>
            <h2
              className="vision-line font-display leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: '#080808', fontWeight: 700 }}
            >
              Most churches keep people
            </h2>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h2
              className="vision-line font-display leading-[0.9] italic"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: '#C9A227', fontWeight: 700 }}
            >
              inside.
            </h2>
          </div>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="max-w-[600px] space-y-5">
          <p className="body-text" style={{ color: 'rgba(10,10,10,0.7)', fontSize: '1.15rem' }}>
            We send them out.
          </p>
          <p className="body-text" style={{ color: 'rgba(10,10,10,0.7)', fontSize: '1.15rem' }}>
            Africa does not need borrowed worship. It doesn't need imported music, imported preaching styles, imported buildings that landed from another continent and never quite fit.
          </p>
          <p className="body-text" style={{ color: 'rgba(10,10,10,0.7)', fontSize: '1.15rem' }}>
            Blantyre has its own sound. Its own pain. Its own hunger. Its own genius.
          </p>
          <p className="body-text" style={{ color: 'rgba(10,10,10,0.7)', fontSize: '1.15rem' }}>
            We run the model Jesus ran.{' '}
            <strong style={{ color: '#080808', fontWeight: 600 }}>We preach. We teach. We heal. We send.</strong>
          </p>
          <p className="body-text" style={{ color: 'rgba(10,10,10,0.7)', fontSize: '1.15rem' }}>
            We don't produce fans.{' '}
            <strong style={{ color: '#080808', fontWeight: 600 }}>We produce people who go build the next one.</strong>
          </p>
          <p className="body-text" style={{ color: 'rgba(10,10,10,0.7)', fontSize: '1.15rem' }}>
            When Blantyre sounds like Blantyre, worships like Blantyre, reaches like Blantyre — the continent shifts.
          </p>
        </div>

        {/* Attribution */}
        <div
          ref={attributionRef}
          className="mt-16 pt-10 inline-block"
          style={{ borderTop: '0.5px solid rgba(10,10,10,0.12)' }}
        >
          <p
            className="font-display italic text-xl"
            style={{ color: '#C9A227', fontWeight: 500 }}
          >
            — Obed Edom Mugisha
          </p>
          <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mt-2" style={{ color: 'rgba(10,10,10,0.35)' }}>
            Founding Pastor
          </p>
        </div>
      </div>
    </section>
  );
}
