import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import langingImage from "../assets/hero_slide_3.jpg";
import classes from "./LandingSection.module.css";

const LandingSection = () => {
  return (
    <div
      className={classes.landing}
      style={{ backgroundImage: `url(${langingImage})` }}
    >
      <button>
        Shop Now <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </div>
  );
};

export default LandingSection;
