import { List } from "antd";
import Link from "next/link";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from "@ant-design/icons";

import { memo } from "react";
import MarkDownRender from "../MarkDownRender";

const ListItem = memo(props => {
  const { item } = props;
  return (
    <List.Item>
      <div className="list-title">
        <Link href={{ pathname: "/detailed", query: { id: item.id } }}>
          <a> {item.title}</a>
        </Link>
      </div>
      <div className="list-icon">
        <span>
          <CalendarOutlined />
          {item.addTime}
        </span>
        <span>
          <FolderOpenOutlined />
          {item.typeName}
        </span>
        <span>
          <FireOutlined />
          {item.view_count}人
        </span>
      </div>
      <MarkDownRender className="list-context" markedContent={item.introduce} />
      <style jsx>
        {`
          .list-title {
            font-size: 1.3rem;
            color: #38495a;
            padding: 0 0.5rem;
          }
          .list-icon {
            padding: 0.5rem 0;
            color: #aaa;
          }
          .list-icon span {
            display: inline-block;
            padding: 0 10px;
          }
        `}
      </style>
    </List.Item>
  );
});

export default ListItem;
