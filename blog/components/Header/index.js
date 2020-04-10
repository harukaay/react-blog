import React, { useEffect, useState, useCallback } from "react";
import "./style.scss";
import * as Icon from "@ant-design/icons";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import { Row, Col, Menu } from "antd";
import servicePath from "../../config/apiUrl";

const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const getType = async () => {
      const result = await axios(servicePath.getTypeInfo);
      setNavArray(result.data.data);
    };
    getType();
  }, []);

  // const handleClick = useCallback(e => {
  //   if (e.key === 0) {
  //     Router.push("/");
  //   } else {
  //     Router.push("/list?id=" + e.key);
  //   }
  // }, []);
  const handleClick = e => {
    if (e.key === '0') {
      console.log(e.key)
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">harukaay</span>
          <span className="header-txt">努力学习...</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" className="header-menu" onClick={handleClick}>
            <Menu.Item key="0">
              {React.createElement(Icon["HomeOutlined"])}
              首页
            </Menu.Item>
            {navArray.map(item => (
              <Menu.Item key="video" key={item.id}>
                {React.createElement(Icon[item.icon])}
                {item.typeName}
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
