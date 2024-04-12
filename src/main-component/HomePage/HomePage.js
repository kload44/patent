import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/hero";
import HeroFeatures from "../../components/HeroFeatures/HeroFeatures";
import About from "../../components/about/about";
import Features from "../../components/Features/Features";
import Practice from "../../components/Practice";
import Testimonial from "../../components/Testimonial/Testimonial";
import CaseStudies from "../../components/CaseStudies/CaseStudies";
import CtaSection from "../../components/CtaSection/CtaSection";
import Attorney from "../../components/attorneys";
import Consultinencey from "../../components/Consultinencey/Consultinencey";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-2"} topbarNone={"topbar-none"} />
      <Hero />
      <HeroFeatures />
      <About />
      <Features />
      <Practice />
      <CaseStudies />
      <Testimonial />
      <CtaSection />
      <Attorney />
      <BlogSection vClass={"d-none"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
