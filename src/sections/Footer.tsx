import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current.querySelectorAll('.footer-item'), {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative py-20 md:py-24"
      style={{ zIndex: 1, backgroundColor: '#0A1628' }}
    >
      {/* Top gold rule */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Logo row */}
        <div className="footer-item flex items-center gap-4 mb-12">
          <img
            src="/images/logo.png"
            alt="Amapiano Church"
            className="h-10 w-10 object-contain"
          />
          <div>
            <span
              className="font-display block tracking-widest uppercase text-sm"
              style={{ color: '#C9A227', fontWeight: 600, letterSpacing: '0.1em' }}
            >
              Amapiano Church
            </span>
            <span
              className="font-display italic text-sm block"
              style={{ color: 'rgba(240,237,230,0.25)', fontWeight: 400 }}
            >
              This is not a church. This is a movement.
            </span>
          </div>
        </div>

        {/* Nav links */}
        <div className="footer-item flex flex-wrap gap-x-10 gap-y-3 mb-14">
          {[
            ['Who we are', '#manifesto'],
            ['Mission', '#vision'],
            ['Tracks', '#tracks'],
            ['Connect', '#connect'],
            ['Give', '#footer'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="font-display text-base transition-colors duration-300 hover:text-[#C9A227]"
              style={{ color: 'rgba(240,237,230,0.3)', fontWeight: 400 }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="footer-item pt-8"
          style={{ borderTop: '0.5px solid rgba(240,237,230,0.05)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-mono text-[0.5rem] tracking-[0.22em] uppercase" style={{ color: 'rgba(240,237,230,0.18)' }}>
              Blantyre, Malawi &middot; Established 2026
            </p>
            <p className="font-mono text-[0.5rem] tracking-[0.22em] uppercase" style={{ color: 'rgba(240,237,230,0.18)' }}>
              Sundays 3:00pm &middot; Thursdays 5:00pm
            </p>
            <p className="font-mono text-[0.5rem] tracking-[0.22em] uppercase" style={{ color: 'rgba(240,237,230,0.1)' }}>
              &copy; 2026 Amapiano Church
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
