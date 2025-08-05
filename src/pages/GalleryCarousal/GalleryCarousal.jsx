import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import './GalleryCarousal.css';

const GalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

        useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  // track if we've done the initial setup
  const isInitial = useRef(true);

  // this function just animates the three visible slides into place
  const animateSlides = () => {
    if (activeIndex === 0) {
      // 1 center, 2 right, 3 left
      gsap.to(imageRef1.current, { duration: 0.5, x: 0,   scale: 1.1, rotationY: 0,   opacity: 1,   zIndex: 3 });
      gsap.to(imageRef2.current, { duration: 0.5, x: 250, scale: 0.9, rotationY:-30, opacity: 0.6, zIndex: 2 });
      gsap.to(imageRef3.current, { duration: 0.5, x:-250, scale: 0.9, rotationY: 30,  opacity: 0.6, zIndex: 2 });
    } else if (activeIndex === 1) {
      // 2 center, 3 right, 1 left
      gsap.to(imageRef2.current, { duration: 0.5, x: 0,   scale: 1.1, rotationY: 0,   opacity: 1,   zIndex: 3 });
      gsap.to(imageRef3.current, { duration: 0.5, x: 250, scale: 0.9, rotationY:-30, opacity: 0.6, zIndex: 2 });
      gsap.to(imageRef1.current, { duration: 0.5, x:-250, scale: 0.9, rotationY: 30,  opacity: 0.6, zIndex: 2 });
    } else {
      // 3 center, 1 right, 2 left
      gsap.to(imageRef3.current, { duration: 0.5, x: 0,   scale: 1.1, rotationY: 0,   opacity: 1,   zIndex: 3 });
      gsap.to(imageRef1.current, { duration: 0.5, x: 250, scale: 0.9, rotationY:-30, opacity: 0.6, zIndex: 2 });
      gsap.to(imageRef2.current, { duration: 0.5, x:-250, scale: 0.9, rotationY: 30,  opacity: 0.6, zIndex: 2 });
    }
  };

  useLayoutEffect(() => {
    if (isInitial.current) {
      // INITIAL SETUP: snap all slides into a hidden baseline immediately
      gsap.set([imageRef1.current, imageRef2.current, imageRef3.current], {
        x: 0,
        scale: 0.8,
        rotationY: 0,
        opacity: 0,
        zIndex: 1,
      });
      // then position the very first activeIndex = 0 state
      animateSlides();
      isInitial.current = false;
    } else {
      // on subsequent index changes, just animate from wherever they are
      animateSlides();
    }
  }, [activeIndex]);

  const prevSlide = () => setActiveIndex(i => (i - 1 + 3) % 3);
  const nextSlide = () => setActiveIndex(i => (i + 1) % 3);

  return (
    <div className="gallery-carousal">
      <div className='page-header'>
        <h1 className='header-title'>Gallery</h1>
      </div>
            <div className='about-page-sub-text-container'>
                <p className='about-page-sub-text'>Creating beautiful, healthy smiles for over 15 years with compassionate care and cutting-edge technology.</p>
            </div> 
      <div className="carousel-container">
        <div className="slide" ref={imageRef1}>
          <img src="https://i.postimg.cc/SNdQWxHK/Rectangle-59.png" alt="Gallery image 1" />
        </div>
        <div className="slide" ref={imageRef2}>
          <img src="https://i.postimg.cc/6pRXM6mR/Rectangle-57.png" alt="Gallery image 2" />
        </div>
        <div className="slide" ref={imageRef3}>
          <img src="https://i.postimg.cc/yY8CCXrV/Rectangle-55.png" alt="Gallery image 3" />
        </div>

        <div className="buttons">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
