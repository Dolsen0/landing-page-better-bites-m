function Navibar() {
  return (
    <nav>
      <ul>
        <li className="brand">Better Bites</li>
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#menu" className="nav-link">
            Menu
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navibar;