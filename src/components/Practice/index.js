import React from 'react';
import { Link } from 'react-router-dom';
import Practices from '../../api/Practices';


const Practice = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className={`service-section ${props.sClass}`}>
            <div className="content-area clearfix">
                <div className="left-col">
                    <div className="inner-content">
                        <blockquote>“ It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards”</blockquote>

                        <h4>Jhon Dow</h4>
                        <span>CEO of the company</span>
                    </div>
                </div>
                <div className="right-col">
                    <div className="section-title-s2">
                        <div className="icon">
                            <i className="fi flaticon-balance"></i>
                        </div>
                        <span>What we are expert at</span>
                        <h2>Legal Practice Areas</h2>
                        <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</p>
                    </div>
                    <div className="service-grids clearfix">
                        {Practices.map((practice, Pitem) => (
                            <div className="grid" key={Pitem}>
                                <i className={`fi ${practice.sIcon}`}></i>
                                <h3><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></h3>
                                <p>{practice.des2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Practice;