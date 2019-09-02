//浏览器中的js没有文件操作的能力
//node中的js有文件操作的能力

//fs是file-system 的简写，就是文件系统的意思
//在Node中如果想要进行文件操作，就必须引入fs这个核心模块，这个模块中提供了所有文件操作相关的API
//比如：fs.readFile就是用来读取文件的

//1. 使用require方法加载fs核心模块
var fs = require("fs");

//2. 读取文件
// 第一个参数就是读取文件的文件路径
// 第二个参数是一个回调函数
// error
//      如果读取失败error就是错误对象，如果成功error就是null
//data
//        如果读取失败，data就是undefined
//        如果读取成功
//        data就是数据对象
fs.readFile("./helloNode.txt", function (error, data) {
    if(error){
        console.log("读取文件失败了");
    }else{
        console.log(data.toString());
    }
});

//文件中存储的其实都是二进制数据0,1
//为什么看到的不是0和1呢，因为二进制转为16进制了
//所以可以通过toSting方法转为字符串