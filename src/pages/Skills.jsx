import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills({ darkMode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: "HTML", icon: "🌐", level: 90 },
    { name: "CSS", icon: "🎨", level: 85 },
    { name: "JavaScript", icon: "⚡", level: 80 },
    { name: "React", icon: "⚛️", level: 75 },
    { name: "Python", icon: "🐍", level: 80 },
    { name: "Java", icon: "☕", level: 70 },
    { name: "Node.js", icon: "🚀", level: 70 },
    { name: "MongoDB", icon: "🍃", level: 65 },
    { name: "MySQL", icon: "🗄️", level: 70 },
    { name: "Git", icon: "📊", level: 80 },
    { name: "Figma", icon: "🎯", level: 75 },
    { name: "Cybersecurity", icon: "🔒", level: 65 }
  ];

  return (
    <motion.section 
      className={`page-section skills-section ${darkMode ? 'dark-section' : ''}`}
      id="skills"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-heading">
        <p>What I Work With</p>
        <h1>My Skills</h1>
      </div>

      <motion.div 
        className="skills-grid"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            className="skill-card"
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
            <div className="skill-level-bar">
              <div 
                className="skill-level-fill"
                style={{ width: inView ? `${skill.level}%` : '0%' }}
              />
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;