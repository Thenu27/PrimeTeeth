import './contactPage.css'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTripadvisor } from 'react-icons/fa';


const ContactPage = () => {
    return(
        <div className='contact-page'>
            <div className='page-header'>
                <h1 className='header-title'>Contact Us</h1>
            </div>  

            <div className='contact-container'>
                <div className='contact-left'>
                    <h1 className='contact-title'>Contact information</h1>

                    <div className='contact-type-container'>
                        <div className='contact-details'>
                            <h2 className='contact-type'>Address</h2>
                            <p className='contact-info'>Prime Teeth, Buthgamuwa Rd, Sri Jayawardenepura Kotte 10100</p>
                        </div>
                        <img src='/locationImg.svg'/>
                    </div>

                    <div className='contact-type-container'>
                        <div className='contact-details'>
                            <h2 className='contact-type'>Phone</h2>
                            <p className='contact-info'>+94 77 749 0691</p>
                        </div>
                        <img src='/locationImg.svg'/>
                    </div>

                    <div className='contact-type-container'>
                        <div className='contact-details'>
                            <h2 className='contact-type'>Email</h2>
                            <p className='contact-info'>primeteethrajagiriya@gmail.com</p>
                        </div>
                        <img src='/locationImg.svg'/>
                    </div>

                    <div className='contact-type-container'>
                        <div className='contact-details'>
                            <h2 className='contact-type'>Open Hours</h2>
                            <p className='contact-info'>Monday to Friday : 5.00 pm to 9.00pm</p>
                            <p className='contact-info'>Saturday-Sunday : 5.00 pm to 9.00pm</p>

                        </div>
                        <img src='/locationImg.svg'/>
                    </div>
                </div>                    
                <div className='divider'></div>
                <div className='contact-right'>
                    <div className='contact-iframe-container'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d253469.0117600326!2d79.87093530130738!3d6.95573271867472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae25903f2e493ff%3A0x23ef36e2c62a7b86!2sButhgamuwa%20Rd%2C%20Sri%20Jayawardenepura%20Kotte%2010100!3m2!1d6.9097301!2d79.90063719999999!5e0!3m2!1sen!2slk!4v1753637043018!5m2!1sen!2slk"  allowFullScreen="" loading="lazy" />          
                    </div>
                    <h1 className='visit-us'>Visit Us</h1>

                    <div className='contact-social-media-container'>
                        <button className='contact-social-media-btn'>
                            <FaFacebookF className="location-icon contact-icon" />
                        </button>
                         {/* <button className='contact-social-media-btn'>
                            <FaInstagram className="location-icon contact-icon" />
                        </button>
                        <button className='contact-social-media-btn'>
                            <img src='/facebookContact.svg' alt='Facebook'/>
                        </button>                         */}
                    </div>

                    <div className='contact-page-btn-container'>
                        <button className='contact-page-btn'>About Us</button>
                        <button className='contact-page-btn'>Services</button>
                    </div>                    
                </div>   


            </div>  
        </div>
    )
}

export default ContactPage