import React, { useState } from "react";
import "./Contact.css";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialState = {
  name: "",
  website: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
  consent: false,
};

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ open: false, type: "success", msg: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.topic) e.topic = "Please choose a topic";
    if (!form.message.trim()) e.message = "Tell us a little about your idea";
    if (!form.consent) e.consent = "You must agree before sending";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone || "-",
          website: form.website || "-",
          topic: form.topic || "-",
          message: form.message,
          to_email: "marxdev09111@gmail.com",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setAlert({
        open: true,
        type: "success",
        msg: "Thanks! Your message was sent successfully.",
      });
      setForm(initialState);
      setErrors({});
    } catch (err) {
      console.error(err);
      setAlert({
        open: true,
        type: "error",
        msg: "Sorry, something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="contact-bg">
      {/* --- Top CTA card --- */}
      <section className="contact-cta">
        <h2>Let’s Talk.</h2>
        <p>
          We build intelligent digital products and AI solutions. Call us or
          book a meeting to talk about how technology can grow your business.
        </p>
        <div className="contact-person">
          <h4>Saudamini Tergaonkar</h4>
          <p>Chemnitz, Germany</p>
        </div>
        <div className="cta-row">
          <a className="cta-pill cta-pill--hollow" href="tel:+4915754846422">
            <PhoneIphoneRoundedIcon />
            <span>+49 15754846422</span>
          </a>
        </div>
      </section>

      {/* --- Form card --- */}
      <section className="contact-form-card" id="contact-form">
        <h3>Send us a message</h3>
        <p className="form-lead">
          Tell us a bit about what you’re planning to build. Or email us at{" "}
          <a href="mailto:marxdev09111@gmail.com">marxdev09111@gmail.com</a>.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {/* Name */}
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Enter name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error">{errors.name}</small>}
            </div>

            {/* Website */}
            <div className="field">
              <label htmlFor="website">
                Your company website<span className="muted"> (Optional)</span>
              </label>
              <input
                id="website"
                name="website"
                placeholder="Enter company website link"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            {/* Phone (optional) */}
            <div className="field">
              <label htmlFor="phone">
                Phone <span className="muted">(Optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Topic */}
            <div className="field span-2">
              <label htmlFor="topic">What is your message about?</label>
              <select
                id="topic"
                name="topic"
                value={form.topic}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="wam">WAM Architecture Editor</option>
                <option value="ai">AI / LLM integration</option>
                <option value="web">Web application</option>
                <option value="consulting">Consulting / Discovery</option>
                <option value="other">Other</option>
              </select>
              {errors.topic && <small className="error">{errors.topic}</small>}
            </div>

            {/* Message */}
            <div className="field span-2">
              <label htmlFor="message">What are you planning to build?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <small className="error">{errors.message}</small>
              )}
            </div>
          </div>

          {/* Checkboxes */}
          <div className="checks">
            <label className="check">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
              />
              <span>
                I agree to share the above personal data with MarxDev. We may
                use it to evaluate your request and improve our services.
              </span>
            </label>
            {errors.consent && (
              <small className="error">{errors.consent}</small>
            )}
          </div>

          {/* Submit */}
          <button type="submit" className="send-btn">
            <span>Send</span>
            <ArrowRightAltRoundedIcon />
          </button>
        </form>
      </section>
      {/* Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
