/**
 * Created by guoyouchao on 16/5/12.
 */




var MNWebsocketServer = require('ws').Server;
var wss = new MNWebsocketServer({host:"192.168.1.48", port: 9080 ,path:"/echo"});

var sockets = new Array();

wss.on('connection', function connection(ws) {
    console.log("客服端已经连接");
    sockets[sockets.length] = ws
    ws.on('message', function incoming(message) {
        console.log(sockets.length+' 客服端发来的数据: %s', message);
        /** wss.clients.forEach(function each(client) {
    * client.send(message);});*/
        var length = sockets.length
        for (var index = 0; index < length ; index ++)
        {
            sockets[index].send(message);

        };
    });
    ws.on("close",function()
    {
        console.log("客服端已经断开");

    });
    ws.on("connect",function(ws){
        console.log("客服端已经连接");
    });
    ws.send("Message hahah");
});

module.exports = wss;