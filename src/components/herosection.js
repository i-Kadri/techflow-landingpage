// import codebase from "../assets/codebase.jpg";

function HeroSection() {
  return (
    <div className="Hero-container">
      <div className="Hero-box">
        <div className="Hero-div">
          <h1>
            Build Amazing{" "}
            <span style={{ color: "#3b3eee" }}>Digital Products</span>
          </h1>
          <p>
            Where we help businesses create stunning web applications and
            digital experiences that drive growth and engagement.
          </p>
          <div className="buttons">
            <button className="hero-btn">Get Started</button>
            {/* <button className="Hero-button Hero-button-secondary">
              Learn More
            </button> */}
            <button className="learn-btn">Learn More</button>
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
    </div>
  );
}

export default HeroSection;
