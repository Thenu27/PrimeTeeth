import './GalleryPage.css';

const GalleryPage=()=>{
    return(
        <div className='gallery-page'>
            <div className='page-header'>
                <h1 className='header-title'>Gallery</h1>
            </div> 
            {/* <div className='gallery-page-card'>
                <div className='gallery-img-container'>
                  <div className='gallery-img-container-left'>
                        <img src='https://i.postimg.cc/vZLxVhhJ/Rectangle-53.png'/>
                        <img className='gallery-img-left-1' src='https://i.postimg.cc/x1S6v0Dc/Rectangle-58.png'/>     
                  </div>
                  <div className='gallery-img-container-right'>
                        <div className='gallery-img-container-right1'>
                            <img className='gallery-img-right1' src='https://i.postimg.cc/wv8wxgqX/Rectangle-54.png'/>
                        </div>
                        <div className='gallery-img-container-right2'>
                            <div className='gallery-img-container-right2-1'>
                                <img src='https://i.postimg.cc/yY8CCXrV/Rectangle-55.png'/>
                                <img src='https://i.postimg.cc/6pRXM6mR/Rectangle-57.png'/>
                            </div>
                            <div className='gallery-img-container-right2-2'>
                                <img className='gallery-img-right1' src='https://i.postimg.cc/SNdQWxHK/Rectangle-59.png'/>
                            </div>
                        </div>                        
                  </div>                  
                </div>
            </div> */}

            <div className='gallery-card-container'>
                <div className='gallery-img-container'>
                    <img className='gallery-img' src='https://i.postimg.cc/yY8CCXrV/Rectangle-55.png'/>
                </div>

                <div className='gallery-img-container1'>
                    <img className='gallery-img' src='https://i.postimg.cc/yY8CCXrV/Rectangle-55.png'/>
                </div>                

                <div className='gallery-img-container2'>
                    <img className='gallery-img'  src='https://i.postimg.cc/yY8CCXrV/Rectangle-55.png'/>
                </div> 

            </div>

        </div>

    )
}

export default GalleryPage;