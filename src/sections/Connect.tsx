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

        <div ref={leftRef} className="md:w-[42%]">
          <p
            className="connect-left-item font-mono text-[0.52rem] tracking-[0.28em] uppercase mb-8"
            style={{ color: 'rgba(10,10,10,0.55)' }}
          >
            You felt something. Do not ignore it.
          </p>

          <h2
            className="connect-left-item font-display leading-[0.88] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#080808', fontWeight: 700 }}
          >
            Tell us
            <br />
            <span
              className="italic"
              style={{ color: 'rgba(10,10,10,0.35)', fontWeight: 600 }}
            >
              you are coming.
            </span>
          </h2>

          <div className="connect-left-item space-y-4 mb-10">
            <p className="font-dm text-[0.95rem] leading-[1.85]" style={{ color: 'rgba(10,10,10,0.8)' }}>
              Drop your name and WhatsApp. Tell us what you are running toward.
            </p>
            <p className="font-dm text-[0.95rem] leading-[1.85]" style={{ color: 'rgba(10,10,10,0.8)' }}>
              Obed personally reaches out within 24 hours. No script. No spam. Just a real conversation.
            </p>
            <p className="font-dm text-[0.95rem] leading-[1.85]" style={{ color: 'rgba(10,10,10,0.8)' }}>
              Or skip the form and WhatsApp us directly.
            </p>
          </div>

          <a
            href="https://wa.me/265000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-left-item inline-flex items-center gap-3 font-mono text-[0.62rem] font-bold tracking-[0.18em] uppercase py-4 px-8 transition-all duration-300 hover:brightness-90"
            style={{ backgroundColor: '#080808', color: '#C9A227' }}
          >
            WhatsApp Us
          </a>
        </div>

        <div ref={rightRef} className="md:w-[52%] md:ml-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Sent! We will reach out within 24 hours.');
            }}
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
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 14px center',
                  backgroundColor: 'transparent',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.7)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.35)')}
              >
                <option value="" style={{ backgroundColor: '#C9A227' }}>Pick one</option>
                <option value="sound" style={{ backgroundColor: '#C9A227' }}>Sound and Worship</option>
                <option value="tech" style={{ backgroundColor: '#C9A227' }}>Kingdom Tech</option>
                <option value="media" style={{ backgroundColor: '#C9A227' }}>Film and Media</option>
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
