import React, { useState, useEffect } from 'react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaNodeJs, FaGit,
  FaFigma, FaGoogle, FaDatabase, FaCuttlefish, FaCode
} from 'react-icons/fa';
import {
  SiJavascript, SiCplusplus, SiDart, SiFlask, SiPostgresql, SiMongodb, SiFirebase,
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiOpencv, SiArduino, SiCanva, SiOracle
} from 'react-icons/si';

const iconMap = {
  JavaScript: { icon: SiJavascript, color: '#F7DF1E', level: 90 },
  Python: { icon: FaPython, color: '#3776AB', level: 85 },
  Java: { icon: FaJava, color: '#ED8B00', level: 80 },
  "C++": { icon: SiCplusplus, color: '#00599C', level: 75 },
  C: { icon: FaCuttlefish, color: '#A8B9CC', level: 70 },
  Dart: { icon: SiDart, color: '#0175C2', level: 65 },
  React: { icon: FaReact, color: '#61DAFB', level: 88 },
  HTML: { icon: FaHtml5, color: '#E34F26', level: 95 },
  CSS: { icon: FaCss3Alt, color: '#1572B6', level: 92 },
  Flask: { icon: SiFlask, color: '#000000', level: 78 },
  "Node.js": { icon: FaNodeJs, color: '#339933', level: 82 },
  MySQL: { icon: FaDatabase, color: '#4479A1', level: 85 },
  PostgreSQL: { icon: SiPostgresql, color: '#336791', level: 80 },
  "Oracle DB": { icon: SiOracle, color: '#F80000', level: 75 },
  Firebase: { icon: SiFirebase, color: '#FFCA28', level: 88 },
  MongoDB: { icon: SiMongodb, color: '#47A248', level: 82 },
  TensorFlow: { icon: SiTensorflow, color: '#FF6F00', level: 75 },
  "Scikit-learn": { icon: SiScikitlearn, color: '#F7931E', level: 80 },
  Pandas: { icon: SiPandas, color: '#150458', level: 85 },
  NumPy: { icon: SiNumpy, color: '#013243', level: 83 },
  OpenCV: { icon: SiOpencv, color: '#5C3EE8', level: 78 },
  ESP32: { icon: SiArduino, color: '#00979D', level: 72 },
  Arduino: { icon: SiArduino, color: '#00979D', level: 75 },
  Sensors: { icon: () => <>🔧</>, color: '#FFD700', level: 70 },
  Microcontrollers: { icon: () => <>🧠</>, color: '#FF6B6B', level: 73 },
  "Circuit Design": { icon: () => <>⚡</>, color: '#4ECDC4', level: 68 },
  Git: { icon: FaGit, color: '#F05032', level: 90 },
  "VS Code": { icon: FaCode, color: '#007ACC', level: 95 },
  Figma: { icon: FaFigma, color: '#F24E1E', level: 85 },
  Canva: { icon: SiCanva, color: '#00C4CC', level: 88 },
  "Google Cloud": { icon: FaGoogle, color: '#4285F4', level: 75 },
  "REST APIs": { icon: () => <>🌐</>, color: '#00D4FF', level: 87 }
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "C", "Dart"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Web Development",
      skills: ["React", "HTML", "CSS", "Flask", "Node.js"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Oracle DB", "Firebase", "MongoDB"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "IoT & Hardware",
      skills: ["ESP32", "Arduino", "Sensors", "Microcontrollers", "Circuit Design"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "Figma", "Canva", "Google Cloud", "REST APIs"],
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skillCategories.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCategories(prev => [...prev, index]);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  const handleSkillHover = (skill) => {
    setHoveredSkill(skill);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">
          <span className="skills-title-text">Skills & Technologies</span>
          <div className="skills-title-underline"></div>
        </h2>
        <p className="skills-subtitle">Hover over skills to see proficiency levels</p>
      </div>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`skill-category-card ${visibleCategories.includes(index) ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              className="category-header"
              style={{ background: category.gradient }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="category-count">{category.skills.length}</div>
            </div>
            
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => {
                const skillData = iconMap[skill];
                const IconComponent = skillData?.icon;
                const isSelected = selectedSkill === skill;
                const isHovered = hoveredSkill === skill;
                
                return (
                  <div 
                    key={skillIndex} 
                    className={`skill-item ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
                    onClick={() => handleSkillClick(skill)}
                    onMouseEnter={() => handleSkillHover(skill)}
                    onMouseLeave={handleSkillLeave}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="skill-icon-wrapper">
                      <div 
                        className="skill-icon"
                        style={{ 
                          color: skillData?.color || '#ffffff',
                          fontSize: isHovered ? '2.2rem' : '2rem'
                        }}
                      >
                        {IconComponent ? <IconComponent /> : null}
                      </div>
                      
                      {isHovered && (
                        <div className="skill-progress-ring">
                          <svg className="progress-ring" width="70" height="70">
                            <circle
                              className="progress-ring-circle-bg"
                              stroke="#e6e6e6"
                              strokeWidth="3"
                              fill="transparent"
                              r="30"
                              cx="35"
                              cy="35"
                            />
                            <circle
                              className="progress-ring-circle"
                              stroke={skillData?.color || '#ffffff'}
                              strokeWidth="3"
                              fill="transparent"
                              r="30"
                              cx="35"
                              cy="35"
                              strokeDasharray={`${2 * Math.PI * 30}`}
                              strokeDashoffset={`${2 * Math.PI * 30 * (1 - (skillData?.level || 0) / 100)}`}
                            />
                          </svg>
                          <span className="skill-percentage">{skillData?.level || 0}%</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="skill-name">{skill}</div>
                    
                    {isSelected && (
                      <div className="skill-details-popup">
                        <div className="skill-popup-header">
                          <strong>{skill}</strong>
                        </div>
                        <div className="skill-level-bar">
                          <div 
                            className="skill-level-fill"
                            style={{ 
                              width: `${skillData?.level || 0}%`,
                              background: skillData?.color || '#ffffff'
                            }}
                          ></div>
                        </div>
                        <div className="skill-popup-text">
                          Proficiency: {skillData?.level || 0}%
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;