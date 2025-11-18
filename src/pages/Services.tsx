import { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Cybersecurity Solutions",
      icon: "🔐",
      description:
        "End-to-end cybersecurity solutions designed for enterprise, government, and industrial sectors.",
      details: [
        "Vulnerability analysis and penetration testing",
        "Digital infrastructure audits",
        "Secure communication systems",
        "Threat detection and response",
      ],
    },
    {
      id: 2,
      title: "IoT Device Security",
      icon: "📱",
      description:
        "From industrial IoT to smart cities, we protect connected devices with embedded security.",
      details: [
        "Embedded security architectures",
        "Firmware validation",
        "Real-time device monitoring",
        "Secure device management",
      ],
    },
    {
      id: 3,
      title: "Quantum Encryption & Cryptography",
      icon: "⚛️",
      description:
        "Lightweight cryptographic algorithms and quantum-resistant encryption techniques.",
      details: [
        "Lightweight cryptographic algorithms",
        "Quantum-resistant encryption",
        "Secure data frameworks",
        "Quantum key distribution",
      ],
    },
    {
      id: 4,
      title: "Research & Development",
      icon: "🔬",
      description:
        "Our R&D labs focus on emerging technologies in cryptography and AI-driven security.",
      details: [
        "Innovation labs and incubators",
        "Patent development",
        "Technology transfer",
        "Collaborative research projects",
      ],
    },
    {
      id: 5,
      title: "Training & Advisory",
      icon: "📚",
      description:
        "Customized training programs and consultancy services for organizations.",
      details: [
        "Cybersecurity workshops",
        "Enterprise consulting",
        "Security awareness training",
        "Government advisory services",
      ],
    },
  ];

  return (
    <section
      className={`services-section section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <button className="service-btn">Request a Proposal</button>
            </div>
          ))}
        </div>

        <div className="partnership-section">
          <h3>Partner With Us</h3>
          <p>
            We invite enterprises, startups, and government organizations to
            collaborate with us.
          </p>
          <button className="partner-btn">Partner With Us</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
