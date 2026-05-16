import { useState, useEffect, useRef } from 'react';

const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export function useScrambleText(
  text: string,
  options: { speed?: number; scrambleDuration?: number; trigger?: boolean } = {}
) {
  const { speed = 30, scrambleDuration = 600, trigger = false } = options;
  const [displayText, setDisplayText] = useState(text.split('').map(() => ' ').join(''));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (trigger === false || hasAnimated.current === true) return;
    hasAnimated.current = true;

    const chars = text.split('');
    const totalDelay = chars.length * speed;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const result = chars.map((_char, i) => {
        const charDelay = i * speed;
        if (elapsed < charDelay) return ' ';
        if (elapsed >= charDelay + scrambleDuration) return chars[i];
        return CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
      });

      setDisplayText(result.join(''));

      const progress = elapsed / totalDelay;
      if (progress >= 1) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [text, trigger, speed, scrambleDuration]);

  return displayText;
}
