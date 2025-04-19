import React, { useState, useEffect } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";
import TestimonialOne from '../components/testimonials/TestimonialOne';
import FooterOne from "../components/footer/FooterTwo";





function OurService({officeHrs, socialUrls}) {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: ' Testimonial' }
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

            <HeaderOne officeHrs={officeHrs} socialUrls={socialUrls}/>
            <Breadcrumb title="Testimonial" breadcrumbs={breadcrumbs} />
            {/* rts about us section start */}
            <div className="rts-about-area" style={{marginTop:'70px'}}>
               <TestimonialOne/>
            </div>
            {/* rts about us section end */}


            <FooterOne />

        </div>
    )
}

export default OurService