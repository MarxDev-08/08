import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-bg">
      <footer className="footer">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <h3>MarxDev</h3>
            <p>
              Building intelligent digital products and AI solutions that
              empower innovation and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/imprint">Imprint</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/marxdev/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon htmlColor="#ffffff" sx={{ fontSize: 32 }} />
              </a>
              <a
                href="https://github.com/MarxDev-08"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon htmlColor="#ffffff" sx={{ fontSize: 32 }} />
              </a>
              <a
                href="https://www.instagram.com/marx.dev09111/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon htmlColor="#ffffff" sx={{ fontSize: 32 }} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} MarxDev. All rights reserved.</p>
          <p>
            DISCLAIMER: This website does not belong to a real company. It is a
            Planspiel Web Engineering project.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
