import React from "react";
import "./Home.css";
import heroRight from "../assets/BG_Design.png";
import About from "./About";

const Home = () => {
  return (
    <div className="home-bg">
      <section>
        <div className="hero-card">
          {/* Left content */}
          <div className="hero-left">
            <h1 className="hero-title">
              We craft intelligent
              <br />
              digital experiences
            </h1>

            <p className="hero-sub">
              {/* We build intelligent digital solutions that simplify complex system
            design and collaboration.  */}
              Our flagship product, the{" "}
              <strong> Webcomposition Architecture Model (WAM)</strong> empowers
              teams to visually model, describe, and refine system architectures
              through an intuitive AI-assisted platform
            </p>

            <a
              href="#contact"
              className="cta-yellow"
              aria-label="Book a free consultation"
            >
              <span>Book a free consultation</span>
              <span className="cta-icon" aria-hidden>
                →
              </span>
            </a>
          </div>

          {/* Right image */}
          <div className="hero-right">
            <img src={heroRight} alt="" />
            <div className="hero-gradient" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <About />
    </div>
  );
};

export default Home;
