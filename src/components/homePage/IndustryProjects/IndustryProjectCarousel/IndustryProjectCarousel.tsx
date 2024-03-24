import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./IndustryProjectCarousel.scss";
import { IndustryProjectsData } from "../IndustryProjectsData";
import IndustryProjectsPopUp from "../IndustryProjectsPopUp/IndustryProjectsPopUp";

const arrowImg = require("../../../../assets/arrow-right-black.png");

export default function IndustryProjectCarousel() {
  const [modalProps, setModalProps] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.13,
      partialVisibilityGutter: 100, // Adjust this value to control the amount of next and previous images shown
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 80,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  const handleProjectClick = (project: any) => {
    setModalProps({
      body: (
        <div
          className="popup-content"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      ),
      handleCancelBtnClick: () => setIsPopupOpen(false),
    });
    setIsPopupOpen(true);
  };

  return (
    <Carousel
      renderArrowsWhenDisabled={true}
      responsive={responsive}
      containerClass="carousel-container"
    >
      {IndustryProjectsData.map((project, index) => (
        <div
          key={index}
          className="project-item"
          onClick={() => handleProjectClick(project)}
        >
          <img alt="" src={project.image} className="project-thumbnail" />
          <div className="content-wrapper">
            <div className="title">{project.title}</div>
            <button className="project-button">
              <img alt="open project details" src={arrowImg}></img>
            </button>
          </div>
        </div>
      ))}
      <IndustryProjectsPopUp isModalOpened={isPopupOpen} {...modalProps} />
    </Carousel>
  );
}
