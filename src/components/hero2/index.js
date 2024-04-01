import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-2.jpg'
import hero2 from '../../images/slider/slide-1.jpg'
import icon from '../../images/number-1-tag.png'


const Hero2 = () => {
    return (

        <section className="hero-slider hero-style-2">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container">
                            <div className="number-1-tag">
                                <img src={icon} alt="" />
                            </div>
                            <div data-swiper-parallax="300" className="slide-text">
                                <p>Nationally Established. Internationally Recognized</p>
                            </div>
                            <div data-swiper-parallax="400" className="slide-title">
                                <h2>A Business Approach to Legal Service.</h2>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link to="/contact" className="theme-btn">Free Consultation</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div className="number-1-tag">
                                <img src={icon} alt="" />
                            </div>
                            <div data-swiper-parallax="300" className="slide-text">
                                <p>Nationally Established. Internationally Recognized</p>
                            </div>
                            <div data-swiper-parallax="400" className="slide-title">
                                <h2>A Business Approach to Legal Service.</h2>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link to="/contact" className="theme-btn">Free Consultation</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>

    )
}

export default Hero2;