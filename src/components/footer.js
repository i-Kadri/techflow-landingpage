import { FaBolt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-box">
      <div className="logo-icon">
        <FaBolt style={{}} />
        <h3>TechFlow</h3>
      </div>
      <div className="logo-text">TechFlow</div>
      <p>© {new Date().getFullYear()} TechFlow. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
