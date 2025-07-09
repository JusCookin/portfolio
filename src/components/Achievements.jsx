import React from 'react';
import { Award, Code, Users, Database, ExternalLink, Bot, Brain, Globe, Palette } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award size={24} />,
      title: "College IoT Expo Shortlisted",
      description: "Designed an ESP32-based rain-responsive clothesline with real-time monitoring and SDG 11 alignment, showcasing innovation in sustainable technology.",
      category: "innovation"
    },
    {
      icon: <Users size={24} />,
      title: "5+ Hackathons Participated",
      description: "Actively participated in college-level hackathons, applying rapid prototyping and team collaboration skills to solve real-world problems.",
      category: "collaboration"
    },
    {
      icon: <Code size={24} />,
      title: "100+ DSA Problems Solved",
      description: "Enhanced algorithmic thinking and coding proficiency through consistent practice on competitive programming platforms.",
      category: "coding"
    }
  ];

  const certifications = [
    {
      title: "Oracle Database Design And Programming With SQL",
      issuer: "Oracle Academy",
      link: "https://drive.google.com/file/d/1YfW9d_pYAyF3RT0W7gQLNJl4bS2JllE1/view?usp=sharing",
      icon: <Database size={24} />,
      category: "database",
      emoji: "🗄️"
    },
    {
      title: "Introduction To Python",
      issuer: "Coursera",
      link: "https://drive.google.com/file/d/1Dz4T5yLpyFESeX6w1tMg0Ygtq7v8S9P1/view?usp=sharing",
      icon: <Code size={24} />,
      category: "programming",
      emoji: "🐍"
    },
    {
      title: "Introduction To Generative AI",
      issuer: "Coursera",
      link: "https://drive.google.com/file/d/1MuiPSeWWfEdywAhrKDjijeDhyDbbqgJO/view?usp=sharing",
      icon: <Bot size={24} />,
      category: "ai",
      emoji: "🤖"
    },
    {
      title: "Artificial Intelligence using Google TensorFlow",
      issuer: "Google Developers",
      link: "https://drive.google.com/file/d/1sZB1E2ebCJzceL3Nt5oHN3k5Fzc4sUXF/view?usp=sharing",
      icon: <Brain size={24} />,
      category: "machine-learning",
      emoji: "🧠"
    },
    {
      title: "The Complete Full Stack Web Development Bootcamp",
      issuer: "Udemy",
      link: "https://drive.google.com/file/d/1LjLTMsknteyjYFcaGYUxpvE_hl5eFUjM/view?usp=sharing",
      icon: <Globe size={24} />,
      category: "web-development",
      emoji: "🌐"
    }
  ];

  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements & Certifications</h2>
      
      {/* Key Achievements Section */}
      <div className="achievements-container">
        <h3 className="subsection-title">
          <span className="subsection-icon">🏆</span>
          Key Achievements
        </h3>
        <div className="cards-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className={`achievement-card card ${achievement.category}`}>
              <div className="card-header">
                <div className="achievement-icon-wrapper">
                  <div className="card-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-glow"></div>
                </div>
                <h3 className="card-title">{achievement.title}</h3>
              </div>
              <div className="card-content">
                <p>{achievement.description}</p>
              </div>
              <div className="achievement-badge">
                <span className={`badge ${achievement.category}`}>
                  {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Certifications Section */}
      <div className="certifications-container">
        <h3 className="subsection-title">
          <span className="subsection-icon">📜</span>
          Professional Certifications
        </h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className={`certification-card card ${cert.category}`}>
              <div className="certification-header">
                <div className="certification-icon-container">
                  <div className="certification-emoji">{cert.emoji}</div>
                  <div className="certification-icon-bg">
                    {cert.icon}
                  </div>
                </div>
                <div className="certification-info">
                  <h3 className="certification-title">
                    {cert.title}
                  </h3>
                  <p className="certification-issuer">
                    <span className="issuer-badge">{cert.issuer}</span>
                  </p>
                </div>
              </div>
              <div className="certification-content">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`certification-link ${cert.category}`}
                >
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                  <div className="link-arrow">→</div>
                </a>
              </div>
              <div className="certification-category-indicator">
                <div className={`category-dot ${cert.category}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;