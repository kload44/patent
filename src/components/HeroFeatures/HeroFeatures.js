import React from 'react'

const HeroFeatures = (props) => {


    const featres = [
        {
            fIcon: 'flaticon-dog',
            title: 'Family Law',
            sub: 'Family Law plan',
        },
        {
            fIcon: 'flaticon-wounded',
            title: 'Personal injury',
            sub: 'Personal injury plan',
        },
        {
            fIcon: 'flaticon-thief',
            title: 'Criminal Law',
            sub: 'Criminal plan',
        },
        {
            fIcon: 'flaticon-save-money',
            title: 'Business law plan',
            sub: 'Business Law',
        },

    ]


    return (
        <section className="hero-features-section">
            <div className="container">
                <div className="hero-features-wrap">
                    {featres.map((featres, fitem) => (
                        <div className="hero-features-item" key={fitem}>
                            <div className="hero-features-icon"><i className={`fi ${featres.fIcon}`}></i></div>
                            <div className="hero-features-text">
                                <span>{featres.sub}</span>
                                <h4>{featres.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroFeatures;