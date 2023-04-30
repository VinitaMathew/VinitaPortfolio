import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <LandingSection />
      <Projects />
      <Skills />
    </div>
  );
}
