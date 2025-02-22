import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import SideMenu from './SideMenu';


function HeaderOne() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [isSearchVisible, setSearchVisible] = useState(false);

    const handleSearchClick = () => {
        setSearchVisible(true);
    };

    const handleCloseClick = () => {
        setSearchVisible(false);
    };

    const handleBackgroundClick = () => {
        setSearchVisible(false);
    };
    return (

        <div>
            {/* start header area */}
            <header className={`header--sticky header-one  ${isSticky ? 'sticky' : ''}`}>
                <div className="header-top header-top-one bg-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-xl-block d-none">
                                <div className="left">
                                    <div className="mail">
                                        <Link to={'mailto:webmaster@example.com'}>
                                            <i className="fal fa-envelope" /> info@protax.com
                                        </Link>
                                    </div>
                                    <div className="working-time">
                                        <p>
                                            <i className="fal fa-phone" /> +1 (604) 356-1949
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-xl-block d-none">
                                <div className="right">
                                    <ul className="top-nav">
                                    <li>
                                            <Link to={'#'}>
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="fab fa-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="fab fa-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="mr--0" to={'#'}>
                                                <i className="fab fa-linkedin-in" />
                                            </Link>
                                        </li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main-one bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="thumbnail">
                                    <Link to={'/'} >
                                        <img src="/assets/images/logo/logo-1.svg" alt="protax-logo" style={{width:'200px'}} />
                                    </Link>
                                </div>
                            </div>
                            <div className=" col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
                                <div className="main-header">
                                    <Nav />
                                    <div className="button-area">
                                     
                                        <button
                                            id="menu-btn"
                                            className="menu rts-btn btn-primary-alta ml--20 ml_sm--5"
                                            onClick={toggleSidebar}>
                                            <img
                                                className="menu-dark"
                                                src="/assets/images/icon/menu.png"
                                                alt="Menu-icon"
                                            />
                                            <img
                                                className="menu-light"
                                                src="/assets/images/icon/menu-light.png"
                                                alt="Menu-icon"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* End header area */}
           

            <div id="anywhere-home" className={isSearchVisible ? 'bgshow' : ''} onClick={handleBackgroundClick}></div>



            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default HeaderOne