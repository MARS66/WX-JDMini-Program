let SqlBase = require('./sqlBase.js');

class SerPi extends SqlBase {
    constructor() {
        super();
    }
    serPi(callback) {
        let sql = `select * from CarouselPicture`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('错误是:' + err.message);
                return;
            }
            callback(result);
        });
    }
}
module.exports = SerPi;