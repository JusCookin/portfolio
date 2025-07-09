import React, { useState, useEffect } from 'react';
import { Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedDescription, setDisplayedDescription] = useState('');
  const [showButtons, setShowButtons] = useState(false);

  const greeting = "Hello, I'm";
  const name = "Agash Jaganathan";
  const title = "Full Stack Developer & ML Engineer";
  const description = "Passionate Computer Science student with expertise in React, Python, and Machine Learning. I build innovative solutions that bridge technology and real-world problems, from IoT-based smart systems to AI-powered health applications.";

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let timeouts = [];

    // Type greeting
    const typeGreeting = () => {
      for (let i = 0; i <= greeting.length; i++) {
        timeouts.push(setTimeout(() => {
          setDisplayedGreeting(greeting.slice(0, i));
        }, i * 100));
      }
    };

    // Type name
    const typeName = () => {
      const startDelay = greeting.length * 100 + 300;
      for (let i = 0; i <= name.length; i++) {
        timeouts.push(setTimeout(() => {
          setDisplayedName(name.slice(0, i));
        }, startDelay + i * 80));
      }
    };

    // Type title
    const typeTitle = () => {
      const startDelay = greeting.length * 100 + name.length * 80 + 600;
      for (let i = 0; i <= title.length; i++) {
        timeouts.push(setTimeout(() => {
          setDisplayedTitle(title.slice(0, i));
        }, startDelay + i * 60));
      }
    };

    // Type description
    const typeDescription = () => {
      const startDelay = greeting.length * 100 + name.length * 80 + title.length * 60 + 900;
      for (let i = 0; i <= description.length; i++) {
        timeouts.push(setTimeout(() => {
          setDisplayedDescription(description.slice(0, i));
        }, startDelay + i * 30));
      }
    };

    // Show buttons
    const showButtonsAfterTyping = () => {
      const totalDelay = greeting.length * 100 + name.length * 80 + title.length * 60 + description.length * 30 + 1200;
      timeouts.push(setTimeout(() => {
        setShowButtons(true);
      }, totalDelay));
    };

    typeGreeting();
    typeName();
    typeTitle();
    typeDescription();
    showButtonsAfterTyping();

    // Cleanup timeouts on component unmount
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-greeting typewriter">
          {displayedGreeting}
          <span className={`cursor ${displayedGreeting.length === greeting.length ? 'blink' : ''}`}>|</span>
        </p>
        <h1 className="hero-name typewriter">
          {displayedName}
          <span className={`cursor ${displayedName.length === name.length ? 'blink' : ''}`}>|</span>
        </h1>
        <p className="hero-title typewriter">
          {displayedTitle}
          <span className={`cursor ${displayedTitle.length === title.length ? 'blink' : ''}`}>|</span>
        </p>
        <p className="hero-description typewriter">
          {displayedDescription}
          <span className={`cursor ${displayedDescription.length === description.length ? 'blink' : ''}`}>|</span>
        </p>
        <div className={`hero-buttons ${showButtons ? 'show' : ''}`}>
          <button className="btn btn-primary" onClick={scrollToContact}>
            <MessageCircle size={20} />
            Get In Touch
          </button>
          <a 
            href="mailto:agashjagan2004@gmail.com" 
            className="btn btn-outline"
            subject="Portfolio Inquiry"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;