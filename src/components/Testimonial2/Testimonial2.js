import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonials/img-1.jpg'
import ts2 from '../../images/testimonials/img-2.jpg'
import ts3 from '../../images/testimonials/img-1.jpg'


const Testimonial2 = (props) => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
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
                    slidesToShow: 1,
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

    const testimonial = [
        {
            tsImg: ts1,
            Des: "Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            Title: 'Michel Jone',
            Sub: "Creative Designer",
        },
        {
            tsImg: ts2,
            Des: "Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            Title: 'Aliza Anney',
            Sub: "Model Belarus",
        },
        {
            tsImg: ts3,
            Des: "Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            Title: 'David Miller',
            Sub: "Designer UK",
        },
        {
            tsImg: ts2,
            Des: "Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            Title: 'Aliza Anney',
            Sub: "Model Belarus",
        },
    ]
    return (

        <section className={`testimonials-section-s2 section-padding ${props.tClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="testimonials-grids testimonials-slider-s2">
                            <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="grid" key={tsm}>
                                        <i className="fi flaticon-left-quote"></i>
                                        <p>{tesmnl.Des}</p>
                                        <div className="client-info">
                                            <div className="img-holder">
                                                <img src={tesmnl.tsImg} alt="" />
                                            </div>
                                            <h3>{tesmnl.Title}</h3>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;