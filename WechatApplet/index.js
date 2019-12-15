let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({
    extended: false
});
//3,设置跨域访问
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

let ser = require('./controllers/ser-p').serPi;
app.get('/8456', ser);

let serIcon = require("./controllers/ser-Icon").serTheIcon;
app.get('/8458', serIcon);

let serPurple = require("./controllers/ser-purple").serThePurple;
app.get('/8459', serPurple);

let selectShose = require("./controllers/select-shose").selectShoseCont;
app.get('/research_shose', selectShose);

let JDhappy = require("./controllers/ser-jdHappy").serTheJDhappy;
app.get('/jdHappy', JDhappy);

let serGd = require('./controllers/ser-goods').serGd;
app.get('/sergd', serGd);

let serSs = require('./controllers/ser-ss').serss;
app.get('/serss', serSs);

let serXYC = require('./controllers/XYC_controllers').selectxyc;
app.post('/XYC', urlencodedParser, serXYC);


let UserModel = require('./models/UserModel');
let userModel = new UserModel();
app.post('/titles', urlencodedParser, function (req, res) {
    userModel.searchTitle(function (data) {
        res.json(data)
    })
})


app.get('/searchtitle', function (req, res) {
    userModel.searchtitle(function (data) {
        res.json(data)
    })
})
let serprod = require('./controllers/serproduct').serprod;
app.post('/products', urlencodedParser, serprod);





app.listen(8456, function () {
    console.log('服务器启动');
});