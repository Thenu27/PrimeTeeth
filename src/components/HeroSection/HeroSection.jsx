import React, { useRef, useEffect } from 'react';
import './HeroSection.css';
import Navbar from '../Navbar/Navbar';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const btnContainerRef = useRef(null);
  const heroContainerRef = useRef(null); // used for context scope

  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: {  duration: 1 } });

      // 1. Logo drops in
      tl.from(logoRef.current, {
        x: -50,
        opacity: 0,
      })
        // 2. Text follows
        .from(
          textRef.current,
          {
            y: 20,
            opacity: 0,
          },
          '-=0.6'
        )
        // 3. Buttons pop in with stagger
        .from(
          btnContainerRef.current,
          {
            y: 20,
            opacity: 0,
            stagger: 0.2,
          },
          '-=0.6'
        );
    }, heroContainerRef); // scope the animations to this container

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="hero-section" ref={heroContainerRef}>
        <div className="hero-logo-container">
          <img
            ref={logoRef}
            src="/heroLogo.svg"
            alt="Prime Teeth Logo"
            className="hero-logo"
          />
          <p ref={textRef} className="hero-text">
            Advanced, compassionate dental care for the whole family combining
            the latest in pain-free technology with a warm,
            patient-centered approach.
          </p>
          <div ref={btnContainerRef} className="hero-btn-container">
            <button onClick={()=>navigate('/contact')} className="hero-btn">Contact Us</button>
            <button onClick={()=>navigate('/About')} className="hero-btn hero-btn2">About Us</button>
          </div>
        </div>
      </div>
      <div className="hero-divider"></div>
    </>
  );
};

export default HeroSection;
