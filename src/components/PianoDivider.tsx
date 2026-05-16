interface PianoDividerProps {
  color?: string;
  height?: number;
  reverse?: boolean;
}

export default function PianoDivider({ color = '#C9A227', height = 16, reverse = false }: PianoDividerProps) {
  const keys = Array.from({ length: 28 });
  
  return (
    <div
      className="w-full overflow-hidden flex"
      style={{
        height: `${height}px`,
        transform: reverse ? 'scaleX(-1)' : undefined,
      }}
    >
      {keys.map((_, i) => {
        const isBlack = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22, 25, 27].includes(i % 14);
        return (
          <div
            key={i}
            className="flex-1"
            style={{
              backgroundColor: isBlack ? 'transparent' : color,
              opacity: isBlack ? 0 : (i % 2 === 0 ? 1 : 0.7),
              borderRight: `1px solid ${color}`,
            }}
          />
        );
      })}
    </div>
  );
}
