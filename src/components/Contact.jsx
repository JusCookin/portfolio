import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:agashjagan2004@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const FloatingParticle = ({ delay = 0 }) => (
    <div 
      className="floating-particle" 
      style={{ 
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    >
      <Sparkles size={12} />
    </div>
  );

  return (
    <div className={`section contact-section ${isVisible ? 'section-visible' : ''}`}>
      {/* Background Elements */}
      <div className="contact-bg-overlay">
        {[...Array(8)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>
      
      {/* Mouse Follower */}
      <div 
        className="mouse-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      <div className="section-header">
        <h2 className="section-title glitch-text" data-text="Get In Touch">
          Get In Touch
        </h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info animate-slide-left">
          <div className="info-card">
            <h3 className="info-title">
              <span className="gradient-text">Contact Information</span>
            </h3>
            
            <div className="contact-items">
              <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-icon">
                  <Mail size={20} />
                  <div className="icon-ripple"></div>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Email</p>
                  <a 
                    href="mailto:agashjagan2004@gmail.com"
                    className="contact-link"
                  >
                    agashjagan2004@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-icon">
                  <Phone size={20} />
                  <div className="icon-ripple"></div>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Phone</p>
                  <a 
                    href="tel:+919789053017"
                    className="contact-link"
                  >
                    +91 9789053017
                  </a>
                </div>
              </div>
              
              <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-icon">
                  <MapPin size={20} />
                  <div className="icon-ripple"></div>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Location</p>
                  <p className="contact-text">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/agash-jaganathan-451b1a256/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-tooltip="LinkedIn"
              >
                <Linkedin size={24} />
                <div className="social-ripple"></div>
              </a>
              <a 
                href="https://github.com/JusCookin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-tooltip="GitHub"
              >
                <Github size={24} />
                <div className="social-ripple"></div>
              </a>
              <a 
                href="https://leetcode.com/u/Agash_dev7/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-tooltip="LeetCode"
              >
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>LC</span>
                <div className="social-ripple"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper animate-slide-right">
          <div className="form-card">
            <h3 className="form-title">
              <span className="gradient-text">Send a Message</span>
            </h3>
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="form-input"
                />
                <div className="input-focus-line"></div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                />
                <div className="input-focus-line"></div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="form-input"
                />
                <div className="input-focus-line"></div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  className="form-textarea"
                  rows="6"
                ></textarea>
                <div className="input-focus-line"></div>
              </div>
              
              <button type="submit" className="submit-btn" onClick={handleSubmit}>
                <span className="btn-text">
                  <Send size={20} />
                  Send Message
                </span>
                <div className="btn-shine"></div>
                <div className="btn-ripple"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;