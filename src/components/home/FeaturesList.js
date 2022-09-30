import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartFlatbed,
  faShirt,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faShield,
  faPaintBrush,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import classes from "./FeaturesList.module.css";

const FeaturesList = () => {
  return (
    <div className={classes.features}>
      <h2>What makes Printful stand out</h2>
      <div className={classes.content}>
        <div className={classes.card}>
          <FontAwesomeIcon icon={faCartFlatbed} />
          <div>
            <h3>Local fulfillment</h3>
            <p>
              Get speed and consistency—our global in-house and partner
              facilities offer competitive shipping rates and consistent
              quality.
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <FontAwesomeIcon icon={faShirt} />
          <div>
            <h3>Custom branding tools</h3>
            <p>
              Build your reputation by keeping your brand at the forefront.
              We're a white-label partner, so your customers won’t see our name
              attached to your products.
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <FontAwesomeIcon icon={faShield} />
          <div>
            <h3>Reliable quality</h3>
            <p>
              Make a lasting impression by using our industry-leading tech,
              quality inks, and premium materials. 99.74% of our orders reach
              happy customers with no issues.
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <FontAwesomeIcon icon={faPaintBrush} />
          <div>
            <h3>Intuitive design tools</h3>
            <p>
              Create unique pieces with our built-in Design Maker, even with no
              design experience! Simple or intricate, patterned or
              minimalist—our features are versatile..
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <FontAwesomeIcon icon={faTruckFast} />
          <div>
            <h3>Smooth automation</h3>
            <p>
              When customers buy from you, we receive and fulfill their orders
              automatically, so you can focus on running your business.
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <FontAwesomeIcon icon={faBagShopping} />
          <div>
            <h3>No order minimums</h3>
            <p>
              Save money and avoid any leftover stock. The products you sell are
              created only when your customer places an order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
