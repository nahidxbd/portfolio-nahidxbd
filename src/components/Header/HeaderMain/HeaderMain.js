import React from 'react';
import profile from '../../../images/My Images/ProfilePIC.png';
import { Link } from "react-router-dom";

import Typist from 'react-typist';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <section>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6 my-5">
                        {/* <h5 style={{ color: '#e9af1d' }}>Hi, I'm</h5> */}
                        <div style={{ color: '#e71809' }} className="div">
                        <Typist cursor={{
                                "hideWhenDone": true,
                                "hideWhenDoneDelay": 0
                            }}>
                                <span> Hi,I am </span>
                                <Typist.Backspace count={8} delay={500} />
                                <span>Hi,I am</span>
                            </Typist>
                        </div>
                        <h1  style={{ fontSize: "60px" }}>Nahidul islam</h1>
                        <h3 style={{ color: '#e71809' }} className="mb-4">

                            <Typist cursor={{
                                "hideWhenDone": true,
                                "hideWhenDoneDelay": 0
                            }}>
                                <span> Front End Web </span>
                                <Typist.Backspace count={8} delay={500} />
                                <span>Web Developer </span>
                            </Typist>
                        </h3>
                        
                        <p className="my-5">Independent Front End Developer With skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.</p>
                        
                            <div class="social-menu ">
                                <ul>
                                    <li><a href="https://github.com/nahidxbd" target="_blank"><i class="fa fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/nahidxbd" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.facebook.com/nahidxbd" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                                </ul>
                            
                        </div>
                        {/* <Link to="/contact">
                            <button style={{ backgroundColor: '#e71809' }} className="btn">Contact</button>
                        </Link> */}
                    </div>
                    <div className="col-md-6 my-3">
                        <img
                            className=" mx-5 "

                            style={{width: "400px"}}
                            src={profile}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;