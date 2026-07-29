function About() {
  return (
    <section className="page-section" id="about">
      <div className="section-heading">
        <p>Get To Know Me</p>
        <h1>About Me</h1>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>I'm Ishwor Chalise</h2>

          <p>
            I am a BSc (Hons) Computing student at Herald College Kathmandu
            with a strong interest in software development and technology.
          </p>

          <p>
            I enjoy building practical applications and exploring different
            areas of technology, including web development, Python, UI/UX
            design, cybersecurity, and software engineering.
          </p>

          <p>
            I am constantly learning new technologies and improving my
            problem-solving skills through projects and practical experience.
          </p>
        </div>

        <div className="about-info">
          <div className="info-card">
            <h3>Education</h3>
            <p>BSc (Hons) Computing</p>
            <small>Herald College Kathmandu</small>
          </div>

          <div className="info-card">
            <h3>Experience</h3>
            <p>Software Development Projects</p>
            <small>Web & Application Development</small>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;