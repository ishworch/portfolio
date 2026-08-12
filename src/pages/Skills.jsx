import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills({ darkMode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "Canva", icon: "🎨" },
    { name: "Node.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Git", icon: "📊" },
    { name: "Figma", icon: "🎯" },
    { name: "Cybersecurity", icon: "🔒" }
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
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;