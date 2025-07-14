import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import extinguisherAnimation from '../assets/lottie/extinguisher.json';
import alarmAnimation from '../assets/lottie/alarm.json';
import signageAnimation from '../assets/lottie/signage.json';
import styles from './Products.module.css';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { animationData: extinguisherAnimation, title: 'Fire Extinguishers' },
  { animationData: alarmAnimation, title: 'Smoke Alarms' },
  { animationData: signageAnimation, title: 'Safety Signage' },
];

const Products: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const horizontalSection = horizontalRef.current;
    const section = sectionRef.current;
    if (!horizontalSection || !section) return;

    const amount = horizontalSection.offsetWidth - window.innerWidth;

    gsap.to(horizontalSection, {
      x: -amount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${amount}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.products}>
      <div ref={horizontalRef} className={styles.horizontalContainer}>
        <div className={styles.product}>
          <Lottie animationData={products[0].animationData} className={styles.lottie} />
          <h3 className={styles.title}>{products[0].title}</h3>
        </div>
        <div className={styles.product}>
          <Lottie animationData={products[1].animationData} className={styles.lottie} />
          <h3 className={styles.title}>{products[1].title}</h3>
        </div>
        <div className={styles.product}>
          <Lottie animationData={products[2].animationData} className={styles.lottie} />
          <h3 className={styles.title}>{products[2].title}</h3>
        </div>
      </div>
    </section>
  );
};

export default Products;
