import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import creativeAgency from '../../images/projects/creativeAgency.png';
import travelGuru from '../../images/projects/travelGuru.png';
import volunteerNetwork from '../../images/projects/VolunteerNetwork.png';
import Athena from '../../images/projects/athena.PNG'
import gym from '../../images/projects/powerxgym.PNG'
import './AllProject.css';

const AllProjects = () => {

    return (
        <div className="">
            <Navbar></Navbar>

           <div>
               

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
                                        <a style={{ color: "white" }} href="https://creative-agency-client-nahidx.web.app/" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Live Site</button>
                                        </a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/nahidxbd/creative-agency-client" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Github</button>
                                        </a>
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
                                        <a style={{ color: "white" }} href="https://travel-guru-nahidxbd.web.app/" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Live Site</button>
                                        </a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/nahidxbd/travel-guru-nahidxbd" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Github</button>
                                        </a>
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
                                        <a style={{ color: "white" }} href="https://volunteer-network-nahidxbd.web.app/" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Live Site</button>
                                        </a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/nahidxbd/volunteer-network-client" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Github</button>
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 my-3">
                        <div class="card">
                            <img src={gym} class="card-img-top img-fluid " alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">Power-X-Gym</h5>
                                <p class="card-text">
                                    <strong>A Gymnasium Website.</strong>
                                    <br/>
                                    A Gymnasium website provides many services as like Membership, offer, Instruction, consultancy, etc.
                                    <br/>
                                    User can see packages, plans, membership etc. without the physically present at gym and can take better services with his/her budget.
                                    <br/>
                                    User friendly pages, they can contact by form and many ways.
                                   
                                </p>
                                <div className="technology">
                                    <span>React.js</span>
                                    <span>Bootstrap</span>
                                    <span>Netlify</span>
                                    <span>Express JS</span>
                                    <span>Heroku</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                <div className="d-flex justify-content-between">
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://power-gym-5f127.web.app/" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Live Site</button>
                                        </a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/nahidxbd/power-gym-client-main" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Github</button>
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 my-3">
                        <div class="card">
                            <img src={Athena} class="card-img-top img-fluid " alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">Athena Design</h5>
                                <p class="card-text">
                                    <strong>Design Agency Website.</strong>
                                    <br/>
                                    Anyone can see the services provided by Athena Design in this site and also can buy a service.
                                    <br/>
                                    There have many pricing plans and client can claim one by this website without physically handover.
                                   
                                </p>
                                <div className="technology">
                                    <span>React.js</span>
                                    <span>Node JS</span>
                                    <span>JavaScript(ES6)</span>
                                    <span>Bootstrap</span>
                                    <span>Netlify</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                <div className="d-flex justify-content-between">
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://athenadesignteamwork.netlify.app/" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Live Site</button>
                                        </a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/nahidxbd/athena-design-main" rel="noopener noreferrer" target="_blank">
                                        <button type="button" class="btn btn-outline-danger">Github</button>
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 my-3">
                        <div class="card">
                          
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body text-center pt-5">
                                <h5 style={{color:'#e71809'}} class="card-title">Upcoming More <br/> P R O J E C T S </h5>
                               
                            </div>

                            
                        </div>
                    </div>
                </div>


            </div>

        </div >

    );
};

export default AllProjects;