'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hello world';
  }

  async getArticleList() {
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'from_unixtime(article.addTime,"%Y-%m-%d %H:%i:%s") as addTime,' +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id'; // 左连接
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }

  async getArticleById() {
    const id = this.ctx.params.id; // 前端传递的文章id
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      'from_unixtime(article.addTime,"%Y-%m-%d %H:%i:%s") as addTime,' +
      'article.view_count as view_count ,' +
      'type.typeName as typeName, ' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id ' +
      'WHERE article.id =' +
      id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }

  // 文章分类列表
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = { data: result };
  }
  // 根据类别id获取文章列表
  async getListById() {
    //-----
    const id = this.ctx.params.id;
    const sql =
      'SELECT article.id as id ,' +
      'article.title as title ,' +
      'article.introduce as introduce ,' +
      'FROM_UNIXTIME(article.addTime, "%Y-%m-%s %H-%i-%s") as addTime ,' +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id ' +
      'WHERE type_id = ' +
      id;
    const results = await this.app.mysql.query(sql);
    //------
    // 请求后返回的result是一个数组；
    this.ctx.body = { data: results };
  }
}

module.exports = HomeController;
