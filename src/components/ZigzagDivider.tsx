interface ZigzagDividerProps {
  bgColor?: string;
  height?: number;
}

export default function ZigzagDivider({
  bgColor = '#0A0806',
  height = 24,
}: ZigzagDividerProps) {
  const count = 40;
  const triangles = Array.from({ length: count });

  return (
    <div
      className="w-full overflow-hidden flex"
      style={{
        height: `${height}px`,
        lineHeight: 0,
      }}
    >
      {triangles.map((_, i) => (
        <div
          key={i}
          className="flex-1"
          style={{
            height: `${height}px`,
            backgroundColor: bgColor,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      ))}
    </div>
  );
}
