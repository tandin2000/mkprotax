import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function SideMenu({ isSidebarOpen, toggleSidebar }) {

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };


    // useEffect(() => {
    //     const sidebar = document.getElementById('side-bar');
    //     const anywhereHome = document.getElementById('anywhere-home');

    //     if (isSidebarOpen) {
    //         sidebar.classList.add('show');
    //         anywhereHome.classList.add('bgshow');
    //     } else {
    //         sidebar.classList.remove('show');
    //         anywhereHome.classList.remove('bgshow');
    //     }
    // }, [isSidebarOpen]);


    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="rts-sidebar-menu-desktop">
                    <Link className="logo-1" href="index.html">
                        <img
                            className="logo"
                            src="/assets/images/logo/logo-1.svg"
                            alt="finbiz_logo"
                        />
                    </Link>
                  
                    <div className="body d-none d-xl-block">
                        <p className="disc">
                            We must explain to you how all seds this mistakens idea denouncing
                            pleasures and praising account.
                        </p>
                        <div className="get-in-touch">
                            {/* title */}
                            <div className="h6 title">Get In Touch</div>
                            {/* title End */}
                            <div className="wrapper">
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-phone-alt" />
                                    <Link to={'tel:+16043561949'}>+1 (604) 356-1949</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-envelope" />
                                    <Link to={'mailto:info@mkprotax.ca'}>info@mkprotax.ca</Link>
                                </div>
                                {/* single ENd */}
                               
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link href="#">13/A, New Pro State, Canada</Link>
                                </div>
                                {/* single ENd */}
                            </div>
                            <div className="social-wrapper-two menu">
                                <Link href="#">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-twitter" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-instagram" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-whatsapp" />
                                </Link>
                                {/* <Link href="#"><i class="fab fa-linkedin"></i></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                            <li>
                        <Link to={'/'} >
                            Home
                        </Link>

                    </li>
                    <li className="">
                        <Link to={'/our-service'}>
                            Services
                        </Link>

                    </li>
                    <li>
                        <Link to={'/about-us'}>About Us</Link>
                    </li>

                    <li>
                        <Link to={'/testimonial'}>
                        Testimonials
                        </Link>

                    </li>


                    <li>
                        <Link className="nav-item" to={'/contactus'}>
                            Contact
                        </Link>
                    </li>
                            </ul>
                        </nav>
                        <div className="social-wrapper-two menu mobile-menu">
                            <Link href="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-whatsapp" />
                            </Link>
                            {/* <Link href="#"><i class="fab fa-linkedin"></i></Link> */}
                        </div>
                        <Link
                            href="#"
                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
                {/* inner menu area desktop End */}
            </div>


        </div>
    )
}

export default SideMenu