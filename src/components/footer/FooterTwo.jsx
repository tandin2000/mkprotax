import React from 'react'
import { Link } from 'react-router-dom';
function FooterTwo() {
    return (
        <div>
            <>
                {/* footer area start */}
                <div className="rts-footer-area rts-section-gap footer-two footer-bg-two mt--120 mt_md--80 mt_sm--60" id='f-contact'>
                    <div className="container">
                        <div className="row">
                            {/* single wized */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="footer-two-single-wized left">
                                    <h3 className="title">
                                        <span>Ready To</span> <br />
                                        Work With Us?
                                    </h3>
                                    <p className="disc">
                                    We know taxes and bookkeeping can be overwhelming but they don’t have to be. At MKPro Tax, we make it simple, fast, and stress-free, so you can focus on what matters most. 

                                    </p>
                                  
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
                                <div className="footer-two-single-wized two">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Our Services</h5>
                                        <img
                                            src="assets/images/footer/under-title-2.png"
                                            alt="finbiz_footer"
                                        />
                                    </div>
                                    <div className="wized-2-body">
                                        <ul>
                                            <li>
                                                <Link to={'/our-service'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    Personal Tax
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/our-service'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    Corporate Tax
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/our-service'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    Bookkeeping services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/our-service'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    US Tax 
                                                </Link>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* single wized */}
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--30 mt_md--30">
                                <div className="footer-two-single-wized">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Contact Us</h5>
                                        <img
                                            src="assets/images/footer/under-title-2.png"
                                            alt="finbiz_footer"
                                        />
                                    </div>
                                    <div className="wized-2-body">
                                        <div className="contact-info-1">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="disc">
                                                <span>Call Us 24/7</span>
                                                <Link to={'tel:+16043561949'}>+1 (604) 356-1949</Link>
                                            </div>
                                        </div>
                                        <div className="contact-info-1">
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="disc">
                                                <span>Work with us</span>
                                                <Link to={'mailto:info@mkprotax.ca'}>info@mkprotax.ca</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single wized */}
                            {/* single wized */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="footer-two-single-wized right">
                                    <div className="wized-2-body">
                                        <div className="contact-info-1">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="disc">
                                                <span>Our Location</span>
                                                <Link to={'https://www.google.com/maps?q=5457+Victoria+Drive,+Vancouver,+BC+V5P+3V9'} target="_blank" rel="noopener noreferrer">
                                                    5457 Victoria Drive, Vancouver <br />
                                                    V5P 3V9, British Columbia
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single wized */}
                        </div>
                    </div>
                </div>
                {/* footer area end */}
                {/* copyright-area start */}
                <div className="rts-copy-right ptb--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-h-2-wrapper">
                                    <p className="disc">
                                        ProTax - Copyright 2025. All rights reserved.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright-area end */}
            </>

        </div>
    )
}

export default FooterTwo