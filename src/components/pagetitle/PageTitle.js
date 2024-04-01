import React from 'react'

const PageTitle = (props) => {
    return (
        <section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>{props.pageTitle}</h2>
                        <p>Gregor then turned to look out the window at the weather</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;