import React from 'react';
import HeaderOne from "../components/header/HeaderOne";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";



function OurService() {


    return (
        <div className=''>

            <HeaderOne />

            {/* rts- 404 area start */}
            <div className="rts-404-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="404wrapper text-center">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/shape/404.png" alt="" />
                                </div>
                                <h2 className="title mt--40">Oops! Nothing Was Found</h2>
                                <p className="disc">
                                    Sorry, we couldn’t find the page you where looking for. We suggest{" "}
                                    <br /> that you return to homepage.
                                </p>
                                <Link className="rts-btn btn-primary" to={'/'}>
                                    Back To Homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts- 404 area end */}

            <FooterOne />

        </div>
    )
}

export default OurService