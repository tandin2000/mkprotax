import React from 'react'
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";
import ServiceTen from "../components/service/ServiceTen";





import FooterOne from "../components/footer/FooterTwo";

function OurService({officeHrs, socialUrls}) {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Service' }
    ];
    return (
        <div className=''>

            <HeaderOne officeHrs={officeHrs} socialUrls={socialUrls}/>
            <Breadcrumb title="Our Service" breadcrumbs={breadcrumbs} />
            <ServiceTen />
            <FooterOne />

        </div>
    )
}

export default OurService