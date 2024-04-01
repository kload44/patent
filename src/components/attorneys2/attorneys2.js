import React from 'react'
import { Link } from 'react-router-dom'
import Attorneys from '../../api/attorneys'


const Attorney2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`wpo-team-section section-padding ${props.tmClass}`}>
            <div className="container">
                <div className="wpo-team-wrap">
                    <div className="wpo-section-title-s2">
                        <span>Qualified Attorneys</span>
                        <h2>Meet Our Experts</h2>
                    </div>
                    <div className="row">
                        {Attorneys.slice(0, 4).map((attorney, aitem) => (
                            <div className="col-lg-3 col-sm-6 col-12" key={aitem}>
                                <div className="wpo-team-item" >
                                    <div className="wpo-team-img">
                                        <img src={attorney.AtImg} alt="" />
                                    </div>
                                    <div className="wpo-team-text">
                                        <h2><Link onClick={ClickHandler} to={`/attorneys-single/${attorney.slug}`}>{attorney.name}</Link></h2>
                                        <span>{attorney.title}</span>
                                        <div className="social">
                                            <ul>
                                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Attorney2;
