import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, PhoneCall, AlertTriangle } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Your Trusted Partner in Fire Safety
        </motion.h2>
        <motion.p className={styles.description} variants={itemVariants}>
          We provide comprehensive fire safety solutions, from consultation to
          implementation, ensuring your environment is secure and compliant with
          all regulations.
        </motion.p>
        <motion.div className={styles.features} variants={itemVariants}>
          <div className={styles.feature}>
            <ShieldCheck className={styles.icon} />
            <h3>Certified Experts</h3>
            <p>Our team consists of certified professionals with years of experience.</p>
          </div>
          <div className={styles.feature}>
            <PhoneCall className={styles.icon} />
            <h3>24/7 Support</h3>
            <p>We are available around the clock for any emergency.</p>
          </div>
          <div className={styles.feature}>
            <AlertTriangle className={styles.icon} />
            <h3>Advanced Technology</h3>
            <p>We use the latest technology for detection and suppression.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
