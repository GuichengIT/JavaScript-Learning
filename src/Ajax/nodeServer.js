//  引入相应的模块
var http = require('http');


// 创建服务器
var server = http.createServer();

// 设置服务类型，服务请求函数
server.on('request', function (req, res) {
    var url = req.url;
    console.log(req.url);
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    var data = {
          "name": "zhangsan",
          "age": 18
    };
    res.write("hello");
    res.end("回应");
   
});

//绑定端口，开启服务
server.listen(5000, function () {
   console.log('服务已开启');
});