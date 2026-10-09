import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, HeartHandshake, RotateCcw } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import styles from './FunZonePage.module.css';

export const FunZonePage: React.FC = () => {
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const noButtonTexts = [
    'NO 🙈',
    'Wait, stop moving! 🏃‍♂️',
    'Can\'t touch me! 😜',
    'Nope! Try again! 🚫',
    'Just click YES! 🔥',
    'No way! 🤭',
    'Simran is sexier! 🔥',
    'Too slow! 💨',
    'Nice try! ⚡',
  ];

  const moveNoButton = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate random position across the expanded buttonsArea arena
    const buttonWidth = 140;
    const buttonHeight = 45;
    
    const maxX = Math.max(rect.width - buttonWidth - 20, 20);
    const maxY = Math.max(rect.height - buttonHeight - 20, 20);
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setNoPos({ x: randomX, y: randomY });
    setAttempts((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setShowWinnerModal(true);

    // Launch celebratory confetti burst
    confetti({
      particleCount: 180,
      spread: 110,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#ff477e', '#7000ff', '#00f2fe', '#ff8c00'],
    });

    // Secondary burst
    setTimeout(() => {
      confetti({
        particleCount: 120,
        angle: 60,
        spread: 80,
        origin: { x: 0.1 },
      });
      confetti({
        particleCount: 120,
        angle: 120,
        spread: 80,
        origin: { x: 0.9 },
      });
    }, 250);
  };

  const handlePlayAgain = () => {
    setShowWinnerModal(false);
    setNoPos(null);
    setAttempts(0);
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Fun Zone <Sparkles color="#ff477e" />
          </h1>
          <p className={styles.subtitle}>Take the Ultimate Truth Test! 😜🔥</p>
        </div>

        <motion.div
          className={styles.gameCard}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.badge}>
            <HeartHandshake size={18} /> Truth Corner
          </div>

          <h2 className={styles.question}>Is Simran sexier than you? 😉🔥</h2>
          <p className={styles.subQuestion}>Be honest... if you can click the answer! 😜</p>

          <div className={styles.buttonsArea} ref={containerRef}>
            {/* COMPACT YES BUTTON */}
            <motion.button
              className={styles.yesBtn}
              onClick={handleYesClick}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              YES! 🔥😍
            </motion.button>

            {/* EXPANDED RUNAWAY NO BUTTON */}
            <button
              className={styles.noBtn}
              style={
                noPos
                  ? {
                      position: 'absolute',
                      left: `${noPos.x}px`,
                      top: `${noPos.y}px`,
                    }
                  : { position: 'relative', marginLeft: '25px' }
              }
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
            >
              {noButtonTexts[attempts % noButtonTexts.length]}
            </button>
          </div>

          {attempts > 0 && (
            <p className={styles.attemptsCounter}>
              Tried {attempts} {attempts === 1 ? 'time' : 'times'} to click NO! You can only click YES! 😂
            </p>
          )}
        </motion.div>

        {/* 7 CRORE WINNER MODAL */}
        <AnimatePresence>
          {showWinnerModal && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.7, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.7, y: 50, opacity: 0 }}
                transition={{ type: 'spring', damping: 18 }}
              >
                <div className={styles.trophyHeader}>🏆👑💰</div>

                <div className={styles.croreAmount}>🎉 7 CRORE!!!!!! 🎉</div>

                <div className={styles.hindiText}>SAAT CRORE JEET GAYE!! 🤑💰</div>

                <p className={styles.modalDesc}>
                  You chose <strong>YES</strong>! You officially admit that Simran is sexier than you! 🔥✨
                  <br />
                  Here is your <strong>7 Crore</strong> virtual reward! 👑💵
                </p>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className={styles.claimBtn} onClick={handleYesClick}>
                    <Trophy size={20} /> Claim 7 Crore Confetti! 🎉
                  </button>

                  <button
                    className={styles.claimBtn}
                    style={{ background: 'rgba(0,0,0,0.08)', color: '#333' }}
                    onClick={handlePlayAgain}
                  >
                    <RotateCcw size={20} /> Play Again 🔄
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};
