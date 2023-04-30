import React from "react";
// import TitleIcon from "../../../assets/title-icon.svg";
import "./LandingSection.scss";

// const { ReactComponent } = require("react-svg-loader");
const TitleIcon = require("../../../assets/title-icon.svg").default;

export default function LandingSection() {
  return (
    <div className="landing-section">
      <div className="heading-container">
        <img className="title-icon" src={TitleIcon} alt=""></img>
        <div className="line1">Hey there! I’m Vinita.</div>
        <div className="line2">
          I develop websites that are responsive, accessible and efficient.
        </div>
      </div>
      <div className="details-container">
        <div className="detail-buttons">
          <button className="work-button">View my work</button>
          <button className="contact-button">Contact me</button>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur. Neque morbi ornare mauris
          tempus tincidunt hac diam. Sed adipiscing ornare id id vestibulum
          aliquet sagittis. Sed ut id nisl orci mauris (Experience)
        </div>
      </div>
    </div>
  );
}
