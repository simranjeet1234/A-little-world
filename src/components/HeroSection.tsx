import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import styles from './HeroSection.module.css';
import { PhotoCollage } from './PhotoCollage';
import { config } from '../data/config';

interface HeroSectionProps {
  onPhotoClick?: (index: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPhotoClick }) => {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.badgeHeader}>
          <span className="sticker-badge">
            <Sparkles size={18} color="#FF4081" /> Made with Love <Heart size={16} color="#FF4081" />
          </span>
        </div>

        <div className={styles.headingWrapper}>
          <h1 className={styles.title}>{config.websiteTitle}</h1>
        </div>

        <p className={styles.subtitle}>{config.subtitle}</p>
      </motion.div>

      {/* Scattered Polaroid Collage */}
      <PhotoCollage onPhotoClick={onPhotoClick} />
    </section>
  );
};
