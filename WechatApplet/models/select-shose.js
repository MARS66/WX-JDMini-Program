let SqlBase = require('./sqlBase');
class selectShoseModel extends SqlBase {
    constructor() {
        super();
    }
    selectShose(callback) {
        let sql = `select * from shose`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('错误是:' + err.message);
                return;
            }
            callback(result);
        });
    }
}

module.exports = selectShoseModel;