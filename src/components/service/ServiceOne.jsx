import React from 'react'
import { Link } from 'react-router-dom';
function ServiceOne() {
    return (
        <div>
            <>
                {/* rts service post area  Start*/}
                <div className="rts-service-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="rts-title-area service text-center">
                                    <p className="pre-title">Our Services</p>
                                    <h2 className="title">High Quality Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
                        <div className="background-service row">
                            {/* start single Service */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner one">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/01.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/our-service'}>
                                            <h5 className="title">Personal Tax </h5>
                                        </Link>
                                        
                                        <Link
                                            className="rts-read-more btn-primary"
                                            to={'/our-service'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner two">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/02.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/our-service'}>
                                            <h5 className="title">Corporate Tax</h5>
                                        </Link>
                                       
                                        <Link
                                            className="rts-read-more btn-primary"
                                            to={'/our-service'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner three">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/03.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/our-service'}>
                                            <h5 className="title">Bookkeeping </h5>
                                        </Link>
                                       
                                        <Link
                                            className="rts-read-more btn-primary"
                                            to={'/our-service'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner four">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/04.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/our-service'}>
                                            <h5 className="title">US Tax </h5>
                                        </Link>
                                       
                                        <Link
                                            className="rts-read-more btn-primary"
                                            to={'/our-service'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
                {/* rts service post area ENd */}
            </>

        </div>
    )
}

export default ServiceOne