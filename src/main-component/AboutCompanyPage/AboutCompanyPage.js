import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import TheStory from '../../components/TheStory/TheStory';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';

const AboutCompanyPage = () => {
    return (
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About/>
            <TheStory/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutCompanyPage;
