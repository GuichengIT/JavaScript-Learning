//  引入相应的模块
var http = require('http');
var fs = require('fs');

// 创建服务器
var server = http.createServer();

// 设置服务类型，服务请求函数
server.on('request', function (req, res) {
    var url = req.url;
    var wwwDir = 'E:\\FrontEndProject\\JavaScript-Learning\\src\\jQuery';
    var file_index = '/index.html'; //用户端口号后不输入时默认响应index.html文件
    if (url === '/'){
        url = file_index;
    }
    fs.readFile(wwwDir+url, function (err, data) {
        console.log(wwwDir+url);
        if (err){
            res.setHeader('content-type', 'text/plain;chaset=utf-8')
            res.end('出错啦');
            console.log('出错啦');
        } else {
            res.setHeader('content-type', 'text/html;chaset=utf-8')
            res.end(data);
            console.log('读取成功');
        }
    });
});

//绑定端口，开启服务
server.listen(5000, function () {
   console.log('服务已开启');
});