import React from 'react';
import './AboutSection.css';
import AboutSectionExp from '../Threejs/AboutSectionExp/AboutSectionExp';
const features = [
  'Clean and Comfortable Environment',
  'Modern Technology and Equipment',
  'Personalized Patient Care',
  'Experienced and Friendly Staff',
];

const AboutSection =()=>{
    return(
        <div className='about-section'>
            <div className='about-section-left'>
                <img className='about-section-left-img' src='/DocPic.png'/>
                <div className='doc-name-container'>
                    <h1 className='doc-name'>Dr. <span className='doc-highlight'>John Doe</span></h1>
                    <p className='doc-name-text'>DDS, MS – Specialist in Orthodontics</p>
                    <button className='doc-name-btn'>Contact</button>
                </div>
            </div>

            <div className='about-section-left about-section-right'>
                <div className='Quoat-container'>
                    <img src='/Quoat.svg'/>
                </div>
                <div className='quoat-text-container'>
                    <h1 className='quoat-text'>
                        A <span className='about-section-highlight'>Smile</span> is the universal welcome, and as a <span className='about-section-highlight'>Dentist</span>, I help people wear it with <span className='about-section-highlight'>Confidence</span>.
                    </h1>
                </div>
                <div className='about-section-list-and-model'>
                    <div className='about-section-list-container'>
                        <div className='about-section-list'>
                            <img src='/blueTick.svg'/><p className='list'>Clean and Comfortable Environment</p>
                        </div>

                        <div className='about-section-list'>
                            <img src='/blueTick.svg'/><p className='list'>Modern Technology and Equipment</p>
                        </div>  

                        <div className='about-section-list'>
                            <img src='/blueTick.svg'/><p className='list'>Personalized Patient Care</p>
                        </div> 

                        <div className='about-section-list'>
                            <img src='/blueTick.svg'/><p className='list'>Experienced and Friendly Staff</p>
                        </div>                       


                    </div>  


                    <div className='about-experience'>
                        <AboutSectionExp/>
                    </div>                                      

                </div>

            </div>
        </div>
    )
}

export default AboutSection;
