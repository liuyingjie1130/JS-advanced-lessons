var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    
    var getDataStr = url.parse(req.url).query;//parse函数中第二个参数为true的话返回一个对象

    res.writeHead(200, {
        "Content-Type": "text/plain",
        // res.writeHead(200, {"Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
        "Access-Control-Allow-Methods": "GET, POST"
    });
    setTimeout(function () {
        res.end("你好，我已收到你发的信息："+getDataStr);
    },20000*Math.random());
    //res.end("你的输入信息是："+getDataStr);
}).listen(8080,"127.0.0.1");
console.log("start server!");


















// function Student(name,id){
//     this.name=name,
//     this.id=id
// }
// Student.prototype.show=function(){
//     consoele.log('I am'+name+'my id is'+id);
// }
// module.exports=Student;


// 创建服务器
// var http=require('http');
// var server=http.createServer(function(req,res){/* 请求体 响应体*/ 
//   res.writeHead(200,{'Content-Type':'text/plain'})/*请求头 200状态码成功*/ 
//  res.write('hello \n')
//  res.end();
//  })
//  server.listen(1337,'127.0.0.1')
// // 监听请求  1337 是端口
// console.log('server running at http://127.0.0.1:1337/')


// function learn(something){
//   console.log(something)
// }

// function we(callback,something){
//   something+=' is cool'
//   callback(something)
// }

// we(learn,'Nodejs')

// // 匿名回调
// we(function(something){console.log(something)},
// 'jade')

