let SqlBase = require('./sqlBase');
class SerJdHappyModle extends SqlBase {
    constructor() {
        super();
    }
    serJDhappy(callback) {
        let sql = `select * from JDhappy`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('错误是:' + err.message);
                return;
            }
            callback(result);
        });
    }
}

module.exports = SerJdHappyModle;