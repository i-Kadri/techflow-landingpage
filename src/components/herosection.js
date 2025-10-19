// import codebase from "../assets/codebase.jpg";

function HeroSection() {
  return (
    <div className="Hero-container">
      <div className="Hero-div">
        <h1>Build Amazing Digital Products</h1>
        <p>
          where We help businesses create stunning web applications and digital
          experiences that drive growth and engagement.
        </p>
        <div className="buttons">
          <button className="Hero-button">Get Started</button>
          {/* <button className="Hero-button Hero-button-secondary">
            Learn More
          </button> */}
        </div>
      </div>

      <div className="Hero-image">
        <img
          src={require("../assets/codebase.jpg")}
          alt="Hero"
          className="hero-img"
        />
      </div>
    </div>
  );
}

export default HeroSection;
