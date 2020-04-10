import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Author from "../components/Author";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import { Row, Col, List } from "antd";
import axios from "axios";
import servicePath from "../config/apiUrl";
import ListItem from "../components/ListItem";

const Home = list => {
  const [mylist, setMylist] = useState(list.data);

  return (
    <div>
      <Head>
        <title>blog</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
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

Home.getInitialProps = async () => {
  const res = await axios(servicePath.getArticleList);
  return res.data;
};
export default Home;
