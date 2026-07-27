function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>

        <h1>
          Ishwor <span>Chalise</span>
        </h1>

        <h2>Junior Software Developer</h2>

        <p className="hero-description">
          I am a BSc (Hons) Computing student passionate about software
          development, web technologies, UI/UX design, Python, and cybersecurity.
        </p>

        <div className="hero-buttons">
          <a href="/projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="/contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <span>IC</span>
        </div>
      </div>
    </section>
  );
}

export default Home;