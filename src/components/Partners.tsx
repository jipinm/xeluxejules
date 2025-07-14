import React from 'react';
import { motion } from 'framer-motion';
import styles from './Partners.module.css';

// Replace with actual logo paths
const logos = [
  '/src/assets/images/logo1.png',
  '/src/assets/images/logo2.png',
  '/src/assets/images/logo3.png',
  '/src/assets/images/logo4.png',
  '/src/assets/images/logo5.png',
  '/src/assets/images/logo6.png',
];

const Partners: React.FC = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h2 className={styles.title}>Certifications & Partners</h2>
        <motion.div
          className={styles.logoGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className={styles.logo}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img src={logo} alt={`Partner ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
