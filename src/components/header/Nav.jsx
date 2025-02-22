import React from 'react'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
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
        </div>
    )
}

export default Nav