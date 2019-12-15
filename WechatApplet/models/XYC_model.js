let SqlBase = require('./sqlBase');
class popCollectionModel extends SqlBase {
    constructor() {
        super();
    }
    selectXYC(name, callback) {
        let sql = `select * from message`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('错误是:' + err.message);
                return;
            }
            callback(result);
        });
    }
}

module.exports = popCollectionModel;