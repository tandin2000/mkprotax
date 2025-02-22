import React from 'react'
import { Link } from 'react-router-dom';
function ServiceTen() {
    return (
        <div>
            {/* our service area start */}
            <div className="rts-service-area rts-section-gapTop pb--200 service-two-bg bg_image">
                <div className="container">
                    <div className="row g-5 service padding-controler">
                        {/* single service area */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            <div className="service-two-inner">
                                <div to={''} className="thumbnail">
                                    <img src="assets/images/service/02.jpg" alt="Business_image" />
                                </div>
                                <div className="body-content">
                                    <div className="hidden-area">
                                        <h5 className="title">Personal Taxes</h5>
                                        <p className="dsic">
                                        Filing your taxes doesn’t have to be stressful. We help you maximize refunds while ensuring full compliance with tax laws. Our process is simple, quick, and tailored to your unique situation.

                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single service area end*/}
                        {/* single service area */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            <div className="service-two-inner">
                            <div to={''} className="thumbnail">
                                    <img src="assets/images/service/03.jpg" alt="Business_image" />
                                </div>
                                <div className="body-content">
                                    <div className="hidden-area">
                                        <h5 className="title">Corporate Tax</h5>
                                        <p className="dsic">
                                        Managing corporate taxes can be complicated , let us handle it. We help businesses navigate tax regulations, reduce liabilities, and stay compliant. Focus on growing your business while we take care of the numbers.

                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single service area end*/}
                        {/* single service area */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            <div className="service-two-inner">
                            <div to={''} className="thumbnail">
                                    <img src="assets/images/service/04.jpg" alt="Business_image" />
                                </div>
                                <div className="body-content">
                                    <div className="hidden-area">
                                        <h5 className="title">Bookkeeping
                                        </h5>
                                        <p className="dsic">
                                        Stay organized with our professional bookkeeping services. We track your finances, handle records, and provide accurate reports, so you always know where your business stands.

                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            </div>
                        {/* single service area end*/}
                        {/* single service area */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            <div className="service-two-inner">
                            <div to={''} className="thumbnail">
                                    <img src="assets/images/service/05.jpg" alt="Business_image" />
                                </div>
                                <div className="body-content">
                                    <div className="hidden-area">
                                        <h5 className="title">U.S. Tax
                                        </h5>
                                        <p className="dsic">
                                        U.S. tax rules can be confusing but we’ve got you covered. Whether you’re an individual or a business with U.S. tax obligations, we’ll guide you through the process with ease and clarity.

                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            {/* our service area end */}
        </div>
    )
}

export default ServiceTen