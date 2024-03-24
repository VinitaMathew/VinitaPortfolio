import React from "react";
import "./IndustryProjects.scss";
import IndustryProjectCarousel from "./IndustryProjectCarousel/IndustryProjectCarousel";

export default function IndustryProjects() {
  return (
    <div className="industry-projects-container">
      <h2 className="section-heading">
        Projects under Non-Disclosure Agreement
      </h2>
      <div className="industry-projects-list">
        <IndustryProjectCarousel />
      </div>
    </div>
  );
}
