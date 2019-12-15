let SqlBase = require('./sqlBase');
class SerIconModle extends SqlBase {
    constructor() {
        super();
    }
    serIcon(callback) {
        let sql = `select * from Icon`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('错误是:' + err.message);
                return;
            }
            callback(result);
        });
    }
}

module.exports = SerIconModle;