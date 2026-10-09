import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Lock, Unlock, Star, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './SecretRoomPage.module.css';
import { PageTransition } from '../components/PageTransition';
import { config } from '../data/config';

export const SecretRoomPage: React.FC = () => {
  const [foundStars, setFoundStars] = useState<number[]>([]);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

  // Hidden floating star positions inside locked card
  const starPositions = [
    { id: 1, top: '22%', left: '15%' },
    { id: 2, top: '70%', left: '80%' },
    { id: 3, top: '25%', left: '85%' },
  ];

  const handleStarClick = (id: number) => {
    if (foundStars.includes(id)) return;
    const updated = [...foundStars, id];
    setFoundStars(updated);

    confetti({ particleCount: 30, spread: 40, origin: { y: 0.5 } });

    if (updated.length >= config.secretRoom.starsToFind) {
      setTimeout(() => {
        setIsUnlocked(true);
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#FF8FA3', '#C8B6E2', '#FFD6E0', '#FFECB3', '#D8F3DC'],
        });
      }, 500);
    }
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sticker-badge" style={{ marginBottom: '12px' }}>
            {isUnlocked ? <Unlock size={18} color="#FF4081" /> : <Lock size={18} color="#FF4081" />}
            {isUnlocked ? 'Unlocked Secret Room ✨' : 'Locked Secret Vault 🤫'}
          </span>
          <h1 className={styles.title}>Secret Room</h1>
          <p className={styles.subtitle}>
            {isUnlocked
              ? 'You did it! Welcome to your special secret vault.'
              : 'Find the 3 hidden glowing stars on the card below to open the vault!'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              className={styles.lockedCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔑</div>
              <h2 className={styles.teaserTitle}>{config.secretRoom.teaserTitle}</h2>
              <p className={styles.teaserSub}>{config.secretRoom.teaserSubtitle}</p>

              <div className={styles.starTracker}>
                <Star size={20} fill={foundStars.length >= 1 ? '#FF4081' : 'none'} />
                <Star size={20} fill={foundStars.length >= 2 ? '#FF4081' : 'none'} />
                <Star size={20} fill={foundStars.length >= 3 ? '#FF4081' : 'none'} />
                <span>
                  {foundStars.length} / {config.secretRoom.starsToFind} Stars Found!
                </span>
              </div>

              {/* Scattered Interactive Hidden Stars */}
              {starPositions.map((st) => {
                const isFound = foundStars.includes(st.id);
                return (
                  <motion.div
                    key={st.id}
                    className={styles.interactiveStar}
                    style={{ top: st.top, left: st.left, opacity: isFound ? 0.3 : 1 }}
                    animate={{
                      scale: [1, 1.25, 1],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: st.id * 0.4 }}
                    onClick={() => handleStarClick(st.id)}
                  >
                    ⭐
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              className={styles.revealedVault}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '12px' }}>👑✨</div>
              <h2 className={styles.revealedTitle}>{config.secretRoom.revealedTitle}</h2>
              <p className={styles.revealedMessage}>{config.secretRoom.revealedMessage}</p>

              {config.secretRoom.revealedImageUrl && (
                <div className="polaroid-frame" style={{ display: 'inline-block', marginBottom: '24px' }}>
                  <img
                    src={config.secretRoom.revealedImageUrl}
                    alt="Revealed Secret"
                    className={styles.revealedImg}
                  />
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>
                    A Little World of You ✨
                  </div>
                </div>
              )}

              <div style={{ marginTop: '20px' }}>
                <Link to="/" className="sticker-badge" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>
                  <Home size={18} /> Return to Homepage
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};
