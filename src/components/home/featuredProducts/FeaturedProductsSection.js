import React from "react";
import FeaturedProductItem from "./FeaturedProductItem";

const DUMMY_DATA = [
  {
    title: "Product One",
    id: "p1",
    category: "men",
    productType: "tshirt",
    black: "https://i.ibb.co/pXqxM7X/black.jpg",
    red: "https://i.ibb.co/1vnv919/red.jpg",
    nevyBlue: "https://i.ibb.co/wcBvGrW/blue.jpg",
    gray: "https://i.ibb.co/q7qdrK6/gray.jpg",
    finalPrice: 120,
    oldPrice: 180,
    describtion:
      "this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion ",
  },
  {
    title: "Product Two",
    id: "p1",
    category: "men",
    productType: "tshirt",
    black: "https://i.ibb.co/gTqxfs5/black.jpg",
    red: "https://i.ibb.co/rMMpMWX/red.jpg",
    nevyBlue: "https://i.ibb.co/9nNyXm4/blue.jpg",
    gray: "https://i.ibb.co/31dKF2n/gray.jpg",
    finalPrice: 125,
    oldPrice: 180,
    describtion:
      "this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion ",
  },
  {
    title: "Product Three",
    id: "p3",
    category: "men",
    productType: "tshirt",
    black: "https://i.ibb.co/r60R5z2/black.jpg",
    red: "https://i.ibb.co/2nsLGpD/red.jpg",
    nevyBlue: "https://i.ibb.co/D8fSGth/blue.jpg",
    gray: "https://i.ibb.co/pW0BzPb/gray.jpg",
    finalPrice: 130,
    oldPrice: 200,
    describtion:
      "this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion this is describtion ",
  },
];

const FeaturedProductsSection = () => {
  return (
    <div>
      <h2>You may also be interested in</h2>
      <div>
        {DUMMY_DATA.map((item) => (
          <FeaturedProductItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
