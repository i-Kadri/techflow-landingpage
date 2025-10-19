// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection.js";
import "./components/herosection.css";
import "./components/navbar.css";

function App() {
  return (
    <div className="Container">
      <nav className="navbar">
        <Navbar />
      </nav>

      <header className="hero">
        <HeroSection />
      </header>
    </div>
  );
}
export default App;
