import './ContactBar.css';

const ContactBar=()=>{
    return(
        <div className='contact-bar'>

            <div className='contact-category'>
                <img src='/smartphone.svg'/>
                <p className='contact-category-title'>Contact</p>
                <p className='contact-category-info'>+94 77 123 5678</p>
            </div>
            <div className='divider'></div>
            <div className='contact-category'>
                <img src='/pin.svg'/>
                <p className='contact-category-title'>Address</p>
                <p className='contact-category-info'>Dental Clinic, Rajagiriya, Colombo</p>
            </div>
            <div className='divider'></div>

            <div className='contact-category'>
                <img src='/wall-clock.svg'/>
                <p className='contact-category-title'>Opening Hours</p>
                <p className='contact-category-info'>9.00 AM - 10.00 PM</p>
            </div>                        
        </div>
    )
}

export default ContactBar