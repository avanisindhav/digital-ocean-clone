import React from "react";
import { Tag } from "antd";

const Tags = ({ onClose, className, value, closable, ...rest }) => {
  return (
    <Tag closable={closable} onClose={onClose} className={className}>
      {value}
    </Tag>
  );
};

export default Tags;
