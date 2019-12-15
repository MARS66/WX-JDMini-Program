let SerJDhappyModel = require('../models/ser-jdHappy');
module.exports.serTheJDhappy = function (req, res) {
    let serJDhappyModel = new SerJDhappyModel();
    serJDhappyModel.serJDhappy(function (data) {
        res.json(data);
    });
}