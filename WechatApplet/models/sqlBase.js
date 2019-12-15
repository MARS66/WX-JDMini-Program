let mysql = require('mysql');

class SqlBase {
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
}

module.exports = SqlBase;