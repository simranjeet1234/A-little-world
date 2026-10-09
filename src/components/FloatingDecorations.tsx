import React from 'react';
import { motion } from 'framer-motion';

export const FloatingDecorations: React.FC = () => {
  // Pre-configured floating items with positions & delays
  const floaters = [
    { id: 1, icon: '✨', top: '12%', left: '8%', size: '1.4rem', duration: 4.5, delay: 0 },
    { id: 2, icon: '💖', top: '25%', left: '88%', size: '1.2rem', duration: 5.2, delay: 1 },
    { id: 3, icon: '🌸', top: '65%', left: '5%', size: '1.5rem', duration: 6.0, delay: 0.5 },
    { id: 4, icon: '⭐', top: '82%', left: '92%', size: '1.3rem', duration: 4.8, delay: 1.5 },
    { id: 5, icon: '🎀', top: '45%', left: '94%', size: '1.4rem', duration: 5.5, delay: 2 },
    { id: 6, icon: '💫', top: '75%', left: '12%', size: '1.2rem', duration: 5.0, delay: 0.8 },
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {floaters.map((item) => (
        <motion.div
          key={item.id}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            fontSize: item.size,
            opacity: 0.65,
            filter: 'drop-shadow(0 2px 4px rgba(255, 182, 193, 0.4))',
          }}
          animate={{
            y: [0, -16, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};
