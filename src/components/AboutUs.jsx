import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src="https://www.medibuddy.in/assets/images/aboutus/doctor.png"
              alt="hero"
              height={"350px"}
            />
          </div>
          <div className="hero-content">
            <h2>

            WE ARE Hello Doctor. AN END-TO-END DIGITAL HEALTHCARE PLATFORM.
            </h2>
            <p>
When the webslinger wears his red and blue suit, he's ready to save a life. Same rule applies to us at Hello Doctor. We’re no fictional superhero, but we do know how to weave a web of doctors, hospitals, healthcare providers, pharmaceuticals, and insurance companies to create a world of possibilities for people looking for healthcare assistance.

Online doctor consultations, lab test bookings, medicine delivery, corporate health and wellness services - we make sure each and every healthcare need is taken care of.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
