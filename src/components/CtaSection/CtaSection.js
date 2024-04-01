import React from 'react'
import logo from '../../images/cta-logo.png'
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const CtaSection = (props) => {
    return (

        <section className={`cta-section ${props.ctaClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="cta-conetnt">
                            <div className="cta-logo">
                                <img src={logo} alt="" />
                            </div>
                            <h5>Call us 24/7</h5>
                            <h2>545-75797-897</h2>
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s3">Make An Appointment</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;