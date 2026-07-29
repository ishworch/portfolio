import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "SAN - Venue Booking System",
      description:
        "A full-stack venue and event hall booking platform that allows customers to search, book, and pay for venues while providing venue owners and administrators with complete booking management.",
      technologies: "React • Node.js • Express • MongoDB",
      features: [
        "User, Venue Owner & Admin Roles",
        "Venue Search & Booking",
        "Booking Calendar",
        "Pay Now / Pay Later",
        "5-Hour Booking Hold",
        "eSewa Payment Integration",
        "Email Notifications",
        "Owner Dashboard",
        "Booking Reports",
      ],
      /*github: "",
      demo: "",*/
    },
    // ... rest of your projects
  ];

  return (
    <section className="page-section" id="projects">
      <div className="section-heading">
        <p>My Recent Work</p>
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <span>{project.technologies}</span>

            <button
              className="project-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(project);
              }}
            >
              View Project →
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <h2>{selectedProject.title}</h2>

            <p>{selectedProject.description}</p>

            <h3>Technologies</h3>
            <p>{selectedProject.technologies}</p>

            <h3>Features</h3>

            <ul>
              {selectedProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="project-links">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;