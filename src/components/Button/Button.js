import React from "react";
import { Button as AntdButton } from "antd";
import "./Button.scss";

const Button = ({ value, type, ...rest }) => {
  return <AntdButton type={type}>{value}</AntdButton>;
};

export default Button;
