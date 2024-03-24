import React from "react";
import { projectsData } from "./ProjectsData";
import "./Projects.scss";

const Projects = React.forwardRef((props, projectsRef: any) => {
  return (
    <div className="projects-container" ref={projectsRef}>
      <h2 className="section-heading">Projects I’ve worked on</h2>
      <div className="projects-list-wrapper">
        {projectsData.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            key={index}
            className="project-item"
          >
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
              <div className="open-link-text">Open project link</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
});

export default Projects;
