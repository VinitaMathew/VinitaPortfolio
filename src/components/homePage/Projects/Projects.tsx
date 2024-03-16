import React from "react";
import { projectsData } from "./ProjectsData";
import "./Projects.scss";

const Projects = React.forwardRef((props, projectsRef: any) => {
  return (
    <div className="projects-container" ref={projectsRef}>
      <h2 className="section-heading">Projects I’ve worked on</h2>
      <div className="projects-list-wrapper">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <div className="contentWrapper">
              <img
                className="projectThumbnail"
                src={project.imageUrl}
                alt={`Project ${index + 1}`}
              />
              <div className="key-points-wrapper">
                {project.keyPoints.map((keyPoint, index) => (
                  <div className="key-point" key={index}>
                    {keyPoint}
                  </div>
                ))}
              </div>
              <div className="desc">{project.desciption}</div>
              <h5>{project.title}</h5>
              {/* <a href={project.link} target="_blank">
                Live link
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
