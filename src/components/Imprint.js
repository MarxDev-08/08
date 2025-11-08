import React from "react";
import "./Imprint.css";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Imprint = () => {
  return (
    <section className="imprint-bg">
      <div className="imprint-card">
        <header className="imprint-header">
          <h1>Imprint</h1>
          <p className="imprint-kicker">
            Responsible for content: <strong>MarxDev</strong>
          </p>
        </header>

        {/* Contact / Address */}
        <div className="imprint-grid">
          <div className="imprint-block">
            <h2>
              <PlaceRoundedIcon /> Address
            </h2>
            <address className="imprint-address">
              Chemnitz
              <br />
              Saxony, Germany
            </address>
            {/* <a
              className="map-link"
              href="https://maps.google.com/?q=Chemnitz,+Saxony,+Germany"
              target="_blank"
              rel="noreferrer"
            >
              Open map <OpenInNewRoundedIcon fontSize="inherit" />
            </a> */}
          </div>

          <div className="imprint-block">
            <h2>
              <InfoOutlinedIcon /> Contact Information
            </h2>
            <ul className="imprint-list">
              <li>
                <EmailRoundedIcon />
                <a href="mailto:marxdev09111@gmail.com">
                  marxdev09111@gmail.com
                </a>
              </li>
              <li>
                <PersonRounded />
                <a>Saudamini Tergaonkar</a>
              </li>
              <li>
                <PhoneIphoneRoundedIcon />
                <a href="tel:+4915754846422">+49 15754846422</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="imprint-section">
          <h2>
            <GavelRoundedIcon /> Legal Details
          </h2>
          <p>
            This website is part of a <em>Planspiel Web Engineering</em> project
            and does not represent a real company or business entity.
          </p>
        </div>

        {/* Copyright */}
        <div className="imprint-section">
          <h2>Copyright</h2>
          <p>© 2025 MarxDev. All rights reserved.</p>
        </div>

        {/* Disclaimer */}
        <div className="imprint-section">
          <h2>Disclaimer</h2>
          <ul className="bullet-list">
            <li>
              <strong>Non-Commercial Use:</strong> This website is for
              educational purposes only and does not conduct real business
              operations.
            </li>
            <li>
              <strong>External Links:</strong> We are not responsible for the
              content of external websites linked here. Responsibility for
              linked content lies solely with their respective operators.
            </li>
            <li>
              <strong>Liability:</strong> The content of this website is
              provided “as is” and without warranties of any kind.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Imprint;
