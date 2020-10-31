import React from 'react';
import blog from '../../images/blogs//Blog.png';
import Navbar from '../Header/Navbar/Navbar';
const AllBlogs = () => {
    return (
          <section>
              <Navbar></Navbar>
          
            <div className="container">
            <div className="my-5">
                <h1>My Blogs</h1>
                <div className="row my-5">
                    <div className="col-md-6">
                        <div class="card">
                            <img src={blog} class="card-img-top card-shadow img-fluid" alt="..." />
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default AllBlogs;