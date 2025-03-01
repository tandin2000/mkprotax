import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function TestimonialOne() {
    return (
        <div>

            {/* start client feed back section */}
            <div className="rts-client-feedback">
                <div className="container">
                    <div className="row">
                        {/* start testimonials area */}
                        <div className="col-lg-7">
                            <div className="rts-title-area reviews text-start pl--30 pt--70">
                                <p className="pre-title">Our Testimonials</p>
                                <h2 className="title">Client’s Feedbacks</h2>
                                {/* swiper area start */}
                                <div className="swiper mySwipertestimonial">
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                        className="mySwipers"
                                        speed={500}
                                        slidesPerView={1}
                                        spaceBetween={0}
                                        loop={true}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}

                                    >
                                        <SwiperSlide>
                                            <div className="testimonial-inner">
                                                <p className="disc text-start">
                                                    “I had a great experience with MK Pro Tax for my income tax filing. They were quick, efficient, and really knew their stuff. The team was also very patient and took the time to answer all my questions. I highly recommend them!”
                                                </p>
                                                <div className="testimonial-bottom-one">
                                                    <div className="thumbnail">
                                                        <img
                                                            src="assets/images/testimonials/02.png"
                                                            alt="business-testimonials"
                                                        />
                                                    </div>
                                                    <div className="details">
                                                        <a href="#">
                                                            <h5 className="title">David Smith</h5>
                                                        </a>
                                                        <span>Entrepreneur</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-inner">
                                                <p className="disc text-start">
                                                    “MK Pro Tax made tax filing so easy and stress-free. Their staff is knowledgeable, professional, and incredibly helpful. They explained everything clearly and made sure I got the best outcome. I truly appreciate their excellent service!”
                                                </p>
                                                <div className="testimonial-bottom-one">
                                                    <div className="thumbnail">
                                                        <img
                                                            src="assets/images/testimonials/02.png"
                                                            alt="business-testimonials"
                                                        />
                                                    </div>
                                                    <div className="details">
                                                        <a href="#">
                                                            <h5 className="title">Tandin Wangchen</h5>
                                                        </a>
                                                        <span>Owner</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-inner">
                                                <p className="disc text-start">
                                                    “Fantastic service from MK Pro Tax! They are fast, reliable, and really understand tax laws. The team is also very kind and understanding, which made the whole process smooth and hassle-free. I will definitely be coming back next year!”
                                                </p>
                                                <div className="testimonial-bottom-one">
                                                    <div className="thumbnail">
                                                        <img
                                                            src="assets/images/testimonials/02.png"
                                                            alt="business-testimonials"
                                                        />
                                                    </div>
                                                    <div className="details">
                                                        <a href="#">
                                                            <h5 className="title">Amith Sha</h5>
                                                        </a>
                                                        <span>Student</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                </div>
                                {/* swiper area end */}
                            </div>
                        </div>
                        {/* end testimonials are */}
                        {/* images area */}
                        <div className="col-lg-5">
                            <div className="rts-test-one-image-inner">
                                <img
                                    src="assets/images/testimonials/15.png"
                                    alt="business_testimobials"
                                />
                            </div>
                        </div>
                        {/* image area end */}
                    </div>
                </div>
            </div>
            {/* start client feed back section End */}

        </div>
    )
}

export default TestimonialOne