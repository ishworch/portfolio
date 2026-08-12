import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact({ darkMode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section 
      className={`page-section contact-section ${darkMode ? 'dark-section' : ''}`}
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-heading">
        <p>Let's Work Together</p>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Let's talk</h2>

          <p>
            If you have a project idea, opportunity, or just want to connect,
            feel free to contact me.
          </p>

          <div className="contact-item">
            <strong>📧 Email</strong>
            <p>
              <a href="mailto:ishworchalise@gmail.com">
                ishworchalise@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <strong>📍 Location</strong>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="contact-item">
            <strong>🔗 Social</strong>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/ishwor-chalise-036574293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a 
                href="https://github.com/ishworch"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a 
                href="mailto:ishworchalise@gmail.com"
                className="social-link"
              >
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-info"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-card">
            <h3>📬 Get in Touch</h3>
            <p>
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Feel free to reach out to me via email or connect with me on social media.
            </p>
            <div className="contact-cta">
              <a href="mailto:ishworchalise@gmail.com" className="btn primary-btn">
                <i className="fas fa-paper-plane"></i> Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;