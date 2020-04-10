import Head from "next/head";
import Header from "../components/Header";
import Author from "../components/Author";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import Tocify from "../components/Tocify/index.tsx";
import { Row, Col, Breadcrumb, Affix } from "antd";
import "../static/pages/detailed.css";
import axios from "axios";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from "@ant-design/icons";

// import ReactMarkdown from "react-markdown";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import servicePath from "../config/apiUrl";

const Detailed = props => {
  const tocify = new Tocify();

  const renderer = new marked.Renderer();

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer,
    gfm: true,
    pedantic: false,
    snaitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight(code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.article_content);
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
          <div
            className="detailed-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ads />
          <Affix offsetTop={5}>
            <div className="detail-nav comm-box">
              <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

Detailed.getInitialProps = async context => {
  const id = context.query.id;
  const res = await axios(servicePath.getArticleById + id);

  return res.data.data[0];
};
export default Detailed;
