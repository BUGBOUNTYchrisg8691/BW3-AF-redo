import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer-container">
      <h4>Find me on social media</h4>
      <a
        href="https://github.com/bugbountychrisg8691"
        rel="norefferer"
        target="_blank"
      >
        <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
      </a>
      <a
        href="https://www.linkedin.com/in/christopher-girvin-4748b11aa/"
        rel="norefferer"
        target="_blank"
      >
        <FontAwesomeIcon className="icon" icon={["fab", "linkedin"]} />
      </a>
      <a href="https://facebook.com" rel="norefferer" target="_blank">
        <FontAwesomeIcon className="icon" icon={["fab", "facebook"]} />
      </a>
      <a
        href="https://twitter.com/Christo75374300"
        rel="norefferer"
        target="_blank"
      >
        <FontAwesomeIcon className="icon" icon={["fab", "twitter"]} />
      </a>
      {/* <FontAwesomeIcon icon="check-square" />
      Your <FontAwesomeIcon icon="coffee" /> is hot and ready! */}
    </div>
  );
}
