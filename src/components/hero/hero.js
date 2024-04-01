import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'
import hero4 from '../../images/slider/slide-4.jpg'
import VideoModal from "../ModalVideo";


const Hero = () => {
    return (

        <section className="hero-slider hero-style-1">
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
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Our Independence Makes the Difference</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Nationally Established. Internationally Recognized</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link to="/contact" className="theme-btn">Free Consultation</Link>
                            </div>
                            <div className="video-btns">
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Our Independence Makes the Difference</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Nationally Established. Internationally Recognized</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link to="/contact" className="theme-btn">Free Consultation</Link>
                            </div>
                            <div className="video-btns">
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Our Independence Makes the Difference</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Nationally Established. Internationally Recognized</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link to="/contact" className="theme-btn">Free Consultation</Link>
                            </div>
                            <div className="video-btns">
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero4})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Our Independence Makes the Difference</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Nationally Established. Internationally Recognized</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link to="/contact" className="theme-btn">Free Consultation</Link>
                            </div>
                            <div className="video-btns">
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero;