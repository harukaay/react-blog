/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586400650232_9378';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 数据库的连接配置
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  // 跨域安全机制
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://127.0.0.1:3000', 'http://127.0.0.1:3001' ],
  };
  config.cors = {
    // 允许哪些端口可以跨域
    // origin: 'http://127.0.0.1:3000',
    credentials: true, // 允许cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  return {
    ...config,
    ...userConfig,
  };
};
