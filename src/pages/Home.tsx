import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import FilmGrain from '@/components/FilmGrain';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Marquee from '@/components/Marquee';
import PianoDivider from '@/components/PianoDivider';
import Hero from '@/sections/Hero';
import Threshold from '@/sections/Threshold';
import Manifesto from '@/sections/Manifesto';
import ShowUp from '@/sections/ShowUp';
import WhyWeDance from '@/sections/WhyWeDance';
import TheSound from '@/sections/TheSound';
import Vision from '@/sections/Vision';
import Tracks from '@/sections/Tracks';
import Testimony from '@/sections/Testimony';
import Final from '@/sections/Final';
import Connect from '@/sections/Connect';
import Footer from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => { ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  return (
    <div className="relative" style={{ backgroundColor: '#0A1628' }}>
      <FilmGrain />
      <CustomCursor />
      <Navigation />
      <FloatingWhatsApp />

      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. THRESHOLD */}
        <Threshold />
        <PianoDivider color="#C9A227" height={12} />

        {/* 3. MANIFESTO / Who We Are */}
        <Manifesto />

        {/* Marquee */}
        <Marquee
          text="We are a spiritual contagion · The door is open · He dropped a Word · We don't produce fans · We raise missionaries"
          speed={25} bgColor="#0A1628" textColor="rgba(240,237,230,0.15)"
        />
        <PianoDivider color="#8B1A1A" height={12} />

        {/* 4. SHOW UP / Invitation */}
        <ShowUp />
        <PianoDivider color="#0A1628" height={12} />

        {/* Marquee */}
        <Marquee
          text="Just show up · We'll explain 3:16 later · The running father not the waiting judge · You ain't too far gone"
          speed={30} bgColor="#0A1628" textColor="rgba(240,237,230,0.15)"
        />

        {/* 5. WHY WE DANCE */}
        <WhyWeDance />
        <PianoDivider color="#F0EDE6" height={12} />

        {/* 6. THE SOUND */}
        <TheSound />
        <PianoDivider color="#F0EDE6" height={12} />

        {/* 7. MISSION / Vision */}
        <Vision />

        {/* Marquee */}
        <Marquee
          text="The goal is an empty building · Because everyone got sent · When Blantyre reaches like Blantyre · The continent shifts"
          speed={28} bgColor="#2D1B4E" textColor="rgba(240,237,230,0.15)"
        />
        <PianoDivider color="#2D1B4E" height={12} />

        {/* 8. TRACKS */}
        <Tracks />
        <PianoDivider color="#8B1A1A" height={12} />

        {/* 9. TESTIMONY */}
        <Testimony />
        <PianoDivider color="#0A1628" height={12} />

        {/* Marquee */}
        <Marquee
          text="The beat dropped then my walls did · I have not been the same since · More testimonies coming post-launch"
          speed={32} bgColor="#C9A227" textColor="rgba(10,10,10,0.2)"
        />
        <PianoDivider color="#0A1628" height={12} />

        {/* 10. FINAL */}
        <Final />
        <PianoDivider color="#C9A227" height={12} />

        {/* 11. CONNECT */}
        <Connect />
        <PianoDivider color="#0A1628" height={10} />

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  );
}
