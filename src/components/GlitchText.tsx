import { useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

export default function GlitchText({ text, className = '', style = {}, as: Tag = 'span' }: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    let iteration = 0;
    const maxIterations = text.length * 2;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration / 2) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration++;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplay(text);
        setIsGlitching(false);
      }
    }, 30);
  };

  return (
    <Tag
      className={className}
      style={{
        display: 'inline-block',
        ...style,
        ...(isGlitching ? { textShadow: '-2px 0 #ff0000, 2px 0 #00ffff' } : {}),
      }}
      onMouseEnter={triggerGlitch}
      data-text={text}
    >
      {display}
    </Tag>
  );
}
