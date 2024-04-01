import React from 'react'
import { Link } from 'react-router-dom'
import Cases from '../../api/case';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
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


const CaseStudies = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className={`case-studies-section section-padding ${props.cClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6 col-md-8">
                        <div className="section-title-s3">
                            <div className="icon">
                                <i className="fi flaticon-suitcase"></i>
                            </div>
                            <span>Here Our Best Work</span>
                            <h2>Recent Case Studies</h2>
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-area">
                <div className="case-studies-grids case-studies-slider">
                    <Slider {...settings}>
                        {Cases.slice(0, 6).map((cases, i) => (
                            <div className="grid" key={i}>
                                <div className="img-holder">
                                    <img src={cases.cImg} alt="" />
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <p className="cat">Law service</p>
                                        <h3><Link onClick={ClickHandler} to={`/case-single/${cases.slug}`}>{cases.cTitle}</Link></h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>
    );
}

export default CaseStudies;