let XYCModel = require('../models/XYC_model');
module.exports.selectxyc = function (req, res) {
    //解析前端提交过来的数据
    let xycModel = new XYCModel();
    let name = req.body.name;
    xycModel.selectXYC(name, function (result) {
        //返回给前端
        console.log(result);
        res.json(result);
    })
}