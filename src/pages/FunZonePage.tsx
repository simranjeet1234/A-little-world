import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gamepad2, Sparkles, Gift, HelpCircle, RefreshCw, Heart, Eye } from 'lucide-react';
import styles from './FunZonePage.module.css';
import { PageTransition } from '../components/PageTransition';
import { config } from '../data/config';
import type { SurpriseItem } from '../types';

export const FunZonePage: React.FC = () => {
  // Feature A: Compliment Generator state
  const [currentCompliment, setCurrentCompliment] = useState<string>(config.compliments[0]);

  const handleNewCompliment = () => {
    let next: string;
    do {
      next = config.compliments[Math.floor(Math.random() * config.compliments.length)];
    } while (next === currentCompliment && config.compliments.length > 1);

    setCurrentCompliment(next);
  };

  // Feature B: Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentQ = config.quizQuestions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQ.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < config.quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
  };

  // Feature C: Surprise Button state
  const [activeSurprise, setActiveSurprise] = useState<SurpriseItem | null>(null);
  const [surpriseClickCount, setSurpriseClickCount] = useState<number>(0);

  const handleTriggerSurprise = () => {
    const nextIndex = surpriseClickCount % config.surprises.length;
    setActiveSurprise(config.surprises[nextIndex]);
    setSurpriseClickCount((prev) => prev + 1);

    // Trigger sweet confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF8FA3', '#C8B6E2', '#FFD6E0', '#FFECB3'],
    });
  };

  // Feature D: Photo Reveal state
  const [revealedPhotos, setRevealedPhotos] = useState<Record<string, boolean>>({});

  const togglePhotoReveal = (id: string) => {
    setRevealedPhotos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sticker-badge" style={{ marginBottom: '12px' }}>
            <Gamepad2 size={18} color="#FF4081" /> Playful Mini-Games 🎮
          </span>
          <h1 className={styles.title}>Fun Zone</h1>
          <p className={styles.subtitle}>
            A playful place for compliments, quizzes, interactive surprises, and hidden reveals.
          </p>
        </div>

        {/* Feature A: Random Compliment Generator */}
        <section className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>
            <Sparkles size={24} color="#FF4081" /> Compliment Generator ✨
          </h2>
          <p className={styles.sectionSubtitle}>
            Click the button to receive a sweet random compliment!
          </p>

          <div className={styles.complimentDisplay}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCompliment}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={styles.complimentText}
              >
                "{currentCompliment}"
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className={styles.primaryBtn} onClick={handleNewCompliment}>
              <Heart size={18} /> Tell me something nice!
            </button>
          </div>
        </section>

        {/* Feature B: Interactive Quiz */}
        <section className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>
            <HelpCircle size={24} color="#FF4081" /> Cozy Personality Quiz 🧠
          </h2>
          <p className={styles.sectionSubtitle}>
            Answer fun questions to reveal your magical score at the end!
          </p>

          {!quizFinished ? (
            <div className={styles.quizCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>Question {currentQuestionIndex + 1} of {config.quizQuestions.length}</span>
                <span>Score: {score}</span>
              </div>

              <h3 className={styles.questionText}>{currentQ.question}</h3>

              <div className={styles.optionsList}>
                {currentQ.options.map((option, idx) => {
                  let statusClass = '';
                  if (selectedAnswer !== null) {
                    if (idx === currentQ.correctAnswerIndex) statusClass = styles.correctOption;
                    else if (idx === selectedAnswer) statusClass = styles.wrongOption;
                  }

                  return (
                    <button
                      key={idx}
                      className={`${styles.optionBtn} ${selectedAnswer === idx ? styles.selectedOption : ''} ${statusClass}`}
                      onClick={() => handleSelectOption(idx)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div>
                  <div className={styles.feedbackBox}>
                    💡 {currentQ.explanation}
                  </div>
                  <button className={styles.primaryBtn} onClick={handleNextQuestion}>
                    {currentQuestionIndex < config.quizQuestions.length - 1 ? 'Next Question' : 'See Final Result 🎉'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <h3 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>Quiz Complete! 🎉</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                You scored {score} out of {config.quizQuestions.length}! You are officially 100% amazing! ✨
              </p>
              <button className={styles.primaryBtn} onClick={handleRestartQuiz}>
                <RefreshCw size={18} /> Play Quiz Again
              </button>
            </div>
          )}
        </section>

        {/* Feature C: Surprise Button */}
        <section className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>
            <Gift size={24} color="#FF4081" /> Secret Surprise Button 🎁
          </h2>
          <p className={styles.sectionSubtitle}>
            Press the button to trigger a joyful surprise & confetti!
          </p>

          <div className={styles.surpriseBox}>
            <button className={styles.primaryBtn} onClick={handleTriggerSurprise}>
              <Sparkles size={18} /> Click for a surprise!
            </button>

            {activeSurprise && (
              <motion.div
                key={activeSurprise.id}
                className={styles.surpriseResult}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{activeSurprise.emoji}</div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                  {activeSurprise.title}
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>{activeSurprise.message}</p>
                {activeSurprise.imageUrl && (
                  <img src={activeSurprise.imageUrl} alt={activeSurprise.title} className={styles.surpriseImg} />
                )}
              </motion.div>
            )}
          </div>
        </section>

        {/* Feature D: Interactive Photo Cards */}
        <section className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>
            <Eye size={24} color="#FF4081" /> Interactive Secret Photo Cards 📸
          </h2>
          <p className={styles.sectionSubtitle}>
            Click on any photo below to reveal its hidden secret caption!
          </p>

          <div className={styles.photoCardsGrid}>
            {config.heroCollagePhotos.map((photo) => {
              const isRevealed = !!revealedPhotos[photo.id];
              return (
                <div
                  key={photo.id}
                  className={`polaroid-frame ${styles.revealCard}`}
                  onClick={() => togglePhotoReveal(photo.id)}
                >
                  <img src={photo.url} alt={photo.caption} className={styles.revealImg} />
                  <div style={{ marginTop: '12px', fontFamily: 'var(--font-heading)', fontSize: '1.3rem' }}>
                    {isRevealed ? (
                      <span style={{ color: '#FF4081' }}>✨ Secret: {photo.caption} ✨</span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)' }}>🔒 Click to reveal secret</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
