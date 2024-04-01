import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/footer-logo.png'
import Practices from '../../api/Practices';



const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="site-footer">
            <div className="social-newsletter-area">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="social-newsletter-content clearfix">
                                <div className="social-area">
                                    <ul className="clearfix">
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-pinterest"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="logo-area">
                                    <img src={Logo} alt="" />
                                </div>
                                <div className="newsletter-area">
                                    <div className="inner">
                                        <h3>Newsletter</h3>
                                        <form onSubmit={SubmitHandler}>
                                            <div className="input-1">
                                                <input type="email" className="form-control" placeholder="Email Address *" required="" />
                                            </div>
                                            <div className="submit clearfix">
                                                <button type="submit"><i className="fi flaticon-paper-plane"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="widget-title">
                                    <h3>About us</h3>
                                </div>
                                <p>Showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget contact-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Our Address</h3>
                                </div>
                                <ul>
                                    <li>45/15 New alsala Avenew Booston town, Austria</li>
                                    <li><span>Phone:</span> 84667441</li>
                                    <li><span>Email:</span> demo@example.com</li>
                                    <li><span>Office Time:</span> 10AM- 5PM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Usefull Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/services">Our services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team">Meet team</Link></li>
                                </ul>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/contact">Provacu Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials">Testimonials</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">News</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget line-widget-2">
                                <div className="widget-title">
                                    <h3>Practice Area</h3>
                                </div>
                                <ul>
                                    {Practices.slice(0, 4).map((practice, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <div className="col col-xs-12">
                            <p className="copyright">Copyright &copy; 2023 Juristic. All rights reserved.</p>
                            <div className="extra-link">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/contact">Privace & Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Terms</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;