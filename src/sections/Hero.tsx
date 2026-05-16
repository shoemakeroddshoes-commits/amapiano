import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AfroPattern from '@/components/AfroPattern';

function SplitText({ text, className = '', style = {}, delay = 0 }: { text: string; className?: string; style?: React.CSSProperties; delay?: number }) {
  return (
    <span className={className} style={{ display: 'block', overflow: 'hidden', ...style }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(100%)',
            animation: `letterReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            animationDelay: `${delay + i * 0.04}s`,
          }}
        >
          {char === ' ' ? '\u00a0' : char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => setVideoLoaded(true);
    video.addEventListener('loadeddata', onLoaded);
    video.play().catch(() => {});
    return () => video.removeEventListener('loadeddata', onLoaded);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Gold line draws in
    tl.from(lineRef.current, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.2,
      ease: 'power4.out',
    })
    // Body text fades up with stagger
    .from(bodyRef.current?.querySelectorAll('p') || [], {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    }, '-=0.6')
    // CTA button slides in
    .from('.hero-cta', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4');

    return () => { tl.kill(); };
  }, []);

  return (
    <>
      <style>{`
        @keyframes letterReveal {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden pb-24"
        style={{ zIndex: 1, backgroundColor: '#0A1628', borderBottom: '0.5px solid rgba(240,237,230,0.08)' }}
      >
        <AfroPattern opacity={0.04} />

        {/* Watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none font-display"
          style={{ fontSize: '20vw', color: 'rgba(240,237,230,0.018)', letterSpacing: '-0.04em', fontWeight: 700 }}
        >
          STILL HERE
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="auto"
          poster="/images/hero-dj-afro.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 2s ease' }}
        >
          <source src="/videos/hero-dj-piano.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              rgba(10,22,40,0.75) 0%,
              rgba(10,22,40,0.3) 30%,
              rgba(10,22,40,0.4) 60%,
              rgba(10,22,40,0.98) 100%
            )`,
          }}
        />

        {/* Afro pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/afro-pattern.png)',
            backgroundSize: '600px 600px',
            backgroundRepeat: 'repeat',
            opacity: 0.03,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Content */}
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 w-full">

          {/* Location label */}
          <p
            className="font-mono text-[0.65rem] tracking-[0.22em] uppercase mb-10"
            style={{
              color: 'rgba(240,237,230,0.35)',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease forwards',
              animationDelay: '0.1s',
            }}
          >
            Blantyre, Malawi &middot; Established 2026
          </p>

          {/* Main headline — split letter animation */}
          <h1 className="font-display leading-[0.88] mb-4" style={{ letterSpacing: '-0.03em' }}>
            <SplitText
              text="Amapiano"
              delay={0.3}
              style={{ fontSize: 'clamp(5rem, 14vw, 11rem)', color: '#F0EDE6' }}
            />
            <SplitText
              text="Church"
              delay={0.7}
              style={{ fontSize: 'clamp(5rem, 14vw, 11rem)', color: 'rgba(240,237,230,0.1)', fontStyle: 'italic' }}
            />
          </h1>

          {/* Gold rule line — GSAP animated */}
          <div
            ref={lineRef}
            style={{ width: '80px', height: '1px', backgroundColor: '#C9A227', marginBottom: '2rem' }}
          />

          {/* Body paragraphs */}
          <div ref={bodyRef} className="max-w-[520px] mb-10">
            <p className="body-text mb-5" style={{ color: 'rgba(240,237,230,0.7)' }}>
              You were not supposed to survive everything that almost killed you.
            </p>
            <p className="body-text mb-5" style={{ color: 'rgba(240,237,230,0.7)' }}>
              Yet here you are. Still breathing. Still searching.{' '}
              <em style={{ color: '#F0EDE6' }}>Still awake at 2am wondering if God still enters places like this.</em>
            </p>
            <p className="body-text font-semibold" style={{ color: '#F0EDE6', fontSize: '1.3rem' }}>
              He does.
            </p>
          </div>

          {/* Service times */}
          <div
            className="font-mono text-[0.65rem] tracking-[0.2em] uppercase mb-10 space-y-1"
            style={{ color: 'rgba(240,237,230,0.35)' }}
          >
            <p>Sundays &mdash; Service 3:00pm &middot; Blantyre</p>
            <p>Thursdays &mdash; Fellowship 5:00pm &middot; Blantyre</p>
          </div>

          {/* CTA */}
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hero-cta inline-block font-dm text-[0.75rem] tracking-[0.22em] uppercase font-bold px-12 py-4 transition-all duration-500 hover:brightness-110 hover:px-14"
            style={{ backgroundColor: '#C9A227', color: '#080808' }}
          >
            Come Thru &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
