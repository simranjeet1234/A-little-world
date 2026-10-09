import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, Sparkles } from 'lucide-react';
import styles from './Footer.module.css';
import { config } from '../data/config';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {!isHome && (
          <Link to="/" className={styles.homeBtn}>
            <Home size={18} />
            <span>Return to Homepage</span>
          </Link>
        )}

        <div className={styles.note}>
          {config.websiteTitle} — Made with lots of{' '}
          <Heart size={16} color="#FF4081" fill="#FF4081" style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
          & magic{' '}
          <Sparkles size={16} color="#FFB74D" style={{ display: 'inline', verticalAlign: 'middle' }} />
        </div>
      </div>
    </footer>
  );
};
