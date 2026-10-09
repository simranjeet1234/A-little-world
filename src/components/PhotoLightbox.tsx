import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import styles from './PhotoLightbox.module.css';
import type { GalleryPhoto } from '../types';

interface PhotoLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  onClose,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>

            {hasPrev && onPrev && (
              <button
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={onPrev}
                aria-label="Previous Photo"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {hasNext && onNext && (
              <button
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={onNext}
                aria-label="Next Photo"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <div className={styles.imageWrapper}>
              <img
                src={photo.url}
                alt={photo.caption}
                className={styles.enlargedImg}
              />
            </div>

            <div className={styles.metaInfo}>
              <h3 className={styles.caption}>{photo.caption}</h3>
              <div className={styles.subMeta}>
                {photo.date && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} /> {photo.date}
                  </span>
                )}
                {photo.location && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} /> {photo.location}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
