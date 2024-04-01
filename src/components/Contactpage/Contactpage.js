import React from 'react'
import ContactFrom from '../ContactFrom';

const Contactpage = (props) => {
    return (
        <div>
            <section className="contact-section-s3">
                <div className="content-area clearfix">
                    <div className="contact-info-col">
                        <div className="contact-info">
                            <ul>
                                <li>
                                    <i className="fi flaticon-home-3"></i>
                                    <h4>Head Office</h4>
                                    <p>54, Dahs udin sorok, Melborn Austria</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-email"></i>
                                    <h4>Email Address</h4>
                                    <p>demo@example.com</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-support"></i>
                                    <h4>Telephone</h4>
                                    <p>654756175+5474</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-clock"></i>
                                    <h4>Office Hour</h4>
                                    <p>Mon-Sun: 10am – 7pm</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-form-col">
                        <div className="section-title-s2">
                            <div className="icon">
                                <i className="fi flaticon-balance"></i>
                            </div>
                            <span>Contact form</span>
                            <h2>Need Consultancy, <br />Request A Free Quote</h2>
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nuncIt showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy</p>
                        </div>

                        <div className="contact-form">
                            <ContactFrom />
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-map-section section-padding pb-0">
                <div className="contact-map">
                    <iframe title='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contactpage;