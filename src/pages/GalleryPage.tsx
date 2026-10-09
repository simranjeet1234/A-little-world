import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import styles from './GalleryPage.module.css';
import { PageTransition } from '../components/PageTransition';
import { PhotoLightbox } from '../components/PhotoLightbox';
import { config } from '../data/config';
import type { GalleryPhoto } from '../types';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(config.galleryPhotos.map((p) => p.category || 'General')))];

  const filteredPhotos =
    activeCategory === 'All'
      ? config.galleryPhotos
      : config.galleryPhotos.filter((p) => p.category === activeCategory);

  const selectedPhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sticker-badge" style={{ marginBottom: '12px' }}>
            <Camera size={18} color="#FF4081" /> Photo Gallery 📸
          </span>
          <h1 className={styles.title}>Her Photo Gallery</h1>
          <p className={styles.subtitle}>
            A collection of beautiful captured moments, happy days, and heartwarming snapshots.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className={styles.grid}>
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`polaroid-frame ${styles.photoCard}`}
              style={{ transform: `rotate(${photo.rotation || (index % 2 === 0 ? -2 : 2)}deg)` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedPhotoIndex(index)}
            >
              <div className={`washi-tape ${index % 2 === 0 ? 'tape-left' : 'tape-right'}`} />
              {photo.isVideo || photo.url.toLowerCase().endsWith('.mp4') || photo.url.toLowerCase().endsWith('.mov') ? (
                <div style={{ position: 'relative', width: '100%' }}>
                  <video
                    src={photo.url}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className={styles.photoImg}
                    style={{ objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.65)',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(4px)'
                  }}>
                    ▶ Video
                  </span>
                </div>
              ) : (
                <img src={photo.url} alt={photo.caption} className={styles.photoImg} />
              )}
              <div className={styles.cardMeta}>
                <div className={styles.cardCaption}>{photo.caption}</div>
                <div className={styles.cardSub}>
                  {photo.date && <span>📅 {photo.date}</span>}
                  {photo.location && <span>📍 {photo.location}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={
          selectedPhotoIndex !== null && selectedPhotoIndex > 0
            ? () => setSelectedPhotoIndex(selectedPhotoIndex - 1)
            : undefined
        }
        onNext={
          selectedPhotoIndex !== null && selectedPhotoIndex < filteredPhotos.length - 1
            ? () => setSelectedPhotoIndex(selectedPhotoIndex + 1)
            : undefined
        }
      />
    </PageTransition>
  );
};
