import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#manifesto' },
  { label: 'TRACKS', href: '#tracks' },
  { label: 'GIVE', href: '#footer' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navTextStyle = scrolled
    ? 'text-[#F0EDE6]'
    : 'text-[#F0EDE6]';

  return (
    <nav
      className="sticky top-0 z-[100] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,22,40,0.95)' : 'rgba(10,22,40,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,162,39,0.1)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-[64px] flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3"
        >
          <img
            src="/images/logo.png"
            alt="Amapiano Church"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bebas text-lg tracking-wider" style={{ color: '#C9A227' }}>
            AMAPIANO CHURCH
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-dm text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#C9A227] ${navTextStyle}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#showup"
            onClick={(e) => handleNavClick(e, '#showup')}
            className="font-dm text-xs font-bold uppercase tracking-[0.15em] px-6 py-2.5 rounded-sm transition-all duration-300 hover:brightness-110"
            style={{ border: '1px solid #C9A227', color: '#C9A227' }}
          >
            COME THRU
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={22} style={{ color: '#C9A227' }} /> : <Menu size={22} style={{ color: '#F0EDE6' }} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ backgroundColor: 'rgba(10,22,40,0.98)' }}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-dm text-sm uppercase tracking-[0.2em] py-2" style={{ color: '#F0EDE6' }}>
              {link.label}
            </a>
          ))}
          <a href="#showup" onClick={(e) => handleNavClick(e, '#showup')} className="font-dm text-sm font-bold uppercase tracking-[0.15em] px-6 py-3 rounded-sm text-center mt-2" style={{ border: '1px solid #C9A227', color: '#C9A227' }}>
            COME THRU
          </a>
        </div>
      )}
    </nav>
  );
}
