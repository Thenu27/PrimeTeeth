import './LandingPage.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ContactBar from '../../components/ContactBar/ContactBar'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import FAQ from '../../components/FAQ/FAQ';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';

const LandingPage=()=>{
    return(
        <div className='landing-page'>
            <div className='landing-page-hero-section'>
              <HeroSection/>
            </div>
            <div className='landing-page-contact-section'>
              <ContactBar/>
            </div>
            <div className='landing-page-service-section'>
                <ServiceSection/>
            </div>
            <AboutSection/>
            <FAQ/>
            <TestimonialSection/>          
        </div>
    )
}

export default LandingPage;