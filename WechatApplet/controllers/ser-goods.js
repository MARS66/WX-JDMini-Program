let SerGoods = require('../models/ser-goods_');
let sergd = new SerGoods();
module.exports.serGd = function (req, res) {
    sergd.serGood(function (data) {
        res.json(data);
    });
}