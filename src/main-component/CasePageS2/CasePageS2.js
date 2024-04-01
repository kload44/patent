import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import CaseStudies2 from '../../components/CaseStudies2/CaseStudies2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const CasePageS2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Case Stadies'} pagesub={'Resent Case Studies'}/> 
            <CaseStudies2 cClass={'case-studies-pg-s2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePageS2;

