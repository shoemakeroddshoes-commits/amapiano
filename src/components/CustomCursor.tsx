import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isTouch = 'ontouchstart' in window;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf: number;
    let hasMoved = false;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!hasMoved) {
        hasMoved = true;
        setVisible(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor-hover]');
      setHovering(!!isClickable);
    };

    const loop = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.15;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.15;

      dot.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      ring.style.transform = `translate(${ringPosRef.current.x - 20}px, ${ringPosRef.current.y - 20}px)`;

      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window)) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body { cursor: none !important; }
          a, button, [role="button"], input, select, textarea { cursor: none !important; }
        }
      `}</style>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? '40px' : '8px',
          height: hovering ? '40px' : '8px',
          backgroundColor: hovering ? 'rgba(201,162,39,0.2)' : '#C9A227',
          borderRadius: '50%',
          border: hovering ? '1px solid #C9A227' : 'none',
          zIndex: 99999,
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          opacity: visible ? 1 : 0,
          transition: 'width 0.3s, height 0.3s, opacity 0.3s, background-color 0.3s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(201,162,39,0.4)',
          borderRadius: '50%',
          zIndex: 99998,
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          opacity: visible && !hovering ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
    </>
  );
}
