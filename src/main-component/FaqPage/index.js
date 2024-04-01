import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from './FaqSection'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'

const FaqPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'FAQ'} pagesub={'FAQ'} />
            <section className="faq-pg-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-xl-6 col-lg-8 col-md-10 col-12">
                            <div className="section-title-s3">
                                <div className="icon">
                                    <i className="fi flaticon-suitcase"></i>
                                </div>
                                <span>FAQ</span>
                                <h2>Frequently Asked Question</h2>
                                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="panel-group faq-accordion theme-accordion-s1" id="accordion">
                                <FaqSection />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default FaqPage;

