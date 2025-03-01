
import React, { useState } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterTwo";
import Breadcrumb from "./Breadcrumb";
import emailjs from "@emailjs/browser";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        file: null,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Disable button and show "Sending..."

        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs
            .send(
                "service_qjy567b", // Replace with your EmailJS service ID
                "template_7siibsi", // Replace with your EmailJS template ID
                templateParams,
                "FbpkiU24DVSIxTqYa" // Replace with your EmailJS public key
            )
            .then(
                (response) => {
                    // alert("Message sent successfully!");
                    // console.log("Email sent:", response);
                    setLoading(false); // Re-enable button

                    setFormData({ name: "", email: "", subject: "", message: "", file: null });
                },
                (error) => {
                    // alert("Failed to send message. Please try again.");
                    setLoading(false); // Re-enable button

                    console.error("Email error:", error);
                }
            );
    };

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

            {/* contact single area start */}
            <div className="rts-contact-area " style={{marginTop:'80px'}}>
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
                                        5457 Victoria Drive, Vancouver <br />
                                        V5P 3V9, British Columbia
                                        <br/>  <br/>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                    </div>
                </div>
            </div>

            <div className="rts-contact-form-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-contact-fluid rts-section-gap">
                                <div className="rts-title-area contact-fluid text-center mb--50">
                                    <p className="pre-title">Get In Touch</p>
                                    <h2 className="title">Need Help? Book An Appointment</h2>
                                </div>
                                <div className="form-wrapper">
                                    <div id="form-messages" />
                                    <form onSubmit={handleSubmit}>
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Your Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                        <textarea
                                            placeholder="Type Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                        <br />
                                        <br />
                                        {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
                                        <button type="submit" className="rts-btn btn-primary" disabled={loading}>
                                            {loading ? "Sending..." : "Send Message"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5338838227917!2d-123.0658933!3d49.233507899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673de8b7be8cd%3A0x587c9e1e0f9aa542!2s5457%20Victoria%20Dr%2C%20Vancouver%2C%20BC%20V5P%203V9%2C%20Canada!5e0!3m2!1sen!2sca!4v1709150000000"
                                    style={{ border: 0}}
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
         
            {/* conact us form fluid end */}

            <FooterOne />

        </div>
    )
}

export default ContactUs