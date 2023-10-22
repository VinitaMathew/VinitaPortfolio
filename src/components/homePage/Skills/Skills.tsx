import React from "react";
import SkillsCarousel from "./SkillsCarousel/SkillsCarousel";
import "./Skills.scss";

export default function Skills() {
    return (
      <div className="skills-container">
        <div className="skills-heading">Skill Sets</div>
        <div className="skills-carousel-container">
          {/* <SkillsCarousel />
          <SkillsCarousel /> */}
        </div>
        <div className="projects-list-wrapper">
          <div className="projects-one-two">
            <div className="project-one">Project 1</div>
            <div className="project-two">Project 2</div>
          </div>
          <div className="project-three">Project 3</div>
        </div>
      </div>
    );
}