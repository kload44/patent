import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import Footer from '../../components/footer/Footer';


const TestimonialPage2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'Testimonial'} pagesub={'Testimonial'}/> 
            <Testimonial2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TestimonialPage2;
