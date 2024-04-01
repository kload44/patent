import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage/HomePage";
import HomePage2 from "../HomePage2/HomePage2";
import HomePage3 from "../HomePage3/HomePage3";
import AboutCompanyPage from "../AboutCompanyPage/AboutCompanyPage";
import AboutPage from "../AboutPage/AboutPage";
import TestimonialPage from "../TestimonialPage/TestimonialPage";
import TestimonialPage2 from "../TestimonialPage2/TestimonialPage2";
import AttorneysPage from "../AttorneysPage/AttorneysPage";
import PracticePage from "../PracticePage/PracticePage";
import PracticePageS2 from "../PracticePageS2/PracticePageS2";
import PracticeSinglePage from "../PracticeSinglePage/PracticeSinglePage";
import CaseSinglePage from "../CaseSinglePage/CaseSinglePage";
import AttorneySinglePage from "../AttorneySinglePage/AttorneySinglePage";
import CasePage from "../CasePage/CasePage";
import CasePageS2 from "../CasePageS2/CasePageS2";
import ShopPage from "../ShopPage";
import ProductSinglePage from "../ProductSinglePage";
import CartPage from "../CartPage";
import CheckoutPage from "../CheckoutPage";
import OrderRecived from "../OrderRecived";
import BlogPage from "../BlogPage/BlogPage";
import BlogPageLeft from "../BlogPageLeft/BlogPageLeft";
import BlogPageFullwidth from "../BlogPageFullwidth/BlogPageFullwidth";
import BlogDetails from "../BlogDetails/BlogDetails";
import BlogDetailsFull from "../BlogDetailsFull/BlogDetailsFull";
import BlogDetailsLeftSiide from "../BlogDetailsLeftSiide/BlogDetailsLeftSiide";
import ContactPage from "../ContactPage/ContactPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import FaqPage from "../FaqPage";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutCompanyPage />} />
          <Route path="about-me" element={<AboutPage />} />
          <Route path="team" element={<AttorneysPage />} />
          <Route path="attorneys-single/:slug" element={<AttorneySinglePage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
