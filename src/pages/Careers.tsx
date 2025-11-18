import { useEffect, useState } from "react";
import "./Careers.css";

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experienceLevel: "",
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
        name: "",
        email: "",
        phone: "",
        position: "",
        experienceLevel: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const jobOpenings = [
    { id: 1, title: "Cybersecurity Interns", level: "Internship" },
    { id: 2, title: "IoT Security Interns", level: "Internship" },
    { id: 3, title: "Research Associates (R&D)", level: "Full-time" },
    { id: 4, title: "Technical Consultants", level: "Full-time" },
  ];

  const testimonials = [
    {
      name: "Aditya Patel",
      role: "IoT Security Research Intern",
      quote:
        "Being part of Atharv SecureTech helped me apply my academic learning to real cybersecurity problems.",
    },
    {
      name: "Neha Sharma",
      role: "Cybersecurity Analyst Intern",
      quote:
        "The hands-on experience and mentorship I received here was invaluable for my career growth.",
    },
  ];

  return (
    <section
      className={`careers-section section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Careers & Internships</h2>

        <div className="careers-intro">
          <p>
            Join a team of passionate innovators working to secure the future of
            digital technology. At Atharv SecureTech, we believe in learning
            through hands-on experience and collaborative research.
          </p>
          <p className="life-text">
            Our interns and team members work closely with senior researchers
            and directors on live projects, gaining exposure to real-world
            challenges in cryptography, IoT protection, and AI security.
          </p>
        </div>

        <div className="openings">
          <h3>Current Openings</h3>
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <h4>{job.title}</h4>
                <span className="job-level">{job.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials">
          <h3>Life at Atharv SecureTech</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <p className="quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="application-section">
          <h3>Apply Now</h3>
          <p>Send your resume and area of interest to us</p>
          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-row">
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
            </div>

            <div className="form-row">
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
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Position</option>
                  <option value="cybersecurity-intern">
                    Cybersecurity Interns
                  </option>
                  <option value="iot-intern">IoT Security Interns</option>
                  <option value="research">Research Associates</option>
                  <option value="consultant">Technical Consultants</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select Experience Level</option>
                <option value="student">Student</option>
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about yourself and why you'd like to join our team..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="apply-btn">
              {submitted ? "✓ Application Submitted!" : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Careers;
