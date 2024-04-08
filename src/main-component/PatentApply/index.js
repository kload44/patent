import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Contents from "./contents";

const PatentApply = () => {
  return (
    <Fragment>
      <Navbar active={true} />
      <Contents />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PatentApply;
