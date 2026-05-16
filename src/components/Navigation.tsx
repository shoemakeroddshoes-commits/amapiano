import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#manifesto' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Give', href: '#footer' },
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
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-[100] transition-all duration-500" style={{ backgroundColor: scrolled ? 'rgba(10,22,40,0.96)' : 'rgba(10,22,40,0.5)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: scrolled ? '1px solid rgba(201,162,39,0.15)' : '1px solid transparent' }}>
      <div className="max-w-[1400px] mx-auto px-6 h-[68px] flex items-center justify-between">

        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center">
          <img src="/images/logo.png" alt="Amapiano Church" className="h-10 w-10 object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-dm text-xs tracking-widest uppercase transition-colors duration-300 hover:text-[#C9A227]" style={{ color: 'rgba(240,237,230,0.6)', letterSpacing: '0.15em' }}>
              {link.label}
            </a>
          ))}
          <a href="#showup" onClick={(e) => handleNavClick(e, '#showup')} className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] px-7 py-2.5 transition-all duration-300 hover:brightness-110" style={{ border: '1px solid #C9A227', color: '#C9A227' }}>
            Come Thru
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={20} style={{ color: '#C9A227' }} /> : <Menu size={20} style={{ color: '#F0EDE6' }} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-5" style={{ backgroundColor: 'rgba(10,22,40,0.99)', borderTop: '1px solid rgba(201,162,39,0.1)' }}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-dm text-base uppercase tracking-widest py-1 transition-colors duration-300 hover:text-[#C9A227]" style={{ color: 'rgba(240,237,230,0.7)', letterSpacing: '0.15em' }}>
              {link.label}
            </a>
          ))}
          <a href="#showup" onClick={(e) => handleNavClick(e, '#showup')} className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] px-6 py-3 text-center mt-2 transition-all duration-300 hover:brightness-110" style={{ border: '1px solid #C9A227', color: '#C9A227' }}>
            Come Thru
          </a>
        </div>
      )}
    </nav>
  );
}
