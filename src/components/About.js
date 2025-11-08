import React from "react";
import "./About.css";
import team1 from "../assets/Samrat.jpg";
import team2 from "../assets/Pabasara.png";
import team3 from "../assets/Saudamini.jpg";
import team4 from "../assets/Amami.jpg";
import team5 from "../assets/Sandeep.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <div>
      <section className="about-mission-page">
        {/* Mission Section */}
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Empower every organization to design and analyze system
            architectures effortlessly
          </p>
        </div>
      </section>
      <section className="about-page">
        {/* Core Values Section */}
        <div className="about-values alt-layout">
          <h2>Core Values</h2>
          <div className="values-timeline">
            <div className="value-item">
              <div className="dot"></div>
              <div>
                <h3>Innovation</h3>
                <p>
                  We challenge conventions and push boundaries, transforming
                  complex ideas into practical, forward-thinking solutions.
                </p>
              </div>
            </div>

            <div className="value-item">
              <div className="dot"></div>
              <div>
                <h3>Integrity</h3>
                <p>
                  Transparency, honesty, and responsibility guide everything we
                  do — from communication to execution.
                </p>
              </div>
            </div>

            <div className="value-item">
              <div className="dot"></div>
              <div>
                <h3>Collaboration</h3>
                <p>
                  We thrive on teamwork. Our best results come from open
                  dialogue, diverse perspectives, and shared creativity.
                </p>
              </div>
            </div>

            <div className="value-item">
              <div className="dot"></div>
              <div>
                <h3>Excellence</h3>
                <p>
                  Every line of code, every design element, and every decision
                  is driven by a pursuit of quality and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-team-page">
        {/* Team Section */}
        <div className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={team1} alt="Team Member" />
              <h4>Samrat Kamthe</h4>
              {/* <p>Co-Founder & Full-stack Developer</p> */}
              <div className="team-socials">
                <a
                  href="https://www.linkedin.com/in/samrat-kamthe-a62545246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="medium" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon fontSize="medium" />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src={team2} alt="Team Member" />
              <h4>Pabasara Palihena</h4>
              {/* <p>Co-Founder & Full-stack Developer</p> */}
              <div className="team-socials">
                <a
                  href="https://www.linkedin.com/in/pabasara-palihena-91a618211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="medium" />
                </a>
                <a
                  href="https://github.com/PabasaraPalihena"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon fontSize="medium" />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src={team3} alt="Team Member" />
              <h4>Saudamini Vivek</h4>
              {/* <p>Co-Founder & Full-stack Developer</p> */}
              <div className="team-socials">
                <a
                  href="https://www.linkedin.com/in/saudamini-tergaonkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="medium" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon fontSize="medium" />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src={team4} alt="Team Member" />
              <h4>Amami Uduwana</h4>
              {/* <p>Co-Founder & Full-stack Developer</p> */}
              <div className="team-socials">
                <a
                  href="https://www.linkedin.com/in/amami-uduwana-3b3b46172/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="medium" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon fontSize="medium" />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src={team5} alt="Team Member" />
              <h4>Sandeep Dhange</h4>
              {/* <p>Co-Founder & Full-stack Developer</p> */}
              <div className="team-socials">
                <a
                  href="https://www.linkedin.com/in/sandeep-shankar-dhange/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="medium" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon fontSize="medium" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
