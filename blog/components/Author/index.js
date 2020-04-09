import { Avatar, Divider } from "antd";
import "./style.scss";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";

const Author = () => {
  return (
    <div className="author-div common-box">
      <div>
        <Avatar size={100} src={require("./avatar.png")}></Avatar>
      </div>
      <div className="author-introduction">
        佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发。
      </div>
      <Divider>社交账号</Divider>
      <Avatar size={28} icon={<GithubOutlined />} className="account" />
      <Avatar size={28} icon={<QqOutlined />} className="account" />
      <Avatar size={28} icon={<WechatOutlined />} className="account" />
    </div>
  );
};

export default Author;
