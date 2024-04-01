import React from "react";
import Slider from "react-slick";
import aImg from '../../images/awards/img-1.jpg'


const AwardSection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (

        <section className="award-section section-padding">
            <div className="container">
                <div className="row align-item-center">
                    <div className="col col-lg-7 col-12">
                        <div className="section-title-s4">
                            <div className="icon">
                                <i className="fi flaticon-balance"></i>
                            </div>
                            <span>Awards</span>
                            <h2>Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with</h2>
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</p>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-12">
                        <div className="award-slider">
                            <Slider {...settings}>
                                <img src={aImg} alt="" />
                                <img src={aImg} alt="" />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AwardSection;