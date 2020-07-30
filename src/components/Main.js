import React from "react";
import { Row, Col, Layout } from "antd";
import CardColumn from "./Card";
const { Header, Footer, Sider, Content } = Layout;
export default function Main() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <CardColumn title="TODO" />
        </Col>
        <Col span={8}>
          <CardColumn title="DOING" />
        </Col>
        <Col span={8}>
          <CardColumn title="DONE" />
        </Col>
      </Row>
    </div>
  );
}
