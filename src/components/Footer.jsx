function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ishwor Chalise. All Rights Reserved.</p>
        <div className="footer-links">
          <a 
            href="https://www.linkedin.com/in/ishwor-chalise-036574293/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/ishworch" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:ishworchalise1@gmail.com" 
            className="footer-link"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;