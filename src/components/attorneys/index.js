import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import Attorneys from '../../api/attorneys'


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const Attorney = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="team-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6 col-md-8">
                        <div className="section-title-s3">
                            <div className="icon">
                                <i className="fi flaticon-suitcase"></i>
                            </div>
                            <span>Qualified Attorneys</span>
                            <h2>Meet Our Experts</h2>
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="team-grids team-slider">
                            <Slider {...settings}>
                                {Attorneys.map((attorney, aitem) => (
                                    <div className="grid" key={aitem}>
                                        <div className="img-holder">
                                            <img src={attorney.AtImg} alt="" />
                                        </div>
                                        <div className="details">
                                            <div className="social">
                                                <ul>
                                                    <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-linkedin"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                                                </ul>
                                            </div>
                                            <h3><Link onClick={ClickHandler} to={`/attorneys-single/${attorney.slug}`}>{attorney.name}</Link></h3>
                                            <p>{attorney.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Attorney;
