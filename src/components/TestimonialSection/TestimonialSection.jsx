import React, { useEffect, useState, useRef } from 'react';
import './TestimonialSection.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text:
      'I used to be terrified of going to the dentist, but this clinic changed that completely. The staff is so kind and the care I received was top-notch. Highly recommend!',
    author: 'Dilani R.',
  },
  {
    text:
      'Fantastic experience from start to finish. The team made me feel comfortable and I love my new smile!',
    author: 'Mark S.',
  },
  {
    text:
      'Very professional and caring staff. The latest technology made my visit quick and painless.',
    author: 'Aisha K.',
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const cardcontainerRef =useRef(null);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
          markers: true, // set to false in production
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
      .from(subtextRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.7')

     .from(cardcontainerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.7');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="testimonial-section">
      <div className="testimonial-section-header">
        <h2 ref={titleRef} className="services-section-title">
          What Our <span className="faq-span">Patients Say</span>
        </h2>
        <p ref={subtextRef} className="testimonial-section-subtitle">
          We love making people smile! Here’s what some of our wonderful patients have
          to say about their experience with us.
        </p>
        <img
          // src={PatientIcon}
          alt=""
          className="testimonial-section-icon"
        />
      </div>

      <div ref={cardcontainerRef} className="testimonial-section-carousel">
        <button
          className="testimonial-section-arrow testimonial-section-arrow--left"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className={
              idx === current
                ? 'testimonial-section-slide testimonial-section-slide--active'
                : 'testimonial-section-slide'
            }
          >
            {idx === current && (
              <div className="testimonial-section-card">
                <p className="testimonial-section-text">{item.text}</p>
                <p className="testimonial-section-author">{item.author}</p>
              </div>
            )}
          </div>
        ))}

        <button
          className="testimonial-section-arrow testimonial-section-arrow--right"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      <div className="testimonial-section-dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={
              idx === current
                ? 'testimonial-section-dot testimonial-section-dot--active'
                : 'testimonial-section-dot'
            }
            onClick={() => setCurrent(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
