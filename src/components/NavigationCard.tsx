import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Clock, Heart, Lock, ArrowRight } from 'lucide-react';
import styles from './NavigationCard.module.css';

interface NavCardItem {
  id: string;
  title: string;
  description: string;
  path: string;
  badge: string;
  icon: React.ReactNode;
}

export const navCardItems: NavCardItem[] = [
  {
    id: 'gallery',
    title: 'Her Gallery',
    description: 'Explore polaroids, precious moments, and captured memories.',
    path: '/gallery',
    badge: 'Photos 📸',
    icon: <Camera size={26} />,
  },
  {
    id: 'little-things',
    title: 'Little Things',
    description: 'Discover cute details, charming quirks, and unique fun facts.',
    path: '/little-things',
    badge: 'Quirks ✨',
    icon: <Sparkles size={26} />,
  },
  {
    id: 'memories',
    title: 'Memory Lane',
    description: 'A timeline of unforgettably sweet moments and chapters.',
    path: '/memories',
    badge: 'Timeline 🌸',
    icon: <Clock size={26} />,
  },
  {
    id: 'for-you',
    title: 'For You',
    description: 'Open handwritten letter notes made to bring you joy.',
    path: '/for-you',
    badge: 'Letters 💌',
    icon: <Heart size={26} />,
  },
  {
    id: 'secret',
    title: 'Secret Room',
    description: 'Solve the clue to unlock a special final surprise!',
    path: '/secret',
    badge: 'Hidden 🗝️',
    icon: <Lock size={26} />,
  },
];

export const NavigationGrid: React.FC = () => {
  return (
    <div className={styles.grid}>
      {navCardItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link to={item.path} className={styles.card}>
            <div>
              <div className={styles.topRow}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <span className={styles.badge}>{item.badge}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
            <div className={styles.actionRow}>
              <span>Explore section</span>
              <ArrowRight size={18} />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
