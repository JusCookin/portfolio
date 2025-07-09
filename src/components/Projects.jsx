import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HemoAI",
      description: "Built a responsive web app using HTML, CSS, and Flask to predict anemia based on blood test results. Integrated a machine learning model to provide real-time risk assessment using inputs like MCH, MCV, and MCHC, helping users get a quick and accessible health check.",
      github: "https://github.com/JusCookin/HemoAI",
      technologies: ["Flask", "Python", "Machine Learning", "HTML", "CSS"],
      category: "medical",
      icon: "🩺"
    },
    {
      title: "IoT-Based Smart-Dumbbell",
      description: "Designed and developed an intelligent, sensor-integrated dumbbell using ESP32 for real-time exercise and health monitoring. The system automatically counts repetitions and sets using an MPU6050 gyroscope, while simultaneously measuring heart rate and SpO₂ levels via a MAX30100 sensor.",
      github: "https://github.com/JusCookin/IoT-Based-Smart-Dumbell",
      technologies: ["ESP32", "IoT", "MPU6050", "MAX30100", "OLED"],
      category: "fitness",
      icon: "💪"
    },
    {
      title: "IoT-Based Automated Rain-Responsive Clothesline",
      description: "Built a smart ESP32-based system that detects rain and automatically shifts clothes to a sheltered area using a servo mechanism. Designed to support UN SDG 11 - Sustainable Cities and Communities by promoting smart, weather-resilient infrastructure.",
      github: "https://github.com/JusCookin/IoT-Based-Automated-Rain-Responsive-Clothesline",
      technologies: ["ESP32", "IoT", "Servo Motors", "Weather Sensors", "Google Sheets API"],
      category: "automation",
      icon: "🌧️"
    },
    {
      title: "ChatterBox - Real-Time Chat Interface",
      description: "A sleek and modern chat interface UI built using Vite + React. It mimics the frontend of popular messaging platforms and serves as a foundation for building real-time chat applications with modern design principles.",
      github: "https://github.com/JusCookin/ChatterBox",
      technologies: ["React", "Vite", "CSS", "UI/UX Design"],
      category: "communication",
      icon: "💬"
    },
    {
      title: "Nexus-Gym: ML-Based Personalized Fitness App",
      description: "Developed a machine learning-powered Flask web application that delivers personalized gym recommendations based on individual health profiles and fitness goals. The system suggests tailored workout routines, appropriate equipment, and customized diet plans.",
      github: "https://github.com/JusCookin/NexusFit-ML-app",
      technologies: ["Flask", "Machine Learning", "Python", "Personalization"],
      category: "fitness-ml",
      icon: "🏋️"
    },
    {
      title: "Brain Tumor Detection Using Deep Learning",
      description: "A FastAPI-powered web app that detects brain tumors from MRI scans using a trained CNN model with over 90% accuracy. Users can upload images and get real-time predictions across four tumor classes. Lightweight, fast, and easy to use—ideal for research, clinical aid, or educational demonstration.",
      github: "https://github.com/JusCookin/tumor-detection-api",
      technologies: ["Tensorflow", "FastAPI", "Python", "CNN"],
      category: "Medical",
      icon: "🧠"
    }
  ];

  return (
    <div className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="cards-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.category}`}>
            <div className="project-header">
              <div className="project-icon">
                <span className="project-emoji">{project.icon}</span>
              </div>
              <div className="project-category-badge">
                {project.category.replace('-', ' ').toUpperCase()}
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="skill-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-tag" style={{ fontSize: '0.8rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} />
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;