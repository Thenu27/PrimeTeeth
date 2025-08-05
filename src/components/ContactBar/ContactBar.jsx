// src/components/ContactBar/ContactBar.jsx
import React, { useRef, useEffect } from 'react';
import './ContactBar.css';
import { gsap } from 'gsap';

const ContactBar = () => {
  const barRef = useRef(null);

    useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(barRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-bar" ref={barRef}>
      <div className="contact-category">
        <img src="/smartphone.svg" alt="Phone" />
        <p className="contact-category-title">Contact</p>
        <p className="contact-category-info">+94 77 123 5678</p>
      </div>
      <div className="divider"></div>
      <div className="contact-category">
        <img src="/pin.svg" alt="Location" />
        <p className="contact-category-title">Address</p>
        <p className="contact-category-info">
          Dental Clinic, Rajagiriya, Colombo
        </p>
      </div>
      <div className="divider"></div>
      <div className="contact-category">
        <img src="/wall-clock.svg" alt="Hours" />
        <p className="contact-category-title">Opening Hours</p>
        <p className="contact-category-info">9.00 AM - 10.00 PM</p>
      </div>
    </div>
  );
};

export default ContactBar;
