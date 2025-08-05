// src/components/AboutSection/AboutSection.jsx
import React, { useRef, useEffect } from 'react';
import './AboutSection.css';
import AboutSectionExp from '../Threejs/AboutSectionExp/AboutSectionExp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Clean and Comfortable Environment',
  'Modern Technology and Equipment',
  'Personalized Patient Care',
  'Experienced and Friendly Staff',
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const leftRef    = useRef(null);
  const rightRef   = useRef(null);
  const listRef    = useRef(null);
  const modelRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start:   'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl
      // 1. Left side slides in from left
      .from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      // 2. Right side (quote + text) slides in from right, overlapping
      .from(rightRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.6')
      // 3. Feature list items fade up with stagger
      .from(listRef.current.children, {
        y: 20,
        opacity: 0,
        // stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      // 4. 3D model pops in with a little bounce
      .from(modelRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      }, '-=0.6');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      {/* LEFT: Doctor photo & info */}
      <div className="about-section-left" ref={leftRef}>
        <img
          className="about-section-left-img"
          src="/DocPic.png"
          alt="Dr. John Doe"
        />
        <div className="doc-name-container">
          <h1 className="doc-name">
            Dr. <span className="doc-highlight">John Doe</span>
          </h1>
          <p className="doc-name-text">
            DDS, MS – Specialist in Orthodontics
          </p>
          <button className="doc-name-btn">Contact</button>
        </div>
      </div>

      {/* RIGHT: Quote, features list, and 3D model */}
      <div className="about-section-right" ref={rightRef}>
        <div className="Quoat-container">
          <img src="/Quoat.svg" alt="Quote mark" />
        </div>
        <div className="quoat-text-container">
          <h1 className="quoat-text">
            A <span className="about-section-highlight">Smile</span> is the
            universal welcome, and as a{' '}
            <span className="about-section-highlight">Dentist</span>, I help
            people wear it with{' '}
            <span className="about-section-highlight">Confidence</span>.
          </h1>
        </div>

        <div className="about-section-list-and-model">
          {/* Feature list */}
          <div className="about-section-list-container" ref={listRef}>
            {features.map((feature, i) => (
              <div key={i} className="about-section-list">
                <img src="/blueTick.svg" alt="Tick" />
                <p className="list">{feature}</p>
              </div>
            ))}
          </div>

          {/* 3D Model */}
          <div className="about-experience" ref={modelRef}>
            <AboutSectionExp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
