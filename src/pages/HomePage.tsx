import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { NavigationGrid } from '../components/NavigationCard';
import { PhotoLightbox } from '../components/PhotoLightbox';
import { PageTransition } from '../components/PageTransition';
import { config } from '../data/config';
import type { GalleryPhoto } from '../types';

export const HomePage: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const selectedPhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? config.heroCollagePhotos[selectedPhotoIndex] : null;

  return (
    <PageTransition>
      <HeroSection onPhotoClick={(index) => setSelectedPhotoIndex(index)} />

      <section style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.4rem', marginBottom: '8px' }}>Explore Her Digital Scrapbook 📖</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '10px' }}>
          Click on any card below to step into a magical section of her world.
        </p>

        <NavigationGrid />
      </section>

      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={
          selectedPhotoIndex !== null && selectedPhotoIndex > 0
            ? () => setSelectedPhotoIndex(selectedPhotoIndex - 1)
            : undefined
        }
        onNext={
          selectedPhotoIndex !== null && selectedPhotoIndex < config.heroCollagePhotos.length - 1
            ? () => setSelectedPhotoIndex(selectedPhotoIndex + 1)
            : undefined
        }
      />
    </PageTransition>
  );
};
