import React from "react";
import "./Contact.scss";

const GmailIcon = require("../../../assets/gmail.png");
const LinkedinIcon = require("../../../assets/linkedin.png");

const Contact = React.forwardRef((props, contactRef: any) => {
  return (
    <div className="contact-container" ref={contactRef}>
      <h2 className="section-heading">Let’s connect</h2>
      <div className="contact-wrapper">
        Feel free to reach out to me via email at{" "}
        <a href="mailto:vinitamathew2010@gmail.com">
          vinitamathew2010@gmail.com
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/vinita-mathew-6b3255187/"
          target="_blank"
        >
          LinkedIn
        </a>
        . I'm also available for a virtual coffee chat to discuss potential
        opportunities and how we can work together effectively.
      </div>
    </div>
  );
});

export default Contact;
