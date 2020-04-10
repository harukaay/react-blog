/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : react_blog

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2020-04-10 12:57:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES ('1', 'admin', 'admin');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL,
  `article_content` text NOT NULL,
  `introduce` text,
  `addTime` int(11) DEFAULT NULL,
  `view_count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('4', '1', 'React服务端渲染框架Next.js入门(共12集)', '### 悟空CRM（9.0版本）\n悟空软件长期为企业提供企业管理软件(CRM/HRM/OA/ERP等)的研发、实施、营销、咨询、培训、服务于一体的信息化服务。悟空软件以高科技为起点，以技术为核心、以完善的售后服务为后盾，秉承稳固与发展、求实与创新的精神，已为国内外上千家企业提供服务。\n\n悟空的发展受益于开源，也会回馈于开源。2019年，悟空CRM会继续秉承“拥抱开放、合作共赢、创造价值”的理念，在开源的道路上继续砥砺前行，和更多的社区开发者一起为国内外开源做出积极贡献。\n\n官网：[http://www.5kcrm.com](http://www.5kcrm.com/)\n\n官网：[http://www.72crm.com](http://www.72crm.com/)\n\n论坛：[http://bbs.72crm.net](http://bbs.72crm.net/)\n\n演示地址：[demo9.5kcrm.net](http://demo9.5kcrm.net/)(帐号：18888888888   密码：123456)\n\nQQ群交流群⑩群：[486745026](https:////shang.qq.com/wpa/qunwpa?idkey=f4687b809bf63f08f707aa1c56dee8dbcb9526237c429c4532222021d65bf83c)\n\nJAVA版下载地址：[https://gitee.com/wukongcrm/72crm-java](https://gitee.com/wukongcrm/72crm-java)\n\n\n扫码添加小悟官方客服微信，邀您加入千人微信交流群：\n\n<img src=\"https://images.gitee.com/uploads/images/2019/1231/115927_f9c580c8_345098.png\" width=\"200\">\n\n关注悟空CRM公众号，了解更多悟空资讯\n\n<img src=\"https://images.gitee.com/uploads/images/2019/1202/135713_d3566c6a_345098.jpeg\" width=\"200\">\n\n\n悟空CRM采用全新的前后端分离模式，本仓库代码中已集成前端vue打包后文件，可免去打包操作\n\n如需调整前端代码，请单独下载前端代码，前端代码在根目录的ux文件夹中\n\n## 主要技术栈\n\n后端框架：ThinkPHP 5.0.2\n\n前端MVVM框架：Vue.JS 2.5.x \n\n路由：Vue-Router 3.x \n\n数据交互：Axios \n\nUI框架：Element-UI 2.6.3 \n\n悟空crm9.0的运行环境要求PHP5.6以上\n\n\n## 一键安装\n\n代码中已集成前端vue打包后文件，可免去打包操作：\n以本地（phpstudy集成环境）搭建举例：\n下载悟空CRM9.0开源版，在服务器根目录（www目录）下创建72crm文件夹，并放置代码； 浏览器访问\n\n`http://localhost/72crm/index.php/admin/install/index.html `\n\n根据安装提示步骤，完成悟空CRM9.0 的部署安装\n\n\n\n\n\n## 开发依赖（需个性化安装或调整前端代码请按照以下教程，一键安装用户可忽略）\n\n### 数据交互 \n数据交互通过axios以及RESTful架构来实现 \n用户校验通过登录返回的auth_key放在header \n值得注意的一点是：跨域的情况下，会有预请求OPTION的情况\n\n### Server搭建 \n服务端使用的框架为thinkphp5.0.2，搭建前请确保拥有lamp/lnmp/wamp环境。\n\n这里所说的搭建其实就是把server框架放入WEB运行环境，并使用80端口。\n导入服务端根文件夹数据库文件public/sql/5kcrm.sql，并修改config/database.php配置文件。\n\n### 配置要求\nPHP >= 5.6.0 \n当访问 http://localhost/, 出现“悟空软件”即代表后端接口搭建成功。\n### 前端部署\n安装node.js 前端部分是基于node.js上运行的，所以必须先安装`node.js`，版本要求为6.0以上\n\n使用npm安装依赖 下载悟空CRM9.0前端代码； 可将代码放置在后端同级目录frontend，执行命令安装依赖：\n\n    npm install\n\n修改内部配置 修改请求地址或域名：config/dev.env.js里修改BASE_API（开发环境服务端地址，默认localhost） 修改自定义端口：config/index.js里面的dev对象的port参数（默认8080，不建议修改）\n\n### 运行前端\n\n     npm run dev\n\n注意：前端服务启动，默认会占用8080端口，所以在启动前端服务之前，请确认8080端口没有被占用。\n程序运行之前需搭建好Server端\n\n\n\n## 系统介绍\n\n以下为悟空CRM9.0 部分功能系统截图\n\n![](https://images.gitee.com/uploads/images/2019/0520/132127_4ba5b87c_345098.png \"g1.png\")\n![](https://images.gitee.com/uploads/images/2019/0520/132136_4668db82_345098.png \"g2.png\")\n![](https://images.gitee.com/uploads/images/2019/0520/132145_93874d84_345098.png \"g3.png\")\n![](https://images.gitee.com/uploads/images/2019/0520/132156_aa1ccaaa_345098.png \"g4.png\")\n![](https://images.gitee.com/uploads/images/2019/0520/132206_c2afdfb5_345098.png \"g5.png\")\n![](https://images.gitee.com/uploads/images/2019/0520/132224_fd63c698_345098.png \"g6.png\")\n![](https://images.gitee.com/uploads/images/2019/0520/132233_d0a1d345_345098.png \"g8.png\")\n![](https://images.gitee.com/uploads/images/2019/0520/132250_e3599a75_345098.png \"g9.png\")\n', '50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。', '1586423599', '123');
