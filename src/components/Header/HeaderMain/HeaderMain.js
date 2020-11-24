import React from 'react';
import profile from '../../../images/My Images/profile-01.png';


import Typist from 'react-typist';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-8 my-5">
                       
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
                                <span>MERN stack JavaScript developer </span>
                                <Typist.Backspace count={21} delay={500} />
                                <span>JavaScript developer</span>
                            </Typist>
                        </h3>
                        
                        <p className="my-5">MERN stack JavaScript developer with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.</p>
                        
                            <div class="social-menu animate__animated animate__bounceInLeft">
                                <ul>
                                    <li><a href="https://github.com/nahidxbd" target="_blank"><i class="fa fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/nahidxbd" target="_blank"><i class="fa text-center fa-linkedin"></i></a></li>
                                    <li><a href="https://www.facebook.com/nahidxbd" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                                </ul>
                            
                        </div>
                      
                    </div>
                    <div className="col-md-4 ">
                        <img className="img-fluid pt-5 mx-auto profilePic animate__animated animate__heartBeat" src={profile} alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default HeaderMain;