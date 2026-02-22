import { FaTimes, FaBars } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar-box" role="navigation" aria-label="Main">
      <div className="Logo-box">
        <div className="logo-icon" aria-hidden="true">
          <FaBolt size={20} />
        </div>
        <div className="logo-text">TechFlow</div>
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <ul
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
