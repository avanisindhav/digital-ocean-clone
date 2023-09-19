import React from "react";
import { Checkbox as AntdCheckbox } from "antd";
import "./Checkbox.scss";

const onChange = (e) => {
  console.log(`checkbox-${e.target.checked}`);
};

const Checkbox = ({ value, ...rest }) => {
  return <AntdCheckbox onChange={onChange}>{value}</AntdCheckbox>;
};

export default Checkbox;
