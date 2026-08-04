import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Home darkMode={darkMode} /></section>
              <section id="about"><About darkMode={darkMode} /></section>
              <section id="skills"><Skills darkMode={darkMode} /></section>
              <section id="projects"><Projects darkMode={darkMode} /></section>
              <section id="contact"><Contact darkMode={darkMode} /></section>
            </>
          } />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;