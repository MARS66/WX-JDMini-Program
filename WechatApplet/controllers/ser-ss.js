let SerSS = require('../models/ser-ss');
let serss = new SerSS();
module.exports.serss = function (req, res) {
    serss.serSS(function (data) {
        res.json(data);
    });
}