/**
 * Created by guoyouchao on 16/5/13.
 */


var FileServer = require("fs")

//获得JSON数据
FileServer.getJsonDataByPath = function(filePath,callback){
    var json = {}
    var options = {encoding:'utf8', flag:'r'};
    FileServer.readFile(filePath,options,function(error, data){
        if(error){
            console.log("打开文件失败!");
        }else{
            json = JSON.parse(JSON.stringify(JSON.parse(data)["data"]));
            json = JSON.stringify(json);
            console.log("打开的数据 = ", json);
            callback(json);
        }
    });
};

//创建(覆盖目录)目录
FileServer.createFolder = function(folder){
    FileServer.mkdir(folder,{},function(error){
        if(error){
            console.log("创建文件夹失败!");
        }else{
            console.log("创建文件夹成功!");
            return true;
        }
    });
};

//创建不存在的目录
FileServer.createFolder = function(folder){
    if(FileServer.exists(folder,function(exits){
            if(exits){
                console.log("你创建的目录已经存在 不能创建");
            }else{
                FileServer.mkdir(folder,{},function(error){
                    if(error){
                        console.log("创建目录失败!");
                    }else{
                        console.log("创建目录成功!");
                        return true;
                    }
                });
            }
        }));
};

// 创建不存在的文件
FileServer.createFileNotExits = function(filename,data,options){
    if(FileServer.exists(filename,function(exits){
            if(exits){
                console.log("你创建的文件已经存在 不能创建");
            }else{
                FileServer.writeFileSync(filename,data,options);
            }
        }));
};

// 创建(覆盖)文件 (不论存不存在都得创建)
FileServer.createFile = function(filename,data,options){
   if(FileServer.exists(filename),function(exit){
           if(exit){
               FileServer.writeFileSync(filename,data,options);
           }else{
               FileServer.createFileNotExits(filename,data,options);
               FileServer.writeFileSync(filename,data,options);
           }
       });
};


// 重命名文件
FileServer.renameFileOrFolder = function(oldname, newname){
    FileServer.rename(oldname, newname, function(error){
       if(error){
           console.log("将文件/文件夹 "+ oldname + "的重命名" +newname+ "失败");
       }else{
           console.log(oldname+ "成功重命名为"+ oldname);
       }
    });
};



module.exports = FileServer;