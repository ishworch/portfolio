import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'Mobile',
    'Machine Learning',
    'Game Development',
    'Design'
  ];

  const projects = [
    {
      title: "SAN - Venue Booking System",
      description: "A full-stack venue and event hall booking platform that allows customers to search, book, and pay for venues while providing venue owners and administrators with complete booking management.",
      technologies: "React • Node.js • Express • MongoDB",
      category: "Web Development",
      github: "https://github.com/ishworch/Saan-fyp",
      Preview: "https://fyp-omega-green.vercel.app/",
      features: [
        "User, Venue Owner & Admin Roles",
        "Venue Search & Booking",
        "Booking Calendar",
        "Pay Now / Pay Later",
        "5-Hour Booking Hold",
        "eSewa Payment Integration",
        "Email Notifications",
        "Owner Dashboard",
        "Booking Reports"
      ]
    },
    {
      title: "Air Paint Pro",
      description: "A computer vision application that allows users to draw in the air using hand gestures detected through a webcam.",
      technologies: "Python • OpenCV • MediaPipe • NumPy",
      category: "Machine Learning",
      features: [
        "Hand Gesture Drawing",
        "Color Selection",
        "Virtual Eraser",
        "Canvas Clear",
        "Save Drawing",
        "Fullscreen Mode",
        "Keyboard Shortcuts"
      ]
    },
    {
      title: "Alzheimer's Disease Prediction System",
      description: "A machine learning project developed to predict Alzheimer's disease using healthcare datasets and predictive models.",
      technologies: "Python • Pandas • NumPy • Scikit-learn",
      category: "Machine Learning",
      github: "https://github.com/ishworch/Alucross",
      features: [
        "Data Cleaning",
        "Feature Engineering",
        "Machine Learning Model",
        "Disease Prediction",
        "Accuracy Evaluation"
      ]
    },
    {
      title: "Diabetes Prediction System",
      description: "A machine learning application that predicts diabetes risk based on patient medical information.",
      technologies: "Python • Pandas • Scikit-learn",
      category: "Machine Learning",
      features: [
        "Patient Data Analysis",
        "Prediction Model",
        "Health Risk Prediction",
        "Performance Evaluation"
      ]
    },
    {
      title: "Pet Marketplace",
      description: "A responsive web platform where users can browse, buy, and sell pets with an intuitive interface.",
      technologies: "HTML • CSS • JavaScript",
      category: "Design",
      features: [
        "Pet Listings",
        "Category Browsing",
        "Responsive Design",
        "User-Friendly Interface"
      ]
    },
    {
      title: "Haunted House Game",
      description: "A Unity-based 3D game created to explore interactive environments, player movement, and lighting effects.",
      technologies: "Unity • C#",
      category: "Game Development",
      features: [
        "3D Environment",
        "Character Controller",
        "Interactive Objects",
        "Lighting Effects",
        "Basic Gameplay"
      ]
    },
    {
      title: "Weatheria - Weather Application",
      description: "A web-based weather application that provides weather information using PHP, MySQL, and a clean user interface.",
      technologies: "PHP • MySQL • HTML • CSS • JavaScript",
      category: "Web Development",
      github: "https://github.com/ishworch/Weather_app",
      features: [
        "Weather Information",
        "Responsive UI",
        "Database Integration",
        "Location Search"
      ]
    },
    {
      title: "Eater - Food Ordering Mobile App",
      description: "A Flutter mobile application developed to practice cross-platform mobile development and UI design.",
      technologies: "Flutter • Dart",
      category: "Mobile",
      features: [
        "Modern UI",
        "Food Categories",
        "Responsive Layout",
        "Mobile Navigation"
      ]
    },
    {
      title: "Blog Management System",
      description: "A full-stack blogging platform where users can create, edit, delete, and manage blog posts.",
      technologies: "Node.js • Express • MongoDB",
      category: "Web Development",
      features: [
        "Create Posts",
        "Edit Posts",
        "Delete Posts",
        "MongoDB Database",
        "REST API"
      ]
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects, technical skills, education, resume, and contact information.",
      technologies: "React • Vite • CSS • JavaScript",
      category: "Web Development",
      github: "https://github.com/ishworch/portfolio",
      features: [
        "Responsive Design",
        "Project Showcase",
        "Skills Section",
        "Contact Form",
        "Modern Animations"
      ]
    },
    {
      title: "Online Quiz Application",
      description: "A web-based quiz system that allows users to answer multiple-choice questions and view their final score.",
      technologies: "HTML • CSS • JavaScript",
      category: "Web Development",
      github: "https://github.com/ishworch/Quiz",
      features: [
        "Multiple Choice Questions",
        "Automatic Score Calculation",
        "Responsive Interface",
        "Instant Results"
      ]
    }
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      className={`page-section projects-section ${
        darkMode ? 'dark-section' : ''
      }`}
      id="projects"
    >
      <div className="section-heading">
        <p>My Recent Work</p>
      </div>

      {/* Filter Buttons */}
      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              filter === category ? 'active' : ''
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        className="projects-grid"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.title}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1
              }}
              layout
            >
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2>{project.title}</h2>

              <div className="project-category-badge">
                {project.category}
              </div>

              <p>{project.description}</p>

              <span>{project.technologies}</span>

              <div className="project-buttons">
                <button className="project-btn">
                  View Project →
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
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

            <div className="modal-category-badge">
              {selectedProject.category}
            </div>

            <p>{selectedProject.description}</p>

            <h3>Technologies</h3>
            <p>{selectedProject.technologies}</p>

            <h3>Features</h3>
            <ul>
              {selectedProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-modal-btn"
              >
                View on GitHub ↗
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

