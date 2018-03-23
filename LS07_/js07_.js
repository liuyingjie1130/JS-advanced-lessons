//通过函数说明定义
// function c(a,b){
//     console.log(a,b)
// }
// c(1,2)
// //表达式生成函数   匿名函数也可以不匿名
// var c=function(a,b){
//     console.log(a,b);
// }
// c(1,2);
// //通过Function构造函数实例化的形式来定义
// var str="console.log(a,b)";
// var c=new Function("a","b",str);
// c(1,2);

// var str="a=3;{console.log(a,b)}";
// var c=new Function("a","b",str);
// c(1,2);//3 2



//02

// var x=45;
// var test=function(){
//     console.log("输出：",this.x);
// }
// var obj={
//     x:23
// };
// obj.test=test;
// obj.test();//23 主体是obj
// test();//45   主体是window

// var x=45;
// var obj={
//     x:23,
//     test:function(){
//         function foo(){
//             console.log(this.x,this);
//         }
//         foo();//foo是test里嵌套的，没有直接绑定obj
//     }
// }
// obj.test();//45  

// obja={
//     name:"aa",
//     x:1,
//     y:2
// };
// objb={
//     name:"bb",
//     x:3,
//     y:4
// };
// obja.foo=function (){
//     console.log(this.x);
// }
// obja.foo();//1
// obja.foo.call(objb);//3


// obja.foo.call(objb,x,y)
// obja.foo.apply(objb,[x,y])//apply数组形式


// var fish={
//     name:fish,
//     swim:function(m,n){
//         console.log("i can swim",m,n);
//     }
// };
// var bird={
//     name:bird,
//     fly:function(m,n){
//         console.log("i can fly",m,n);
//     }
// };
// var me={
//     name:"abc"
// };
// bird.fly(1,2);
// fish.swim.call(me,2,3);
// bird.fly.apply(me,[4,5]);

// var obj={name:"obj"};
// var sayHi = function () {
//     console.log("Hi，i'm",this.name);
// };
// obj.sayHi = sayHi;//添加给对象添加方法
// obj.sayHi();//Hi，i'm obj


// //直接调用sayHi();
// var name="全局";
// var obj={name:"obj"};
// var sayHi = function () {
//     console.log("Hi，i'm",this.name);
// };
// //直接调用
// sayHi();//Hi，i'm 全局

//03
//实参大于形参数
// function test (){
//     console.log(arguments);//[hello ,world,```]类数组对象
//     console.log(test.arguments==arguments,arguments);//false []
//     console.log(arguments.length);//2
//     console.log(typeof arguments);//Object
//     console.log(arguments instanceof Array);//false
//     console.log(arguments instanceof Object);//true
//     console.log(Array.prototype.slice.call(arguments));
//     var s="";
//     for(var i=0;i<arguments.length;i++)
//     {
//         s+=arguments[i];
//     }
//     return s;
// }
// test("hello,","world");

//实参数小于形参数
// var sum=function(a,b,c){
//     b=b||4;
//     c=c||5;
//     return a+b+c;
// };
// console.log(sum(1,2,3));//6
// console.log(sum(1,2));//8
// console.log(sum(1));//10

//04
//值传递
// var a=1;
// function foo(x){
//     console.log("a:",a,"x:",x);//a:1  x:1
//     x=2;
//     console.log("a:",a,"x:",x);//a:2  x:2
// }
// console.log("a:",a);//a:1
// foo(a);
// console.log("a:",a);//a:1

//引用传递
var obj={x:1};
function fee(o){
    console.log("obj.x:",obj.x,"o.x",o.x);//obj.x:1 o.x:1
    o.x=3;
    console.log("obj.x:",obj.x,"o.x",o.x);//obj.x:3  o.x:3
}
console.log("obj.x:",obj.x);//obj.x:1
fee(obj);
console.log("obj.x:",obj.x);//obj.x:3
