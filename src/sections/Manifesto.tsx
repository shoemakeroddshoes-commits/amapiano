import ScrollReveal from '@/components/ScrollReveal';

const ACRONYM = [
  { letter: 'A', word: 'Anointed' },
  { letter: 'M', word: 'Misfits' },
  { letter: 'A', word: 'Awakening' },
  { letter: 'P', word: 'Prodigals' },
  { letter: 'I', word: 'Igniting' },
  { letter: 'A', word: 'A' },
  { letter: 'N', word: 'New' },
  { letter: 'O', word: 'Order' },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 md:py-32 overflow-hidden" style={{ zIndex: 1, backgroundColor: '#F0EDE6' }}>
      <div className="absolute bottom-[-2rem] right-[-1rem] font-bebas pointer-events-none select-none leading-none" style={{ fontSize: '20vw', color: 'rgba(10,10,10,0.03)' }}>
        FOUND
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-10" style={{ color: 'rgba(10,10,10,0.4)' }}>
            Who we are
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-[620px] space-y-5">
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              Some of us found God in church.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              Some of us found Him <strong className="font-semibold" style={{ color: '#080808' }}>drunk. Crying in parking lots. Wearing headphones. Walking home after parties that went too far. Sitting in silence after everybody finally left.</strong>
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              Nobody expected Him there either.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              But God has always had a habit of showing up in the wrong places. A manger. A fishing boat. A prison. A cross.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              Now: Blantyre.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              We are building a church for people who still feel smoke on their clothes from the life they came out of. Not perfect people. Not polished people. People who need resurrection. And people who have watched resurrection happen — in this room, with these eyes — and cannot explain it any other way.
            </p>
            <p className="body-text" style={{ color: 'rgba(10,10,10,0.75)' }}>
              <strong className="font-semibold" style={{ color: '#080808' }}>Things happen here that we did not plan.</strong> People fall. People weep. People walk in sick and walk out changed. We are not the explanation for that. We are just the room where it keeps happening.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 pt-12" style={{ borderTop: '0.5px solid rgba(10,10,10,0.1)' }}>
            <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(10,10,10,0.4)' }}>
              Oh. And the name?
            </p>
            <p className="body-text italic mb-8" style={{ color: 'rgba(10,10,10,0.55)' }}>
              You thought it was just a music genre. Look closer.
            </p>

            <div className="space-y-0">
              {ACRONYM.map((item, i) => (
                <div key={i} className="flex items-baseline gap-4 py-2" style={{ borderBottom: '0.5px solid rgba(10,10,10,0.07)' }}>
                  <span className="font-bebas leading-none text-right" style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)', color: '#C9A227', minWidth: '45px' }}>{item.letter}</span>
                  <span className="font-bebas tracking-[0.03em] leading-none" style={{ fontSize: 'clamp(1.5rem, 3.8vw, 2.8rem)', color: '#080808' }}>{item.word}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: '0.5px solid rgba(10,10,10,0.1)' }}>
              <p className="font-mono text-[0.75rem] tracking-[0.1em] uppercase leading-[1.9] mb-4" style={{ color: 'rgba(10,10,10,0.55)' }}>
                <em className="not-italic" style={{ color: '#C9A227' }}>Anointed Misfits Awakening Prodigals</em> &nbsp;&middot;&nbsp; <em className="not-italic" style={{ color: '#C9A227' }}>Igniting A New Order</em>
              </p>
              <p className="font-mono text-[0.8rem] italic leading-[1.9]" style={{ color: 'rgba(10,10,10,0.45)', borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
                A sound. A people. A calling.<br />
                All of it — hidden in one word.<br />
                Yeah. God does that.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
