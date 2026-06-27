import React, { useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../Style/Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

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
                                    +91 98765 43210
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

                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                            
                            {submitted && (
                                <div className="success-message">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
