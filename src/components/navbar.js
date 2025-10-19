import { FaBolt } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="navbar-box">
      <div className="Logo">
        {" "}
        <span className="logo-text">
          <FaBolt
            style={{
              background: "#1619c7",
              padding: "5px",
              borderRadius: "5px",
            }}
            size="1em"
            margin=".5em"
            color="white"
          />{" "}
        </span>
        TechFlow
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
export default Navbar;
