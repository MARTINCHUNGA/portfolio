import React from 'react'
import home1 from '../images/home1.png'
const AboutSection = () => {

    return (
        <div>
          <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>We Work to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>dreams</span>  come </h2>
                </div>
                <div className="hide">
                    <h2>true.</h2>
                </div>
                <p>Contact us for world class products and look classy to the world</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with degree"/>
            </div>
        </div>
        </div>
    )
}

export default AboutSection