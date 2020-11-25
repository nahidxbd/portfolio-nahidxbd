import React from 'react';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import bg1 from '../../images/projects/athena.PNG'
import bg2 from '../../images/projects/travelGuru.png'
import bg3 from '../../images/projects/VolunteerNetwork.png'
import bg4 from '../../images/projects/powerxgym.PNG'
import bg5 from '../../images/projects/creativeAgency.png'

import './Work.css';
const Work = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ajk2sfi', 'template_6s0iy7w', e.target, 'user_qMW0JUvq68OCyOVI4G312')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}

    return (

        <div className="container ">

<div className="row">

  <div className="col-md-6 pt-5 w-100">
  <div className="nav-item animate__animated animate__bounceInLeft">
 
  <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/projects"><h3 style={{color:'#e71809'}}>Project Details</h3></Link>
  </div>
  <div >
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
 
  <div class="carousel-inner">
  
    <div class="carousel-item active">
    
       <img  class="d-block w-100"  src={bg4} alt="First slide"/>


       <div class="carousel-caption d-none d-md-block  ">
      
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={bg3} alt="Second slide"/>

      <div class="carousel-caption d-none d-md-block  ">
     
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={bg1} alt="Third slide"/>

      <div class="carousel-caption d-none d-md-block  ">
   
  </div>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={bg5} alt="Third slide"/>

      <div class="carousel-caption d-none d-md-block  ">
    
  </div>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={bg2} alt="Third slide"/>

      <div class="carousel-caption d-none d-md-block  ">
    
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon  bg-success" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon  bg-success" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  </div>







  </div>


  <div className="col-md-6 pl-5 pt-5 animate__animated animate__fadeInUp">

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




<div className="row">
  <div className="col-md-6">
    
  <ol className="objective">
  <h4 style={{paddingBottom:'20px',color:'#e71809'}}>Why you hire me?</h4>
            <li>Experience designing and programming web pages.</li>
            <li>Excellent trouble shooting and bug resolutions abilities.</li>
            <li>Critical thinking and problem-solving skills.</li>
            <li>Evaluation and analysis abilities.</li>
            <li>Strong attention to small details.</li>
            <li>Experience working as part of a team toward a singular goal.</li>
            <li>Familiar filing reports, gathering information, and performing research.</li>
        </ol>
  </div>
  <div className="col-md-6">
  <div className="my-5 pt-5">

<div style={{ backgroundColor: "rgb(23, 42, 69)" }} className='mx-auto contact-form my-3 p-3 px-4' >
    <div className="">
        <h2 className="text-center mb-4"><strong style={{color:'#e71809'}}>Let's Talk</strong></h2>
        <form action="" onSubmit={sendEmail} >
            <div className="form-group">
                <input name="user_name" placeholder="Your Name" type="text" className="form-control" />
            </div>
            <div className="form-group">
                <input name="user_email" placeholder="Your Email" type="email" className="form-control" />
            </div>
            <div className="form-group">
                <textarea name="message" rows="4" placeholder="Your Message" type="text" className="form-control"></textarea>
            </div>
            <div className=" text-right form-group">
                <button  type="submit" className="btn btn-outline-success submitButton">Send</button>
                
            </div>
            
        </form>
    </div>
</div>
</div>
  </div>

  <div className="container">
           <div className="row">
               {/* Clients comment section */}

  <div id="carouselExampleIndicators" class="carousel slide mx-auto pt-5 col-md-6" data-ride="carousel">
 
 <div class="carousel-inner pb-5 pt-5">
   <div class="carousel-item active text-center clientsComment">
     <h3 className='pb-4 clientHeader'>what client says!</h3>
     <p>"It has been a real pleasure to work with Nahidul Islam. I have been extremely happy with his professionalism, quality of work and creative ideas. He is very focused on getting the job done in a timely manner, and is a great communicator. " <br/> <h5>-- Stu Cass</h5></p>
   </div>
   <div class="carousel-item text-center clientsComment">
   <h3 className='pb-4 clientHeader'>what client says!</h3>
     <p>"The site looks absolutely terrific. I'm very pleased. Thank you so much for all of your hard work, guidance, and patience...Many thanks. You're the best!"
       <br/><h5>-- Kelly Hughes</h5>

</p>
   </div>
   <div class="carousel-item text-center clientsComment">
   <h3 className='pb-4 clientHeader'>what client says!</h3>
     <p>"Thank you so much for all your work. You did it so quickly. You did a great job and were very easy to work with. We look forward to seeing you at one of our art shows!"
       <br/> <h5>-- Jane and Sue Shaffer</h5>

</p>
   </div>

   <div class="carousel-item text-center clientsComment">
     
   <h3 className='pb-4 clientHeader'>what client says!</h3>
     <p >"I was just going over our new Elizabeth Lynch Photography website, and I wanted to say THANK YOU because it looks fabulous. Kudos to your expertise and hours logged in front of the computer screen." <br/><h5>-- Elizabeth Lynch</h5></p>
   </div>

   <div class="carousel-item text-center clientsComment">
   <h3 className='pb-4 clientHeader'>what client says!</h3>
     <p>"We have been very happy with everything that you have done for us, and how things have worked. We have all been on the same page throughout the design process; and that, as we all know, is a big part of saving time and money." <br/><h5>-- Jeff Estes</h5></p>
   </div>
 </div>
 <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
   <span class="" aria-hidden="true"></span>
   <span class="sr-only">Previous</span>
 </a>
 <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
   <span class="" aria-hidden="true"></span>
   <span class="sr-only">Next</span>
 </a>
</div>
           </div>
       </div>

</div>


     
    
  </div>
  
        
       
    );
};

export default Work;