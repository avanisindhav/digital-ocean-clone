import React from "react";
import "./Avatar.scss";
import { Avatar as AntDAvatar } from "antd";

const Avatar = ({ src, size, icon, shape, ...rest }) => {
  return <AntDAvatar src={src} size={size} shape={shape} icon={icon} />;
};

export default Avatar;
