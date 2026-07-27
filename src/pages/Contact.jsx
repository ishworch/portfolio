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
            <p>your-email@example.com</p>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit" className="btn primary-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;