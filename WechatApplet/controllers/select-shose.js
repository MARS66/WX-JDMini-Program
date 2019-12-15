let selectShoseModel = require('../models/select-shose');
module.exports.selectShoseCont = function (req, res) {
    let selectshoseModel = new selectShoseModel();
    selectshoseModel.selectShose(function (data) {
        res.json(data);
        // console.log(data);
    });
}