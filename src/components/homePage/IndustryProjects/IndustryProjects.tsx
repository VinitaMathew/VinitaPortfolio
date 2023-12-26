import React from "react";
import { IndustryProjectsData } from "./IndustryProjectsData";
import "./IndustryProjects.scss";

const arrowImg = require("../../../assets/arrow-right-black.png");

const handleProjectClick = (project: any) => {};

export default function IndustryProjects() {
  return (
    <div className="industry-projects-container">
      <h2 className="section-heading">
        Projects under Non-Disclosure Agreement
      </h2>
      <ul className="industry-projects-list">
        {IndustryProjectsData.map((project, index) => {
          return (
            <li key={index} className="project-item">
              <img alt="" src={project.image} className="project-thumbnail" />
              <div className="content-wrapper">
                <div className="title">{project.title}</div>
                <button
                  className="project-button"
                  onClick={() => handleProjectClick(project)}
                >
                  <img alt="open project details" src={arrowImg}></img>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
