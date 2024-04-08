import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Attorneys from '../../api/attorneys'

const AttorneySinglePage = (props) => {
    const { slug } = useParams()

    const AttorneyDetails = Attorneys.find(item => item.slug === slug)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={AttorneyDetails.name} pagesub='Attorney Single' />
            <section className="team-sigle-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-12">
                            <div className="team-single-sidebar">
                                <div className="widget attorney-widget">
                                    <h3>Our Attorneys</h3>
                                    <ul>
                                        {Attorneys.map((attorney, aitem) => (
                                            <li key={aitem}><Link onClick={ClickHandler} to={`/attorneys-single/${attorney.slug}`}>{attorney.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-8 col-12">
                            <div className="attorney-single-content">
                                <div className="attorney">
                                    <div className="img-holder">
                                        <img src={AttorneyDetails.AtImg} alt="" />
                                    </div>
                                    <div className="attorney-single-info">
                                        <div className="info">
                                            <h3>{AttorneyDetails.name}</h3>
                                            <span>{AttorneyDetails.title}</span>
                                            <ul>
                                                <li><i className="ti-mobile"></i><span>Phone: </span>654-54851-5447</li>
                                                <li><i className="ti-email"></i><span>Email: </span>necterbuddy@hotmail.com</li>
                                                <li><i className="ti-timer"></i><span>Experience: </span>11 Years</li>
                                                <li><i className="ti-location-pin"></i><span>Address: </span>45 big fella street, sweet home, Bela</li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/attorneys-single/Michel-Troat"><i className="ti-facebook"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/attorneys-single/Michel-Troat"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/attorneys-single/Michel-Troat"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/attorneys-single/Michel-Troat"><i className="ti-pinterest"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/attorneys-single/Michel-Troat"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="attorney-details">
                                    <h2>About Me</h2>
                                    <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</p>
                                    <h2>Experience</h2>
                                    <p>Above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. </p>
                                    <h2>Education</h2>
                                    <p>Above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa</p>
                                    <h2>Achievements</h2>
                                    <ul>
                                        <li>- Best Lawert award 2017</li>
                                        <li>- Won 100 case in 2018</li>
                                        <li>- Specials awards for Famili law activity 2018</li>
                                        <li>- Super Lawyers’ Top 50 Lawyers in USA</li>
                                    </ul>
                                    <h2>Skills</h2>
                                    <div className="skills">
                                        <div className="skill">
                                            <h6>Business Law</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar" style={{ width: `85%` }}>
                                                </div>
                                                <span>85%</span>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Family Law</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar" style={{ width: `95%` }}>
                                                </div>
                                                <span>95%</span>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Personal Injury</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar" style={{ width: `92%` }}>
                                                </div>
                                                <span>92%</span>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Bankruptcy Cases</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar" style={{ width: `95%` }}>
                                                </div>
                                                <span>95%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Contact Me</h2>
                                    <div className="contact-form">
                                        <form method="post" onSubmit={SubmitHandler}>
                                            <div>
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name*" />
                                            </div>
                                            <div>
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email*" />
                                            </div>
                                            <div className="fullwidth">
                                                <textarea className="form-control" name="note" id="note" placeholder="Case Description..."></textarea>
                                            </div>
                                            <div className="submit-area">
                                                <button type="submit" className="theme-btn">Submit It Now</button>
                                            </div>
                                        </form>
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
export default AttorneySinglePage;
