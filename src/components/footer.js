import { FaBolt, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer-box">
      <div className="footer-icon">
        <FaBolt
          style={{
            background: "#3b3eee",
            padding: "0.5rem",
            borderRadius: "7px",
            margin: ".5em",
            color: "white",
            display: "block",
          }}
        />
        <h3>TechFlow</h3>
      </div>
      {/* <div className="logo-text">TechFlow</div> */}
      <p>© {new Date().getFullYear()} TechFlow. All rights reserved.</p>

      <div className="footer-links">
        <span>
          {" "}
          <FaFacebook />{" "}
        </span>
        <span>
          {" "}
          <FaTwitter />{" "}
        </span>
        <span>
          <FaInstagram />{" "}
        </span>
        <span>
          <FaLinkedin />
        </span>
      </div>
    </footer>
  );
}
export default Footer;
