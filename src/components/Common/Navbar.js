import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="page-bg">
      <header className="nav-shell">
        <div className="nav-left">
          <img src={logo} alt="MarxDev logo" className="nav-logo" />
          <span className="nav-brand">MarxDev</span>
        </div>

        {/* Center links */}
        <nav className="nav-center">
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          {/* <Link to="/events">Events</Link> */}
          <Link to="/blog">Blog</Link>
        </nav>

        {/* Right: Lang + CTA */}
        <div className="nav-right">
          <button className="cta">
            <Link to="/contact">Talk to us</Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
