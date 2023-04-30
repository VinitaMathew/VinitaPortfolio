import React from "react";
import SkillsCarousel from "./SkillsCarousel/SkillsCarousel";
import "./Skills.scss";

export default function Skills() {
    return (
      <div className="skills-container">
        <div className="skills-heading">Skill Sets</div>
        <div className="skills-carousel-container">
          <SkillsCarousel />
          <SkillsCarousel />
        </div>
      </div>
    );
}