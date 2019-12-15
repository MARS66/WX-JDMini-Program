let SqlBase = require('./sqlBase');
class SerPurpleModle extends SqlBase {
    constructor() {
        super();
    }
    serPurple(callback) {
        let sql = `select * from purple`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('错误是:' + err.message);
                return;
            }
            callback(result);
        });
    }
}

module.exports = SerPurpleModle;