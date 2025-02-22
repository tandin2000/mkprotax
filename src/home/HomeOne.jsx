import React from 'react'
import HeaderOne from "../components/header/HeaderOne";
import BannerOne from "../components/banner/BannerOne";
import AboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceOne";



import Footer from "../components/footer/FooterTwo";

function HomeOne() {
  return (
    <div>

      <HeaderOne />
      <BannerOne />
      <AboutOne />
      <ServiceOne />
      {/* <BrandOne />
      <TestimonialOne />
      <MapOne /> */}
      <Footer />

    </div>
  )
}

export default HomeOne