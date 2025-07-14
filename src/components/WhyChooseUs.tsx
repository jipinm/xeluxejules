import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const features = [
  'Certified and Experienced Team',
  '24/7 Emergency Response',
  'Advanced Safety Technology',
  'Customized Solutions',
  'Comprehensive Training Programs',
  'Regulatory Compliance Guarantee',
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className={styles.icon} />
              <p>{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
