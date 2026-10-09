import React, { useState, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { config } from '../data/config';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!config.audioUrl) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3500);
      return;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {config.audioUrl && <audio ref={audioRef} src={config.audioUrl} loop />}
      
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 14px',
          borderRadius: 'var(--radius-full)',
          background: isPlaying ? 'var(--accent-pink-soft)' : 'var(--bg-card)',
          border: '1.5px solid var(--accent-pink)',
          color: 'var(--text-main)',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.2s ease',
        }}
      >
        <Music size={16} color={isPlaying ? '#FF4081' : '#8C7A93'} />
        <span>{isPlaying ? 'Music On' : 'Music'}</span>
        {isPlaying ? <Volume2 size={16} color="#FF4081" /> : <VolumeX size={16} color="#8C7A93" />}
      </button>

      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            width: '230px',
            padding: '10px 14px',
            background: 'var(--bg-card)',
            border: '1px solid var(--accent-pink-soft)',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-md)',
            fontSize: '0.82rem',
            color: 'var(--text-main)',
            zIndex: 1000,
            textAlign: 'center',
          }}
        >
          🎵 Add an MP3 file to <code>public/music.mp3</code> & update <code>src/data/config.ts</code> to play music!
        </div>
      )}
    </div>
  );
};
