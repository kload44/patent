import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Contents from "./Contents";
import PageTitle from "../../components/pagetitle/PageTitle";

const MyPage = () => {
  return (
    <Fragment>
      <Navbar active={true} />
      <Contents blLeft={"order-md-1"} blRight={"order-md-2"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MyPage;
