import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Coffee, Sparkles, Heart, Music, Compass, Star, RotateCw } from 'lucide-react';
import styles from './LittleThingsPage.module.css';
import { PageTransition } from '../components/PageTransition';
import { config } from '../data/config';

export const LittleThingsPage: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'smile': return <Smile size={24} />;
      case 'coffee': return <Coffee size={24} />;
      case 'sparkles': return <Sparkles size={24} />;
      case 'heart': return <Heart size={24} />;
      case 'music': return <Music size={24} />;
      case 'compass': return <Compass size={24} />;
      default: return <Star size={24} />;
    }
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sticker-badge" style={{ marginBottom: '12px' }}>
            <Sparkles size={18} color="#FF4081" /> Cute Quirks & Details ✨
          </span>
          <h1 className={styles.title}>The Little Things</h1>
          <p className={styles.subtitle}>
            A collection of charming qualities, cute habits, and little details that make her so wonderful.
            Click any card to flip it over!
          </p>
        </div>

        <div className={styles.grid}>
          {config.littleThings.map((item, index) => {
            const isFlipped = !!flippedCards[item.id];
            return (
              <motion.div
                key={item.id}
                className={styles.cardPerspective}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`${styles.cardInner} ${isFlipped ? styles.cardFlipped : ''}`}
                  onClick={() => toggleFlip(item.id)}
                >
                  {/* Front of Card */}
                  <div className={styles.cardFront}>
                    <div>
                      <div className={styles.iconWrapper}>{getIcon(item.iconName)}</div>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.shortDesc}>{item.shortDescription}</p>
                    </div>
                    <div className={styles.clickPrompt}>
                      <RotateCw size={14} /> Click to flip & read more
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className={styles.cardBack}>
                    <div>
                      <div className={styles.backHeader}>
                        <span>{item.title}</span>
                        <span>✨</span>
                      </div>
                      <p className={styles.detailedText}>{item.detailedText}</p>
                    </div>
                    <div className={styles.clickPrompt} style={{ color: 'var(--text-muted)' }}>
                      <RotateCw size={14} /> Click to flip back
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
};
