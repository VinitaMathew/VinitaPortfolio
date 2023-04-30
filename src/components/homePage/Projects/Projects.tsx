import React from "react";
import "./Projects.scss";

export default function Projects() {
    return (
      <div className="projects-container">
        <div className="projects-heading">Projects I’ve worked on</div>
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