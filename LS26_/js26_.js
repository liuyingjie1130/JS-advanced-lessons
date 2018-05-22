// //函数回调
// // 同步执行的回调
// var arr1=[1,3,5,7,9];
// console.log("arr1:",arr1);
// var newArray1=arr1.map(function (a){return a*a;});
// //该map()方法创建一个新的数组，其结果是对调用数组中的每个元素调用一个提供的函数。
// console.log("newArray1:",newArray1);
// // arr1: (5) [1, 3, 5, 7, 9]
// // newArray1: (5) [1, 9, 25, 49, 81]

// var arr2= [1,3,5,7,9];
// console.log("arr2:",arr2);
// var newArray2 = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
//     return (a>2&&a<8)?true:false;
// });
// console.log("newArray2:",newArray2);
// // arr2: (5) [1, 3, 5, 7, 9]
// // newArray2: (3) [3, 5, 7]

// // 异步执行的回调（通过定时器模拟）
// var Ltimeperation=function(taskID){
//     var id=taskID;
//     this.go=function(callback){
//         console.log('Start Ltimeoperation #'+id);
//         var delay=parseInt((Math.random()*1000)%5000);
//         setTimeout(function(){
//             console.log('task #'+id+'cost'+delay+'ms.');
//             callback();
//         },delay);
//     }
// };
// function f2(){
//     console.log('this is f2, i am callback!\n');
// }
// for(var i=0;i<5;i++){
//     var task=new Ltimeperation(i);
//     task.go(f2);
// }

// // 事件触发与事件监听
// document.onclick = function () {
//     console.log("document 被点击了！");
// };
// window.onclick = function () {
//     console.log("window 被点击了！");
// };

// // 案例二
// for(var i=0;i<5;i++){
//     var btn=document.createElement("button");
//     btn.setAttribute("id","btnId"+i);
//     btn.setAttribute("style","width:200px");
//     btn.setAttribute("style","height:20px");
//     document.body.appendChild(btn);
// }
// //思考异步 与 变量共享的问题 ES5如何用IIFE来解决共享问题
// for(var i=0;i<5;i++) {
//     //(function (i) {
//         document.getElementById("btnId" + i).addEventListener("click", function () {
//             document.bgColor = "#"+i*2+i*2+i*2+i*2+"00";
//             console.log("#"+i*2+i*2+i*2+i*2+"00");
//         });
//     //})(i);
// }







// 案例三 在Nodejs环境下进行调试
var http = require('http');
var url = 'http://www.baidu.com';

http.get(url,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log(data);
    });
    res.on('end',function(end){
        console.log('End!');
    });
});


//发布订阅 实例/////////////////////
// 了解！

//XMLHttpRequest Get 请求
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {

    if (xhr.readyState == 4) {
       
        if (xhr.status == 200) {
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true);
xhr.send();

