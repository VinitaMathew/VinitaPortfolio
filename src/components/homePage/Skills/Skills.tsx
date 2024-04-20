import React from "react";
import { skillsData } from "./SkillsData";
import { useInView } from "react-intersection-observer";
import "./Skills.scss";

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={
        inView ? "slide-up skills-container" : "hidden skills-container"
      }
    >
      <h2 className="section-heading">Skills and Services</h2>
      <ul className="skills-wrapper">
        {skillsData.map((skill, index) => {
          return (
            <li key={index} className="skill-item">
              <img src={skill.image} alt="" className="image" />
              <div className="title">{skill.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
