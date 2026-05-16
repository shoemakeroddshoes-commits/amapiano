import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (about 80vh)
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed z-[90] transition-all duration-500"
      style={{
        bottom: '24px',
        right: '24px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Expanded tooltip */}
      {expanded && (
        <div
          className="absolute bottom-full right-0 mb-3 p-4 rounded-xl min-w-[240px]"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <button
            onClick={() => setExpanded(false)}
            className="absolute top-2 right-2 p-1"
            style={{ color: '#8A8278' }}
          >
            <X size={16} />
          </button>
          <p className="font-inter text-xs uppercase tracking-[0.15em] mb-2" style={{ color: '#C9A84C' }}>
            TALK TO US
          </p>
          <p className="font-inter text-sm mb-3" style={{ color: 'rgba(242,239,233,0.7)' }}>
            Got questions? Want to talk? We're here.
          </p>
          <a
            href="https://wa.me/265000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-inter text-sm font-bold py-2.5 px-4 rounded-lg transition-all duration-300 hover:brightness-110"
            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
        }}
        aria-label="Talk to us on WhatsApp"
      >
        {expanded ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
