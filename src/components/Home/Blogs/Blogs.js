import React from 'react';
import blog1 from '../../../images/blogs/blog1.jpeg'
const Blogs = () => {
    return (
        <div className="container">
            <div className="my-5">
                <h1>My Blogs</h1>
                <div className="row my-5">
                    <div className="col-md-6">
                        <div class="card">
                            <img src={blog1} class="card-img-top card-shadow img-fluid" alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">10 Basic JavaScript Things</h5>
                                <p class="card-text">JavaScript is Generally used for Developing Web Apps, Websites etc.
                         So I would Suggest to Learn HTML and CSS and know about these, Because these are also used for Web apps ,Web Designs and Websites etc.
                        
                        </p>
                        <a href="https://medium.com/@shohelranaBaig/10-basic-javascript-things-444bffa6f8f0" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-warning">Read Details</button>
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;