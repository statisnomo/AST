import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="home-section">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <h1 className="hero-title">
          Innovating Trust in a{" "}
          <span className="gradient-text">Connected World</span>
        </h1>
        <p className="hero-subtitle">
          Research-driven Cybersecurity and IoT Solutions for a Secure Digital
          Future
        </p>
        <p className="hero-description">
          Atharv SecureTech Pvt. Ltd. is a research-driven cybersecurity and IoT
          technology company committed to protecting digital infrastructures
          through advanced cryptography, secure hardware, and scalable software
          frameworks.
        </p>

        <div className="focus-areas">
          <h3>Core Focus Areas:</h3>
          <div className="areas-grid">
            <div className="area-card">
              <span className="area-icon">🔐</span>
              <p>Cybersecurity Frameworks for Enterprise and Government</p>
            </div>
            <div className="area-card">
              <span className="area-icon">📱</span>
              <p>IoT Device Protection and Secure Embedded Systems</p>
            </div>
            <div className="area-card">
              <span className="area-icon">⚛️</span>
              <p>Quantum Encryption and Cryptographic Solutions</p>
            </div>
            <div className="area-card">
              <span className="area-icon">🔬</span>
              <p>Research, Consulting, and Training Services</p>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">Explore Our Solutions</button>
          <button className="btn btn-secondary">Contact Us</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Security Solutions</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Patents & Research</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
