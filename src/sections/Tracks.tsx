import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TRACKS = [
  {
    number: '01',
    title: 'Sound & Worship',
    tag: 'STREETS · SCHOOLS',
    body: 'The beat is the door. Always has been. We train DJs, vocalists, musicians and worship leaders to gather crowds with sound and hold them with truth. The stage is not a platform for performance. It is a threshold. And you are the doorkeeper.',
    cta: 'Worship is your weapon',
  },
  {
    number: '02',
    title: 'Kingdom Tech',
    tag: 'SCHOOLS · UNIVERSITIES',
    body: "God needs builders not just believers. We train Gen Z in AI and software development. The church that cannot build its own infrastructure will always depend on someone else's. Code is not secular. Code is stewardship.",
    cta: 'Code is your weapon',
  },
  {
    number: '03',
    title: 'Film & Media',
    tag: 'ARTISTS · ONLINE',
    body: 'Revival undocumented gets forgotten. Every move of God that changed history had someone writing it down. We train filmmakers and content creators to capture what God is doing and broadcast it to everyone watching.',
    cta: 'Story is your weapon',
  },
];

export default function Tracks() {
  const headingRef = useRef<HTMLDivElement>(null);
  const tracksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Heading curtain wipe
    if (headingRef.current) {
      gsap.from(headingRef.current.querySelectorAll('.track-heading-line'), {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Track rows slide in
    if (tracksRef.current) {
      const rows = tracksRef.current.querySelectorAll('.track-row');
      rows.forEach((row, i) => {
        gsap.from(row, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });
    }
  }, []);

  return (
    <section
      id="tracks"
      className="relative py-24 md:py-36"
      style={{ zIndex: 1, backgroundColor: '#2D1B4E' }}
    >
      {/* Background number watermark */}
      <div
        className="absolute top-0 right-0 font-display pointer-events-none select-none leading-none"
        style={{ fontSize: '30vw', color: 'rgba(201,162,39,0.04)', fontWeight: 700, lineHeight: 1 }}
      >
        03
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Header */}
        <div ref={headingRef} className="mb-20">
          <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase mb-8" style={{ color: 'rgba(201,162,39,0.5)' }}>
            Pick your track · Pick your weapon
          </p>
          <div style={{ overflow: 'hidden' }}>
            <h2
              className="track-heading-line font-display leading-[0.9]"
              style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)', color: '#F0EDE6', fontWeight: 700 }}
            >
              Three ways in.
            </h2>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h2
              className="track-heading-line font-display leading-[0.9]"
              style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)', color: '#C9A227', fontWeight: 700, fontStyle: 'italic' }}
            >
              One mission out.
            </h2>
          </div>
        </div>

        {/* Track rows */}
        <div ref={tracksRef} className="space-y-0">
          {TRACKS.map((track, i) => (
            <div
              key={track.number}
              className="track-row group py-14 md:py-20 border-t transition-all duration-700 hover:pl-6"
              style={{ borderColor: 'rgba(240,237,230,0.06)' }}
            >
              <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16 items-start">

                {/* Left */}
                <div>
                  {/* Number */}
                  <span
                    className="font-display block leading-none mb-4 transition-colors duration-500 group-hover:text-[#C9A227]"
                    style={{
                      fontSize: 'clamp(5rem, 14vw, 10rem)',
                      color: i === 0 ? 'rgba(201,162,39,0.12)' : 'rgba(240,237,230,0.04)',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {track.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display leading-tight transition-colors duration-300 group-hover:text-[#C9A227]"
                    style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#F0EDE6', fontWeight: 600 }}
                  >
                    {track.title}
                  </h3>

                  {/* Tag */}
                  <span
                    className="inline-block font-mono text-[0.55rem] tracking-[0.22em] uppercase mt-4 px-4 py-1.5"
                    style={{ border: '0.5px solid rgba(201,162,39,0.25)', color: '#C9A227' }}
                  >
                    {track.tag}
                  </span>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-between h-full">
                  <p
                    className="body-text mt-2 mb-8"
                    style={{ color: 'rgba(240,237,230,0.5)', fontSize: '1.1rem', lineHeight: 2 }}
                  >
                    {track.body}
                  </p>

                  {/* CTA */}
                  <span
                    className="font-display text-lg italic transition-all duration-500 group-hover:text-[#C9A227] group-hover:translate-x-2 inline-block"
                    style={{ color: 'rgba(201,162,39,0.6)', fontWeight: 500 }}
                  >
                    {track.cta} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
