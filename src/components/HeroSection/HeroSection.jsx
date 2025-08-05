import './HeroSection.css'
import Navbar from '../Navbar/Navbar'
const HeroSection=()=>{



    return(
        <>
            <div className='hero-section'>
                <div className='hero-logo-container'>
                    <img src={'/heroLogo.svg'} className='hero-logo'/>
                    <p className='hero-text'>Advanced, compassionate dental care for the whole family combining the latest in pain-free technology with a warm, patient-centered approach.</p>
                    <div className='hero-btn-container'>
                        <button className='hero-btn'>Contact Us</button>
                        <button className='hero-btn hero-btn2'>About Us</button>
                    </div>

                </div>
            </div>
            <div className='hero-divider'></div>
        </>
    )
}

export default HeroSection