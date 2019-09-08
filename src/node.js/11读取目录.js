// 导入模块
var fs = require('fs');
var http = require('http');
//创建服务
var server = http.createServer();
//设置服务
server.on('request', function (req, res) {
    var dirPath = 'E:\\FrontEndProject\\JavaScript-Learning\\src\\node.js';
    fs.readdir(dirPath, function (err, files) {
        if (err){
            return console.log("目录不存在");
        }
       console.log(files);
    });
});

//绑定端口，开始监听
server.listen(3000, function () {
   console.log('服务开始...');
});