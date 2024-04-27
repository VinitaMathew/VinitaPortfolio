import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./IndustryProjects.scss";
import IndustryProjectCarousel from "./IndustryProjectCarousel/IndustryProjectCarousel";

export default function IndustryProjects() {
  const [isMobile] = useState(
    window.matchMedia("only screen and (max-width:750px)").matches
  );
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={
        inView
          ? "slide-up industry-projects-container"
          : "hidden industry-projects-container"
      }
    >
      <div className="industry-wrapper">
        <h2 className="section-heading">
          {isMobile
            ? "Projects under NDA"
            : "Projects under Non-Disclosure Agreement"}
        </h2>
        <div className="industry-projects-list">
          <IndustryProjectCarousel />
        </div>
      </div>
    </div>
  );
}
