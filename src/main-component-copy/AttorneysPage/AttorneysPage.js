import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Attorney from '../../components/attorneys';
import Footer from '../../components/footer/Footer';

const AttorneysPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'Our Attorneys'} pagesub={'Attorneys'} />
            <Attorney/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AttorneysPage;
