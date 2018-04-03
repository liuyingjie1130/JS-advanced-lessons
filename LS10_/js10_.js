//01
//全局作用
// var a=10,
//     b=20;
// function fn(){
//     var a=100,
//         c=200;
//     // console.log(a,b,c,d);//报错d undefined
//     function bar(){
//         var a=500,
//             d=600;
//             console.log(a,b,c,d);//500 20 200 600
//     }
//     bar();
// }
// fn();
// // console.log(a,b,c,d);//报错c,d undefined


//02


//静态词法作用域
// var name = "Jack";
// function echo() {
//     console.log(name);
// }
// function foo() {
//     var name = "Bill";
//     function fee(){
//         var name = "Lucy";
//         echo();//静态词法作用域 这里是调用 要找到函数定义里边或者外边的值
//     }
//     fee();
// }
// foo();//Jack


// var scope="g";
// function foo(){
//     var scope="l";
//     return new Function("console.log(scope)");
// }
// foo()();
// var scope="global";
// function checkscope(){
//     var scope="local";
//     return function(){
//         return scope;
//     };
// }
// console.log(checkscope()());//global

// var scope="global";
// function checkscope(){
//     var scope="local";
//     return new Function("return scope");
// }
// console.log(checkscope()());//global

//03


// 立即执行表达式
// var userid=123;
// document.onclick=function(){
//     console.log("userid=",userid);
// };
// (function(){
//     if(true){
//         var userid=234;
//     }
// }());//123

// var userid=123;
// document.onclick=function(){
//     console.log("userid=",userid);
// };
// (function(){
//     if(true){
//         userid=234;
//     }
// }());//234

//05

// console.log("全局上下文-start");//全局上下文-start
// var x = "家中环境-";
// function goToStore_A(){
//     console.log("goToStore_A 上下文-start");//goToStore_A 上下文-start
//     var y = "文具店A环境-";
//     goToBank_C();//设置断点
//     // goToBank_D();//设置断点
//     console.log("goToStore_A 上下文-end");//goToStore_A 上下文-end
// }
// function goToStore_B(){
//     console.log("goToStore_B 上下文-start");//goToStore_B 上下文-start
//     var y = "文具店B环境-";
//     goToBank_C();//设置断点
//     // goToBank_D();//设置断点
//     console.log("goToStore_B 上下文-end");//goToStore_B 上下文-end
// }
// function goToBank_C(){
//     console.log("goToBank_C 上下文-start");//goToBank_C 上下文-start
//     var z = "银行C环境-";
//     //console.log(x+y+z);//遵循静态词法作用域 y  undefined
//     console.log("goToBank_C 上下文-end");//goToBank_C 上下文-end
// }
// function goToBank_D(){
//     console.log("goToBank_D 上下文-start");//设置断点
//     var z = "银行D环境-";
//     //console.log(x+y+z);
//     console.log("goToBank_D 上下文-end");//设置断点
// }
// goToStore_A();//
// // goToStore_B();//设置断点
// console.log("全局上下文-end");//全局上下文-end
