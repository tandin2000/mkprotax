import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';




function BannerOne() {
    return (
        <div>
            {/* banner blank space area */}
            <div className="rts-banner-area rts-banner-one" id='banner'>
                <div className="swiper mySwiper banner-one">

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                        className="rts-brand__slider"
                        speed={700}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        effect='fade'
                        breakpoints={{
                            1200: { slidesPerView: 1 },
                            900: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            580: { slidesPerView: 1 },
                            450: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                        <SwiperSlide>
                            {/* banner single content */}
                            <div className="banner-one-inner text-start">
                                <p className="pre-title">
                                    <span>Welcome!</span> to Pro Tax
                                </p>
                                <h1 className="title ">
                                Tax & Bookkeeping <br/>Made Simple
                                </h1>
                                <p className="disc banner-para">
                                Founded in British Columbia in 2024, Pro Tax was built on the idea that tax and bookkeeping <br/>services should be straightforward and accessible
                                </p>
                                <div class="flex">
                                <a href="/our-service" className="rts-btn btn-primary color-h-black">
                                See What We Offer
                                </a>
                                <a href="/contactus" className="rts-btn btn-primary color-h-black">
                                Book an Appointment
                                </a>
                                </div>
                            </div>
                            {/* banner single content end */}
                        </SwiperSlide>
                       
                    </Swiper>
                </div>
              
            </div>
            {/* banner blank space area end */}
        </div>
    )
}

export default BannerOne