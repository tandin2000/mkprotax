import React, { useState, useEffect } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";

import FooterOne from "../components/footer/FooterTwo";





function OurService({officeHrs, socialUrls}) {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'About Us' }
    ];
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Function to open the video overlay
    const openVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(true);
    };

    // Function to close the video overlay
    const closeVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(false);
    };

    // Effect to handle the escape key for closing the video overlay
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.keyCode === 27) {
                setIsVideoOpen(false);
            }
        };

        // Add event listener for keyup
        document.addEventListener('keyup', handleKeyUp);

        // Cleanup function to remove event listener on component unmount
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    return (
        <div className=''>

            <HeaderOne officeHrs={officeHrs} socialUrls={socialUrls} />
            <Breadcrumb title="About Us" breadcrumbs={breadcrumbs} />
            {/* rts about us section start */}
            <div className="rts-about-area" style={{marginTop:'70px'}}>
                <div className="container">
                    <div className="row g-5 ">
                        <div className="col-lg-6">
                            <div className="about-image-v-inner">
                                <div className="image-area">
                                    <img
                                        className="mt--110 img-1"
                                        src="assets/images/about/main/about-03.jpg"
                                        alt="BUsiness_image"
                                    />
                                    <img
                                        className="img-over"
                                        src="assets/images/about/main/about-04.jpg"
                                        alt="BUsiness_image"
                                    />
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-progress-inner">
                                <div className="title-area">
                                    
                                    <h2 className="title">
                                       About Us
                                    </h2>
                                </div>
                                {/* inner start */}
                                <div className="inner">
                                    <p className="disc">
                                    Founded in British Columbia in 2024, MKPro Tax was built on the idea that tax and bookkeeping services should be straightforward and accessible. Our team is made up of experienced professionals who genuinely care about helping you navigate your finances with ease. We combine knowledge, technology, and a personal touch to provide solutions that make sense—without the stress or confusion.

                                    </p>
                                    <div className="row about-success-wrapper">
                                    {/* left wrapper start */}
                                    <div className="col-lg-12 col-md-12">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Secure Handling - <span className='text-muted'>
                                            Trust us to safeguard your information with strict data protection protocols.
                                            </span>
                                            </p>
                                            <br/>
                                           
                                        </div>
                                       
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Quick & Easy
                                            - <span className='text-muted'>
                                            We handle the details, so you don’t have to stress about deadlines.
                                            </span>
                                            </p>
                                            <br/>
                                           
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Experienced Team
                                            - <span className='text-muted'>
                                            Reach out anytime, we’re ready to help.

                                            </span>
                                            </p>
                                            <br/>
                                           
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Always Here for You
                                            - <span className='text-muted'>
                                            Trust us to safeguard your information with strict data protection protocols.
                                            </span>
                                            </p>
                                            <br/>
                                           
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Cost-Effective Services
                                            - <span className='text-muted'>
                                            Quality service at a price that makes sense.

                                            </span>
                                            </p>
                                            <br/>
                                           
                                        </div>
                                    </div>
                                  
                                </div>
                                </div>
                                {/* end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about us section end */}


            <FooterOne />

        </div>
    )
}

export default OurService