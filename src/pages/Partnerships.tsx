import { useEffect, useState } from "react";
import "./Partnerships.css";

const Partnerships = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    email: "",
    phone: "",
    collaborationType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        orgName: "",
        contactName: "",
        email: "",
        phone: "",
        collaborationType: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      className={`partnerships-section section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Partnerships & Collaborations</h2>

        <div className="collab-intro">
          <p>
            Atharv SecureTech actively partners with academic institutions,
            government organizations, and technology startups to drive
            innovation and security across digital platforms.
          </p>
        </div>

        <div className="collab-model">
          <h3>Our Collaboration Model</h3>
          <div className="model-grid">
            <div className="model-card">
              <span className="model-icon">🤝</span>
              <h4>Joint Research Projects</h4>
              <p>
                Collaborative research initiatives addressing cybersecurity
                challenges
              </p>
            </div>
            <div className="model-card">
              <span className="model-icon">🔄</span>
              <h4>Technology Transfer & Licensing</h4>
              <p>
                Patent licensing and technology commercialization opportunities
              </p>
            </div>
            <div className="model-card">
              <span className="model-icon">🛠️</span>
              <h4>Product Co-Development</h4>
              <p>Joint development of innovative security solutions</p>
            </div>
            <div className="model-card">
              <span className="model-icon">🚀</span>
              <h4>Incubation Support</h4>
              <p>Mentorship and resources for startup acceleration</p>
            </div>
          </div>
        </div>

        <div className="target-partners">
          <h3>Current & Target Collaborators</h3>
          <div className="partners-list">
            <div className="partner-item">
              <span className="partner-icon">🎓</span>
              <p>Academic Research Institutions</p>
            </div>
            <div className="partner-item">
              <span className="partner-icon">🏛️</span>
              <p>Government Cybersecurity Departments</p>
            </div>
            <div className="partner-item">
              <span className="partner-icon">🏢</span>
              <p>Private Industry Partners</p>
            </div>
            <div className="partner-item">
              <span className="partner-icon">⚡</span>
              <p>Startup Accelerators</p>
            </div>
          </div>
        </div>

        <div className="proposal-section">
          <h3>Propose a Collaboration</h3>
          <form className="proposal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="orgName"
                placeholder="Organization Name"
                value={formData.orgName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="contactName"
                  placeholder="Contact Person"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="collaborationType"
                  value={formData.collaborationType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Collaboration Type</option>
                  <option value="research">Joint Research</option>
                  <option value="technology">Technology Transfer</option>
                  <option value="product">Product Co-Development</option>
                  <option value="incubation">Incubation Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Describe your collaboration proposal..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted
                ? "✓ Proposal Submitted!"
                : "Submit Collaboration Proposal"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
