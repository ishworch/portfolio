import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1500);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

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
        <h1>Contact Me</h1>
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
                LinkedIn
              </a>
              <a 
                href="mailto:ishworchalise@gmail.com"
                className="social-link"
              >
                Email
              </a>
              <a 
                href="https://github.com/ishworch"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="newsletter-section">
            <h3>📬 Subscribe to Newsletter</h3>
            <p>Get updates on my latest projects and blog posts.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                disabled={subscribed}
              />
              <button type="submit" className="btn primary-btn" disabled={subscribed}>
                {subscribed ? '✅ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {submitStatus === 'success' && (
            <div className="status-message success">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <button 
            type="submit" 
            className="btn primary-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;