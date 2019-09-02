var fs = require("fs");

// 成功：
//      1. 文件写入成功
//      2. error是null
//失败：
//      1. 文件写入失败
//      2. error是错误对象
fs.writeFile("./helloWorld.md", "- **大家好，给大家介绍一下，我是node.js**" ,
    function(error){

    }
    );