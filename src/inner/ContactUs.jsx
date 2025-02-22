
import React from 'react';
import HeaderOne from "../components/header/HeaderOne";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterTwo";
import Breadcrumb from "./Breadcrumb";

function ContactUs() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

            {/* contact single area start */}
            <div className="rts-contact-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                               
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/01.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Call Us 24/7</span>
                                       <br/>
                                       
                                        <Link to={'tel:+16043561949'}>
                                            <h5>+1 (604) 356-1949</h5>
                                        </Link>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                              
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/02.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Office working hours</span><br/>
                                        Monday - Friday: 9:00 AM – 5:00 PM <br/>Saturday: 9:00 AM – 12:00 PM
                                        <br/>Sunday: Closed
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                               
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/03.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Address</span><br/>
                                        XYZ Hilton Street, 125 Town<br/>
                                        Canada
                                        <br/>  <br/>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                    </div>
                </div>
            </div>
            {/* conact single area end */}
            {/* bizup map area start */}
            <div className="rts-contact-map-area">
                <div className="contaciner-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-map-area-fluid">
                                <iframe
                                    className="contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bizup map area end */}
            {/* conact us form fluid start */}
            <div className="rts-contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-contact-fluid rts-section-gap">
                                <div className="rts-title-area contact-fluid text-center mb--50">
                                    <p className="pre-title">Get In Touch</p>
                                    <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                                </div>
                                <div className="form-wrapper">
                                    <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required=""
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required=""
                                            />
                                        </div>
                                        <input type="text" name="subject" placeholder="Your Subject" />
                                      
                                        <textarea
                                            placeholder="Type Your Message"
                                            name="message"
                                            defaultValue={""}
                                        />
                                        <br/> <br/>
                                       <input type="file" accept="image/*" />
                                        <button type="submit" className="rts-btn btn-primary">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* conact us form fluid end */}

            <FooterOne />

        </div>
    )
}

export default ContactUs