INSERT INTO `article` VALUES ('5', '1', 'React服务端渲染框架Next.js入门(共12集)', '### 悟空CRM（9.0版本）\n悟空软件长期为企业提供企业管理软件(CRM/HRM/OA/ERP等)的研发、实施、营销、咨询、培训、服务于一体的信息化服务。悟空软件以高科技为起点，以技术为核心、以完善的售后服务为后盾，秉承稳固与发展、求实与创新的精神，已为国内外上千家企业提供服务。\n\n悟空的发展受益于开源，也会回馈于开源。2019年，悟空CRM会继续秉承“拥抱开放、合作共赢、创造价值”的理念，在开源的道路上继续砥砺前行，和更多的社区开发者一起为国内外开源做出积极贡献。\n\n官网：[http://www.5kcrm.com](http://www.5kcrm.com/)\n\n官网：[http://www.72crm.com](http://www.72crm.com/)\n\n论坛：[http://bbs.72crm.net](http://bbs.72crm.net/)\n\n演示地址：[demo9.5kcrm.net](http://demo9.5kcrm.net/)(帐号：18888888888   密码：123456)\n\nQQ群交流群⑩群：[486745026](https:////shang.qq.com/wpa/qunwpa?idkey=f4687b809bf63f08f707aa1c56dee8dbcb9526237c429c4532222021d65bf83c)\n\nJAVA版下载地址：[https://gitee.com/wukongcrm/72crm-java](https://gitee.com/wukongcrm/72crm-java)\n\n\n扫码添加小悟官方客服微信，邀您加入千人微信交流群：\n\n\n\n关注悟空CRM公众号，了解更多悟空资讯\n\n\n\n\n悟空CRM采用全新的前后端分离模式，本仓库代码中已集成前端vue打包后文件，可免去打包操作\n\n如需调整前端代码，请单独下载前端代码，前端代码在根目录的ux文件夹中\n\n## 主要技术栈\n\n后端框架：ThinkPHP 5.0.2\n\n前端MVVM框架：Vue.JS 2.5.x \n\n路由：Vue-Router 3.x \n\n数据交互：Axios \n\nUI框架：Element-UI 2.6.3 \n\n悟空crm9.0的运行环境要求PHP5.6以上\n\n\n## 一键安装\n\n代码中已集成前端vue打包后文件，可免去打包操作：\n以本地（phpstudy集成环境）搭建举例：\n下载悟空CRM9.0开源版，在服务器根目录（www目录）下创建72crm文件夹，并放置代码； 浏览器访问\n\n`http://localhost/72crm/index.php/admin/install/index.html `\n\n根据安装提示步骤，完成悟空CRM9.0 的部署安装\n\n\n\n\n\n## 开发依赖（需个性化安装或调整前端代码请按照以下教程，一键安装用户可忽略）\n\n### 数据交互 \n数据交互通过axios以及RESTful架构来实现 \n用户校验通过登录返回的auth_key放在header \n值得注意的一点是：跨域的情况下，会有预请求OPTION的情况\n\n### Server搭建 \n服务端使用的框架为thinkphp5.0.2，搭建前请确保拥有lamp/lnmp/wamp环境。\n\n这里所说的搭建其实就是把server框架放入WEB运行环境，并使用80端口。\n导入服务端根文件夹数据库文件public/sql/5kcrm.sql，并修改config/database.php配置文件。\n\n### 配置要求\nPHP >= 5.6.0 \n当访问 http://localhost/, 出现“悟空软件”即代表后端接口搭建成功。\n### 前端部署\n安装node.js 前端部分是基于node.js上运行的，所以必须先安装`node.js`，版本要求为6.0以上\n\n使用npm安装依赖 下载悟空CRM9.0前端代码； 可将代码放置在后端同级目录frontend，执行命令安装依赖：\n\n    npm install\n\n修改内部配置 修改请求地址或域名：config/dev.env.js里修改BASE_API（开发环境服务端地址，默认localhost） 修改自定义端口：config/index.js里面的dev对象的port参数（默认8080，不建议修改）\n\n### 运行前端\n\n     npm run dev\n\n注意：前端服务启动，默认会占用8080端口，所以在启动前端服务之前，请确认8080端口没有被占用。\n程序运行之前需搭建好Server端\n\n\n\n## 系统介绍\n\n以下为悟空CRM9.0 部分功能系统截图\n\n\n', '悟空软件长期为企业提供企业管理软件(CRM/HRM/OA/ERP等)的研发、实施、营销、咨询、培训、服务于一体的信息化服务。悟空软件以高科技为起点，以技术为核心、以完善的售后服务为后盾，秉承稳固与发展、求实与创新的精神，已为国内外上千家企业提供服务。\n', '1586880000', '123');
INSERT INTO `article` VALUES ('6', '1', 'R', '### 123123\n13123\n### 123123\n1231232\n## 12312\ndd\nf\nf\nf\nf\nf\nf\nf\nf\n\n#123123', 'React Hooks+Egg.js实战视频教程-技术胖Blog开发React Hooks+Egg.js实战视频教程-技术胖Blog开发React Hooks+Egg.js实战视频教程-技术胖Blog开发', '1588176000', '0');
INSERT INTO `article` VALUES ('7', '2', '123', '12312323', '123', '1586188800', '0');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) NOT NULL,
  `orderNum` int(11) NOT NULL DEFAULT '0',
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('1', '视频教程', '1', 'YoutubeOutlined');
INSERT INTO `type` VALUES ('3', '大胖逼逼叨', '2', 'MessageOutlined');
INSERT INTO `type` VALUES ('4', '快乐生活', '3', 'SmileOutlined');
