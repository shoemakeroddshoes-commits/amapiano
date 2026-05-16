import ScrollReveal from '@/components/ScrollReveal';
import AfroPattern from '@/components/AfroPattern';

export default function Testimony() {
  return (
    <section id="testimony" className="relative py-24 md:py-32 overflow-hidden" style={{ zIndex: 1, backgroundColor: '#8B1A1A' }}>
      <AfroPattern opacity={0.08} />

      <div className="relative max-w-[1000px] mx-auto px-6 md:px-8 text-center">
        <ScrollReveal>
          <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-16" style={{ color: 'rgba(240,237,230,0.45)' }}>
            What people are saying
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="font-bebas leading-none select-none mb-[-2rem]" style={{ fontSize: 'clamp(8rem, 18vw, 14rem)', color: 'rgba(240,237,230,0.05)' }}>
            &ldquo;
          </div>

          <blockquote className="font-bebas leading-[1.08] relative" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: '#F0EDE6' }}>
            &ldquo;The beat dropped. Then my walls did. I have not been the same since.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="w-8 h-px" style={{ backgroundColor: 'rgba(240,237,230,0.2)' }} />
            <p className="font-mono text-[0.75rem] tracking-[0.15em]" style={{ color: 'rgba(240,237,230,0.55)' }}>
              Tadala, 24
            </p>
            <p className="font-mono text-[0.75rem]" style={{ color: 'rgba(240,237,230,0.35)' }}>
              Lilongwe
            </p>
            <div className="w-8 h-px" style={{ backgroundColor: 'rgba(240,237,230,0.2)' }} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
