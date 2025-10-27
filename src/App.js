// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection.js";
import "./components/herosection.css";
import "./components/navbar.css";
import Services from "./components/services.js";
import Footer from "./components/footer.js";
import "./components/services.css";
import "./components/footer.css";

function App() {
  return (
    <div className="Container">
      <nav className="navbar">
        <Navbar />
      </nav>

      <header className="hero">
        <HeroSection />
      </header>

      <section className="services">
        <Services />
      </section>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
export default App;
