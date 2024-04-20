import React from "react";
import "./About.scss";
import { calculateExperience } from "../../../utils";
import { useInView } from "react-intersection-observer";

const AboutImg = require("../../../assets/about.png");

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={inView ? "slide-up about-container" : "hidden about-container"}
    >
      <div className="about-wrapper">
        <div className="about-content">
          <div className="section-heading">A little about me :)</div>
          <div className="content-text">
            Hello! I'm Vinita, a{" "}
            <span>
              React developer with {calculateExperience()} years of experience
            </span>{" "}
            in the software development industry. Born and raised in Bangalore,
            I bring a blend of cultural richness from my Kerala roots. <br />
            <br /> My journey in development began with a fascination for
            technology and a desire to create impactful digital experiences.
            Specializing in React,{" "}
            <span>
              I excel in crafting user-friendly and scalable solutions,
              transforming complex ideas into engaging web applications
            </span>
            .
            <br />
            <br /> I believe in continuous learning and staying updated with the
            latest trends and technologies in the ever-evolving tech landscape.
            This mindset enables me to deliver cutting-edge solutions that align
            with user expectations and business objectives.
            <br />
            <br /> Let's connect and explore how I can contribute to your next
            project with creativity and expertise!
          </div>
        </div>
        <img className="about-image" src={AboutImg} alt="" />
      </div>
    </div>
  );
}
