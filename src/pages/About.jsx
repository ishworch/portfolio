import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About({ darkMode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'Web Development', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'React', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Cybersecurity', level: 65 },
    { name: 'Database', level: 70 }
  ];

  return (
    <motion.section 
      className={`page-section about-section ${darkMode ? 'dark-section' : ''}`}
      id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-heading">
        <p>Get To Know Me</p>
        <h1>About Me</h1>
      </div>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <motion.div 
          className="about-info"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-card">
            <h3>🎓 Education</h3>
            <p>BSc (Hons) Computing</p>
            <small>Herald College Kathmandu</small>
          </div>

          <div className="info-card">
            <h3>💼 Experience</h3>
            <p>Software Development Projects</p>
            <small>Web & Application Development</small>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="skills-progress">
            <h3>📊 Skills Progress</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-progress-item">
                <div className="skill-progress-label">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <motion.div 
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;