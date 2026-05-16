import ScrollReveal from '@/components/ScrollReveal';
import AfroPattern from '@/components/AfroPattern';

export default function Final() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ zIndex: 1, backgroundColor: '#0A1628', borderTop: '0.5px solid rgba(240,237,230,0.08)', borderBottom: '0.5px solid rgba(240,237,230,0.08)' }}>
      <AfroPattern opacity={0.06} />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2 className="font-bebas leading-[0.93] mb-12" style={{ fontSize: 'clamp(3.6rem, 10vw, 8rem)', color: '#F0EDE6' }}>
            Maybe this is why
            <br />
            <span style={{ color: 'rgba(240,237,230,0.25)' }}>you ended up here.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-[620px] space-y-5">
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              Not because you were looking for church. Because you were looking for something that actually meant something. <strong className="font-medium" style={{ color: '#F0EDE6' }}>Because you heard a sound that felt like the first honest thing you had heard in a long time.</strong>
            </p>
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              Because you are still here. Still breathing. Still searching.
            </p>
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              And because God is still walking into rooms that people gave up on.
            </p>
            <p className="body-text" style={{ color: '#F0EDE6', fontWeight: 700 }}>
              Including this one.
            </p>
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              We will be here when you are ready.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
