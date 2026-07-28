function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/home">
          Ishwor<span>.</span>
        </a>
      </div>

      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;