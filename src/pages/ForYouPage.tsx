import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail, Sun, Coffee, Star, X, Sparkles } from 'lucide-react';
import styles from './ForYouPage.module.css';
import { PageTransition } from '../components/PageTransition';
import { config } from '../data/config';
import type { PersonalMessage } from '../types';

export const ForYouPage: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<PersonalMessage | null>(null);

  const getStampIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'sun': return <Sun size={20} />;
      case 'coffee': return <Coffee size={20} />;
      case 'star': return <Star size={20} />;
      default: return <Heart size={20} />;
    }
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sticker-badge" style={{ marginBottom: '12px' }}>
            <Heart size={18} color="#FF4081" /> Personal Letters 💌
          </span>
          <h1 className={styles.title}>For You</h1>
          <p className={styles.subtitle}>
            A collection of handwritten notes and messages created to bring warmth and a smile to your face.
            Click any envelope to read its message!
          </p>
        </div>

        <div className={styles.grid}>
          {config.messages.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.envelopeCard}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMessage(item)}
            >
              <div className={styles.stampBadge}>{getStampIcon(item.stampIcon)}</div>
              <div>
                <span className="sticker-badge" style={{ fontSize: '0.9rem', padding: '2px 10px', marginBottom: '12px' }}>
                  {item.tag}
                </span>
                <h3 className={styles.envelopeTitle}>{item.envelopeTitle}</h3>
                <p className={styles.envelopeSub}>{item.subtitle}</p>
              </div>
              <div className={styles.openPrompt}>
                <Mail size={16} /> Open & read letter
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              className={styles.letterPaper}
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModalBtn}
                onClick={() => setSelectedMessage(null)}
                aria-label="Close Letter"
              >
                <X size={20} />
              </button>

              <div className={styles.letterHeader}>
                <h3 className={styles.letterTitle}>{selectedMessage.envelopeTitle}</h3>
                <Sparkles size={22} color="#FF4081" />
              </div>

              <div className={styles.letterBody}>{selectedMessage.letterContent}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
