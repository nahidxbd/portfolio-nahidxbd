import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import profile from "../../../images/My Images/profile-01.png";
import './About.css';
import DarkMode from '../../DarkMode/DarkMode';
const About = () => {
    return (
        
            
           
           <div className="container">
               <Navbar></Navbar>
               {/* <DarkMode></DarkMode> */}
               <div className="row">
                   <div className="col-md-7 mx-auto  animate__animated animate__fadeInBottomLeft">
                       
<img className='img-fluid pt-5 profileImage' src={profile} alt=""/>
<p>Hello,My name is <h3 style={{color:'black'}}>Nahidul Islam</h3> <br/>
I am a passionate MERN stack JavaScript developer with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.</p>

<a className='link' href="https://drive.google.com/file/d/11_-h9bpVZ-9dc_PWAMmDKUNuI-P4qzmK/view?usp=sharing" target="_blank">
                            <button
                                style={{ padding: '4px 20px' }}
                                type="button"
                                className='mr-5 mb-5  btn btn-danger text-white font-weight-bold'>Full details about me </button></a>
                   </div>
                   <div className="col-md-5  skillsPadding animate__animated animate__fadeInBottomRight">
                   

<h5>Expertise</h5>
<div className="mySkills">

<span>HTML</span>
<span>CSS</span>
<span>Bootstrap</span>
<span>React</span>
<span> JavaScript</span>

</div>

<h5>Comfortable</h5>
<div className="mySkills">

<span>Mongodb</span>
<span>Material-UI</span>
<span>Node-Js</span>
<span>SASS</span>


</div>

<h5>Familiar</h5>
<div className="mySkills">

<span>Angular-JS</span>
<span>Redux</span>
<span>Data Structure</span>
<span>OOP</span>
<span>Algorithm</span>

</div>

<h5>Tools</h5>
<div className="mySkills">

<span>VS Code</span>
<span>Git</span>
<span>Chrome Dev Tool</span>
<span>Firebase</span>
<span>Netlify</span>

</div>

<h5>Good at</h5>
<div className="mySkills">

<span>Adobe Photoshop</span>
<span>Adobe Illustrator</span>



</div>
     
                   </div>
               </div>
           </div>
   );
};

export default About;