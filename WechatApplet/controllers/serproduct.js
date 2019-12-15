let SerProd = require('../models/ser-product');
let serprod = new SerProd();
module.exports.serprod = function (req, res) {
    let num = req.body.num;
    // console.log(num);
    serprod.searchProduct(num, function (data) {
        // console.log(data);
        res.json(data);
    });
}