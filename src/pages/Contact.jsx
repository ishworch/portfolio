function Contact() {
  return (
    <section className="page-section contact-section">
      <div className="section-heading">
        <p>Let's Work Together</p>
        <h1>Contact Me</h1>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's talk</h2>

          <p>
            If you have a project idea, opportunity, or just want to connect,
            feel free to contact me.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <p>
              <a href="mailto:ishworchalise@gmail.com">
                ishworchalise@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="contact-item">
            <strong>Social</strong>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;