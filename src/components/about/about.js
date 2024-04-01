import React from 'react'
import abimg from '../../images/about.jpg'
import signature from '../../images/signature.png'
import { Link } from 'react-router-dom';

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-12">
                        <div className="left-col">
                            <div className="section-title">
                                <div className="icon">
                                    <i className="fi flaticon-home-3"></i>
                                </div>
                                <span>About juristic</span>
                                <h2>We are the most populer law firm with various law services!</h2>
                                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                                <Link onClick={ClickHandler} to="/about" className="more-about">Read More About us <i className="fi flaticon-next-1"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <div className="mid-col">
                            <img src={abimg} alt="" />
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <div className="right-col">
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero</p>
                            <div className="quoter">
                                <h4>Michel Jhon</h4>
                                <span>- CEO of the company</span>
                            </div>
                            <div className="signature">
                                <img src={signature} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;