// src/pages/ServicesPage/ServicesPage.jsx
import React, { useRef, useEffect } from 'react';
import './ServicesPage.css';
import serviceData from '../../data/servicePage.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import SEO from '../../SEO/SEO'

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const sectionRef = useRef(null);
  const navigate =useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current.querySelector('.header-title');
      const cards  = sectionRef.current.querySelectorAll('.services-card');
      const button = sectionRef.current.querySelector('.about-page-btn');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start:   'top 75%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      // 1) Fade down header
      tl.from(header, {
        y: -50,
        opacity: 0,
        duration: 0.8,
      })
      // 2) Stagger cards in with fade-up
      .from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      }, '-=0.4')
      // 3) Pop in the Contact button

    }, sectionRef);

    return () => ctx.revert();
  }, []);

    useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  return (
    <>
    <SEO
      title="Dental Services | Prime Teeth Clinic in Rajagiriya"
      description="Explore Prime Teeth’s services including dental implants, whitening, cosmetic dentistry, and family care"
    />
    <div className="services-page" ref={sectionRef}>
      <div className="page-header">
        <h1 className="header-title">Our Services</h1>
      </div>

      <div className="services-container">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className={`services-card ${
              parseInt(service.id) % 2 === 0
                ? 'services-card-purple service-card-reverse'
                : ''
            }`}
          >
            <div className="serivces-content">
              <h2
                className={`service-title ${
                  parseInt(service.id) % 2 === 0 ? 'service-title-white' : ''
                }`}
              >
                {service.title}
                <span
                  className={`services-section-highlight ${
                    parseInt(service.id) % 2 === 0
                      ? 'service-section-highlight2'
                      : ''
                  }`}
                >
                  {' '}
                  {service.title2}
                </span>
              </h2>
              <p
                className={`service-description ${
                  parseInt(service.id) % 2 === 0 ? 'service-title-white' : ''
                }`}
              >
                {service.details}
              </p>

              <div className="check-list-container">
                {['point1','point2','point3'].map((pt, i) => (
                  <div className="check-list" key={i}>
                    <img className="ticks" src="/greenTick.svg" alt="Tick" />
                    <p
                      className={`list ${
                        parseInt(service.id) % 2 === 0 ? 'list-white' : ''
                      }`}
                    >
                      {service[pt]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-image-container">
              <img src={service.img} className="service-image" alt={`${service.title} at Prime Teeth`} />
            </div>
          </div>
        ))}
      </div>

        <div className='about-page-btn-container'>
                <button onClick={()=>{navigate('/contact')}} className='about-page-btn'>Contact Us</button>
            </div>
        </div>
        </>

  );
};

export default ServicesPage;
