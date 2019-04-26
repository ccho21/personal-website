import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../route";

import logoImage from "../../assets/images/profile.jpg";
const navigation = props => {
    const toggleNav = e => {
        const id = e.target.closest(".collapse-btn").dataset.collapse;
        const nav = document.querySelector(`#${id}`);
        console.log(nav.classList.toggle("visible"));
    };
    const closeNav = e => {
        const nav = e.target.closest(".nav-item").parentNode.parentNode
            .parentNode;
        if (nav.classList.contains("visible")) {
            nav.classList.remove("visible");
        }
    };
    return (
        <main>
            {/* Mobile NAV */}
            <div className='mobile-nav'>
                <div className='logo'>
                    <img src={logoImage} alt='' />
                    <div className='title'>
                        <h1>CHARLES CHO</h1>
                    </div>
                </div>
                <div
                    className='collapse-btn'
                    onClick={toggleNav}
                    data-collapse='main-nav'
                >
                    <i className='fas fa-bars' />
                </div>
            </div>
            {/* Mobile Navigation Ends */}
            
            <div className='side-nav' id='main-nav'>
                <div className='logo'>
                    <img src={logoImage} alt='' />
                </div>
                <div className='title'>
                    <h1>CHARLES CHO</h1>
                </div>
                <nav className='main-nav text-center'>
                    <ul className='nav flex-column main-nav__dropdown'>
                        {
                            routes.map(route => {
                                return (
                                    <li className='nav-item'
                                    key={route.path}>
                                    <NavLink
                                        to={route.path}
                                        className='nav-link'
                                        onClick={closeNav}
                                        exact={route.exact}
                                    >
                                        <span>{route.name}</span>
                                    </NavLink>
                                </li>
                                );
                            })
                        }
                        
                        {/* <li className='nav-item'>
                            <NavLink
                                to='/about'
                                exact
                                className='nav-link'
                                onClick={closeNav}
                            >
                                <span>ABOUT ME</span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/resume'
                                className='nav-link'
                                onClick={closeNav}
                            >
                                <span>RESUME</span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/portfolio'
                                className='nav-link'
                                onClick={closeNav}
                            >
                                <span>PORTFOLIO</span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/contact'
                                className='nav-link'
                                onClick={closeNav}
                            >
                                <span>CONTACT</span>
                            </NavLink>
                        </li> */}
                    </ul>
                </nav>

                <ul className='sns-list'>
                    <li>
                        <i className='fab fa-linkedin' />
                    </li>
                    <li>
                        <i className='fab fa-github-square' />
                    </li>
                    <li>
                        <i className='fab fa-twitter-square' />
                    </li>
                </ul>
                <div className='copyright'>
                    <p>
                        <i className='fab fa-github' /> &nbsp;copyright
                    </p>
                </div>
            </div>
        </main>
    );
};

export default navigation;
