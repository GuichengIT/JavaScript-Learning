//引入http模块
var http = require("http");

//1. 创建Server
var server = http.createServer();

//2.监听request请求事件，设置请求处理函数
server.on('request', function(req, res){
    // console.log("请求收到了，请求路径是："+req.url)
    // res.write("hello node.js");
    // res.end();

    // res.end("hello world");

    // 根据不同的请求路径发送不同的响应结果
    //1. 获取请求路径
    var url = req.url; //端口号之后的url部分
    //2. 判断路径处理响应
    // if(url==="/"){
    //     res.end("index page");
    // }else if(url==="/login"){
    //     res.end("login page");
    // }else{
    //     res.end("404");
    // }

    if(url==="/products"){
        var products = [
            {
                name: "苹果",
                price: 888
            },
            {
                name:"菠萝",
                price:111
            },
        ];

        res.end(JSON.stringify(products));
    }

    // 响应内容只能是二进制或字符串
});

//3. 绑定端口号，启动服务
server.listen(3000,function(){
    console.log("服务器启动成功，可以访问了...");
});
