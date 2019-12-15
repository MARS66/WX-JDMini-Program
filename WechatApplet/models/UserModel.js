//1,引入mysql
let mysql = require('mysql');
class UserModel {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost", //主机 ip
      user: "root", //MySQL认证用户名
      password: "123456", //MySQL认证用户密码
      port: "3306", //端口号
      database: "threegp" //数据库里面的数据
    });
    this.connection.connect();
  }

  // 查找左栏标题
  searchTitle(callback) {
    let sql = `select * from titles`;
    this.connection.query(sql, function (error, result) {
      if (error) {
        console.log("错误查询=" + error);
        return;
      }
      callback(result)
    })
  }
  // 查找右栏产品
  searchtitle(callback) {
    let sql = `select * from titles`;
    this.connection.query(sql, function (error, result) {
      if (error) {
        console.log("错误查询=" + error);
        return;
      }
      callback(result)
    })
  }

  searchProduct(num, callback) {
    let sql = `select * from products where title_id='${num}'`;
    this.connection.query(sql, function (error, result) {
      if (error) {
        console.log("sql操作错误" + error);
        return;
      }
      callback(result);
    })
  }

}
module.exports = UserModel;