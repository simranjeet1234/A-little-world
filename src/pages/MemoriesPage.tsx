import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import styles from './MemoriesPage.module.css';
import { PageTransition } from '../components/PageTransition';
import { PhotoLightbox } from '../components/PhotoLightbox';
import { config } from '../data/config';
import type { GalleryPhoto } from '../types';

export const MemoriesPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sticker-badge" style={{ marginBottom: '12px' }}>
            <Clock size={18} color="#FF4081" /> Memory Timeline 🌸
          </span>
          <h1 className={styles.title}>Memory Lane</h1>
          <p className={styles.subtitle}>
            A timeline of special chapters, adventures, and unforgettable memories spent together.
          </p>
        </div>

        <div className={styles.timeline}>
          {config.memories.map((item, index) => {
            const isRight = index % 2 !== 0;
            return (
              <motion.div
                key={item.id}
                className={`${styles.timelineItem} ${isRight ? styles.timelineItemRight : ''}`}
                initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={styles.timelineNode}>{item.sticker || '🌸'}</div>

                <div
                  className={`polaroid-frame ${styles.card}`}
                  style={{ transform: `rotate(${isRight ? 2 : -2}deg)` }}
                >
                  <div className={`washi-tape ${isRight ? 'tape-right' : 'tape-left'}`} />

                  {item.imageUrl && (
                    item.isVideo || item.imageUrl.toLowerCase().endsWith('.mp4') || item.imageUrl.toLowerCase().endsWith('.mov') ? (
                      <div
                        style={{ position: 'relative', cursor: 'pointer' }}
                        onClick={() =>
                          setSelectedPhoto({
                            id: item.id,
                            url: item.imageUrl!,
                            caption: item.title,
                            date: item.date,
                            isVideo: true,
                          })
                        }
                      >
                        <video
                          src={item.imageUrl}
                          muted
                          loop
                          autoPlay
                          playsInline
                          className={styles.photoImg}
                          style={{ objectFit: 'cover', width: '100%' }}
                        />
                        <span style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          background: 'rgba(0,0,0,0.65)',
                          color: '#fff',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          backdropFilter: 'blur(4px)'
                        }}>
                          ▶ Video Memory
                        </span>
                      </div>
                    ) : (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className={styles.photoImg}
                        onClick={() =>
                          setSelectedPhoto({
                            id: item.id,
                            url: item.imageUrl!,
                            caption: item.title,
                            date: item.date,
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      />
                    )
                  )}

                  <span className={styles.dateTag}>{item.date}</span>
                  <h3 className={styles.memTitle}>{item.title}</h3>
                  <p className={styles.memDesc}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <PhotoLightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </PageTransition>
  );
};
