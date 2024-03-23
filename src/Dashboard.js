import React from 'react'
import '../src/style.css'
import img1 from '../src/Assets/m2.avif'
import img2 from '../src/Assets/Mercy.jpeg'
import img3 from '../src/Assets/sachu.jpg'
// import img1 from '../src/Assets/m2.avif'

function Dashboard() {

    const CardWithFixedImage = () => {

        // Style object for the card
        const cardStyle = {
            width: '500px',
            height: '500px',
            overflow: 'hidden',
            position: 'relative' // Required for absolute positioning of image
        };

        // Style object for the image
        const imageStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        };

        return (
            <div class="carousel-inner" 
            style={cardStyle}
            >
                <img src={img3} alt="Card" style={imageStyle} />
            </div>
        );
    };

    return (

        <>
            <div className='bgimg vh-100'>
                <div className='container'>
                    <div className='card'>
                        <div className='card-header text-center'>
                                <i>Hi Sachin...</i>
                        </div>
                        <div className='card-body'>
                                {CardWithFixedImage()}
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className='container '> */}

            {/* <div className='card'>
            <div className='card-body text-center'> 

             Hi Sachin.....
         
              </div> */}

            {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default Dashboard