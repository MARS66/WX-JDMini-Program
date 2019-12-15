let SerPi = require('../models/ser-pi.js');



module.exports.serPi = function (req, res) {
    let serPi = new SerPi();
    serPi.serPi(function(data){
        res.json(data);
    });
}