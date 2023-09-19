import React from "react";
import Link from "antd/es/typography/Link";
import Filters from "../Filters/Filters";
import "./LeftSidebar.scss";

const LeftSidebar = () => {
  return (
    <div className="leftsidebar">
      <div className="filter_heading">
        <h5>Filters</h5>
        <Link>Reset</Link>
      </div>
      <Filters />
    </div>
  );
};

export default LeftSidebar;
