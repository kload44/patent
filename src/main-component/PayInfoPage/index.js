import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Navbar from "../../components/Navbar/Navbar";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import PayInfo from "./contents";

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-5"} topbarClass={"tb-block"} />
      <PageTitle pageTitle={"Pay Info"} pagesub={"PayInfo"} />
      <PayInfo />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
