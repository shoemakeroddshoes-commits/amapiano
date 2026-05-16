import ScrollReveal from '@/components/ScrollReveal';
import AfroPattern from '@/components/AfroPattern';

export default function WhyWeDance() {
  return (
    <section id="whywedance" className="relative py-24 md:py-32 overflow-hidden" style={{ zIndex: 1, backgroundColor: '#0A1628', borderTop: '0.5px solid rgba(240,237,230,0.08)', borderBottom: '0.5px solid rgba(240,237,230,0.08)' }}>
      <AfroPattern opacity={0.07} />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-12" style={{ color: '#C9A227' }}>
            3:16 &middot; This is why we dance
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas leading-[0.93] mb-8" style={{ fontSize: 'clamp(3.6rem, 10vw, 8rem)', color: '#F0EDE6' }}>
            Not for the feeling.
            <br />
            <span style={{ color: 'rgba(240,237,230,0.2)' }}>For the fact.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-[620px] space-y-5">
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              We don't dance because the music is good. We dance because joy is a weapon — and God invented it. The Bible says you fall under the Spirit in more ways than one. Sometimes it's tears. Sometimes it's silence you can't explain. <strong className="font-medium" style={{ color: '#C9A227' }}>And sometimes it's so much relief you have to move.</strong>
            </p>
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              If the devil can weaponize anxiety, then joy is a counterattack.
            </p>
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              If the enemy can use shame to keep you still, then celebration is a jailbreak.
            </p>
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              This is not performance. <strong className="font-medium" style={{ color: '#F0EDE6' }}>This is the body saying what the mouth hasn't found words for yet.</strong>
            </p>
            <p className="body-text" style={{ color: 'rgba(240,237,230,0.75)' }}>
              We came heavy. We leave lighter. That is not just a feeling.
            </p>
            <p className="font-mono text-[0.8rem] leading-[1.9] mt-4 font-medium" style={{ color: 'rgba(240,237,230,0.5)', borderLeft: '3px solid #C9A227', paddingLeft: '1.2rem' }}>
              The same Spirit that fell in the upper room<br />
              fell with enough power to knock grown men over.<br />
              They didn't tremble. They <strong className="font-bold" style={{ color: '#F0EDE6' }}>feasted</strong>.<br />
              You can do both. You can be undone and fed at the same time.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
