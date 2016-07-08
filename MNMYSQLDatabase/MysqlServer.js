/**
 * Created by guoyouchao on 16/5/12.
 */
var mysql = require("mysql");

var MysqlPool = mysql.createPool({
    host: "localhost",
    port:3306,
    database:"SPeople",
    user: "root",
    password:"123456",
    charset:'UTF8_GENERAL_CI'

});

// 数据处理
var Query = function(sqlString, callback){
    console.log("SBC");
   MysqlPool.getConnection(function(error, conn){
      if(error){

      }else{
          conn.query(sqlString, function(qyerys, values, fields){
             conn.release();
             callback(qyerys, values, fields)

          });
      }

   });
};

// 连接池关闭
Query.closePool = function(){
    MysqlPool.end(function(error){
       if (error) throw  error;
        console.log("数据库连接已经关闭");
    });
};

module.exports = Query;