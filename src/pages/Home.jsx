import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    'Junior Software Developer',
    'Web Developer',
    'UI/UX Designer',
    'Python Developer',
    'Cybersecurity Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDelay = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.substring(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, roles]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>

        <h1>
          Ishwor <span>Chalise</span>
        </h1>

        <h2 className="typing-text">
          <span className="cursor">{text}</span>
          <span className="blinking-cursor">|</span>
        </h2>

        <p className="hero-description">
          I am a BSc (Hons) Computing student passionate about software
          development, web technologies, UI/UX design, Python, and cybersecurity.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary-btn">
            View My Work
          </Link>

          <Link to="/contact" className="btn secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <img
            src="/src/assets/image.png"
            alt="Ishwor Chalise"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;