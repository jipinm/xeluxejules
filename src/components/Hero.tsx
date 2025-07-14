import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.backgroundVideo}
        src="https://cdn.coverr.co/videos/fire-safety.mp4"
        autoPlay
        loop
        muted
      />
      <div className={styles.overlay}>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Protect What Matters
        </motion.h1>
        <motion.p
          className={styles.subheadline}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Advanced Fire Safety. UAE Certified. 24/7 Emergency Support.
        </motion.p>
        <div className={styles.buttonContainer}>
          <motion.a
            href="#free-audit"
            className={styles.button}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Book Free Audit
          </motion.a>
          <motion.a
            href="#services"
            className={`${styles.button} ${styles.secondary}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            See Services
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
