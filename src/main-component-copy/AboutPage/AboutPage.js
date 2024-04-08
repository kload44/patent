import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import PracticeS2 from '../../components/PracticeS2/PracticeS2';
import CtaSection from '../../components/CtaSection/CtaSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import Attorney from '../../components/attorneys';
import Footer from '../../components/footer/Footer';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About/>
            <PracticeS2/>
            <Testimonial tClass={'testimonials-pg-section'}/>
            <CtaSection ctaClass={'about-pg-cta-section'}/>
            <Attorney />
            <BlogSection bClass={'pt-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
