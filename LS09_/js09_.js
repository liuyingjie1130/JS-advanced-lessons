//08

// console.log(a,b);//undefined undefined
// var b = 23;
// console.log(a,b);//undefined 23
// var a = b;
// console.log(a,b);//23 23

// console.log(obj1,obj2);//undefined undefined
// var obj1 = {x:23};
// console.log(obj1,obj2);//{x: 23} undefined
// var obj2 = obj1;
// console.log(obj1,obj2);//{x: 23} {x: 23}
// obj2.x =25;
// console.log(obj1,obj2);//{x: 25} {x: 25}

// foo();//f_2
// function foo(){
//     console.log("f_1");
// }
// function foo(){
//     console.log("f_2");
// }

// foo();//报错
// var foo = function(){
//     console.log("foo");
// };


// console.log(foo);//undefined
// var foo = function(){
//     console.log("foo");
// };
// foo();//不会报错 输出foo

// AA();//AA_1
// function AA(){
//     console.log("AA_1");
// }
// var AA = function AA(){
//     console.log("AA_2");
// };
// AA();//AA_2

//上边代码等价如下
// function AA(){
//     console.log("AA_1");
// }
// var AA;

// AA();//AA_1
// AA = function AA(){
//     console.log("AA_2");
// };
// AA();//AA_2


//09
// var name = "Jack";
// function echo() {
//     console.log(name);
// }
// function foo() {
//     var name = "Bill";
//     echo();
// }
// foo();// Jack

//全局与局部变量
// var x = "outside f1";
// var f1 = function () {
//     console.log(x);
// };
// f1();//outside f1
// console.log(x);//outside f1


// var x = "outside f1";
// var f1 = function () {
//     var x = "inside f1";
//     console.log(x);
// };
// f1();//inside f1
// console.log(x);//outside f1


//若函数内未加var 则相当于创建了全局变量

// var f2 = function () {
//     var y = "局部";
//     console.log(y);
// };
// f2();//局部
// console.log(y);//报错

// var f2 = function () {
//     y = "全局";
//     console.log(y);
// };
// f2();//全局
// console.log(y);//全局

//ES5中无块作用域
// if(true){
//     var z = 11;
// }
// console.log(z);//11

// if(true){
//     (function () { 
//         var z = 23;
//     }());          
// }
// console.log(z);//报错


//10

if(true){
    var i = 222;
}
function foo(){
    console.log("j:",j);//undefined
    var j = 111;
    console.log("j:",j);//111
}
foo();
console.log("i:",i);//222  无块作用域
console.log("j:",j);//报错 局部变量


