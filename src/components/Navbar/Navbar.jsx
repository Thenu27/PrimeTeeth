import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import Logo from '/NavBar-Logo.svg'

const NavBar = () => {

  const location =useLocation();
  const navigate = useNavigate();


  const [NavbarColor,SetNavbarColor] = useState();
  const [NavbarLinkColor,SetNavbarLinkColor] = useState()

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${NavbarColor}`}>
      <div className="navbar-container">

      <div className="navbar-logo fake-logo">
          <img onClick={()=>navigate('/')} src={Logo} alt="Travel Jaya SL" className='logo'/>
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            
            
          </div>
        </div>
        
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
          <Link to='/'  onClick={() => setMobileMenuOpen(false)}
              className={`navbar-link ${location.pathname === '/' ? 'active ' : ''}${NavbarLinkColor}`}>Home</Link>
          </li>
          <li className="navbar-item">
          <Link to='/services'   onClick={() => setMobileMenuOpen(false)}
            className={`navbar-link ${location.pathname === '/services' ? 'active' : ''}${NavbarLinkColor}`}>Services</Link>
          </li>
          {/* <li className="navbar-item">
            <Link to='/services'className="navbar-link" >Services</Link>

          </li> */}
          <li className="navbar-item">
          <Link to='/about'   onClick={() => setMobileMenuOpen(false)}
            className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}${NavbarLinkColor}`} >About Us</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to='/gallery'   onClick={() => setMobileMenuOpen(false)}
            className={`navbar-link ${location.pathname === '/gallery' ? 'active' : ''}${NavbarLinkColor}`} >Gallery</Link>
          </li> */}
          <li className="navbar-item navbar-contact-btn">
          <button  onClick={()=>{navigate('/contact'),setMobileMenuOpen(false)}} className="navbar-btn">Contact Us</button>
          </li>
        </ul>
        
        <div className={`navbar-cta ${mobileMenuOpen ? 'active' : ''}`}>
          <button onClick={()=>{navigate('/contact'),setMobileMenuOpen(false)}} className="navbar-btn">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


