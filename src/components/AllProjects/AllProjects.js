import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import creativeAgency from '../../images/projects/creativeAgency.png';
import travelGuru from '../../images/projects/travelGuru.png';
import volunteerNetwork from '../../images/projects/VolunteerNetwork.png';
import './AllProject.css';

const AllProjects = () => {

    return (
        <div className="">
            <Navbar></Navbar>

           <div>
                <h2 style={{textAlign:"center"}}>P R O J E C T S</h2>

                <div className="row d-flex mt-5">
                    <div className="col-md-4 my-3">
                        <div class="card">
                            <img src={creativeAgency} class="card-img-top card-shadow img-fluid" alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">Creative Agency</h5>
                                <p class="card-text"><strong>An agency which provide many services</strong>
                                <br/>
                                Creative agency is a service provider organization.It has a multi-level user dashboard.
                                <br/>
                                Admin: Add service, Make admin, show all order.
                                <br/>
                                User: Make order, Review, Own order list.
                       
                        </p>


                                <div className="technology">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MongoDB</span>
                                    <span>Firebase</span>
                                    <span>Heroku</span>
                                    <span>Bootstrap</span>
                                </div>

                            </div>
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                <div className="d-flex justify-content-between">
                                    <h6 >
                                        <a style={{ color: "white" }} href="https://creative-agency-client-nahidx.web.app/" rel="noopener noreferrer" target="_blank">Website</a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/nahidxbd/creative-agency-client" rel="noopener noreferrer" target="_blank">github</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div class="card">
                            <img src={travelGuru} class="card-img-top img-fluid " alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">Travel Guru</h5>
                                <p class="card-text">
                                    <strong>A website for travelers.</strong>
                                    <br/>
                                    Authenticated users can choose a place.
                                    <br/>
                                    Getting hotels for booking by providing dates.
                                    <br/>
                                    Google map is included.
                                   
                                </p>
                                <div className="technology">
                                    <span>React.js</span>
                                    <span>Bootstrap</span>
                                    <span>Material-UI</span>
                                    <span>Google Map API</span>
                                    <span>Firebase</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                <div className="d-flex justify-content-between">
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://travel-guru-nahidxbd.web.app/" rel="noopener noreferrer" target="_blank">Website</a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/nahidxbd/travel-guru-nahidxbd" rel="noopener noreferrer" target="_blank">github</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div class="card">
                            <img src={volunteerNetwork} class="card-img-top img-fluid" alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">Volunteer Network</h5>
                                <p class="card-text">
                                    <strong>User can register as a volunteer</strong>
                                    <br/>
                                    User can check all of his/her registered event list in users dashboard. and user can cancel his/her registered event.
                                    <br/>
                                    Admin can add or remove events also admin can control users activity.
                                    
                                </p>
                                <div className="technology">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MongoDB</span>
                                    <span>Firebase</span>
                                    <span>Heroku</span>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                <div className="d-flex justify-content-between">
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://volunteer-network-nahidxbd.web.app/" rel="noopener noreferrer" target="_blank">Website</a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/nahidxbd/volunteer-network-client" rel="noopener noreferrer" target="_blank">github</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div >

    );
};

export default AllProjects;