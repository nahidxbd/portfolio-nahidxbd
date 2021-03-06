import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../images/My Images/LOGO.png"
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img style={{width:"130px"}} src={logo} alt=""/>
                    </Link>
                    <button className="navbar-toggler" to="/" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/blogs">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/contact">Contact</Link>
                            </li>

                            <li>
                            <a className='link' href="https://drive.google.com/file/d/11_-h9bpVZ-9dc_PWAMmDKUNuI-P4qzmK/view?usp=sharing" target="_blank">
                            <button
                                style={{ padding: '4px 20px' }}
                                type="button"
                                className='mr-5  btn btn-outline-danger text-white font-weight-bold'>Download CV</button></a>
                            </li>
                        </ul>

                       

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;