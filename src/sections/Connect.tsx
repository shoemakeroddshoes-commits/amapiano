import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', track: '' });
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.from(leftRef.current.querySelectorAll('.connect-left-item'), {
        x: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }
    if (rightRef.current) {
      gsap.from(rightRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  const inputCls = "w-full px-4 py-4 text-[0.95rem] outline-none transition-all duration-300 bg-transparent font-dm";
  const inputStyle: React.CSSProperties = {
    border: '1px solid rgba(10,10,10,0.35)',
    color: '#080808',
  };
  const labelCls = "block font-mono text-[0.52rem] uppercase tracking-[0.28em] mb-2";
  const labelStyle: React.CSSProperties = { color: 'rgba(10,10,10,0.55)' };

  return (
    <section
      id="connect"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ zIndex: 1, backgroundColor: '#C9A227' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/afro-pattern.png)',
          backgroundSize: '500px 500px',
          backgroundRepeat: 'repeat',
          opacity: 0.04,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-16 md:gap-24">

        {/* Left */}
        <div ref={leftRef} className="md:w-[42%]">
          <p className="connect-left-item font-mono text-[0.52rem] tracking-[0.28em] uppercase mb-8"
            style={{ color: 'rgba(10,10,10,0.55)' }}>
            You felt something. Don&apos;t ignore it.
          </p>

          <h2
            className="connect-left-item font-display leading-[0.88] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#080808', fontWeight: 700 }}
          >
            Tell us<br />
            <span className="italic" style={{ color: 'rgba(10,10,10,0.35)', fontWeight: 600 }}>
              you&apos;re coming.
            </span>
          </h2>

          <div className="connect-left-item space-y-4 mb-10">
            <p className="font-dm text-[0.95rem] leading-[1.85]" style={{ color: 'rgba(10,10,10,0.8)' }}>
              Drop your name and WhatsApp. Tell us what you&apos;re running toward.
            </p>
            <p className="font-dm text-[0.95rem] leading-[1.85]" style={{ color: 'rgba(10,10,10,0.8)' }}>
              Obed personally reaches out within 24 hours. No script. No spam. Just a real conversation.
            </p>
            <p className="font-dm text-[0.95rem] leading-[1.85]" style={{ color: 'rgba(10,10,10,0.8)' }}>
              Or skip the form — WhatsApp us directly.
            </p>
          </div>

          
            href="https://wa.me/265000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-left-item inline-flex items-center gap-3 font-mono text-[0.62rem] font-bold tracking-[0.18em] uppercase py-4 px-8 transition-all duration-300 hover:brightness-90"
            style={{ backgroundColor: '#080808', color: '#C9A227' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Right — Form */}
        <div ref={rightRef} className="md:w-[52%] md:ml-auto">
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Sent! We will reach out within 24 hours.'); }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelCls} style={labelStyle}>Your name</label>
                <input
                  type="text"
                  placeholder="What do they call you"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputCls}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.7)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.35)')}
                />
              </div>
              <div>
                <label className={labelCls} style={labelStyle}>WhatsApp number</label>
                <input
                  type="tel"
                  placeholder="+265..."
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className={inputCls}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.7)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.35)')}
                />
              </div>
            </div>

            <div>
              <label className={labelCls} style={labelStyle}>Which track is calling you?</label>
              <select
                value={formData.track}
                onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                className={inputCls}
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(10,10,10,0.5)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 14px center',
                  backgroundColor: 'transparent',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.7)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.35)')}
              >
                <option value="" style={{ backgroundColor: '#C9A227' }}>Pick one</option>
                <option value="sound" style={{ backgroundColor: '#C9A227' }}>Sound &amp; Worship</option>
                <option value="tech" style={{ backgroundColor: '#C9A227' }}>Kingdom Tech</option>
                <option value="media" style={{ backgroundColor: '#C9A227' }}>Film &amp; Media</option>
                <option value="come" style={{ backgroundColor: '#C9A227' }}>Just want to come through</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full font-mono text-[0.65rem] font-bold tracking-[0.22em] uppercase py-5 transition-all duration-300 hover:brightness-90"
              style={{ backgroundColor: '#080808', color: '#C9A227' }}
            >
              Send it
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
