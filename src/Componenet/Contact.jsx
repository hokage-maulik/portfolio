import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../Style/Contact.css'

export default function Contact() {


    return (
        <div className="contact-container">
            <div className="container mt-5">
                <div className="contact-header">
                    <h1 className="contact-title">
                        Get in <span className="purple">Touch</span>
                    </h1>
                    <p className="contact-subtitle">
                        Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 contact-info">
                        <div className="contact-box">
                            <h3 className="contact-section-title">Contact Information</h3>

                            <div className="contact-item">
                                <h5>Email</h5>
                                <a href="mailto:maulik@example.com" className="contact-link">
                                    maulik.vaghela@example.com
                                </a>
                            </div>

                            <div className="contact-item">
                                <h5>Phone</h5>
                                <a href="tel:+919876543210" className="contact-link">
                                    +91 63533 12962
                                </a>
                            </div>

                            <div className="contact-item">
                                <h5>Location</h5>
                                <p className="contact-text">Ahmedabad, India</p>
                            </div>

                            <div className="social-section">
                                <h5>Connect With Me</h5>
                                <ul className="home-about-social-links">
                                    <li className="social-icons">
                                        <a href="https://github.com/hokage-maulik" target="_blank" rel="noreferrer" className="social-link">
                                            <AiFillGithub size={35} />
                                        </a>
                                    </li>
                                    <li className="social-icons">
                                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-link">
                                            <FaLinkedinIn size={35} />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}
