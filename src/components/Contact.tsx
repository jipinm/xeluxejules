import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.formGroup}>
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className={styles.formGroup}>
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.formGroup}>
            <textarea id="message" rows={5} required></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
