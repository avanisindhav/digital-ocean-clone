import React from "react";
import Banner from "../components/Banner/Banner";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import { Row, Col, Space } from "antd";
import Tags from "../components/Tags/Tags";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container py-48">
        <Row gutter={62}>
          <Col span={6}>
            <LeftSidebar />
          </Col>
          <Col span={18}>
            <Space size={[0, 4]} className="filter-tags">
              <Tags value="Blockchain" closable={true} className="tag-grey" />
              <Tags
                value="Cloud Aggregator"
                closable={true}
                className="tag-grey"
              />
              <Tags
                value="Cloud Management"
                closable={true}
                className="tag-grey"
              />
            </Space>
            <div className="">
              <Row gutter={16}>
                <Col span={8}>
                  <Card />
                </Col>
                <Col span={8}>
                  <Card />
                </Col>
                <Col span={8}>
                  <Card />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
