import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        Connecting You to Care, Anytime, Anywhere. Your Health, Our Responsibility: Where Expertise Meets Convenience, Empowering Your Well-being.
        </p>
      </div>
      <div className="hero-img">
        <img
          src="https://www.medibuddy.in/assets/images/talk-to-doc.png"
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
