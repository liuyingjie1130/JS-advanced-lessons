//var没有块作用域
{
    var a = 23;
}
console.log(a);//23

for(var i=0;i<5;i++){

}
console.log("i:",i);//5


//由于没有块作用域，容易造成变量污染
var abc = 123;
document.onclick = function () {
    console.log(abc);//234
};

//一长串代码后，假如忘记上边定义了abc，容易重复定义造成变量污染
var a=2,b=3;
if(a<b){
    var abc= 234;
}

//可以通过IIFE立即执行表达式来解决上述问题
var abc = 123;
document.onclick = (function () {
    console.log(abc);//123
}());

//一长串代码后，假如忘记上边定义了abc，容易重复定义造成变量污染
var a=2,b=3;
if(a<b){
    var abc= 234;
}


//变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
console.log("i：",i);

//通过IIFE解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}


//使用了let就可以避免var所带来的问题
//避免变量污染
let abc = 123;
document.onclick = function () {
    console.log(abc);//123
};
let a=2,b=3;
if(a<b){
   let abc= 234;
}
//避免变量共享
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
console.log("i：",i);
//let 定义的变量 并不像 var 那样直接作为全局对象的属性
var x = 23;
let y = 34;
console.log(window.x,window.y);//23 undefined




//const 常量！
// 不能在改变值
// 声明时必须赋值,一旦声明必须立即初始化
// const作用域同let
// const指向的对象引用不可变，但其属性或元素（如果是数组对象的话）是可变的
const a=11111111;
console.log(a);
a=333;//报错

//声明时必须赋值,一旦声明必须立即初始化
//const foo;//报错
//const foo = 123;//ok


//const作用域同let
if(true){
    const MAX = 5;
}
//console.log(MAX);//报错


//const 除了声明常量外，也常用来声明不变的函数
const fee = function () {

};

//const指向的对象引用不可变，但其属性或元素（如果是数组对象的话）是可变的

const a=[];
a.push(11,22,33)
//3可以
a.length=1
// 1可以
a=[1,2,3]//报错


//var 声明变量
console.log(a);//undefined
var a = 1;
console.log(a);//1

//预解析 上述代码等效于
var a;
console.log(a);
a = 1;
console.log(a);

//特性：let和const不存在变量提升
console.log(a);//报错
let a = 2;
console.log(a);



var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();//undefined
//相当于
var temp = new Date();
function f() {
    var temp;
    console.log(temp);
    if(false){
       temp = "Hi!";
    }
}
f();


//用let
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
       let temp = "Hi!";
    }
}
f();//Mon Jun 04 2018 10:29:39 GMT+0800 (中国标准时间)

// let特性：暂存区锁死：锁死一个块，只能用本块中的变量
var temp = new Date();
function f() {
    console.log(temp);
    // if(false){
       let temp = "Hi!";
    // }
}
f();//报错