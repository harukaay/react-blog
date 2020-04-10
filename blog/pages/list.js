import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Author from "../components/Author";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import { Row, Col, List, Breadcrumb } from "antd";

import axios from "axios";
import servicePath from "../config/apiUrl";
import ListItem from "../components/ListItem";

const MyList = list => {
  const [mylist, setMylist] = useState(list.data);
  useEffect(() => {
    console.log(list.data);
    setMylist(list.data);
  });
  return (
    <div>
      <Head>
        <title>blog</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => <ListItem item={item} />}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ads />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

MyList.getInitialProps = async context => {
  const res = await axios(servicePath.getListById + context.query.id);
  return res.data;
};
export default MyList;
