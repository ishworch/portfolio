import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  return (
    <>
      <nav className={`navbar ${darkMode ? 'navbar-dark' : ''}`}>
        <div className="logo">
          <Link to="/" onClick={(e) => handleNavClick(e, 'home')}>
            Ishwor
          </Link>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={(e) => handleNavClick(e, 'home')}>Home</Link>
          <Link to="/" onClick={(e) => handleNavClick(e, 'about')}>About</Link>
          <Link to="/" onClick={(e) => handleNavClick(e, 'skills')}>Skills</Link>
          <Link to="/" onClick={(e) => handleNavClick(e, 'projects')}>Projects</Link>
          <Link to="/" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
          
          {/* Mobile Dark Mode Toggle */}
          <div className="mobile-dark-toggle">
            <span>{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
            <button 
              className="dark-mode-toggle" 
              onClick={handleDarkModeToggle}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        {/* Desktop Dark Mode Toggle */}
        <button 
          className="dark-mode-toggle desktop-toggle" 
          onClick={handleDarkModeToggle}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Menu Overlay */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Navbar;