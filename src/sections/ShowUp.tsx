import AfroPattern from '@/components/AfroPattern';

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
  return (
    <section
      id="showup"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ zIndex: 1, backgroundColor: '#8B1A1A' }}
    >
      <AfroPattern opacity={0.04} />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-12" style={{ color: 'rgba(240,237,230,0.45)' }}>
          The door is open &middot; No conditions &middot; No record check
        </p>

        {/* Two-column rows: condition left, CTA right */}
        <div className="flex flex-col">
          {ITEMS.map((item) => (
            <div
              key={item.condition}
              className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-baseline py-5 md:py-6 border-b gap-2 sm:gap-8"
              style={{ borderColor: 'rgba(240,237,230,0.12)' }}
            >
              {/* Left: condition */}
              <span
                className="body-text italic"
                style={{ color: 'rgba(240,237,230,0.7)' }}
              >
                {item.condition} &mdash;
              </span>

              {/* Right: CTA */}
              <span
                className="font-bebas uppercase text-right transition-all duration-300 hover:tracking-widest hover:text-[#C9A227]"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                  color: '#F0EDE6',
                  letterSpacing: '0.03em',
                  lineHeight: 0.95,
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                }}
              >
                Come.
              </span>
            </div>
          ))}
        </div>

        {/* Confession block */}
        <div className="mt-14 pt-12" style={{ borderTop: '1px solid rgba(240,237,230,0.15)' }}>
          <div className="max-w-[600px]">
            <p className="body-text mb-4" style={{ color: 'rgba(240,237,230,0.85)' }}>
              Nobody is checking your record at the door. <em style={{ color: '#F0EDE6', fontStyle: 'normal', fontWeight: 700 }}>The prodigal didn&apos;t shower before he came home.</em> He showed up smelling like pigs and the father ran toward him.
            </p>
            <p className="body-text mb-4" style={{ color: 'rgba(240,237,230,0.85)' }}>
              This is not a metaphor we borrowed. This is theology we built the whole thing on.
            </p>
            <p
              className="font-mono text-[0.8rem] leading-[1.9] mt-6 font-medium"
              style={{ color: 'rgba(240,237,230,0.65)', borderLeft: '3px solid #C9A227', paddingLeft: '1.2rem' }}
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
