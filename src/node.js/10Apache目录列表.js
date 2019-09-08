//  引入相应的模块
var http = require('http');
var fs = require('fs');

// 创建服务器
var server = http.createServer();

// 设置服务类型，服务请求函数
server.on('request', function (req, res) {
    var url = req.url;
    var wwwDir = 'E:\\FrontEndProject\\JavaScript-Learning\\src\\node.js';
    var content;

    fs.readdir(wwwDir, function (err, files) {
        for (let i=0;i<files.length;i++){
            console.log(files[i]);
            content +=`
                <td data-value="apple/"><a class="icon dir" href=wwwDir>${files[i]}</a></td>
                <td class="detailsColumn" data-value="0"></td> 
                <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                `;
        }
    });

    fs.readFile(wwwDir+'/template.html', function (err, data) {
        console.log(wwwDir+url);
        if (err){
            res.setHeader('content-type', 'text/plain;charset=utf-8');
            console.log('出错啦');
            return res.end('404 Not Found');
        } else {
            res.setHeader('content-type', 'text/html;charset=utf-8');
            console.log(content);
            data = data.toString();
            // data.replace('^_^', content);
            // console.log(data);
            data = data.replace('^_^',content);
            res.end(data);
            console.log('读取成功');
        }
    });
});

//绑定端口，开启服务
server.listen(5000, function () {
    console.log('服务已开启');
});