import React from 'react'
import {Link} from 'react-router-dom'

const Features = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="feature-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="info-col">
                            <h4>Some few stpes that you need to get the best services from juristic</h4>
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Contact with us</Link>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="feature-grid">
                            <i className="fi flaticon-standard"></i>
                            <h3>Skilled Attorneys</h3>
                            <p>Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull</p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="feature-grid">
                            <i className="fi flaticon-balance"></i>
                            <h3>Legal Defence</h3>
                            <p>Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull</p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="feature-grid">
                            <i className="fi flaticon-mace"></i>
                            <h3>99% case win</h3>
                            <p>Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;