
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  // Apply dark mode and save preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter>
      <div className={darkMode ? 'app dark-mode' : 'app'}>

        {/* Navigation */}
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Main Content */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Home darkMode={darkMode} />
                  </section>

                  <section id="about">
                    <About darkMode={darkMode} />
                  </section>

                  <section id="skills">
                    <Skills darkMode={darkMode} />
                  </section>

                  <section id="projects">
                    <Projects darkMode={darkMode} />
                  </section>

                  <section id="contact">
                    <Contact darkMode={darkMode} />
                  </section>
                </>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} />

      </div>
    </BrowserRouter>
  );
}

export default App;
