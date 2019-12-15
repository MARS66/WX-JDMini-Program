let SerIconModel = require('../models/ser-Icon');
module.exports.serTheIcon = function (req, res) {
    let sericonmodel = new SerIconModel();
    sericonmodel.serIcon(function (data) {
        res.json(data);
    });
}