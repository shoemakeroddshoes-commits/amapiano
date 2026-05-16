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
    const rows = listRef.current?.querySelectorAll('.showup-row');
    if (rows) {
      rows.forEach((row) => {
        const condition = row.querySelector('.condition-text');
        const come = row.querySelector('.come-text');

        // Each row's condition slides in from left
        gsap.from(condition, {
          x: -80,
          opacity: 0,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        // Each row's COME. slams in from right with slight delay
        gsap.from(come, {
          x: 80,
          opacity: 0,
          duration: 0.7,
          delay: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });
    }

    // Confession block fades up
    if (confessionRef.current) {
      gsap.from(confessionRef.current, {
        y: 60,
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
        <p
          className="font-mono text-[0.65rem] tracking-[0.25em] uppercase mb-12"
          style={{ color: 'rgba(240,237,230,0.5)' }}
        >
          The door is open &middot; No conditions &middot; No record check
        </p>

        <div ref={listRef} className="flex flex-col">
          {ITEMS.map((item) => (
            <div
              key={item.condition}
              className="showup-row grid grid-cols-[1fr_auto] items-center py-6 md:py-8 border-b"
              style={{ borderColor: 'rgba(240,237,230,0.08)' }}
            >
              {/* Condition — left */}
              <span
                className="condition-text font-dm italic text-lg md:text-2xl"
                style={{ color: 'rgba(240,237,230,0.75)' }}
              >
                {item.condition} &mdash;
              </span>

              {/* COME. — right, massive */}
              <span
                className="come-text font-display transition-all duration-300 hover:text-[#C9A227] hover:scale-105 cursor-default"
                style={{
                  fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                  color: '#F0EDE6',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95,
                  display: 'inline-block',
                  transformOrigin: 'right center',
                }}
              >
                Come.
              </span>
            </div>
          ))}
        </div>

        {/* Confession block */}
        <div
          ref={confessionRef}
          className="mt-16 pt-12"
          style={{ borderTop: '1px solid rgba(240,237,230,0.1)' }}
        >
          <div className="max-w-[600px]">
            <p
              className="font-dm text-base leading-[1.9] mb-5"
              style={{ color: 'rgba(240,237,230,0.85)' }}
            >
              Nobody is checking your record at the door.{' '}
              <strong style={{ color: '#F0EDE6', fontWeight: 600 }}>
                The prodigal didn&apos;t shower before he came home.
              </strong>{' '}
              He showed up smelling like pigs and the father ran toward him.
            </p>
            <p
              className="font-dm text-base leading-[1.9] mb-5"
              style={{ color: 'rgba(240,237,230,0.85)' }}
            >
              This is not a metaphor we borrowed. This is theology we built the whole thing on.
            </p>
            <p
              className="font-mono text-[0.78rem] leading-[2] mt-8"
              style={{
                color: 'rgba(240,237,230,0.6)',
                borderLeft: '3px solid #C9A227',
                paddingLeft: '1.2rem',
              }}
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
