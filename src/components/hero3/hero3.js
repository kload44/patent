import React from "react";
import { Link } from 'react-router-dom'


const Hero3 = () => {
    return (
        <section className="hero-slider static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="slide-title">
                            <h2>Our Independence Makes the Difference</h2>
                        </div>
                        <div className="slide-text">
                            <p>Nationally Established. Internationally Recognized</p>
                        </div>
                        <div className="clearfix"></div>
                        <div className="slide-btns">
                            <Link to="/contact" className="theme-btn">Free Consultation</Link> 
                        </div>
                        <div className="lawyer"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;