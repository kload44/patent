import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

const FunFact = (props) => {

    const funFact = [
        {
            title: '1800',
            subTitle: 'CASE CLOSED',
            Symbol: '+',
        },
        {
            title: '150',
            subTitle: 'EXPEAT ATTORNEYS',
            Symbol: '+',
        },
        {
            title: '1530',
            subTitle: ' TRUSTED CLIENTS',
            Symbol: '+',
        },
        {
            title: '100%',
            subTitle: 'SUCCESSFUL CASE',
            Symbol: '%',
        },


    ]

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });



    return (

        <section className={`fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.Symbol}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact;