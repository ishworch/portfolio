import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About({ darkMode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    'Web Development',
    'Software Development',
    'AI & Machine Learning',
    'Leadership',
    'Communication',
    'Unity',
    'Basic Cybersecurity'
  ];

  return (
    <motion.section
      className={`page-section about-section ${
        darkMode ? 'dark-section' : ''
      }`}
      id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Heading */}
      <div className="section-heading">
        <p>Get To Know Me</p>
      </div>

      <div className="about-content">

        {/* About Text */}
        <motion.div
          className="about-text"
          initial={{ x: -50, opacity: 0 }}
          animate={
            inView
              ? { x: 0, opacity: 1 }
              : { x: -50, opacity: 0 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2>I'm Ishwor Chalise</h2>

          <p>
            I am a BSc (Hons) Computing student at Herald College Kathmandu
            with a strong interest in software development, artificial
            intelligence, and modern technology.
          </p>

          <p>
            I enjoy building practical applications and exploring different
            areas of technology, including web development, AI and machine
            learning, cybersecurity, and software engineering.
          </p>

          <p>
            I am continuously developing my technical and professional skills
            through academic projects, practical experience, and independent
            learning.
          </p>
        </motion.div>

        {/* About Information */}
        <motion.div
          className="about-info"
          initial={{ x: 50, opacity: 0 }}
          animate={
            inView
              ? { x: 0, opacity: 1 }
              : { x: 50, opacity: 0 }
          }
          transition={{ duration: 0.6 }}
        >

          {/* Education */}
          <div className="info-card">
            <h3>🎓 Education</h3>
            <p>BSc (Hons) Computing</p>
            <small>Herald College Kathmandu</small>
          </div>

          {/* Experience */}
          <div className="info-card">
            <h3>💼 Experience</h3>
            <p>Software Development Projects</p>
            <small>Web & Application Development</small>
          </div>

          {/* Location */}
          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>

          {/* Skills */}
          <div className="skills-progress">
            <h3>💡 Skills</h3>

            <div className="skills-list">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;