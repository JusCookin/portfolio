import React, { useState, useEffect } from 'react';
import { GraduationCap, MapPin, Calendar, Award, TrendingUp, Users, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: "8.33", label: "CGPA", icon: <Award size={20} /> },
    { number: "100+", label: "DSA Problems", icon: <Code size={20} /> },
    { number: "5+", label: "Hackathons", icon: <Users size={20} /> },
    { number: "2026", label: "Graduation", icon: <TrendingUp size={20} /> }
  ];

  return (
    <div className="section about-enhanced">
      <h2 className="section-title animate-title">About Me</h2>
      
      {/* Stats Row */}
      <div className={`stats-container ${isVisible ? 'show' : ''}`}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="stat-icon">
              {stat.icon}
            </div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="cards-grid enhanced-grid">
        {/* Education Card */}
        <div 
          className={`card enhanced-card education-card ${activeCard === 'education' ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard('education')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="card-header enhanced-header">
            <div className="card-icon enhanced-icon">
              <GraduationCap color="#ffffff" size={24} />
              <div className="icon-glow"></div>
            </div>
            <h3 className="card-title enhanced-title">Education Journey</h3>
            <div className="card-accent"></div>
          </div>
          <div className="card-content enhanced-content">
            <div className="education-item">
              <div className="education-badge current">Current</div>
              <h4 className="education-degree">Bachelor of Technology</h4>
              <p className="education-field">Computer Science & Engineering</p>
              <p className="education-school">Vellore Institute Of Technology, Chennai</p>
              <div className="education-details">
                <span className="education-duration">2022 - 2026</span>
                <span className="education-grade">CGPA: 8.33/10</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="education-item">
              <h4 className="education-degree">Class 12th - CBSE</h4>
              <p className="education-school">The PSBB Millennium School</p>
              <span className="education-grade highlight">91.8%</span>
            </div>
            
            <div className="education-item">
              <h4 className="education-degree">Class 10th - CBSE</h4>
              <p className="education-school">The PSBB Millennium School</p>
              <span className="education-grade highlight">91.2%</span>
            </div>
          </div>
        </div>

        {/* Professional Summary Card */}
        <div 
          className={`card enhanced-card summary-card ${activeCard === 'summary' ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard('summary')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="card-header enhanced-header">
            <div className="card-icon enhanced-icon">
              <MapPin color="#ffffff" size={24} />
              <div className="icon-glow"></div>
            </div>
            <h3 className="card-title enhanced-title">Professional Profile</h3>
            <div className="card-accent"></div>
          </div>
          <div className="card-content enhanced-content">
            <div className="summary-highlight">
              <Lightbulb size={18} color="#00d4ff" />
              <span>Solution-Driven Developer</span>
            </div>
            
            <p className="summary-text">
              Motivated Computer Science undergraduate with hands-on experience in 
              <span className="tech-highlight">full-stack development</span>, 
              <span className="tech-highlight">machine learning</span>, and 
              <span className="tech-highlight">IoT innovation</span>.
            </p>
            
            <div className="tech-stack-mini">
              <span className="tech-chip">React</span>
              <span className="tech-chip">Flask</span>
              <span className="tech-chip">Python</span>
              <span className="tech-chip">Java</span>
              <span className="tech-chip">C++</span>
            </div>
            
            <p className="summary-text">
              Proven track record in leading end-to-end projects, including health tech 
              and smart automation solutions. Excel in cross-functional collaboration 
              and rapid adaptation to dynamic environments.
            </p>
          </div>
        </div>

        {/* Current Focus Card */}
        <div 
          className={`card enhanced-card focus-card ${activeCard === 'focus' ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard('focus')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="card-header enhanced-header">
            <div className="card-icon enhanced-icon">
              <Calendar color="#ffffff" size={24} />
              <div className="icon-glow"></div>
            </div>
            <h3 className="card-title enhanced-title">Current Endeavors</h3>
            <div className="card-accent"></div>
          </div>
          <div className="card-content enhanced-content">
            <div className="focus-item active-work">
              <div className="status-indicator pulse"></div>
              <div className="focus-content">
                <h4 className="focus-title">Front End Developer Intern</h4>
                <p className="focus-company">ListGen - US Real Estate Startup</p>
                <p className="focus-description">
                  Developing responsive user interfaces and building scalable React.js 
                  components for real estate applications.
                </p>
              </div>
            </div>
            
            <div className="focus-item">
              <div className="focus-content">
                <h4 className="focus-title">Competitive Programming</h4>
                <p className="focus-description">
                  Actively solving algorithmic challenges and participating in 
                  community-driven tech initiatives.
                </p>
                <div className="achievement-tags">
                  <span className="achievement-tag">100+ Problems Solved</span>
                  <span className="achievement-tag">5+ Hackathons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;