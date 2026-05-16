import ScrollReveal from '@/components/ScrollReveal';

export default function Vision() {
  return (
    <section id="vision" className="relative py-24 md:py-32" style={{ zIndex: 1, backgroundColor: '#F0EDE6' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-12" style={{ color: 'rgba(10,10,10,0.4)' }}>
            The vision
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas leading-[0.93] mb-12" style={{ fontSize: 'clamp(3.6rem, 10vw, 8rem)', color: '#080808' }}>
            Most churches keep people
            <br />
            <span style={{ color: '#C9A227' }}>inside.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-[620px] space-y-5">
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              We send them out.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              Africa does not need borrowed worship. It doesn't need imported music, imported preaching styles, imported buildings that landed from another continent and never quite fit.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              Blantyre has its own sound. Its own pain. Its own hunger. Its own genius.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              We run the model Jesus ran. <strong className="font-semibold" style={{ color: '#080808' }}>We preach. We teach. We heal. We send.</strong>
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              We don't produce fans. <strong className="font-semibold" style={{ color: '#080808' }}>We produce people who go build the next one.</strong>
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              When Blantyre sounds like Blantyre, worships like Blantyre, reaches like Blantyre — the continent shifts.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-14">
            <p className="text-[1.05rem] font-medium leading-[1.85]" style={{ color: '#C9A227' }}>
              — Obed Edom Mugisha, Founding Pastor
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
