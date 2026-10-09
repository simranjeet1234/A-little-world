import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  symbol: string;
}

export const CursorSparkles: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Only enable on desktop/pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const symbols = ['✨', '🌸', '💫', '💖', '⭐'];
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 90) return; // Throttle sparkle creation
      lastTime = now;

      const newSparkle: Sparkle = {
        id: now + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 12,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      };

      setSparkles((prev) => [...prev.slice(-12), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }}>
      <AnimatePresence>
        {sparkles.map((sp) => (
          <motion.div
            key={sp.id}
            initial={{ opacity: 1, scale: 0.5, x: sp.x - 10, y: sp.y - 10 }}
            animate={{ opacity: 0, scale: 1.4, y: sp.y - 28 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onAnimationComplete={() => {
              setSparkles((prev) => prev.filter((s) => s.id !== sp.id));
            }}
            style={{
              position: 'absolute',
              fontSize: `${sp.size}px`,
              filter: 'drop-shadow(0 2px 4px rgba(255, 182, 193, 0.6))',
              userSelect: 'none',
            }}
          >
            {sp.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
