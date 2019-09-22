//1. 加载模块
var fs = require("fs");
var http = require("http");

//2. 创建服务
var server = http.createServer();

//3. 设置服务类型和相应的服务处理函数
server.on("request", function (req, res) {
    fs.readFile("../jQuery/2travelPhotoAlbum.html", function(err, data){
        if(err){
            res.setHeader("Content-Type", "text/plain;charset=utf-8")
            res.end("文件读取失败，请稍后重试！");
        }else{
            res.setHeader("Content-Type", "text/html;charset=utf-8");
            res.end(data);
        }
    })
});

//4. 监听端口，开启服务
server.listen(4000,function(){
    console.log("服务器开启，可以进行连接了...");
});