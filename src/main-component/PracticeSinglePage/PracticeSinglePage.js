import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'
import Practices from '../../api/Practices';
import ServiceTab from './ServiceTab';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const PracticeSinglePage = (props) => {
    const { slug } = useParams()

    const PracticeDetails = Practices.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={PracticeDetails.sTitle} pagesub={'Project'} />

            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-9 col-12 order-lg-2 order-1">
                            <div className="service-single-content">
                                <h2>Business Law</h2>
                                <p>Whole of her lower arm towards it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather Gregor then tur viewer tghenme ahaded</p>
                                <div className="service-pic">
                                    <img src={PracticeDetails.sImg} alt="" />
                                </div>
                                <p>Above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look</p>

                                <div className="service-features-grids clearfix">
                                    <div className="grid">
                                        <i className="fi flaticon-standard"></i>
                                        <h4>Skilled Attorneys</h4>
                                        <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy</p>
                                    </div>
                                    <div className="grid">
                                        <i className="fi flaticon-balance"></i>
                                        <h4>Legal Defence</h4>
                                        <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy</p>
                                    </div>
                                    <div className="grid">
                                        <i className="fi flaticon-courthouse-1"></i>
                                        <h4>99% case win</h4>
                                        <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy</p>
                                    </div>
                                </div>

                                <h3>Benefit of this Service</h3>
                                <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window</p>
                                <div className="service-features">
                                    <ul>
                                        <li><i className="ti-check"></i>Gregor then turned to look out the window</li>
                                        <li><i className="ti-check"></i>Salesman and above it there hung a picture that</li>
                                        <li><i className="ti-check"></i>Helplessly as he looked What's happened</li>
                                    </ul>
                                    <ul>
                                        <li><i className="ti-check"></i>Gregor then turned to look out the window</li>
                                        <li><i className="ti-check"></i>Salesman and above it there hung a picture that</li>
                                        <li><i className="ti-check"></i>Helplessly as he looked What's happened</li>
                                    </ul>
                                </div>
                                <h3>Research</h3>
                                <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window. A collection of textile samples lay spread out on the table – Samsa was a travelling salesman – and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                                
                                <ServiceTab/>
                                <Link onClick={ClickHandler} to="/" className="theme-btn">Get the service</Link>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-12 order-lg-1 order-2">
                            <div className="service-sidebar">
                                <div className="widget service-list-widget">
                                    <ul>
                                        <li className='current'><Link onClick={ClickHandler} to="/services">All Service</Link></li>
                                        {Practices.map((practice, Pitem) => (
                                            <li key={Pitem}><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget download-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-zip"></i>Company presentation</Link></li>
                                    </ul>
                                </div>
                                <div className="widget contact-widget">
                                    <div>
                                        <h4>Need Help?</h4>
                                        <p>Towards the viewer. Gregor then turned to look out the window at the dull weather. Drops  look out the</p>
                                        <Link onClick={ClickHandler} to="/">Contact Now</Link>
                                    </div>
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
export default PracticeSinglePage;
