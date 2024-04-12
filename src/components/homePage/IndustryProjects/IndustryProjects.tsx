import React, { useState } from "react";
import "./IndustryProjects.scss";
import IndustryProjectCarousel from "./IndustryProjectCarousel/IndustryProjectCarousel";

export default function IndustryProjects() {
  const [isMobile] = useState(
    window.matchMedia("only screen and (max-width:750px)").matches
  );
  return (
    <div className="industry-projects-container">
      <h2 className="section-heading">
        {isMobile
          ? "Projects under NDA"
          : "Projects under Non-Disclosure Agreement"}
      </h2>
      <div className="industry-projects-list">
        <IndustryProjectCarousel />
      </div>
    </div>
  );
}
