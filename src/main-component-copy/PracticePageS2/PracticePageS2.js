import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import PracticeS2 from '../../components/PracticeS2/PracticeS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const PracticePageS2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Practice'} pagesub={'Practice'}/> 
            <PracticeS2 sClass={'service-pg-service-section-s2 '}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticePageS2;

