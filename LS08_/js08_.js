//05
// function foo(){};
// console.log(foo);//f foo(){}
// console.log(typeof foo);//function
// console.log(foo instanceof Object);//true
// console.log(foo instanceof Function);//true
// console.log(foo === window.foo);//true

// console.log(typeof Function);//function
// console.log(typeof Array);	 //function
// console.log(typeof Date);	 //function
// console.log(typeof Error); 	 //function
// console.log(typeof Math);	 //object
// console.log(typeof JSON);	 //object

// console.log(typeof new Function());//function
// console.log(typeof new Array());//object
// console.log(typeof new Date());//object
// console.log(typeof new new Function());//object
// console.log(Function instanceof Function);//true
// console.log(Function instanceof Object);//true
// console.log(Array instanceof Function);//true
// console.log(Array instanceof Object);//true
// console.log(Date instanceof Function);//true
// console.log(Date instanceof Object);//true
// console.log(Math instanceof Function);//false
// console.log(Math instanceof Object);//true
// console.log(JSON instanceof Function);//false
// console.log(JSON instanceof Object);//true

// 06
// var foo=function(a,b)
// {
//     console.log(arguments);
//     console.log(arguments===foo.arguments);//false
//     console.log(arguments.length);//4
//     var args=Array.prototype.splice.call(arguments);
//     console.log(args);//[]
// }
// foo(1,2,3,4);

// function foo(x,y,z){ 
// }
// console.log(foo.length);//3


// function testouter(){
//     function test(){
//         if(test.caller==null){
//             console.log("test is called from the toppest level")
//         }
//         else{
//             console.log("test is called from the function:");
//             console.log(test.caller.toString());
//         }
//     }
// }
// testouter();
//获取当前调用函数的函数
// var obj = {
//     foo1:function(){
//         console.log(this.foo1.caller);
//     },
//     foo2:function abc(){
//         this.foo1();
//     }
// };
// obj.foo1();
// obj.foo2();

// callee 返回正被执行的Function对象
// console.log(function(n){
//     if(n<=0)
//         return 1;
//     else
//         return n*arguments.callee(n-1);
// }(4));

// Object.__proto__===Function.prototype;//true

// function Man(name,age){
//     this.name=name;
//     this.age=age;
// }
// Man.prototype.sex="M";
// Man.prototype.sayHi=function(){
//     console.log("Hi,i'm",this.name);
// }
// var li=new Man("Leo",10);
// li.sayHi();
// console.log(li.sex);
// Man.prototype.isStrong="adds";//添加属性
// console.log(li.isStrong);
//绑定
// var x=45;
// var obj={
//     x:23,
//     test:function(){
//         function foo(){
//             console.log(this.x);
//         }
//         foo.bind(this)();//23
//         foo();//45
//     }
// };
// obj.test();

// var ch=function(value){
//     if(typeof value!=='number')
//         return false;
//     else
//         return value>=this.mininum && value<=this.maxnum;

// };
// var range={mininu:10,maxnum:20};
// var bch=ch.bind(range);
// var result=bch(12);
// console.log(12);

// var display=function(v1,v2,v3,v4){
//     console.log(v1+''+v2+''+v3+''+v4);
// }
// var empty={};
// var display2=display.bind(empty,12,"a");
// display2("b","c");//12abc

//07

// function add(x,y,f){
//     return f(x)+f(y);
// }
// console.log(add(2,3,function(z){return z*z;}));
// console.log(add(2,-3,Math.abs));
// console.log(add(2,3,Math.sqrt));

// function f1(x){
//     return x+1;
// }
// function f2(x){
//     return x*x;
// }
// function f3(x){
//     return x-1;
// }
// function foo(x,y,a,b){
//     return 2*a(x)-3*b(y);
// }
// foo(1,1,f1,f2);

// var word2="do another thing";
// var function1=function(callback){
//     this.word1="do something";
//     console.log(this.word1);
//     (callback && typeof(callback)==="function") && callback();

// };
// var function2=function(){console.log(this.word2)};
// function1(function2);



//.map()把每个元素通过函数传递到当前匹配集合中，生成包含返回值的新的 jQuery 对象
// function pow(x) {
//     return x * x;
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

// var result=["1","2","3"].map(function(val){
//     return parseInt(val);
// });
// for(var i=0;i<result.length;i++){
//     console.log(typeof result[i]);//number
// }
//过滤
// var arr=[1,2,3,4,5,6,7,8];
// var r=arr.filter(function(x){
//     return x%2!=0;
// });
// console.log(r);

//排序

// var arr = [10,30, 4, 2];
// console.log(arr.sort(function (x, y) {
//     if (x < y) {
//         return -1;
//     }
//     if (x > y) {
//         return 1;
//     }
//     return 0;}));

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);//
    }
};
var fun1 = function () {
    return function fun2() {
        return (this.x,this);//
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//ƒ fun2() { return (this.x,this);//}
console.log("输出：",obj.fun3()());//Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
console.log("输出：",obj.fun4());//{x: 34, fun2: ƒ, fun3: ƒ, fun4: ƒ}