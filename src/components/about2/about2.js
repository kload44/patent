import React from 'react'
import abimg from '../../images/about-2.jpg'
import abimg2 from '../../images/about-3.jpg'
import { Link } from 'react-router-dom';


const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className="about-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-12">
                        <div className="left-col">
                            <div className="section-title-s5">
                                <span>About juristic</span>
                                <h2>Do You Need the Top Lawyers From us?</h2>
                                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</p>
                                <Link onClick={ClickHandler} to="/about" className="theme-btn">Explore More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-8 col-12">
                        <div className="right-col clearfix">
                            <div>
                                <img src={abimg} alt="" />
                            </div>
                            <div>
                                <img src={abimg2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;