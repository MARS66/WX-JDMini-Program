let SerPurpleModel = require('../models/ser-purple');
module.exports.serThePurple = function (req, res) {
    let serPurpleModel = new SerPurpleModel();
    serPurpleModel.serPurple(function (data) {
        res.json(data);
    });
}