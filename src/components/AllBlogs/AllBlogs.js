import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import bg1 from '../../images/blogs/m-1.PNG'
import bg2 from '../../images/blogs/m-2.PNG'
import bg3 from '../../images/blogs/m-3.PNG'
import bg4 from '../../images/blogs/m-4.PNG'
import css from './AllBlogs.css'

const AllBlogs = () => {
    return (
        <div className="">
        <Navbar></Navbar>

       <div>
           

            <div className="row d-flex mt-5">
            <div className="col-md-4 my-3">
                    <div class="card blogsPic">
                        <img src={bg1} class="card-img-top img-fluid " alt="..." />
                        <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                            
                            <p>React Hooks are a way for function components to “hook” into React’s life cycle and state.They were introduced in React 16.8.0.They let you use state and other React features without writing a class.Basic hooks are useState,useEffect,useContext.Additionals hooks are...</p>
                            
                            
                        </div>

                        <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                            <div className="d-flex justify-content-between">
                                
                                <h6 class="text-muted">
                                    <a style={{ color: "white" }} href="https://nahidxbd87.medium.com/lets-recap-some-things-about-javascript-15ab33d23e33" rel="noopener noreferrer" target="_blank">
                                    <button type="button" class="btn btn-outline-danger">Read more</button>
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div class="card blogsPic">
                        <img src={bg2} class="card-img-top img-fluid " alt="..." />
                        <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                            
                            <p>React is a JavaScript library for building user interfaces.It is not exactly a framework either it is a JavaScript library.You will often need to use more libraries with React to form any solution.React makes it painless to create...</p>
                            
                            
                        </div>

                        <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                            <div className="d-flex justify-content-between">
                                
                                <h6 class="text-muted">
                                    <a style={{ color: "white" }} href="https://nahidxbd87.medium.com/title-315c82ec4028" rel="noopener noreferrer" target="_blank">
                                    <button type="button" class="btn btn-outline-danger">Read more</button>
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div class="card blogsPic">
                        <img src={bg3} class="card-img-top img-fluid " alt="..." />
                        <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                            
                            <p>Data types basically specify what kind of data can be stored and manipulated within a program. There are two kinds of JavaScript values and they are 1)Primitive values and 2)Object and Functions. The 9 types of primitive values are Undefined, Null, Booleans, Numbers...</p>
                            
                            
                        </div>

                        <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                            <div className="d-flex justify-content-between">
                                
                                <h6 class="text-muted">
                                    <a style={{ color: "white" }} href="https://nahidxbd87.medium.com/lets-introduce-10-basic-things-in-javascript-1dde8a5c4f24" rel="noopener noreferrer" target="_blank">
                                    <button type="button" class="btn btn-outline-danger">Read more</button>
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-3">
                    <div class="card blogsPic">
                        <img src={bg4} class="card-img-top img-fluid " alt="..." />
                        <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                            
                            <p>Why Java-Script?
Now-a- days Web applications are the dominant way that people interact with the computing universe, and JavaScript is the foundation here. Unlike most programming languages, Java-Script has nothing about input and output. It is designed to run as a scripting language...</p>
                            
                            
                        </div>

                        <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                            <div className="d-flex justify-content-between">
                                
                                <h6 class="text-muted">
                                    <a style={{ color: "white" }} href="https://nahidxbd87.medium.com/some-ingredients-in-a-javascript-mug-4fe19d437652" rel="noopener noreferrer" target="_blank">
                                    <button type="button" class="btn btn-outline-danger">Read more</button>
                                    </a>
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

export default AllBlogs;