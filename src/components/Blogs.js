import React from "react";
import "./Blogs.css";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";

const Blogs = () => {
  return (
    <section className="blogs-bg">
      <div className="blogs-card">
        <header className="blogs-header">
          <h1>Blog</h1>
          <p className="blogs-kicker">
            <HourglassEmptyRoundedIcon fontSize="inherit" />
            <span>Stay tuned — something interesting is coming soon.</span>
          </p>
        </header>

        {/* Placeholder grid */}
        <div className="blogs-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="blog-skeleton">
              <div className="sk-thumb" />
              <div className="sk-line sk-line-1" />
              <div className="sk-line sk-line-2" />
              <div className="sk-line sk-line-3" />
              <div className="sk-icon">
                <ArticleRoundedIcon />
              </div>
            </div>
          ))}
        </div>

        <div className="blogs-note">
          Want updates? Check back soon or{" "}
          <a href="mailto:marxdev09111@gmail.com">email us</a>.
        </div>
      </div>
    </section>
  );
};

export default Blogs;
