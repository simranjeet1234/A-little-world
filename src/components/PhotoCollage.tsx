import React from 'react';
import { motion } from 'framer-motion';
import styles from './PhotoCollage.module.css';
import { config } from '../data/config';

interface PhotoCollageProps {
  onPhotoClick?: (index: number) => void;
}

export const PhotoCollage: React.FC<PhotoCollageProps> = ({ onPhotoClick }) => {
  return (
    <div className={styles.collageContainer}>
      {/* Scattered Side Photos */}
      {config.heroCollagePhotos.map((photo, index) => {
        const posClass = styles[`pos${index % 4}`];
        return (
          <motion.div
            key={photo.id}
            className={`polaroid-frame ${styles.scatteredPhoto} ${posClass}`}
            style={{ transform: `rotate(${photo.rotation || (index % 2 === 0 ? -4 : 4)}deg)` }}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            whileHover={{ scale: 1.08, zIndex: 20 }}
            onClick={() => onPhotoClick?.(index)}
          >
            <div className={`washi-tape ${index % 2 === 0 ? 'tape-left' : 'tape-right'}`} />
            <img src={photo.url} alt={photo.caption} className={styles.scatteredImg} />
            <div className={styles.smallCaption}>{photo.caption}</div>
          </motion.div>
        );
      })}

      {/* Main Central Portrait */}
      <motion.div
        className={`polaroid-frame ${styles.mainPortraitWrapper}`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="washi-tape" />
        <img
          src={config.mainPortrait}
          alt={config.friendName}
          className={styles.mainPortraitImg}
        />
        <div className={styles.captionText}>{config.friendName} ✨</div>
      </motion.div>
    </div>
  );
};
