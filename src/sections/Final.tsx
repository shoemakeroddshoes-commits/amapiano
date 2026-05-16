import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AfroPattern from '@/components/AfroPattern';

gsap.registerPlugin(ScrollTrigger);

export default function Final() {
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current.querySelectorAll('.final-line'), {
        y: 100,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
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
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: bodyRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        zIndex: 1,
        backgroundColor: '#0A1628',
        borderTop: '0.5px solid rgba(240,237,230,0.06)',
        borderBottom: '0.5px solid rgba(240,237,230,0.06)',
      }}
    >
      <AfroPattern opacity={0.05} />

      {/* Diagonal gold accent */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <div ref={headingRef} className="mb-16">
          <div style={{ overflow: 'hidden' }}>
            <h2
              className="final-line font-display leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: '#F0EDE6', fontWeight: 700 }}
            >
              Maybe this is why
            </h2>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h2
              className="final-line font-display leading-[0.9] italic"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: 'rgba(240,237,230,0.18)', fontWeight: 700 }}
            >
              you ended up here.
            </h2>
          </div>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="max-w-[580px] space-y-6">
          <p className="body-text" style={{ color: 'rgba(240,237,230,0.65)', fontSize: '1.2rem', lineHeight: 2 }}>
            Not because you were looking for church. Because you were looking for something that actually meant something.{' '}
            <strong style={{ color: '#F0EDE6', fontWeight: 600 }}>
              Because you heard a sound that felt like the first honest thing you had heard in a long time.
            </strong>
          </p>
          <p className="body-text" style={{ color: 'rgba(240,237,230,0.65)', fontSize: '1.2rem', lineHeight: 2 }}>
            Because you are still here. Still breathing. Still searching.
          </p>
          <p className="body-text" style={{ color: 'rgba(240,237,230,0.65)', fontSize: '1.2rem', lineHeight: 2 }}>
            And because God is still walking into rooms that people gave up on.
          </p>
          <p
            className="font-display italic"
            style={{ color: '#F0EDE6', fontWeight: 600, fontSize: '1.5rem' }}
          >
            Including this one.
          </p>
          <p className="body-text" style={{ color: 'rgba(240,237,230,0.55)', fontSize: '1.2rem', lineHeight: 2 }}>
            We will be here when you are ready.
          </p>
        </div>

        {/* Gold rule */}
        <div
          className="mt-16"
          style={{ width: '60px', height: '1px', backgroundColor: '#C9A227' }}
        />
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)' }}
      />
    </section>
  );
}
