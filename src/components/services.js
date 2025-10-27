function Services() {
  return (
    <div className="Services-container">
      <div className="service-box">
        <h2>Why Choose Us</h2>
        <p>
          {" "}
          We deliver exceptional results with cutting-edge technology and
          innovative solutions{" "}
        </p>
      </div>

      <div className="service-cards">
        <div className="fast-card">
          <div className="fast-logo"></div>
          <h3>Fast Performance</h3>
          <p>
            Lightning-fast loading times and optimized performance for best user
            experience across all devices.
          </p>
        </div>

        <div className="security-card">
          <div className="security-logo"></div>
          <h3>Secure & Reliable</h3>
          <p>
            Enterprise-grade security measures and 99.9% uptime guarantee to
            keep your business running smoothly.
          </p>
        </div>

        <div className="design-card">
          <div className="design-logo"></div>
          <h3>Beautiful Design</h3>
          <p>
            Stunning modern designs that captivate your audience and reflect
            your brand's unique identity.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
