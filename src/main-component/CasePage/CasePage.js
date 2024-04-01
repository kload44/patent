import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const CasePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'Case Stadies'} pagesub={'Resent Case Studies'}/> 
            <CaseStudies cClass={'case-studies-pg-section'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;

