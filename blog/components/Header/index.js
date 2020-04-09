import React from "react";
import "./style.scss";
import {
  YoutubeOutlined,
  SmileOutlined,
  HomeOutlined
} from "@ant-design/icons";

import { Row, Col, Menu } from "antd";

const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">harukaay</span>
          <span className="header-txt">努力学习...</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" className="header-menu">
            <Menu.Item key="home">
              <HomeOutlined />
              首页
            </Menu.Item>
            <Menu.Item key="video">
              <YoutubeOutlined />
              视频
            </Menu.Item>
            <Menu.Item key="life">
              <SmileOutlined />
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
