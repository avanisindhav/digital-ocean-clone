import React from "react";
import { Collapse, Space } from "antd";
import Checkbox from "../Checkbox/Checkbox";
import "./Filters.scss";

const items = [
  {
    key: "1",
    label: "Partner Profile",
    children: (
      <div className="filter_panel">
        <Space direction="vertical">
          <Checkbox value={"BlockChain"} />
        </Space>
      </div>
    ),
  },
  {
    key: "2",
    label: "Services",
    children: (
      <div className="filter_panel">
        <Space direction="vertical">
          <Checkbox value={"BlockChain"} />
          <Checkbox value={"Cloud Aggregator"} />
          <Checkbox value={"Cloud Management"} />
          <Checkbox value={"DevOps"} />
          <Checkbox value={"Digital Marketing"} />
          <Checkbox value={"E-Commerce"} />
          <Checkbox value={"Kafka"} />
        </Space>
      </div>
    ),
  },
  {
    key: "3",
    label: "Regions",
    children: (
      <div className="filter_panel">
        <Space direction="vertical">
          <Checkbox value={"Africa"} />
          <Checkbox value={"Australia"} />
          <Checkbox value={"Canada"} />
          <Checkbox value={"Europe - East"} />
          <Checkbox value={"Europe - South"} />
          <Checkbox value={"Europe - North"} />
          <Checkbox value={"Europe - West"} />
        </Space>
      </div>
    ),
  },
  {
    key: "4",
    label: "Business Type",
    children: (
      <div className="filter_panel">
        <Space direction="vertical">
          <Checkbox value={"Startup"} />
          <Checkbox value={"Enterprise"} />
        </Space>
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
