import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import emailjs from 'emailjs-com';
import './Contact.css';
const Contact = () => {

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
        <div>
            <Navbar></Navbar>
            <div className="container col-md-6 animate__animated animate__zoomIn">
                <div className=" my-5">

                    <div style={{ backgroundColor: "rgb(23, 42, 69)" }} className='mx-auto contact-form my-3 p-3 px-4' >
                        <div className="">
                            <h2 className="text-center mb-4"><strong>Let's Talk</strong></h2>
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
                                    <button  type="submit" className="btn btn-outline-success">Send</button>
                                    
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;