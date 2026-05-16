export default function AnnouncementBar() {
  return (
    <div className="w-full py-2.5 text-center" style={{ backgroundColor: '#C9A227', zIndex: 110, position: 'relative' }}>
      <p className="font-mono text-[0.7rem] tracking-[0.08em] uppercase" style={{ color: '#080808' }}>
        First Service &mdash; June 28, 2026 &middot; Blantyre, Malawi &rarr;{' '}
        <a
          href="#connect"
          onClick={(e) => { e.preventDefault(); document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="font-bold border-b border-[#080808] pb-px transition-all duration-300 hover:pb-1"
        >
          Come Thru
        </a>
      </p>
    </div>
  );
}
