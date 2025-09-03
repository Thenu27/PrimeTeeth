// src/components/ContactBar/ContactBar.jsx
import React, { useRef, useEffect } from 'react';
import './ContactBar.css';
import { gsap } from 'gsap';
import contactBar from '../../data/contactBar.json'

const ContactBar = () => {
  const barRef = useRef(null);

  console.log(contactBar)

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
        <a href={`tel:${contactBar[0].contact}`} className="contact-category-info">
          (+94) 77 749 0691
        </a>     
      </div>
      <div className="divider"></div>
      <div className="contact-category">
        <img src="/pin.svg" alt="Location" />
        <p className="contact-category-title">Address</p>
        <p className="contact-category-info">
          {contactBar[0].address}
        </p>
      </div>
      <div className="divider"></div>
      <div className="contact-category">
        <img src="/email.png" alt="Hours" />
        <p className="contact-category-title">Email</p>
        <p className="contact-category-info">primeteethrajagiriya@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactBar;
