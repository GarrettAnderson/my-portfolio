import React from "react";
import "../../styles/About.css";
import headshot from "../../assets/images/cropHeadShot.png";

export default function About(props) {
  return (
    <main id="about-container" className="about-container" ref={props.about}>
      <div className="row-container">
        <section className="row align-items-center justify-content-center text-center">
          <section id="about-me" className="headshot col-12">
            <img
              src={headshot}
              className="headshot"
              alt="professional-headshot"
            />
          </section>
          <section className="about-me col-12">
            <h1>Full Stack Developer</h1>
            <p>
              A Florida native with a global mindset and a passion for building
              beautiful things. My greatest wish is to bring people together as
              a tribe. I incorporate this sentiment in my approach to software
              development, focusing on how to best represent my work and the
              work I accomplish for clients and employers alike.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
