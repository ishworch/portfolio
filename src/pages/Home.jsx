import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home({ darkMode }) {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.section 
      className={`hero ${darkMode ? 'hero-dark' : ''}`} 
      id="home"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className="hero-content" variants={fadeInUp}>
        <p className="intro">👋 Hello, I'm</p>

        <h1>
          Ishwor <span>Chalise</span>
        </h1>

        <h2 className="typing-text">
          <span className="cursor">{text}</span>
          <span className="blinking-cursor">|</span>
        </h2>

        <p className="hero-description">
          I am a BSc (Hons) Computing student passionate about software
          development, web technologies, Python, and cybersecurity.
        </p>

        <motion.div 
          className="hero-buttons"
          variants={fadeInUp}
        >
          <Link to="/projects" className="btn primary-btn">
            View My Work
          </Link>

          <Link to="/contact" className="btn secondary-btn">
            Contact Me
          </Link>
        </motion.div>

        <motion.div 
          className="hero-social"
          variants={fadeInUp}
        >
          <a 
            href="https://www.linkedin.com/in/ishwor-chalise-036574293/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/ishworch" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:ishworchalise@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-image"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <div className="profile-circle">
          <img 
            src="/image.png" 
            alt="Ishwor Chalise" 
            className="profile-image"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Home;