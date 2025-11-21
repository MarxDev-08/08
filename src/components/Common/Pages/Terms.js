import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-bg">
      <section className="terms-card">
        <h3>Terms and Conditions</h3>
        <p className="terms-lead">
          Please read these terms and conditions carefully before using this website.
        </p>

        <div className="terms-content">
          <h4>1. General</h4>
          <p>
            This website is part of a university project for the "Planspiel Web Engineering" course and does not represent a real company or business entity. 
            The content provided here is solely for educational purposes.
          </p>

          <h4>2. Use of Website</h4>
          <p>
            You may use this website for personal, non-commercial, and educational purposes only. Any unauthorized use or misuse of the website content is prohibited.
          </p>

          <h4>3. Intellectual Property</h4>
          <p>
            All content on this website, including text, images, and design elements, was created for this academic project and is protected under copyright laws. You may not reproduce or distribute any part of the website without permission.
          </p>

          <h4>4. No Commercial Use</h4>
          <p>
            Since this is a university project, the website and its content do not offer real products or services, and any information provided should not be relied upon for commercial purposes.
          </p>

          <h4>5. Limitation of Liability</h4>
          <p>
            The creators of this website are students and are not responsible for any damages, losses, or inconvenience resulting from the use of this website. The website is provided "as is" without warranties of any kind.
          </p>

          <h4>6. Privacy Notice</h4>
          <p>
            Any personal data submitted through this website (for example, via forms) is solely for testing and demonstration purposes. No personal data will be shared outside the context of this project.
          </p>

          <h4>7. Modifications</h4>
          <p>
            The website creators reserve the right to modify or update this Terms and Conditions page at any time. Changes will be reflected on this page immediately.
          </p>

          <h4>8. Acknowledgment</h4>
          <p>
            By using this website, you acknowledge that it is an academic project, and you agree to these terms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;
