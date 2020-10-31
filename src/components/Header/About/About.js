import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import profile from "../../../images/My Images/ProfilePIC.png";
import './About.css';
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
           

<div class="row no-gutters">
  <div class="col-12 col-sm-6 col-md-8 text-center ">
  <img   src={profile} alt=""/>
   <h2 style={{paddingBottom:"20px"}}>Md.Nahidul Islam</h2>
   <p>Independent Front End Developer With skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.</p>
   <div class="social-menus ">
                                <ul>
                                    <li><a href="https://github.com/nahidxbd" target="_blank"><i class="fa fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/nahidxbd" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.facebook.com/nahidxbd" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                                </ul>
                            
                        </div>
  </div>
  <div class="col-6 col-md-4">
 
                   <ul>
                       <h3 className="skill">I'm Comfortable With:</h3>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li>JavaScript</li>
                       <li>React</li>
                       <li>ES6</li>
                       <li>Bootstrap</li>
                       <li>React Router</li>
                       <li>Material-UI</li>
                       
                   </ul>
                   <ul>
                       <h3 className="skill">I'm Familiar In:</h3>
                       <li>MongoDB</li>
                       <li>Express.js</li>
                       <li>Node.js</li>
                       <li>SASS</li>
                       <li>ES6</li>
                       <li>Firebase</li>
                       <li>Netlify</li>
                       <li>Heroku</li>
                       
                   </ul>
                  
  </div>
</div>



        </div>
    );
};

export default About;