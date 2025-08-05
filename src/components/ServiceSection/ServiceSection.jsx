// src/components/ServiceSection/ServiceSection.jsx
import React, { useEffect, useRef } from 'react';
import ServiceModelExp from '../Threejs/ServiceModelExp/ServiceModelExp';
import './ServiceSection.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin once
gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: 'Cosmetic Dentistry',
    description:
      'Enhance the appearance of your smile with treatments like teeth whitening, veneers, and smile makeovers.',
    image:
      'https://i.postimg.cc/HsQ6Zp7J/shedrack-salami-Bc-Ba5-K14-BU-unsplash-3-1.png',
  },
  {
    id: 2,
    title: 'General Dentistry',
    description:
      'Routine checkups, cleanings, and fillings to maintain your oral health and prevent future dental issues.',
    image:
      'https://i.postimg.cc/PxG1gRc6/shedrack-salami-Bc-Ba5-K14-BU-unsplash-4.png',
  },
  {
    id: 3,
    title: 'Orthodontics',
    description:
      'Straighten misaligned teeth with traditional braces or clear aligners for a more confident smile.',
    image:
      'https://i.postimg.cc/6qpqgV9j/shedrack-salami-Bc-Ba5-K14-BU-unsplash-4-1.png',
  },
  {
    id: 4,
    title: 'Dental Implants',
    description:
      'A permanent solution to replace missing teeth with natural-looking, long-lasting results.',
    image: '/assets/images/dental-implants.jpg',
  },
  {
    id: 5,
    title: 'Root Canal Treatment',
    description:
      'Relieve tooth pain and save your natural tooth by treating infections deep within the root.',
    image: '/assets/images/root-canal.jpg',
  },
  {
    id: 6,
    title: 'Pediatric Dentistry',
    description:
      'Gentle and fun dental care tailored specially for kids to keep their growing smiles healthy.',
    image: '/assets/images/pediatric.jpg',
  },
];

const ServicesSection = () => {

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const cardRef = useRef(null);



useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        markers: true,
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power3.out', duration: 1 },
    })
    .from(titleRef.current, {
      y: 50,
      opacity: 0,
    })
    .from(subtextRef.current, {
      y: 50,
      opacity: 0,
    }, '-=0.6')

    .from(cardRef.current, {
      y: 50,
      opacity: 0,
    }, '-=0.6')    
    

    
    // start slightly before previous finishes
  }, sectionRef);

  return () => ctx.revert();
}, []);




  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-section-container">
        <div ref={titleRef} className="services-section-title-container">
          <div className="service-model-exp-section">
            <ServiceModelExp />
          </div>
          <h2 className="services-section-title">
            Our <span className="services-section-highlight">Services</span>
          </h2>
        </div>

        <p ref={subtextRef} className="services-section-subtitle">
          We offer a wide range of dental treatments to keep your smile healthy
          and confident. Here are some of our services:
        </p>

        <div ref={cardRef} className="services-section-grid">
          {servicesData.map((service) => (
            <div  key={service.id} className="service-section-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-section-image"
              />
              <div className="service-section-content">
                <h3 className="service-section-title">{service.title}</h3>
                <p className="service-section-desc">{service.description}</p>
                <button className="service-section-button">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
