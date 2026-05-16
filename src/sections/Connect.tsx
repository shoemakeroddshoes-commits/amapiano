import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Connect() {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', track: '' });

  const inputCls = "w-full px-4 py-3.5 text-[0.85rem] font-light outline-none transition-all duration-300 font-dm";
  const inputStyle: React.CSSProperties = {
    backgroundColor: 'rgba(10,10,10,0.04)',
    border: '0.5px solid rgba(10,10,10,0.18)',
    color: '#080808',
  };
  const labelCls = "block font-mono text-[0.55rem] uppercase tracking-[0.25em] mb-2";
  const labelStyle: React.CSSProperties = { color: 'rgba(10,10,10,0.35)' };

  return (
    <section
      id="connect"
      className="relative py-24 md:py-32"
      style={{ zIndex: 1, backgroundColor: '#C9A227' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-16">
        <div className="md:w-[40%]">
          <ScrollReveal>
            <p className="font-mono text-[0.55rem] tracking-[0.25em] uppercase mb-6" style={{ color: 'rgba(10,10,10,0.35)' }}>
              You felt something. Don&apos;t ignore it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="font-bebas leading-[0.93] mb-6"
              style={{ fontSize: 'clamp(3.6rem, 10vw, 8rem)', color: '#080808' }}
            >
              Tell us
              <br />
              <span style={{ color: 'rgba(10,10,10,0.35)' }}>you&apos;re coming.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <p className="text-[0.9rem] font-light leading-[1.9]" style={{ color: 'rgba(10,10,10,0.65)' }}>
                Drop your name and WhatsApp. Tell us what you&apos;re running toward.
              </p>
              <p className="text-[0.9rem] font-light leading-[1.9]" style={{ color: 'rgba(10,10,10,0.65)' }}>
                Obed personally reaches out within 24 hours. No script. No spam. Just a real conversation about what comes next.
              </p>
              <p className="text-[0.9rem] font-light leading-[1.9]" style={{ color: 'rgba(10,10,10,0.65)' }}>
                Or skip the form &mdash; WhatsApp us directly.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://wa.me/265000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.65rem] font-bold tracking-[0.15em] uppercase py-3.5 px-8 mt-8 rounded-sm transition-all duration-300 hover:brightness-110"
              style={{ backgroundColor: '#080808', color: '#C9A227' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </ScrollReveal>
        </div>

        <div className="md:w-[55%] md:ml-auto">
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Sent! We will reach out within 24 hours.'); }}
              className="space-y-5"
            >
              {/* Name + WhatsApp on same row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls} style={labelStyle}>Your name</label>
                  <input
                    type="text"
                    placeholder="What do they call you"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputCls}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.18)')}
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
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.18)')}
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(10,10,10,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 14px center',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.4)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(10,10,10,0.18)')}
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
                className="w-full font-mono text-[0.7rem] font-bold tracking-[0.2em] uppercase py-4 mt-2 rounded-sm transition-all duration-300 hover:brightness-110"
                style={{ backgroundColor: '#080808', color: '#C9A227' }}
              >
                Send it
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
