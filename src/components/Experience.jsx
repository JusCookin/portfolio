import React, { useState, useEffect } from 'react';
import { Briefcase, Users, Code, Trophy, MapPin, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [hoveredExperience, setHoveredExperience] = useState(null);

  const experiences = [
    {
      icon: <Briefcase size={24} />,
      title: "Front End Developer Intern",
      company: "ListGen",
      period: "May 2025 - Present",
      duration: "8+ months",
      location: "Remote",
      type: "Internship",
      status: "Current",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: [
        "Working at a US-based real estate startup, developing user-facing features for a web application that connects agents with clients based on real estate preferences.",
        "Building and maintaining components using React.js, focusing on responsive design and dynamic data rendering."
      ],
      technologies: ["React.js", "JavaScript", "CSS", "Responsive Design"]
    },
    {
      icon: <Code size={24} />,
      title: "Summer Intern",
      company: "SmartInternz",
      period: "Jun 2024 - Sep 2024",
      duration: "4 months",
      location: "Remote",
      type: "Internship",
      status: "Completed",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: [
        "Participated in hands-on training with Google TensorFlow Developer Labs, gaining practical experience in machine learning using TensorFlow.",
        "Developed a real-time Anemia detection system using a custom ML model and deployed it via a web application using Flask.",
        "Led and coordinated a team of 4 members, successfully completing the end-to-end project under tight deadlines."
      ],
      technologies: ["TensorFlow", "Python", "Flask", "Machine Learning", "Team Leadership"]
    },
    {
      icon: <Users size={24} />,
      title: "Competitive Programmer",
      company: "Newton's Coding Club",
      period: "Sep 2024 - Mar 2025",
      duration: "7 months",
      location: "VIT Chennai",
      type: "Club Activity",
      status: "Completed",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: [
        "Contributed to the club's learning ecosystem by designing DSA problems tailored for Competitive Programming practice.",
        "Supported weekly coding sessions by reviewing solutions and helping members strengthen core algorithmic skills."
      ],
      technologies: ["Data Structures", "Algorithms", "Problem Solving", "Mentoring"]
    },
    {
      icon: <Trophy size={24} />,
      title: "Management Member",
      company: "Newton's Coding Club",
      period: "April 2024 - Aug 2024",
      duration: "5 months",
      location: "VIT Chennai",
      type: "Leadership",
      status: "Completed",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      description: [
        "Assisted in organizing and coordinating CodeChef Cook-Off, a competitive flagship programming event for the chapter.",
        "Managed event logistics, participant communications, and ensured smooth execution, contributing to its success."
      ],
      technologies: ["Event Management", "Leadership", "Communication", "Project Coordination"]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      experiences.forEach((_, index) => {
        setTimeout(() => {
          setVisibleExperiences(prev => [...prev, index]);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleExperienceClick = (index) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  const handleExperienceHover = (index) => {
    setHoveredExperience(index);
  };

  const handleExperienceLeave = () => {
    setHoveredExperience(null);
  };

  return (
    <div className="experience-section">
      <div className="experience-header">
        <h2 className="experience-title">
          <span className="experience-title-text">Professional Experience</span>
          <div className="experience-title-underline"></div>
        </h2>
        <p className="experience-subtitle">My journey through various roles and responsibilities</p>
      </div>

      <div className="experience-timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`experience-card ${visibleExperiences.includes(index) ? 'visible' : ''} ${selectedExperience === index ? 'expanded' : ''} ${hoveredExperience === index ? 'hovered' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => handleExperienceClick(index)}
            onMouseEnter={() => handleExperienceHover(index)}
            onMouseLeave={handleExperienceLeave}
          >
            <div className="timeline-dot">
              <div className="timeline-dot-inner" style={{ background: exp.gradient }}>
                {exp.icon}
              </div>
              <div className="timeline-pulse"></div>
            </div>

            <div className="experience-content">
              <div className="experience-main">
                <div className="experience-header-info">
                  <div className="experience-meta">
                    <span className={`experience-status ${exp.status.toLowerCase()}`}>
                      {exp.status}
                    </span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                  
                  <div className="experience-title-section">
                    <h3 className="experience-job-title">{exp.title}</h3>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      <ExternalLink size={16} className="external-link-icon" />
                    </div>
                  </div>

                  <div className="experience-details">
                    <div className="experience-detail">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                      <span className="duration-badge">{exp.duration}</span>
                    </div>
                    <div className="experience-detail">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="expand-indicator">
                  <ChevronRight 
                    size={20} 
                    className={`chevron ${selectedExperience === index ? 'rotated' : ''}`}
                  />
                </div>
              </div>

              <div className={`experience-expanded ${selectedExperience === index ? 'show' : ''}`}>
                <div className="experience-description">
                  <h4>Key Responsibilities & Achievements</h4>
                  <ul className="description-list">
                    {exp.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="description-item">
                        <div className="bullet-point"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h4>Technologies & Skills</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-summary">
        <div className="summary-stats">
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Positions</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;