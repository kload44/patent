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
                                    <h4>찾아오는 길</h4>
                                    <p>54, Dahs udin sorok, Melborn Austria</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-email"></i>
                                    <h4>이메일</h4>
                                    <p>demo@example.com</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-support"></i>
                                    <h4>전화번호</h4>
                                    <p>654756175+5474</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-clock"></i>
                                    <h4>영업시간</h4>
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
        </div>
    )
}

export default Contactpage;