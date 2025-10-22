import { FaBolt } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="navbar-box">
      <div className="Logo-box">
        <div className="logo-icon">
          <FaBolt
          // style={{
          //   background: "#1619c7",
          //   // padding: "6px",
          //   borderRadius: "7px",
          // }}
          // size="1em"
          // margin=".5em"
          // color="white"
          />
        </div>
        <div className="logo-text">TechFlow</div>
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
