let Sqlbase = require('./sqlBase');

class SerProd extends Sqlbase {
    constructor() {
        super();
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

module.exports = SerProd;