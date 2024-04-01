import React from 'react';
import { Link } from 'react-router-dom';
import Practices from '../../api/Practices';


const PracticeS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className={`service-section-s2 ${props.sClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="service-grids clearfix">
                            {Practices.map((practice, Pitem) => (
                                <div className="grid" key={Pitem}>
                                    <i className={`fi ${practice.sIcon}`}></i>
                                    <h3><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PracticeS2;