import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "SAN - Venue Booking System",
      description:
        "A full-stack venue and event hall booking platform with user, venue owner, and admin roles.",
      technologies: "React • Node.js • Express • MongoDB",
      features: [
        "User, Venue Owner & Admin Roles",
        "Venue Search & Booking",
        "Booking Calendar",
        "Pay Now / Pay Later",
        "eSewa Payment Integration",
        "Email Notifications",
        "Booking Management Dashboard",
      ],
      github: "https://github.com/yourusername/san-booking",
      demo: "https://your-demo-link.com",
    },
    {
      title: "Air Paint Pro",
      description:
        "A computer vision-based drawing application that allows users to draw in the air using hand gestures.",
      technologies: "Python • OpenCV • MediaPipe • NumPy",
      features: [
        "Hand Gesture Drawing",
        "Color Selection",
        "Eraser Mode",
        "Canvas Clear",
        "Save Drawing",
        "Fullscreen Mode",
      ],
      github: "https://github.com/yourusername/airpaint",
      demo: "",
    },
    {
      title: "Alzheimer's Disease Prediction",
      description:
        "A machine learning project that predicts the possibility of Alzheimer's disease using healthcare data.",
      technologies: "Python • Pandas • NumPy • Machine Learning",
      features: [
        "Data Preprocessing",
        "Model Training",
        "Prediction System",
        "Accuracy Evaluation",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Diabetes Prediction System",
      description:
        "A machine learning application designed to predict diabetes using patient-related data.",
      technologies: "Python • Machine Learning",
      features: [
        "Health Data Analysis",
        "Prediction Model",
        "User Input Interface",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Pet Marketplace",
      description:
        "A platform concept for connecting users with pets and pet-related products.",
      technologies: "HTML • CSS • JavaScript",
      features: [
        "Browse Pets",
        "Pet Listings",
        "Responsive Design",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Haunted House Game",
      description:
        "A 3D game project created to explore game development and interactive environments.",
      technologies: "Unity • C#",
      features: [
        "3D Environment",
        "Character Movement",
        "Interactive Objects",
        "Lighting Effects",
      ],
      github: "",
      demo: "",
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