import React from "react";
import { Collapse } from "antd";
import Checkbox from "../Checkbox/Checkbox";

const items = [
  {
    key: "1",
    label: "Partner Profile",
    children: (
      <div className="filter_panel">
        <div className="">
          <Checkbox value={"BlockChain"} />
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "Services",
    children: (
      <div className="filter_panel">
        <div className="">
          <Checkbox value={"BlockChain"} />
          <Checkbox value={"Cloud Aggregator"} />
          <Checkbox value={"Cloud Management"} />
          <Checkbox value={"DevOps"} />
          <Checkbox value={"Digital Marketing"} />
          <Checkbox value={"E-Commerce"} />
          <Checkbox value={"Kafka"} />
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Regions",
    children: (
      <div className="filter_panel">
        <div className="">
          <Checkbox value={"Africa"} />
          <Checkbox value={"Australia"} />
          <Checkbox value={"Canada"} />
          <Checkbox value={"Europe - East"} />
          <Checkbox value={"Europe - South"} />
          <Checkbox value={"Europe - North"} />
          <Checkbox value={"Europe - West"} />
        </div>
      </div>
    ),
  },
  {
    key: "4",
    label: "Business Type",
    children: (
      <div className="filter_panel">
        <div className="">
          <Checkbox value={"Startup"} />
          <Checkbox value={"Enterprise"} />
        </div>
      </div>
    ),
  },
  {
    key: "5",
    label: "Industries",
    children: null,
  },
  {
    key: "6",
    label: "Certifications",
    children: null,
  },
  {
    key: "7",
    label: "Budget",
    children: null,
  },
  {
    key: "8",
    label: "Partner Size",
    children: null,
  },
];

const Filters = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="filter-content">
      <Collapse
        expandIconPosition="end"
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </div>
  );
};

export default Filters;
