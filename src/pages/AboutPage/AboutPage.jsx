import ServiceModelExp from '../../components/Threejs/ServiceModelExp/ServiceModelExp';
import StarModelExp from '../../components/Threejs/StarModelExp/StarModelExp';
import ToolsExp from '../../components/Threejs/ToolsExp/ToolsExp';
import './AboutPage.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import aboutPage from '../../data/aboutPage.json';
import SEO from '../../SEO/SEO';

const AboutPage=()=>{

    const navigate = useNavigate()

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const subtextRef = useRef(null);
    const ourStorytitleRef =useRef(null);
    const cardRef = useRef(null);
    const aboutStoryRef = useRef(null);
    const ourStoryimgRef =useRef(null);
    const docimgRef = useRef(null);
    const docinfoRef = useRef(null);
    
      useEffect(() => {
    const ctx = gsap.context(() => {


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start:   'top 75%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      // 1) Fade down header
      tl.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
      })
      .from(subtextRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
      },'-=0.6')
      // 2) Stagger cards in with fade-up
      .from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      }, '-=0.4')

    }, sectionRef);

    return () => ctx.revert();
  }, []);

 useEffect(() => {
    const ctx = gsap.context(() => {
        
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutStoryRef.current,
          start:   'top 65%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      // 1) Fade down header
      tl.from(ourStorytitleRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger:0.3
      })
      .from(ourStoryimgRef.current,{
        x:50,
        opacity:0,
        duration: 0.8,

      },'<+0.2')


    gsap.from(docinfoRef.current.children,{
          x: 50,
          opacity: 0,
          duration: 0.8,
          stagger:0.3,
                  scrollTrigger: {
              trigger: docinfoRef.current,
              start: 'top 70%',
              // toggleActions: 'play none none reverse',
          }
      })      

    gsap.from(docimgRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: docinfoRef.current,
            start: 'top 70%',
            // toggleActions: 'play none none reverse',
        },
    })



    }, aboutStoryRef)



    return () => ctx.revert();
  }, []);

  


    
    return(
      <>
      <SEO
  title="About Prime Teeth | Trusted Dental Clinic in [Location]"
  description="Learn about Prime Teeth’s 15+ years of dental excellence. Meet Dr. John Doe and discover our story, values, and commitment to gentle, modern dentistry."
/>
        <div ref={sectionRef} className='about-page'>
            <div className='page-header'>
                <h1 ref={headerRef} className='header-title'>About Us</h1>
            </div> 
            <div ref={subtextRef} className='about-page-sub-text-container'>
                <p className='about-page-sub-text'>Creating beautiful, healthy smiles for over 15 years with compassionate care and cutting-edge technology.</p>
            </div> 

            <div ref={cardRef} className='about-page-card-container'>

                <div className='about-page-card'>
                    <div className='about-star-model'>
                         <StarModelExp/>
                    </div>
                    <div className='about-page-card-info'>
                        <h2 className='about-page-card-title'>{aboutPage[0].title}</h2>
                        <p className='about-page-card-text'>{aboutPage[0].subtext}</p>
                    </div>
                </div>

                <div className='about-page-card'>
                    <div className='about-service-model'>
                        <ServiceModelExp/>
                    </div>
                    <div className='about-page-card-info'>
                        <h2 className='about-page-card-title'>{aboutPage[1].title}</h2>
                        <p className='about-page-card-text'>{aboutPage[1].subtext}</p>
                    </div>                    
                </div>

                <div className='about-page-card'>
                    <div className='about-tools'>
                    <ToolsExp/>
                    </div>
                    <div className='about-page-card-info'>
                        <h2 className='about-page-card-title'>{aboutPage[2].title}</h2>
                        <p className='about-page-card-text'>{aboutPage[2].subtext}</p>
                    </div>                    
                </div>       

            </div>

            <div  ref={aboutStoryRef} className='about-story-container'>
                <div className='about-story-inner-container'>
                    <div ref={ourStorytitleRef} className='about-story'>
                        <h2 className='about-story-title'>Our Story</h2>
                        <p className='about-story-text'>Since 2015, Prime Teeth has delivered compassionate, high‑quality dental care in a modern, family‑friendly setting. From routine check‑ups and cleanings to cosmetic treatments, orthodontics, implants and pediatric care,</p>
                        <p className='about-story-text'>We use the latest technology and a gentle approach to ensure every visit is smooth and stress‑free. Trusted for excellence, we look forward to helping you smile.</p>
                    </div>
                    <div  className='about-story-img-conatiner'>
                        <img ref={ourStoryimgRef} alt='Prime Teeth dental clinic interior' className='about-story-img' src='/AboutImg.png'/>
                    </div>

                </div>

                <div className='about-story-inner-container about-story-inner-container2'>

                    <div className='about-story-img-conatiner about-story-doc-img-container'>
                        <img ref={docimgRef} className='about-story-doc-img' src='/Doctor.svg'/>
                    </div>                    
                    <div ref={docinfoRef} className='about-story'>
                        <p className='about-story-text'>Hi, I’m Dr. John Doe — and I’m passionate about helping people smile with confidence. With over 10 years of experience in general and cosmetic dentistry, my goal has always been to provide gentle, high-quality care in a way that makes patients feel truly comfortable.</p>
                        <p className='about-story-text'>I earned my Bachelor of Dental Surgery (BDS) and went on to complete additional training in cosmetic and restorative dentistry. I believe in combining advanced techniques with a personalized approach, so every patient gets the care that’s right for them.</p>
                        <p className='about-story-text'>Whether you’re visiting for a routine check-up or a complete smile transformation, I’m here to listen, guide, and give you the best possible dental experience. Your smile is in good hands.</p>                  
                    </div>


                </div>     

            </div>

            <div className='about-page-btn-container'>
                <button onClick={()=>{navigate('/contact')}} className='about-page-btn'>Contact Us</button>
            </div>

        </div>
              </>

    )
}

export default AboutPage