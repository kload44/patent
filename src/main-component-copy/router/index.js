import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage/HomePage";
import HomePage2 from "../HomePage2/HomePage2";
import HomePage3 from "../HomePage3/HomePage3";
import AboutCompanyPage from "../AboutCompanyPage/AboutCompanyPage";
import AboutPage from "../AboutPage/AboutPage";
import AttorneysPage from "../AttorneysPage/AttorneysPage";
import AttorneySinglePage from "../AttorneySinglePage/AttorneySinglePage";
import BlogPage from "../BlogPage/BlogPage";
import BlogPageLeft from "../BlogPageLeft/BlogPageLeft";
import BlogPageFullwidth from "../BlogPageFullwidth/BlogPageFullwidth";
import BlogDetails from "../BlogDetails/BlogDetails";
import BlogDetailsFull from "../BlogDetailsFull/BlogDetailsFull";
import BlogDetailsLeftSiide from "../BlogDetailsLeftSiide/BlogDetailsLeftSiide";
import CaseSinglePage from "../CaseSinglePage/CaseSinglePage";
import CasePage from "../CasePage/CasePage";
import CasePageS2 from "../CasePageS2/CasePageS2";
import CartPage from "../CartPage";
import ContactPage from "../ContactPage/ContactPage";
import CheckoutPage from "../CheckoutPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import FaqPage from "../FaqPage";
import OrderRecived from "../OrderRecived";
import ProductSinglePage from "../ProductSinglePage";
import PracticePage from "../PracticePage/PracticePage";
import PracticePageS2 from "../PracticePageS2/PracticePageS2";
import PracticeSinglePage from "../PracticeSinglePage/PracticeSinglePage";
import TestimonialPage from "../TestimonialPage/TestimonialPage";
import TestimonialPage2 from "../TestimonialPage2/TestimonialPage2";
import ShopPage from "../ShopPage";

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

          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />

          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-left-sidebar" element={<BlogPageLeft />} />
          <Route path="blog-fullwidth" element={<BlogPageFullwidth />} />
          <Route path="blog-single" element={<BlogDetails />} />
          <Route path="blog-single-fullwidth" element={<BlogDetailsFull />} />
          <Route path="blog-single-left-sidebar" element={<BlogDetailsLeftSiide />} />
          
          <Route path="case-single" element={<CaseSinglePage />} />
          <Route path="case-studies" element={<CasePage />} />
          <Route path="case-studies-s2" element={<CasePageS2 />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="OrderRecived" element={<OrderRecived />} />

          <Route path="product-single" element={<ProductSinglePage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="practice-s2" element={<PracticePageS2 />} />
          <Route path="practice-single" element={<PracticeSinglePage />} />

          <Route path="testimonials" element={<TestimonialPage />} />
          <Route path="testimonials-s2" element={<TestimonialPage2 />} />

          <Route path="shop" element={<ShopPage />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
