import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top
      if (currentScrollY <= 50) {
        setIsNavbarVisible(true);
      }
      // Show navbar when scrolling UP
      else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true);
      }
      // Hide navbar when scrolling DOWN
      else if (currentScrollY > lastScrollY && !isMenuOpen) {
        setIsNavbarVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsNavbarVisible(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    closeMenu();
    setIsNavbarVisible(true);

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  return (
    <>
      <nav
        className={`navbar 
          ${darkMode ? 'navbar-dark' : ''} 
          ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}
        `}
      >
        {/* Logo */}
        <div className="logo">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Ishwor
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <Link to="/" onClick={(e) => handleNavClick(e, 'home')}>
            Home
          </Link>

          <Link to="/" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </Link>

          <Link to="/" onClick={(e) => handleNavClick(e, 'skills')}>
            Skills
          </Link>

          <Link to="/" onClick={(e) => handleNavClick(e, 'projects')}>
            Projects
          </Link>

          <Link to="/" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </Link>
        </div>

        {/* Desktop Dark Mode */}
        <button
          className="dark-mode-toggle desktop-toggle"
          onClick={handleDarkModeToggle}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Mobile Controls */}
        <div className="mobile-controls">

          {/* Mobile Dark Mode */}
          <button
            className="dark-mode-toggle mobile-toggle"
            onClick={handleDarkModeToggle}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* Mobile Navigation */}
        <div
          className={`nav-links mobile-nav ${
            isMenuOpen ? 'open' : ''
          }`}
        >
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </Link>

          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </Link>

          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'skills')}
          >
            Skills
          </Link>

          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </Link>

          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`menu-overlay ${
          isMenuOpen ? 'active' : ''
        }`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Navbar;