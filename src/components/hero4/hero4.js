import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-3.jpg'
import hero2 from '../../images/slider/slide-4.jpg'
import hero3 from '../../images/slider/slide-5.jpg'


const Hero4 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-style-4">
            <Swiper
                // install Swiper modules
                modules={[Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>The lawyer you choose will make a difference.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Bibendum commodo nulla id amet magna sit malesada. Et sceleque scelerisque
                                        mauris malesuada dui.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link to="/about" className="theme-btn-s2">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>The lawyer you choose will make a difference.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Bibendum commodo nulla id amet magna sit malesada. Et sceleque scelerisque
                                        mauris malesuada dui.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link to="/about" className="theme-btn-s2">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>The lawyer you choose will make a difference.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Bibendum commodo nulla id amet magna sit malesada. Et sceleque scelerisque
                                        mauris malesuada dui.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link to="/about" className="theme-btn-s2">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero4;