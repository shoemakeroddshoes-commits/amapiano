interface MarqueeProps {
  text: string;
  speed?: number;
  bgColor?: string;
  textColor?: string;
}

export default function Marquee({ text, speed = 20, bgColor = '#C9A227', textColor = '#0A1628' }: MarqueeProps) {
  const items = Array(6).fill(text);

  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-bebas text-lg uppercase tracking-wider mx-6 flex-shrink-0"
            style={{ color: textColor }}
          >
            {item} &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
