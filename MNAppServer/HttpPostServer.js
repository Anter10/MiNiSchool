/**
 * Created by guoyouchao on 16/5/12.
 */

var httppostserver = require("express").Router();
var querystring = require("querystring");
var email = require("../MNEmailServer/SendEmail");
var Query = require("../MNMYSQLDatabase/MysqlServer.js");
var fileserver = require("../MNFileServer/FileServer");
var URL = require("url");

function getQueryArray(req){
    var parsedUrl= URL.parse( req.url, false );
    var tdss = querystring.parse(parsedUrl.query);
    var finalary = {};
    for (var key in tdss){
        var value = tdss[key];
        if (key != "__proto__") {
            finalary[key] = value;
        }
    }
    return finalary

}


httppostserver.get("/login", function (req, res) {
    res.send("hello welcome to login server!");
});

httppostserver.use("/register",function(req, res, next){

    var ps = req.query;
    var string = "select * from AboutSp";
    var FileServer = require("fs")
    var options = {encoding:'utf8', flag:'r'};
    var tdd = "";

    var tresa = getQueryArray(req);
    req.on("data", function (data) {
        console.log("data = ",data);
    });

    Query(string,function(query, values, fields){
        const buf4 = new Buffer(values[1].message, 'utf8');
        var message = values[1].message;


        var page = "Hello , I will send a email to you..."

        var datas = fileserver.getJsonDataByPath('./Files/hero.json',function(data){
            console.log("读取到的数据  = ",data);
            var sd =   JSON.stringify(JSON.parse(data));
            var hskj = "<a href ="+"http://www.heisekeji.com/BestEnglish/chapters/chapters.jsp"+">"+"黑色科技"+"</a>";
             email.sendMailTo('892466942@qq.com',hskj);
             res.send({"data":sd});
        });
        FileServer.createFolder('./Files/data');
        FileServer.createFileNotExits("./Files/data/my.json","{age:123}");
        FileServer.createFile("./Files/data/my.json","{agesdad:123}");
        FileServer.renameFileOrFolder("./Files/data/my.json","./Files/data/newmy.json");
        FileServer.renameFileOrFolder("./Files/data","./Files/jsondata");
    });

});




module.exports = httppostserver;
