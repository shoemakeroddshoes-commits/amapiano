import { useEffect, useRef, useState } from 'react';

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const lastY = useRef(0);
  const lastTime = useRef(Date.now());
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt < 16) return; // cap at ~60fps

      const currentY = window.scrollY;
      const dy = currentY - lastY.current;
      const v = Math.abs(dy / dt) * 10;

      setVelocity(Math.min(v, 20));
      lastY.current = currentY;
      lastTime.current = now;
    };

    const decay = () => {
      setVelocity((v) => v * 0.95);
      rafRef.current = requestAnimationFrame(decay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(decay);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return velocity;
}
