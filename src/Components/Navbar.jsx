import React, { useContext } from 'react';
import logo from "../Icons/main-logo.png";
import { NavLink } from 'react-router-dom';
import { AppContext } from './ContextStates';


function dropDownList(coll) {

    const url = ("" + coll.name).toString().toLowerCase().replaceAll(" ", "-");

    return (
        <li className='text-start px-3 py-1 text-nowrap'>
            <NavLink class="dropdown-item" to={'/tools/' + url} className="text-decoration-none text-light">
                {coll.name}
            </NavLink>
        </li>
    )
}

function NavBar() {
    const collections = useContext(AppContext).collections.data;
    const categories = useContext(AppContext).categories;


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid my-1">
                        
                    <NavLink to="/">
                        <img className="navbar-brand ms-3" style={{ "width": "8vw", "minWidth": "100px" }} src={logo} />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                            <li className="nav-item dropdown mx-3">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="true">
                                    Construction
                                    Tools
                                </a>
                                <ul className="dropdown-menu">

                                   {collections.map((value) => {
                                        return (
                                            <>{(value.category == 1) ? dropDownList(value) : ""}</>
                                        )
                                    })}
                                    
                                </ul>
                            </li>



                            <li className="nav-item dropdown mx-3">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="true">
                                    Stone Tools
                                </a>
                                <ul className="dropdown-menu">
                                    
                                   {collections.map((value) => {
                                        return (
                                            <>{(value.category == 2) ? dropDownList(value) : ""}</>
                                        )
                                    })}
                           
                                </ul>
                            </li>



                            <li className="nav-item dropdown mx-3">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="true">
                                    About
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to="/about-us">
                                            About Company
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/faqs">
                                            FAQ's
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item mx-3">
                                <NavLink className="nav-link  text-light" to="/technology">Technology
                                </NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink className="nav-link text-light" to="/contact-us">
                                    <i className="fa fa-phone"></i>
                                    Contact Us
                                </NavLink>
                            </li>

                        </ul>


                    </div>

                    {/*  <li className="nav-item px-3" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="fa-solid fa-magnifying-glass fa-lg" style="color: #ffffff; border: none;"></div>
                        </li>*/}

                </div>
            </nav>
        </>
    )
}

export default NavBar;