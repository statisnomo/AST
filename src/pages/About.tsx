import { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const directors = [
    {
      id: 1,
      name: "Dr. Manish Kumar",
      role: "Co-Founder & Director",
      expertise: "Cybersecurity Architecture, Cryptography",
      experience: "15+ years",
      bio: "Associate Professor, Department of Mathematics, BITS Pilani Hyderabad Campus",
      quote:
        "Security is not just about technology; it's about understanding the threat landscape and staying ahead.",
      initials: "MK",
      color: "linear-gradient(135deg, #00d9ff, #0066ff)",
    },
    {
      id: 2,
      name: "Co-Founder 2",
      role: "CTO & Co-Founder",
      expertise: "IoT & Cloud Security",
      experience: "12+ years",
      bio: "Expert in IoT security and cloud infrastructure. Led security initiatives for Fortune 500 companies.",
      quote:
        "Innovation in security means thinking beyond traditional boundaries and embracing emerging technologies.",
      initials: "PM",
      color: "linear-gradient(135deg, #7c3aed, #00d9ff)",
    },
  ];

  const team = [
    {
      id: 3,
      name: "Srijen Raja",
      role: "Web Developer",
      specialization: "Front-End and App Development",
      experience: "8 years",
      quote: "Finding zero-days before the attackers do.",
      initials: "SR",
      color: "linear-gradient(135deg, #00d9ff, #7c3aed)",
    },
    {
      id: 4,
      name: "Anand Venkataraman",
      role: "Web Developer",
      specialization: "Front-End Development",
      experience: "8 years",
      quote: "Defense is best understood by simulating attacks.",
      initials: "AV",
      color: "linear-gradient(135deg, #0066ff, #00d9ff)",
    },
    {
      id: 5,
      name: "Rushil Mohan",
      role: "Web Developer",
      specialization: "Cloud Security and Front-End Development",
      experience: "8 years",
      quote: "Building secure systems that scale.",
      initials: "RM",
      color: "linear-gradient(135deg, #7c3aed, #0066ff)",
    },
    {
      id: 6,
      name: "Varun V",
      role: "Cybersecurity Intern",
      specialization: "MSc Economics",
      experience: "7 years",
      quote: "Security in every step of development.",
      initials: "VV",
      color: "linear-gradient(135deg, #00d9ff, #7c3aed)",
    },
    {
      id: 7,
      name: "Tushar Bhide",
      role: "IoT Security Intern",
      specialization: "MSc. Economics and B.E. Computer Science",
      experience: "6 years",
      quote: "Securing the connected world, one device at a time.",
      initials: "TB",
      color: "linear-gradient(135deg, #0066ff, #7c3aed)",
    },
    {
      id: 8,
      name: "Ishaan Singh",
      role: "Embedded Systems Intern",
      specialization: "MSc. Physics and B.E. Mathematics and Computing",
      experience: "6 years",
      quote: "Creating security solutions users actually want to use.",
      initials: "IS",
      color: "linear-gradient(135deg, #7c3aed, #00d9ff)",
    },
    {
      id: 9,
      name: "Havish Grandhi",
      role: "Security Analysis Intern",
      specialization: "MSc. Mathematics",
      experience: "6 years",
      quote: "Data tells the story of every attack.",
      initials: "HG",
      color: "linear-gradient(135deg, #00d9ff, #0066ff)",
    },
  ];

  return (
    <section className={`about-section section ${isVisible ? "visible" : ""}`}>
      <div className="container">
        <h2 className="section-title">About Atharv SecureTech</h2>

        <div className="about-intro">
          <p>
            Atharv SecureTech Pvt. Ltd. is a next-generation cybersecurity and
            IoT solutions company built on a foundation of research, innovation,
            and trust. We specialize in developing secure, scalable, and
            patent-driven technologies for protecting digital ecosystems,
            government platforms, and industrial IoT infrastructures.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Mission</h3>
            <p>
              To develop and deliver innovative, secure, and scalable software
              and hardware solutions that safeguard IoT devices, digital
              infrastructure, and critical systems — empowering enterprises,
              governments, and communities with trusted technology.
            </p>
          </div>

          <div className="value-card">
            <h3>Vision</h3>
            <p>
              To be a global leader in cybersecurity and IoT security
              innovations, recognized for patent-driven technologies, industry
              collaborations, and impactful research.
            </p>
          </div>

          <div className="value-card">
            <h3>Philosophy</h3>
            <p>
              Creating a safe, secure, and connected digital ecosystem where
              innovation meets trust.
            </p>
          </div>
        </div>

        <div className="core-values">
          <h3>Core Values</h3>
          <div className="values-list">
            <div className="value-item">
              <span className="value-label">Innovation</span>
              <p>Turning research into real-world secure technologies</p>
            </div>
            <div className="value-item">
              <span className="value-label">Integrity</span>
              <p>Building transparent, trust-centered systems</p>
            </div>
            <div className="value-item">
              <span className="value-label">Excellence</span>
              <p>Pursuing quality, reliability, and performance</p>
            </div>
            <div className="value-item">
              <span className="value-label">Collaboration</span>
              <p>Partnering with academia, industry, and government</p>
            </div>
            <div className="value-item">
              <span className="value-label">Future-Readiness</span>
              <p>Advancing solutions in cryptography and quantum security</p>
            </div>
          </div>
        </div>

        <div className="leadership">
          <h3 className="subsection-title">Leadership</h3>
          <div className="directors-grid">
            {directors.map((director) => (
              <div key={director.id} className="director-card">
                <div className="avatar">{director.initials}</div>
                <h4>{director.name}</h4>
                <p className="role">{director.role}</p>
                <p className="expertise">{director.expertise}</p>
                <p className="bio">{director.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team">
          <h3 className="subsection-title">Our Team</h3>
          <p className="team-intro">
            Our strength lies in a team that blends experience with innovation.
          </p>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-member">
                <div className="avatar">{member.initials}</div>
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
