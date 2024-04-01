import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Hero2 from '../../components/hero2';
import About2 from '../../components/about2/about2';
import Features from '../../components/Features/Features';
import PracticeS2 from '../../components/PracticeS2/PracticeS2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import CaseStudies2 from '../../components/CaseStudies2/CaseStudies2';
import FunFact from '../../components/FunFact';
import CtaSection from '../../components/CtaSection/CtaSection';
import Attorney from '../../components/attorneys';
import Consultinencey from '../../components/Consultinencey/Consultinencey';
import BlogSection from '../../components/BlogSection/BlogSection';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar2 hclass={'header-style-2'} topbarNone={'topbar-none'} />
            <Hero2 />
            <About2 />
            <PracticeS2 />
            <Features />
            <CaseStudies2 />
            <FunFact />
            <Testimonial2 />
            <CtaSection ctaClass={'cta-section-s2'}/>
            <Attorney />
            <Consultinencey />
            <BlogSection vClass={'d-none'} />
            <PartnerSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;