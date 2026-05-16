import ScrollReveal from '@/components/ScrollReveal';

export default function TheSound() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ zIndex: 1, backgroundColor: '#F0EDE6' }}>
      <div className="absolute top-1/2 right-[-2rem] -translate-y-1/2 font-bebas pointer-events-none select-none leading-none" style={{ fontSize: '18vw', color: 'rgba(10,10,10,0.025)' }}>
        SOUND
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-10" style={{ color: 'rgba(10,10,10,0.4)' }}>
            The sound
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas leading-[0.93] mb-10" style={{ fontSize: 'clamp(3.6rem, 10vw, 8rem)', color: '#080808' }}>
            <span style={{ color: 'rgba(10,10,10,0.2)' }}>Amapiano didn't come from</span>
            <br />
            <span style={{ color: '#080808' }}>palaces.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-[620px] space-y-5">
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              Amapiano came from the township. From the concrete. From people who had nothing and made something so good the world could not ignore it. It came from late nights and deep hunger and the kind of rhythm that makes the chest move before the feet do. It came from <strong className="font-semibold" style={{ color: '#080808' }}>towns that were never meant to produce anything the world would want.</strong>
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              And we believe God works the same way.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              We believe He does not save with spectacle. He saves with presence. He does not come into rooms with spotlights and curated Instagram stories. <strong className="font-semibold" style={{ color: '#080808' }}>He comes into garages and backyards and kitchens where someone finally stopped running.</strong>
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              Amapiano Church is not built on polish. It is built on presence. And presence does not need a microphone to fill a room.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              So we play. We worship. We build. We send.
            </p>
            <p className="font-mono text-[0.8rem] leading-[1.9] mt-4 font-medium" style={{ color: 'rgba(10,10,10,0.45)', borderLeft: '2px solid #C9A227', paddingLeft: '1.2rem' }}>
              Not because we have a perfect plan.<br />
              Because we have a present God.<br />
              And that has always been enough.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
