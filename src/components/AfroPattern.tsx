interface AfroPatternProps {
  className?: string;
  opacity?: number;
  style?: React.CSSProperties;
}

export default function AfroPattern({ className = '', opacity = 0.06, style = {} }: AfroPatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity, ...style }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(/images/afro-pattern.png)`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}
