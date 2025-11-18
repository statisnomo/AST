import { useEffect, useState } from "react";
import "./Contant.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      className={`contact-section section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <p className="contact-intro">
          We'd love to hear from you. Whether you're interested in partnerships,
          consulting, or research collaborations, reach out to our team.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>Atharv SecureTech Pvt. Ltd.</p>
              <p>TBI, BITS Pilani Hyderabad Campus</p>
              <p>Jawahar Nagar, Shameerpet Mandal</p>
              <p>Hyderabad, Telangana – 500078</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:atharvsecuretech@gmail.com">
                  atharvsecuretech@gmail.com
                </a>
              </p>
              <p>Response within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+919550212579">+91-9550212579</a>
              </p>
              <p>Available during business hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🔗</div>
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#linkedin" className="social-link">
                  LinkedIn
                </a>
                <a href="#twitter" className="social-link">
                  Twitter
                </a>
                <a href="#github" className="social-link">
                  GitHub
                </a>
                <a href="#researchgate" className="social-link">
                  ResearchGate
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
