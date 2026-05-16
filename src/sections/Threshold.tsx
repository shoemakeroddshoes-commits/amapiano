import ScrollReveal from '@/components/ScrollReveal';

export default function Threshold() {
  return (
    <section
      className="relative flex items-center min-h-[40vh] py-20"
      style={{ zIndex: 1, backgroundColor: '#0A1628', borderBottom: '0.5px solid rgba(240,237,230,0.08)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full">
        <ScrollReveal animation="fadeLeft">
          <div className="max-w-[700px]" style={{ borderLeft: '3px solid #C9A227', paddingLeft: '2rem' }}>
            <p className="font-bebas leading-[1.05]" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.8rem)', color: '#F0EDE6' }}>
              We are just the room where it keeps happening.
            </p>
            <p className="font-instrument mt-4 body-text" style={{ color: 'rgba(240,237,230,0.55)' }}>
              <em>God still walks into rooms people gave up on.</em>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
