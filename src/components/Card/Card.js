import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Card.scss";
import { images } from "../../config/images";
import Tags from "../Tags/Tags";
import Link from "antd/es/typography/Link";

const Card = ({ value, ...rest }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={images.card_thumb} alt="Card Thumb Image..." />
        <Tags value="Staff picked" className="tag tag-blue" />
      </div>
      <div className="card_img_caption">
        <Avatar src={images.avatar_img} size={56} />
        <Tags value="PaaS vendor" className="tag tag-grey" />
      </div>
      <h3>Impekable</h3>
      <p>
        Impekable is an award winning UX design and software development agency,
        born in the San Francis...
      </p>
      <div className="card_bottom">
        <h4>Specialist</h4>
        <p>
          Analytics, Big data, Financial, Developer,  Digital Marketing, and 3
          more
        </p>
        <Link href="#">View More</Link>
      </div>
    </div>
  );
};

export default Card;
