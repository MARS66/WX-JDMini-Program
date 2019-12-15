let Sqlbase = require('./sqlBase');

class SerSS extends Sqlbase {
    constructor() {
        super();
    }
    serSS(callback) {
        let sql = `select * from shoses`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('错误是:' + err.message);
                return;
            }
            callback(result);
        });
    }
}
module.exports = SerSS;