import React from "react";
import "./CTA.css";
const CTA = () => {
  return (
    <div className="cta-container container" id="CTA">
      <div className="cta-container-left">
        <h2>
        Let’s try our service now!
        </h2>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="ctta-container-right">
        <a href="#CTA" className="primary-button">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default CTA;
