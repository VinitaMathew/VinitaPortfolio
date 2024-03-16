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
          <h6>
            <span style={{ color: "#FFCC00" }}>#</span> I'm here to turn your
            ideas into reality!
          </h6>
          <div className="design-to-code">
            <div className="graph__wrapper">
              <svg
                width="1000"
                height="143"
                viewBox="0 0 947 143"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Path-1"
                  className="path"
                  d="M2 126.985C19.1615 115.935 52.35 93.787 71.6763 84.0734C86.877 76.4334 106.725 67.2576 121.257 81.0837C132.63 91.9038 138.401 116.037 126.873 128.743C124.955 130.858 115.924 136.677 116.343 129.535C117.151 115.763 136.729 103.882 147.144 98.4064C181.589 80.3 219.45 75.0187 257.187 84.8648C280.018 90.8214 300.149 100.85 320.37 112.739C337.616 122.88 353.676 134.524 373.724 138.592C403.75 144.684 435.578 137.992 464.988 132.085C499.474 125.158 534.206 116.719 567.835 106.32C585.352 100.904 605.099 94.5845 612.238 75.9836C612.874 74.3283 613.677 73.0416 614.345 71.0594C618.044 60.0702 596.874 81.088 593.459 92.1632C589.764 104.147 592.149 118.373 608.026 115.553C640.739 109.744 667.5 84.7368 695.604 68.949C717.201 56.8171 736.706 73.3527 756.33 82.3148C791.977 98.5946 823.892 101.997 857.597 78.9733C885.571 59.8649 905.439 31.1518 928.502 6.86863C936.769 -1.8347 938.194 2.35606 945 9.85834"
                  stroke="#B6E7BC"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <polyline id="arrow" points="0,-9, 18,0 0,9 5,0" fill="#B6E7BC">
                  <animateMotion
                    rotate="auto"
                    begin="1s"
                    dur="2.7s"
                    repeatCount="1"
                    fill="freeze"
                  >
                    <mpath xlinkHref="#Path-1" />
                  </animateMotion>
                </polyline>
              </svg>
            </div>
            <span className="design-text">DESIGN</span>
            <span className="code-text">CODE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
