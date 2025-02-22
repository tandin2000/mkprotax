
import React, { useEffect } from 'react';
import WOW from 'wow.js';


function AboutOne() {
    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow',      // default
            animateClass: '',     // set to empty because we use custom classes
            offset: 0,            // distance to the element when triggering the animation
            mobile: true,         // trigger animations on mobile devices
            live: true            // act on asynchronously loaded content
        });
        wow.init();
    }, []);
    return (
        <div>

            {/* rts about us section start */}
            <div className="rts-about-area rts-section-gap bg-about-sm-shape">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* about left */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
                            <div className="rts-title-area">
                                <p className="pre-title">Why Work with Us?
                                </p>
                                <h2 className="title">Let’s face it
                                </h2>
                            </div>
                            <div className="about-inner">
                                <p className="disc">
                                Navigating taxes and finances can be confusing. That’s why we keep things simple and speak your language, not just numbers and jargon. We take the time to understand your situation and offer solutions that actually make sense. At Pro Tax, you’re not just another file, you’re a person, and we’re here to make things easier for you.

                                </p>
                                {/* start about success area */}
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
                        </div>
                        {/* about right */}
                        {/* about-right Start*/}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
                            <div className="about-one-thumbnail">
                                <img
                                    src=" assets/images/about/main/about-01.png"
                                    alt="about-finbiz"
                                />
                                <img
                                    className="small-img"
                                    src="assets/images/about/main/about-02.png"
                                    alt="finbiz-small"
                                />
                                {/* <div className="experience">
                                    <div className="left single">
                                        <h2 className="title">25+</h2>
                                        <p className="time">Years</p>
                                    </div>
                                    <div className="right single">
                                        <p className="disc">Of experience in consulting service</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* about-right end */}
                    </div>
                </div>
            </div>
            {/* rts about us section end */}

        </div >
    )
}

export default AboutOne