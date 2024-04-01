import React from 'react'
import { Link } from 'react-router-dom'


const HeaderTopbar2 = (props) => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 col-12">
                        <div className="contact-info">
                            <ul className="clearfix">
                                <li><i className="ti-mobile"></i> +3245-354-6474</li>
                                <li><i className="ti-email"></i> juristice@example.com</li>
                                <li><i className="ti-location-pin"></i> 324 Modern Ave, Sacramento, MD 92347, Austria</li>
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

export default HeaderTopbar2;