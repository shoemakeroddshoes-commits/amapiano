import ScrollReveal from '@/components/ScrollReveal';

export default function Footer() {
  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="relative py-16 md:py-20"
      style={{ zIndex: 1, backgroundColor: '#0A1628' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Amapiano Church"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bebas text-xl tracking-wider" style={{ color: '#C9A227' }}>
              AMAPIANO CHURCH
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-x-10 gap-y-2 mb-8">
            {[
              ['Who we are', '#manifesto'],
              ['Mission', '#mission'],
              ['Tracks', '#tracks'],
              ['Connect', '#connect'],
              ['Give', '#footer'],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={(e) => handleNav(e, href)} className="font-dm text-[0.82rem] transition-colors duration-300 hover:text-[#C9A227]" style={{ color: 'rgba(240,237,230,0.35)' }}>
                {label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="pt-8 mt-8" style={{ borderTop: '0.5px solid rgba(240,237,230,0.06)' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-mono text-[0.5rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(240,237,230,0.2)' }}>
                  Blantyre, Malawi &middot; Established 2026
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.5rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(240,237,230,0.2)' }}>
                  Sundays 3:00pm &middot; Thursdays 5:00pm
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
