/**
 * Created by guoyouchao on 16/6/2.
 */
var wsserver = require("ws").Server;

var server = new wsserver({port:1089,host:'120.26.236.197',path:'/hello'});

server.on("connection", function connection(ws){
    console.log('新的客服端连接 Hello '+ ws.host);
   ws.on('message', function incoming(data){
       console.log("客服端得到的数据  = " + data);
       ws.send("Hello 客服端");
   });

    ws.on('close', function close(options){
        console.log("opetions de zhi = ",options);
    });


});

module.exports = server;
