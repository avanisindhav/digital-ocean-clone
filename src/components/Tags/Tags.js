import React from "react";
import { Tag } from "antd";
import "./Tags.scss";

const Tags = ({ onClose, className, value, closable, ...rest }) => {
  return (
    <Tag closable={closable} onClose={onClose} className={`tag ${className}`}>
      {value}
    </Tag>
  );
};

export default Tags;
