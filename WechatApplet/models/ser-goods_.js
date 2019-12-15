let Sqlbase = require('./sqlBase.js');

class SerGoods_ extends Sqlbase {
    constructor() {
        super();
    }
    serGood(callback) {
        let sql = `select * from goods`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('错误是:' + err.message);
                return;
            }
            callback(result);
        });
    }
}

module.exports = SerGoods_;