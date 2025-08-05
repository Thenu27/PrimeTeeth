import './ServicesPage.css';
import serviceData from '../../data/servicePage.json'

const ServicesPage =()=>{

    return(
        <div className='services-page'>
            <div className='page-header'>
                <h1 className='header-title'>Our Services</h1>
            </div>

            <div className='services-container'>
                {serviceData.map(service=>{
                    return(
                        <div className={`services-card ${parseInt(service.id) % 2 === 0 ? 'services-card-purple service-card-reverse' : ''}`}>
                                <div className='serivces-content'>
                                    <h1 className={`service-title ${parseInt(service.id) % 2 ===0 ? 'service-title-white' :''}`}>{service.title}<span className={`services-section-highlight ${parseInt(service.id) % 2 ===0 ? 'service-section-highlight2' :''}`}> {service.title2}</span></h1> 
                                    <p className={`service-description ${parseInt(service.id) % 2 ===0 ? 'service-title-white' :''}`}>{service.details}</p>

                                    <div className='check-list-container'>
                                        <div className='check-list'>
                                            <img className='ticks' src='/greenTick.svg'/>
                                            <p className={`list ${parseInt(service.id) % 2 ===0 ? 'list-white' :''}`}>{service.point1}</p>
                                        </div>

                                        <div className='check-list'>
                                            <img className='ticks' src='/greenTick.svg'/>
                                            <p className={`list ${parseInt(service.id) % 2 ===0 ? 'list-white' :''}`}>{service.point2}</p>
                                        </div>

                                        <div className='check-list'>
                                            <img className='ticks' src='/greenTick.svg'/>
                                            <p className={`list ${parseInt(service.id) % 2 ===0 ? 'list-white' :''}`}>{service.point3}</p>
                                        </div>   
                                    </div>     
                                </div>

                            <div className='services-image-container'>
                                <img src={service.img} className='service-image'/>
                            </div>            
                    
                        </div>
                    )
                })}

            </div>

            <div className='about-page-btn-container'>
                <button  className='about-page-btn'>Contact Us</button>
            </div> 

        </div>
    )
}

export default ServicesPage