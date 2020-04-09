import Head from "next/head";
import Header from "../components/Header";
import Author from "../components/Author";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import { Row, Col, Breadcrumb ,Affix} from "antd";
import "../static/pages/detailed.css";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from "@ant-design/icons";

import ReactMarkdown from "react-markdown";

import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css"; // 导航栏样式

const Detailed = () => {
  // markdown
  const markdown =
    "# P01:课程介绍和环境搭建\n" +
    "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(111)` \n\n" +
    "# p02:来个Hello World 初始Vue3.0\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n" +
    "***\n\n\n" +
    "# p03:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p04:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "#5 p05:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p06:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p07:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "``` var a=11; ```";
  return (
    <div>
      <Head>
        <title>Detail</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/list">视频列表</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">XXX</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="detailed-title">React实战视频教程</div>

          <div className="list-icon center">
            <span>
              <CalendarOutlined />
              2020-04-09
            </span>
            <span>
              <FolderOpenOutlined />
              视频教程
            </span>
            <span>
              <FireOutlined />
              1234人
            </span>
          </div>
          <div className="detailed-content">
            <ReactMarkdown source={markdown} escapeHtml={false}></ReactMarkdown>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ads />
          <Affix offsetTop={5}>
            <div className="detail-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="title-anchor"
                source={markdown}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
export default Detailed;
