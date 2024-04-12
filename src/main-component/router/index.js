import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage/HomePage";
import AboutCompanyPage from "../AboutCompanyPage/AboutCompanyPage";
import AboutPage from "../AboutPage/AboutPage";
import AttorneysPage from "../AttorneysPage/AttorneysPage";
import AttorneySinglePage from "../AttorneySinglePage/AttorneySinglePage";
import CheckoutPage from "../CheckoutPage";
import ContactPage from "../ContactPage/ContactPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import FaqPage from "../FaqPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import PatentApply from "../PatentApply";
import MyPage from "../MyPage";
import PayInfo from "../PayInfoPage";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="about" element={<AboutCompanyPage />} />
          <Route path="about-me" element={<AboutPage />} />
          <Route path="team" element={<AttorneysPage />} />
          <Route
            path="attorneys-single/:slug"
            element={<AttorneySinglePage />}
          />
          <Route path="faq" element={<FaqPage />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="apply" element={<PatentApply />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="pay-info" element={<PayInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
