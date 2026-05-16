import ScrollReveal from '@/components/ScrollReveal';

const TRACKS = [
  {
    number: '01',
    title: 'Sound & Worship',
    tag: 'STREETS \u00b7 SCHOOLS',
    body: 'The beat is the door. Always has been. We train DJs, vocalists, musicians and worship leaders to gather crowds with sound and hold them with truth. The stage is not a platform for performance. It is a threshold. And you are the doorkeeper.',
    cta: 'WORSHIP IS YOUR WEAPON',
  },
  {
    number: '02',
    title: 'Kingdom Tech',
    tag: 'SCHOOLS \u00b7 UNIVERSITIES',
    body: "God needs builders not just believers. We train Gen Z in AI and software development. The church that cannot build its own infrastructure will always depend on someone else's. Code is not secular. Code is stewardship.",
    cta: 'CODE IS YOUR WEAPON',
  },
  {
    number: '03',
    title: 'Film & Media',
    tag: 'ARTISTS \u00b7 ONLINE',
    body: 'Revival undocumented gets forgotten. Every move of God that changed history had someone writing it down. We train filmmakers and content creators to capture what God is doing and broadcast it to everyone watching.',
    cta: 'STORY IS YOUR WEAPON',
  },
];

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative py-24 md:py-32"
      style={{ zIndex: 1, backgroundColor: '#2D1B4E' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <p className="font-mono text-[0.6rem] tracking-[0.28em] uppercase mb-4" style={{ color: 'rgba(240,237,230,0.4)' }}>
            Pick your track &middot; Pick your weapon
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas leading-[0.93] mb-2" style={{ fontSize: 'clamp(3.6rem, 10vw, 8rem)', color: '#F0EDE6' }}>
            Three ways in.
          </h2>
          <h2 className="font-bebas leading-[0.93] mb-16" style={{ fontSize: 'clamp(3.6rem, 10vw, 8rem)', color: '#C9A227' }}>
            One mission out.
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {TRACKS.map((track) => (
            <ScrollReveal key={track.number} delay={0.1}>
              <div className="group py-12 md:py-16 border-t transition-all duration-500 hover:pl-4" style={{ borderColor: 'rgba(240,237,230,0.07)' }}>
                {/* Number */}
                <span className="font-bebas leading-none block" style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', color: 'rgba(201,162,39,0.08)' }}>
                  {track.number}
                </span>

                {/* Title */}
                <h3 className="font-bebas text-3xl md:text-5xl uppercase tracking-wide mt-2 transition-colors duration-300 group-hover:text-[#C9A227]" style={{ color: '#F0EDE6' }}>
                  {track.title}
                </h3>

                {/* Tag */}
                <span className="inline-block font-mono text-[0.6rem] tracking-[0.2em] uppercase mt-3 px-4 py-1.5 rounded-sm" style={{ border: '0.5px solid rgba(201,162,39,0.2)', color: '#C9A227' }}>
                  {track.tag}
                </span>

                {/* Body */}
                <p className="text-[0.9rem] font-light leading-[1.9] mt-6 max-w-[580px]" style={{ color: 'rgba(240,237,230,0.55)' }}>
                  {track.body}
                </p>

                {/* CTA */}
                <span className="inline-block font-mono text-[0.7rem] tracking-[0.15em] font-bold uppercase mt-8 transition-all duration-300 group-hover:tracking-[0.2em]" style={{ color: '#C9A227' }}>
                  {track.cta} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
