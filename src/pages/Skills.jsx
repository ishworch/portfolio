function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Java",
    "C",
    "C#",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Flutter",
    "Dart",
    "Unity",
    "Git & GitHub",
    "Figma",
    "Canva",
    "Cybersecurity",
  ];

  return (
    <section className="page-section">
      <div className="section-heading">
        <p>What I Work With</p>
        <h1>My Skills</h1>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;