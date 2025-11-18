import { useEffect, useState } from "react";
import "./Research.css";

const Research = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const focusAreas = [
    {
      icon: "🔐",
      title: "Lightweight Cryptographic Algorithms",
      description:
        "Developing efficient encryption methods for resource-constrained devices",
    },
    {
      icon: "⚛️",
      title: "Quantum-Resistant Security Protocols",
      description: "Preparing cryptographic systems for quantum computing era",
    },
    {
      icon: "📱",
      title: "Secure IoT Device Frameworks",
      description:
        "Building comprehensive security architectures for IoT ecosystems",
    },
    {
      icon: "🤖",
      title: "AI-powered Cyber Defense Systems",
      description:
        "Using machine learning for advanced threat detection and response",
    },
    {
      icon: "🆔",
      title: "Digital Identity & Authentication",
      description:
        "Innovative identity verification and authentication mechanisms",
    },
    {
      icon: "🔬",
      title: "Emerging Security Technologies",
      description: "Research on next-generation security innovations",
    },
  ];

  return (
    <section
      className={`research-section section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Research & Innovation</h2>

        <div className="research-intro">
          <p>
            At the core of Atharv SecureTech lies a substantial research and
            development ecosystem. Our team actively explores advancements in
            quantum cryptography, AI-based threat detection, and secure embedded
            systems.
          </p>
        </div>

        <div className="focus-areas">
          <h3>Focus Areas</h3>
          <div className="focus-grid">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="focus-card">
                <div className="focus-icon">{area.icon}</div>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="innovation-labs">
          <h3>Innovation Labs</h3>
          <div className="labs-content">
            <p>
              Our innovation and incubation labs serve as a hub for testing
              prototypes, developing patents, and fostering collaboration with
              academia and startups. We provide:
            </p>
            <ul className="labs-list">
              <li>State-of-the-art research facilities</li>
              <li>Collaborative workspace for researchers</li>
              <li>Access to cutting-edge technologies</li>
              <li>Patent development support</li>
              <li>Industry-academic partnerships</li>
            </ul>
          </div>
        </div>

        <div className="collaborate-section">
          <h3>Collaborate With Us</h3>
          <p>
            We invite universities, industries, and government research bodies
            to join hands with us in developing technologies that shape a safer
            digital world.
          </p>
          <button className="collaborate-btn">Start a Collaboration</button>
        </div>
      </div>
    </section>
  );
};

export default Research;
