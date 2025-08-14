import './LandingPage.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ContactBar from '../../components/ContactBar/ContactBar'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import FAQ from '../../components/FAQ/FAQ';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';

const LandingPage=()=>{

  const containerRef = useRef(null);
  const locoRef = useRef(null);

    return(
        <div ref={containerRef} className='landing-page' data-scroll-container>
            <div className='landing-page-hero-section' data-scroll-section>
              <HeroSection/>
            </div>
            <div className='landing-page-contact-section' data-scroll-section>
              <ContactBar/>
            </div>
            <div className='landing-page-service-section' data-scroll-section>
                <ServiceSection/>
            </div>
<div data-scroll-section><AboutSection/></div>
<div data-scroll-section><FAQ/></div>
<div data-scroll-section><TestimonialSection/></div>        
        </div>
    )
}

export default LandingPage;