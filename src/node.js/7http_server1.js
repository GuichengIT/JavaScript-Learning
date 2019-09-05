var http = require("http");


//1. 创建server
var server = http.createServer();

//2. 设置服务类型和相应的服务处理函数
server.on("request", function (req, res) {
    var url = req.url;
    if(url === "/"){
        res.setHeader("content-type", "text/html; charset=utf-8" );
        res.end("<p>你好，<a href='#'>世界</a></p>");
    }else{
        // res.setHeader("content-type", "text/plain; charset=utf-8" );
        res.end("出错了");
    }
});

//3. 开始监听
server.listen(3000,function () {
   console.log("服务开启了...");
});