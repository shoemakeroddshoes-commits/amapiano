import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import GlitchText from '@/components/GlitchText';
import AfroPattern from '@/components/AfroPattern';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
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
    const tl = gsap.timeline({ delay: 0.3 });
    tl.from(overlayRef.current, { opacity: 1, duration: 1.5, ease: 'power2.out' })
      .from(bodyRef.current?.querySelectorAll('p') || [], { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.8');
    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] flex flex-col justify-end overflow-hidden pb-20"
      style={{ zIndex: 1, backgroundColor: '#0A1628', borderBottom: '0.5px solid rgba(240,237,230,0.08)' }}
    >
      <AfroPattern opacity={0.04} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas whitespace-nowrap pointer-events-none select-none" style={{ fontSize: '22vw', color: 'rgba(240,237,230,0.025)', letterSpacing: '-0.02em' }}>
        STILL HERE
      </div>

      <video ref={videoRef} autoPlay muted loop playsInline preload="auto" poster="/images/hero-dj-afro.jpg" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1.5s ease' }}>
        <source src="/videos/hero-dj-piano.mp4" type="video/mp4" />
      </video>

      <div ref={overlayRef} className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(10,22,40,0.65) 0%, rgba(10,22,40,0.35) 35%, rgba(10,22,40,0.45) 65%, rgba(10,22,40,0.97) 100%), radial-gradient(ellipse at 50% 40%, rgba(10,22,40,0.1) 0%, rgba(10,22,40,0.5) 100%)` }} />

      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/afro-pattern.png)', backgroundSize: '600px 600px', backgroundRepeat: 'repeat', opacity: 0.03, mixBlendMode: 'overlay' }} />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 w-full">
        <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase mb-8" style={{ color: 'rgba(240,237,230,0.35)' }}>
          Blantyre, Malawi &middot; Established 2026
        </p>

        <h1 className="font-bebas leading-[0.9] mb-2" style={{ fontSize: 'clamp(4.5rem, 13vw, 9.5rem)', letterSpacing: '-0.01em', color: '#F0EDE6' }}>
          <GlitchText text="Amapiano" as="span" style={{ display: 'block' }} />
          <span style={{ display: 'block', color: 'rgba(240,237,230,0.12)' }}>Church</span>
        </h1>

        <div ref={bodyRef} className="max-w-[560px] my-8">
          <p className="body-text mb-4" style={{ color: 'rgba(240,237,230,0.75)' }}>
            You were not supposed to survive everything that almost killed you.
          </p>
          <p className="body-text mb-4" style={{ color: 'rgba(240,237,230,0.75)' }}>
            Yet here you are. Still breathing. Still searching. <em style={{ color: '#F0EDE6' }}>Still awake at 2am wondering if God still enters places like this.</em>
          </p>
          <p className="body-text" style={{ color: '#F0EDE6' }}>
            He does.
          </p>
        </div>

        <div className="font-mono text-[0.7rem] tracking-[0.18em] uppercase mb-8 space-y-1" style={{ color: 'rgba(240,237,230,0.4)' }}>
          <p>Sundays &mdash; Service 3:00pm &middot; Blantyre</p>
          <p>Thursdays &mdash; Fellowship 5:00pm &middot; Blantyre</p>
        </div>

        <a href="#connect" onClick={(e) => { e.preventDefault(); document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block font-dm text-[0.75rem] tracking-[0.2em] uppercase font-bold px-10 py-4 transition-all duration-300 hover:brightness-110" style={{ backgroundColor: '#C9A227', color: '#080808' }}>
          Come Thru &rarr;
        </a>
      </div>
    </section>
  );
}
