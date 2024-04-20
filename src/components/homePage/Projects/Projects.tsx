import React from "react";
import { projectsData } from "./ProjectsData";
import { useInView } from "react-intersection-observer";
import "./Projects.scss";

const Arrow = require("../../../assets/nav-icon.png");

const Projects = React.forwardRef((props, projectsRef: any) => {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div className="projects-container" ref={projectsRef}>
      <div ref={ref} className={inView ? "slide-up" : "hidden"}>
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
                <div className="desc-wrapper">
                  <div className="desc">{project.desciption}</div>
                  <img
                    className="nav-arrow"
                    alt="open project link"
                    src={Arrow}
                  ></img>
                </div>
                <h5>{project.title}</h5>
                <div className="open-link-text">Open project link</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;
