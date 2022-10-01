import React, { useState } from "react";

import classes from "./FeaturedProductItem.module.css";

const FeaturedProductItem = (props) => {
  const [tshirtImage, setTshirtImage] = useState("");

  const discount =
    (
      (props.item.finalPrice - props.item.oldPrice) /
      props.item.oldPrice
    ).toFixed(2) * 100;

  const mainImage =
    tshirtImage === "blue"
      ? props.item.nevyBlue
      : tshirtImage === "black"
      ? props.item.black
      : tshirtImage === "red"
      ? props.item.red
      : tshirtImage === "gray"
      ? props.item.gray
      : props.item.nevyBlue;

  return (
    <div className={classes.card}>
      <div className={classes.discount}>{`${discount}%`}</div>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="" />
      </div>
      <h4>{props.item.title}</h4>

      <div className={classes["price-control"]}>
        <div
          className={classes["final-price"]}
        >{`${props.item.finalPrice}EGP`}</div>
        <div
          className={classes["old-price"]}
        >{`${props.item.oldPrice}EGP`}</div>
      </div>

      <div className={classes["color-control"]}>
        <div onMouseEnter={() => setTshirtImage("black")}>
          <img src={props.item.black} alt="" />
        </div>
        <div onMouseEnter={() => setTshirtImage("red")}>
          <img src={props.item.red} alt="" />
        </div>
        <div onMouseEnter={() => setTshirtImage("blue")}>
          <img src={props.item.nevyBlue} alt="" />
        </div>
        <div onMouseEnter={() => setTshirtImage("gray")}>
          <img src={props.item.gray} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductItem;
