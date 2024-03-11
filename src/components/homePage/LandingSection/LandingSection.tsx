import React from "react";
import "./LandingSection.scss";

//const TitleIcon = require("../../../assets/title-icon.svg").default;

export default function LandingSection(props: any) {
  return (
    <div className="landing-section">
      <div className="landing-page-content">
        <div className="heading-container">
          Crafting Exceptional User Experiences through Code
        </div>
        <div className="details-container">
          <div className="description">
            Greetings! I'm Vinita Mathew, a passionate React developer dedicated
            to crafting visually appealing and seamlessly functional
            experiences.
          </div>
        </div>
      </div>
    </div>
  );
}
