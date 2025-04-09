import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadTop from '../components/LoadTop';
import BackToTop from '../components/BackToTop';
import NewsMarquee from '../components/NewsMarquee';
import HomeOne from "./HomeOne";
import Testimonial from '../inner/Testimonial';
// inner pages
import OurService from "../inner/OurService";
import AboutUs from "../inner/AboutUs";
import Error from "../inner/Error";
import ContactUs from '../inner/ContactUs';


function RouterPage() {
    return (
        <div>
            <Router>
                <LoadTop />
                <NewsMarquee />
                <Routes>
                    <Route path="/" element={<HomeOne />}></Route>
                    <Route path="/about-us" element={<AboutUs />}></Route>
                    <Route path="/our-service" element={<OurService />}></Route>
                    <Route path="/404" element={<Error />}></Route>
                    <Route path="/testimonial" element={<Testimonial />}></Route>
                    <Route path="/contactus" element={<ContactUs />}></Route>
                </Routes>
                <BackToTop />
            </Router>
        </div>
    )
}

export default RouterPage