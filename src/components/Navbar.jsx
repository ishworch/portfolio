import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function Navbar({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (!isHomePage) {
      // If not on home page, navigate home first
      window.location.href = '/';
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 200);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={(e) => handleNavClick(e, 'home')}>
          Ishwor<span>.</span>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/" onClick={(e) => handleNavClick(e, 'home')}>Home</Link>
        <Link to="/" onClick={(e) => handleNavClick(e, 'about')}>About</Link>
        <Link to="/" onClick={(e) => handleNavClick(e, 'skills')}>Skills</Link>
        <Link to="/" onClick={(e) => handleNavClick(e, 'projects')}>Projects</Link>
        <Link to="/" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
      </div>

      <button 
        className="dark-mode-toggle" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;