import React from 'react'
import { Link } from 'react-router-dom'


const HeaderTopbar = (props) => {
    return (
        <div className="topbar">
            <div className={props.container}>
                <div className="row">
                    <div className="col col-lg-10 col-12">
                        <div className="contact-info">
                            <ul className="clearfix">
                                <li><span>Call Us:</span> 548978478</li>
                                <li><span>Email us:</span> demo@example.com</li>
                                <li><span>Our address:</span> 45 Dreem street Austria</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-12">
                        <div className="social">
                            <ul className="clearfix">
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                                <li><Link to="/"><i className="ti-skype"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;