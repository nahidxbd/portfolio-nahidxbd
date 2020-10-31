import React from 'react';
import { Link } from "react-router-dom";
import './Work.css';
const Work = () => {
    return (
        <section  className="container ">
           <div style={{textAlign:"center",paddingBottom:"20px"}}>
           <h1 ><strong>P R O J E C T S</strong></h1>
           </div>
            <div  style={{width:"50%"}} class="card text-center mb-5 mx-auto">
            <a href="https://github.com/nahidxbd/travel-guru-nahidxbd" class="btn btn-dark">Github</a>
  <div style={{ color: "black"}}  class="card-body">
    <h5 class="card-title">Travel Guru</h5>
    <p class="card-text">A website for travelers</p>
    <a href="/projects" class="btn btn-outline-info">Details</a>
  </div>
  <a href="https://travel-guru-nahidxbd.web.app/" class="btn btn-dark">Live Site</a>
</div>

<div style={{width:"50%"}} class="card text-center mb-5 mx-auto">
<a href="https://github.com/nahidxbd/creative-agency-client" class="btn btn-dark">Github</a>
  <div style={{ color: "black"}} class="card-body">
    <h5 class="card-title">Creative Agency</h5>
    <p class="card-text">An agency which provide many services</p>
    <a href="/projects" class="btn btn-outline-info">Details</a>
  </div>
  <a href="https://creative-agency-client-nahidx.web.app/" class="btn btn-dark">Live Site</a>
</div>

<div style={{width:"50%"}} class="card text-center mb-5 mx-auto">
<a href="https://github.com/nahidxbd/volunteer-network-client" class="btn btn-dark">Github</a>
  <div style={{ color: "black"}}  class="card-body">
    <h5 class="card-title">Volunteer Network</h5>
    <p class="card-text">User can register as a volunteer</p>
    <a href="/projects" class="btn btn-outline-info">Details</a>
  </div>
  <a href="https://volunteer-network-nahidxbd.web.app/" class="btn btn-dark">Live Site</a>
</div>
            
                     
        </section>
    );
};

export default Work;