import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'The team was incredibly professional and efficient. Our safety standards have never been higher.',
    author: 'John Doe, CEO of TechCorp',
  },
  {
    quote: 'A fantastic service from start to finish. Highly recommended for any business.',
    author: 'Jane Smith, Manager at BuildIt',
  },
  {
    quote: 'Their 24/7 support is a lifesaver. We had an emergency and they were on-site in minutes.',
    author: 'Sam Wilson, Operations Head at Logistics Inc.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <div className={styles.slider}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <p className={styles.author}>- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
