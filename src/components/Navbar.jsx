function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/Home">
          Ishwor<span>.</span>
        </a>
      </div>

      <div className="nav-links">
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/Skills">Skills</a>
        <a href="/Projects">Projects</a>
        <a href="/Contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;