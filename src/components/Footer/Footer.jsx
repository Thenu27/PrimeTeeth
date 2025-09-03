import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import footer from '../../data/footer.json'


const Footer = () => {       
  const navigate = useNavigate()
  return(
  <footer className="footer">
      <div className='footer-container'>

      <div className="footer-logo-text-container">
        <div className="footer-logo-container">
        <img className="footer-logo-img" src="/logo-white.svg" alt="Prime Teeth Dental Clinic Logo" />
        </div>

        <div className="footer-text-container">
          <p className="footer-text">
            At Prime Teeth, we’re dedicated to providing gentle,
            high-quality dental care for the whole family. With a friendly team,
            modern technology, and a focus on patient comfort, we make every
            visit a positive experience, because your smile deserves the best.
          </p>
        </div>

        <div className="footer-media-container">
          <div onClick={()=>window.open('https://www.facebook.com/primeteethlk','_blank')} className="footer-social-btn">
            <img  alt="Prime Teeth on Facebook" className="social-btn" src="/facebookContact.svg" />
          </div>
          {/* <div className="footer-social-btn">
            <img className="social-btn" src="/public/facebookContact.svg" />
          </div>
          <div className="footer-social-btn">
            <img className="social-btn" src="/public/facebookContact.svg" />
          </div> */}
        </div>
      </div>

      <div className="footer-link-container">
        <div className="footer-link-group">
          <h1 className="link-title">Contact</h1>
          <div className="underline"></div>

          <div className="link-group">
            <FaMapMarkerAlt className="location-icon" />
            <p className="link-info">{footer[0].address}</p>
          </div>

          <div className="link-group">
            <FaPhoneAlt className="location-icon" />
            <a href={`tel:${footer[0].phone}`} className="link-info">{footer[0].phone}</a>
          </div>

          <div className="link-group link-group2">
            <FaEnvelope className="location-icon" />
            <p className="link-info">{footer[0].email}</p>
          </div>
        </div>

        <div className="footer-link-group">
          <h1 className="link-title">Quick Links</h1>
          <div className="underline"></div>

          <div className="link-group">
            <a onClick={()=>navigate('/')} className="link-info">Home</a>
          </div>

          <div className="link-group">
            <a onClick={()=>navigate('/services')} className="link-info">Services</a>

          </div>

          <div className="link-group">
            <a onClick={()=>navigate('/About')} className="link-info">About</a>
          </div>

          {/* <div className="link-group">
            <a onClick={()=>navigate('/gallery')} className="link-info">Gallery</a>
          </div> */}


        </div>

      </div>
      </div>

      <div className='footer-bottom'>
        <div className='footer-divider'></div>
          <p className="footer-copyright">
          © 2025 Prime Teeth. All Rights Reserved. Powered by 
          <a href="https://www.technadiligens.com" target="_blank" rel="noopener noreferrer" className="techna-link">
              TechnaDiligens
          </a>.
          </p>
      </div>


    </footer>
  )
 
};

export default Footer;
