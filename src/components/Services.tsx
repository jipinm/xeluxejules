import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Siren, Shield, Extinguisher, MessageSquare, Bell } from 'lucide-react';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: <Flame />, title: 'Fire Risk Assessment' },
  { icon: <Siren />, title: 'Alarm System Installation' },
  { icon: <Shield />, title: 'Safety Training' },
  { icon: <Extinguisher />, title: 'Equipment Maintenance' },
  { icon: <MessageSquare />, title: 'Consultation' },
  { icon: <Bell />, title: '24/7 Monitoring' },
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>('.service-card');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container} ref={containerRef}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} service-card`}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
