import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Cases from '../../api/case';
import ServiceTab from './ServiceTab';

const CaseSinglePage = (props) => {
    const { slug } = useParams()

    const caseDetails = Cases.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={caseDetails.cTitle} pagesub={'Project'} />
            <section className="project-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <div className="img-holder">
                                <img src={caseDetails.cImg} alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="project-details">
                                <h2>Civil Litigation and Minimum Maintenance Standards</h2>
                                <h3>Raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</h3>
                                <p>Waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table Samsa was a travelling salesman - and above it there hung a picture that he had recently</p>
                                <p>Human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table Samsa was a travelling salesman - and above it there hung</p>
                                <p>Collection of in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <ServiceTab />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="related-case-studies">
                                <h2>Related Case Studies</h2>
                                <div className="case-studies-grids">
                                    {Cases.slice(0, 3).map((cases, i) => (
                                        <div className="grid" key={i}>
                                            <div className="img-holder">
                                                <img src={cases.cImg} alt="" />
                                            </div>
                                            <div className="overlay">
                                                <div className="content">
                                                    <p className="cat">Law service</p>
                                                    <h3><Link onClick={ClickHandler} to={`/case-single/${cases.slug}`}>{cases.cTitle}</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
export default CaseSinglePage;
