import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-container">
        <p className="hero-greeting">Hello, Welcome to my digital space</p>
        <h1 className="hero-title">
          I'm a <span className="highlight">Front-End Developer</span>
        </h1>
        <p className="hero-subtitle">
          Passionate about turning ideas into responsive, user-friendly
          websites. Always learning and growing.
        </p>
        <button className="cta-button" aria-label="Explore my work">
          View Portfolio
        </button>
      </div>
    </section>
  );
};

export default Hero;
