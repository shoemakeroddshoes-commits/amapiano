import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AfroPattern from '@/components/AfroPattern';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { condition: 'High as fuck' },
  { condition: 'Hungover' },
  { condition: 'No doctor' },
  { condition: 'No father' },
  { condition: 'No rent' },
  { condition: 'Fresh from a cell' },
  { condition: 'Church said no' },
  { condition: 'Lost your faith' },
  { condition: 'Never had it' },
];

export default function ShowUp() {
  const listRef = useRef<HTMLDivElement>(null);
  const confessionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.showup-row');
    if (items) {
      gsap.from(items, {
        x: -60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (confessionRef.current) {
      gsap.from(confessionRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: confessionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section
      id="showup"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ zIndex: 1, backgroundColor: '#8B1A1A' }}
    >
      <AfroPattern opacity={0.04} />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase mb-12" style={{ color: 'rgba(240,237,230,0.4)' }}>
          The door is open &middot; No conditions &middot; No record check
        </p>

        <div ref={listRef} className="flex flex-col">
          {ITEMS.map((item) => (
            <div
              key={item.condition}
              className="showup-row grid grid-cols-1 sm:grid-cols-[1fr_auto] items-baseline py-5 md:py-6 border-b gap-2 sm:gap-8 group cursor-default"
              style={{ borderColor: 'rgba(240,237,230,0.1)' }}
            >
              {/* Left: condition — italic Cormorant */}
              <span
                className="body-text italic transition-colors duration-300 group-hover:text-[#F0EDE6]"
                style={{ color: 'rgba(240,237,230,0.55)', fontSize: '1.2rem' }}
              >
                {item.condition} &mdash;
              </span>

              {/* Right: CTA — large display */}
              <span
                className="font-display uppercase text-right transition-all duration-500 group-hover:tracking-widest group-hover:text-[#C9A227]"
                style={{
                  fontSize: 'clamp(3.2rem, 8vw, 6rem)',
                  color: '#F0EDE6',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 0.95,
                }}
              >
                Come.
              </span>
            </div>
          ))}
        </div>

        {/* Confession block */}
        <div ref={confessionRef} className="mt-14 pt-12" style={{ borderTop: '1px solid rgba(240,237,230,0.12)' }}>
          <div className="max-w-[600px]">
            <p className="body-text mb-5" style={{ color: 'rgba(240,237,230,0.8)', fontSize: '1.2rem' }}>
              Nobody is checking your record at the door.{' '}
              <em style={{ color: '#F0EDE6', fontStyle: 'normal', fontWeight: 600 }}>
                The prodigal didn&apos;t shower before he came home.
              </em>{' '}
              He showed up smelling like pigs and the father ran toward him.
            </p>
            <p className="body-text mb-5" style={{ color: 'rgba(240,237,230,0.8)', fontSize: '1.2rem' }}>
              This is not a metaphor we borrowed. This is theology we built the whole thing on.
            </p>
            <p
              className="font-mono text-[0.78rem] leading-[2] mt-6"
              style={{ color: 'rgba(240,237,230,0.55)', borderLeft: '3px solid #C9A227', paddingLeft: '1.2rem' }}
            >
              Just come.<br />
              We&apos;ll explain 3:16 later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
