import React from "react";
import { images } from "../../config/images";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={images.header} alt="Banner" />
    </div>
  );
};

export default Banner;
