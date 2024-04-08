import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import Hero3 from '../../components/hero3/hero3';
import About from '../../components/about/about';
import AwardSection from '../../components/AwardSection/AwardSection';
import PracticeS2 from '../../components/PracticeS2/PracticeS2';
import FunFact from '../../components/FunFact';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import CaseStudies2 from '../../components/CaseStudies2/CaseStudies2';
import CtaSection2 from '../../components/CtaSection2/CtaSection2';
import Consultinencey from '../../components/Consultinencey/Consultinencey';
import BlogSection from '../../components/BlogSection/BlogSection';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar3/>
            <Hero3 />
            <About />
            <PracticeS2 />
            <AwardSection />
            <CaseStudies2 />
            <FunFact fClass={'fun-fact-section-s2'}/>
            <Testimonial2 tClass={'testimonials-section-s3'}/>
            <CtaSection2 />
            <Consultinencey contactClass={'contact-section-s3'}/>
            <BlogSection vClass={'d-none'} />
            <PartnerSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;