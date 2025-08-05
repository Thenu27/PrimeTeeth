import ServiceModelExp from '../../components/Threejs/ServiceModelExp/ServiceModelExp';
import StarModelExp from '../../components/Threejs/StarModelExp/StarModelExp';
import ToolsExp from '../../components/Threejs/ToolsExp/ToolsExp';
import './AboutPage.css';

const AboutPage=()=>{
    return(
        <div className='about-page'>
            <div className='page-header'>
                <h1 className='header-title'>About Us</h1>
            </div> 
            <div className='about-page-sub-text-container'>
                <p className='about-page-sub-text'>Creating beautiful, healthy smiles for over 15 years with compassionate care and cutting-edge technology.</p>
            </div> 

            <div className='about-page-card-container'>

                <div className='about-page-card'>
                    <div className='about-star-model'>
                         <StarModelExp/>
                    </div>
                    <div className='about-page-card-info'>
                        <h1 className='about-page-card-title'>15+</h1>
                        <p className='about-page-card-text'>Years Experience</p>
                    </div>
                </div>

                <div className='about-page-card'>
                    <div className='about-service-model'>
                        <ServiceModelExp/>
                    </div>
                    <div className='about-page-card-info'>
                        <h1 className='about-page-card-title'>100+</h1>
                        <p className='about-page-card-text'>Happy Patients</p>
                    </div>                    
                </div>

                <div className='about-page-card'>
                    <div className='about-tools'>
                    <ToolsExp/>
                    </div>
                    <div className='about-page-card-info'>
                        <h1 className='about-page-card-title'>6+</h1>
                        <p className='about-page-card-text'>Services provided</p>
                    </div>                    
                </div>       

            </div>

            <div className='about-story-container'>
                <div className='about-story-inner-container'>
                    <div className='about-story'>
                        <h1 className='about-story-title'>Our Story</h1>
                        <p className='about-story-text'>Since 2015, Prime Teeth has delivered compassionate, high‑quality dental care in a modern, family‑friendly setting. From routine check‑ups and cleanings to cosmetic treatments, orthodontics, implants and pediatric care,</p>
                        <p className='about-story-text'>We use the latest technology and a gentle approach to ensure every visit is smooth and stress‑free. Trusted for excellence, we look forward to helping you smile.</p>
                    </div>
                    <div className='about-story-img-conatiner'>
                        <img className='about-story-img' src='/AboutImg.png'/>
                    </div>

                </div>

                <div className='about-story-inner-container about-story-inner-container2'>

                    <div className='about-story-img-conatiner about-story-doc-img-container'>
                        <img className='about-story-doc-img' src='/DocPic.svg'/>
                    </div>                    
                    <div className='about-story'>
                        <p className='about-story-text'>Hi, I’m Dr. John Doe — and I’m passionate about helping people smile with confidence. With over 10 years of experience in general and cosmetic dentistry, my goal has always been to provide gentle, high-quality care in a way that makes patients feel truly comfortable.</p>
                        <p className='about-story-text'>I earned my Bachelor of Dental Surgery (BDS) and went on to complete additional training in cosmetic and restorative dentistry. I believe in combining advanced techniques with a personalized approach, so every patient gets the care that’s right for them.</p>
                        <p className='about-story-text'>Whether you’re visiting for a routine check-up or a complete smile transformation, I’m here to listen, guide, and give you the best possible dental experience. Your smile is in good hands.</p>
                    
                    </div>


                </div>     

            </div>

            <div className='about-page-btn-container'>
                <button  className='about-page-btn'>Contact Us</button>
            </div>

        </div>
    )
}

export default AboutPage