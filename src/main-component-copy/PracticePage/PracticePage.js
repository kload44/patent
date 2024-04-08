import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Practice from '../../components/Practice';

const PracticePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Practice'} pagesub={'Practice'}/> 
            <Practice sClass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticePage;

