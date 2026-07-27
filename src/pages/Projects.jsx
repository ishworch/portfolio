function Projects() {
  const projects = [
    {
      title: "SAN - Venue Booking System",
      description:
        "A full-stack venue and event hall booking platform with user, venue owner, and admin roles.",
      technologies: "React • Node.js • Express • MongoDB",
    },
    {
      title: "Air Paint Pro",
      description:
        "A computer vision-based drawing application that allows users to draw in the air using hand gestures.",
      technologies: "Python • OpenCV • MediaPipe • NumPy",
    },
    {
      title: "Alzheimer's Disease Prediction",
      description:
        "A machine learning project that predicts the possibility of Alzheimer's disease using healthcare data.",
      technologies: "Python • Pandas • NumPy • Machine Learning",
    },
    {
      title: "Diabetes Prediction System",
      description:
        "A machine learning application designed to predict diabetes using patient-related data.",
      technologies: "Python • Machine Learning",
    },
    {
      title: "Pet Marketplace",
      description:
        "A platform concept for connecting users with pets and pet-related products.",
      technologies: "HTML • CSS • JavaScript",
    },
    {
      title: "Haunted House Game",
      description:
        "A 3D game project created to explore game development and interactive environments.",
      technologies: "Unity • C#",
    },
  ];

  return (
    <section className="page-section">
      <div className="section-heading">
        <p>My Recent Work</p>
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-number">
              0{index + 1}
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <span>{project.technologies}</span>

            <button className="project-btn">
              View Project →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;