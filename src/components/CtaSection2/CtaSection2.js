import React from 'react'
import VideoModal from "../ModalVideo";

const CtaSection2 = (props) => {
    return (

        <section className="cta-section-s3">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="cta-conetnt">
                            <h2>Have any query, then contact with me</h2>
                            <p>Gregor then turned to look out the window at the dull weather</p>
                            <div className="video-btns">
                                <VideoModal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection2;