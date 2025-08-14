// import React from 'react';
// import {  AiFillGithub, AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { contactDetails } from '../Details';
// import '../Style/Contact.css'

// export default function Contact() {
//     const { email, phone } = contactDetails;

//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <h2 className='mt-5 text-center'>Contact Me</h2>
//                         <p className='fs-5 mt-3 text-center'>Let's Work Together</p>
//                         <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus inventore architecto eos suscipit accusantium sapiente eius dignissimos? Laborum ducimus rerum perferendis sequi, est blanditiis!</p>

//                         <div className="text-center">
//                            <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
//                            Email: <a href={`mailto:${email}`}>{email}</a>
//                             </h3>
//                             <span className="text-center text-content text-xl font-light block">or</span>
//                            <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
//                            Contact: <a href={`tel:${phone}`}>{phone}</a>
//                             </h3>
//                         </div>

//                         <ul className="home-about-social-links text-center">
//                             <li className="social-icons mx-3">
//                                 <a href="https://github.com/hokage-maulik" target="_blank" rel="noreferrer" className="icon-colour home-social-icons text-white">
//                                     <AiFillGithub size={40} />
//                                 </a>
//                             </li>
//                             <li className="social-icons mx-3">
//                                 <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer" className="icon-colour home-social-icons text-white">
//                                     <FaLinkedinIn size={40} />
//                                 </a>
//                             </li>
//                             <li className="social-icons mx-3">
//                                 <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons text-white">
//                                     <AiFillInstagram size={40} />
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* <div className="col-md-6">
//                         <form>
//                             <input type="text" placeholder='Enter your Name' required />
//                             <input type="email" placeholder='Enter your Email' required />
//                             <input type="text" placeholder='Enter your Subject' required />
//                             <textarea placeholder='Enter your Message' rows="5" required></textarea>
//                             <input type="submit" value="Send Message" />
//                         </form>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';
// import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { contactDetails } from '../Details';
import '../Style/Contact.css';

export default function Contact() {
    const { email, phone } = contactDetails;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mt-5 text-center">Contact Me</h2>
                        <p className="fs-5 mt-3 text-center">Let's Work Together</p>
                       

                        <div className="text-center">
                            <h3
                                className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6"
                                style={{ color: "white" }}
                            >
                                Email: <a href={`mailto:${email}`} style={{ color: "white" }}>{email}</a>
                            </h3>
                            <span className="text-center text-content text-xl font-light block">or</span>
                            <h3
                                className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6"
                                style={{ color: "white" }}
                            >
                                Contact: <a href={`tel:${phone}`} style={{ color: "white" }}>{phone}</a>
                            </h3>
                        </div>

                        <ul className="home-about-social-links text-center">
                            {/* <li className="social-icons mx-3">
                                <a href="https://github.com/hokage-maulik" target="_blank" rel="noreferrer" className="icon-colour home-social-icons text-white">
                                    <AiFillGithub size={40} />
                                </a>
                            </li> */}
                            <li className="social-icons mx-3">
                                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer" className="icon-colour home-social-icons text-white">
                                    <FaLinkedinIn size={40} />
                                </a>
                            </li>
                            {/* <li className="social-icons mx-3">
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons text-white">
                                    <AiFillInstagram size={40} />
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
