/**
 * Created by guoyouchao on 16/5/12.
 */

var socket = require("net")

var server = socket.createServer(function(tws){

    tws.on("data",function(data){
        console.log("收到的数据 ＝ "+data);
    });

    tws.on("connect",function(){
        console.log("新用户连接");
    });

    tws.on("close",function(){
        console.log("客服端关闭连接");
    });

    tws.on("end",function(){
        console.log("客服端已经断开");
    });
});
server.listen(1080,"192.168.1.48",function(){
    console.log("新的用户已经连接");
});

module.exports = server