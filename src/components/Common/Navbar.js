import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Logo.png";

// MUI (you already use MUI elsewhere)
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const linkClass = ({ isActive }) => "navlink" + (isActive ? " active" : "");

  return (
    <div className="page-bg">
      <header className="nav-shell">
        {/* Left: logo + brand */}
        <div className="nav-left">
          <img src={logo} alt="MarxDev logo" className="nav-logo" />
          <span className="nav-brand">MarxDev</span>
        </div>

        {/* Center: desktop links */}
        <nav className="nav-center">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>
        </nav>

        {/* Right: CTA + Hamburger */}
        <div className="nav-right">
          {/* Desktop CTA */}
          <Link to="/contact" className="cta">
            Talk to us
          </Link>

          {/* Mobile hamburger */}
          <IconButton
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            size="large"
          >
            <MenuRoundedIcon />
          </IconButton>
        </div>
      </header>

      {/* Drawer (mobile) */}
      <Drawer
        anchor="right"
        open={open}
        onClose={close}
        PaperProps={{
          sx: {
            width: 300,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          },
        }}
      >
        <div className="drawer-header">
          <div className="drawer-brand">
            <img src={logo} alt="MarxDev logo" />
            <span>MarxDev</span>
          </div>
          <IconButton aria-label="Close menu" onClick={close}>
            <CloseRoundedIcon />
          </IconButton>
        </div>

        <nav className="drawer-nav" onClick={close}>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>

          <Link to="/contact" className="drawer-cta">
            Talk to us <ArrowRightAltRoundedIcon fontSize="inherit" />
          </Link>
        </nav>
      </Drawer>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../../assets/Logo.png";

// const Navbar = () => {
//   return (
//     <div className="page-bg">
//       <header className="nav-shell">
//         <div className="nav-left">
//           <img src={logo} alt="MarxDev logo" className="nav-logo" />
//           <span className="nav-brand">MarxDev</span>
//         </div>

//         {/* Center links */}
//         <nav className="nav-center">
//           <Link to="/" end>
//             Home
//           </Link>
//           <Link to="/about">About</Link>
//           {/* <Link to="/events">Events</Link> */}
//           <Link to="/blog">Blog</Link>
//         </nav>

//         {/* Right: Lang + CTA */}
//         <div className="nav-right">
//           <button className="cta">
//             <Link to="/contact">Talk to us</Link>
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
