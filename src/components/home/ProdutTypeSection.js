import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import sweetShirt from "../assets/product type/sweetshirt-man.jpg";
import sweetShirtWomen from "../assets/product type/sweetshirt-woman.jpg";
import sweetShirtKids from "../assets/product type/sweetshirt-kid.jpg";
import tshirt from "../assets/product type/tshirt.jpg";
import tshirtMen from "../assets/product type/tshirt-man.jpg";
import tshirtWomen from "../assets/product type/tshirt-woman.jpg";
import tshirtKids from "../assets/product type/tshirt-kid.jpg";
import canvas from "../assets/product type/canvas.jpg";
import mug from "../assets/product type/mug.jpg";

import React, { useState } from "react";

import classes from "./ProdutTypeSection.module.css";

const ProdutTypeSection = () => {
  const [showSweetShirtOptions, setShowSweetShirtOptions] = useState(false);
  const [showTshirtOptions, setShowTshirtOptions] = useState(false);
  const [showSweetShirtImage, setShowSweetShirtImage] = useState("");
  const [showTshirtImage, setShowTshirtImage] = useState("");

  const sweetShirtImage =
    showSweetShirtImage === "" || showSweetShirtImage === "men"
      ? sweetShirt
      : showSweetShirtImage === "women"
      ? sweetShirtWomen
      : showSweetShirtImage === "kids"
      ? sweetShirtKids
      : "";

  const tshirtImage =
    showTshirtImage === ""
      ? tshirt
      : showTshirtImage === "men"
      ? tshirtMen
      : showTshirtImage === "women"
      ? tshirtWomen
      : showTshirtImage === "kids"
      ? tshirtKids
      : "";
  return (
    <div className={classes["product-type-section"]}>
      <h2>Premium products you can customize and sell</h2>
      <p>Printed and shipped on demand, under your design!</p>

      <div className={classes.content}>
        <div
          className={classes.card}
          onMouseEnter={() => setShowSweetShirtOptions(true)}
          onMouseLeave={() => setShowSweetShirtOptions(false)}
        >
          <div className={classes["img-control"]}>
            <img src={sweetShirtImage} alt="" />
          </div>
          <h2>Hoodies & sweatshirts</h2>
          <p>starting from 100 EGP</p>
          <FontAwesomeIcon icon={faAngleDown} />
          {showSweetShirtOptions && (
            <div
              className={classes.options}
              onMouseLeave={() => setShowSweetShirtImage("")}
            >
              <div
                className={classes["mini-card"]}
                onMouseEnter={() => setShowSweetShirtImage("men")}
              >
                <img src={sweetShirt} alt="" />
                <p>Men</p>
              </div>
              <div
                className={classes["mini-card"]}
                onMouseEnter={() => setShowSweetShirtImage("women")}
              >
                <img src={sweetShirtWomen} alt="" />
                <p>Women</p>
              </div>
              <div
                className={classes["mini-card"]}
                onMouseEnter={() => setShowSweetShirtImage("kids")}
              >
                <img src={sweetShirtKids} alt="" />
                <p>Kids</p>
              </div>
            </div>
          )}
        </div>

        <div
          className={classes.card}
          onMouseEnter={() => setShowTshirtOptions(true)}
          onMouseLeave={() => setShowTshirtOptions(false)}
        >
          <div className={classes["img-control"]}>
            <img src={tshirtImage} alt="" />
          </div>
          <h2>T-shirts & tank tops</h2>
          <p>starting from 120 EGP</p>
          <FontAwesomeIcon icon={faAngleDown} />
          {showTshirtOptions && (
            <div
              className={classes.options}
              onMouseLeave={() => setShowTshirtImage("")}
            >
              <div
                className={classes["mini-card"]}
                onMouseEnter={() => setShowTshirtImage("men")}
              >
                <img src={tshirtMen} alt="" />
                <p>Men</p>
              </div>
              <div
                className={classes["mini-card"]}
                onMouseEnter={() => setShowTshirtImage("women")}
              >
                <img src={tshirtWomen} alt="" />
                <p>Women</p>
              </div>
              <div
                className={classes["mini-card"]}
                onMouseEnter={() => setShowTshirtImage("kids")}
              >
                <img src={tshirtKids} alt="" />
                <p>Kids</p>
              </div>
            </div>
          )}
        </div>

        <div className={classes.card}>
          <div className={classes["img-control"]}>
            <img src={mug} alt="" />
          </div>
          <h2>Posters & canvas prints</h2>
          <p>starting from 70 EGP</p>
        </div>

        <div className={classes.card}>
          <div className={classes["img-control"]}>
            <img src={canvas} alt="" />
          </div>
          <h2>Drinkware</h2>
          <p>starting from 70 EGP</p>
        </div>
      </div>
    </div>
  );
};

export default ProdutTypeSection;
