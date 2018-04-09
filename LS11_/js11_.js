// 06
// 立即执行表达
// function min(a,b){
//     return a<b?a:b;
// }
// min(1,3);

// (function min(a,b){
//     return a<b?a:b;
// }(1,3));
// (function min(a,b){
//     return a<b?a:b;
// })(1,3);
// true &&function(a,b){
//     return a>b?a:b;
// }(5,9);//9
// 0 &&function(a,b){
//     return a>b?a:b;
// }(5,9);//0
// !function(x,y){
//     return x==y?true:false; 
// }("5",5);//false

// 07污染问题

// 全文污染  不同的js文件
// (function(){
//     var x=1;
//     document.onlick=function(){
//         alert(x);
//     }
// })();

// 08
// function f(){
//     var getNumFuncs=[];
//     for(var i=0;i<10;i++){
//             getNumFuncs[i]=function(){return i;};
//     }
//     return getNumFuncs;
// }
// var tmp=f();
// console.log(tmp[3]());//10

// function f(){
//     var getNumFuncs=[];
//     for(var i=0;i<10;i++){
//         (function(j){
//             getNumFuncs[j]=function(){return j;};
//         })(i);//10次立即执行表达式
//     }
//     return getNumFuncs;
// }
// var tmp=f();
// console.log(tmp[3]());//3

// function f(){
//     var getnumfuncs=[];
//     for(var i=0;i<10;i++){
//         (function(j){
//             getnumfuncs[j]=function(){return j;};
//         })(i);
       
//     }
//     return getnumfuncs;
// }
// var tmp=f();
// console.log(tmp[3]());//3

// function f(){
//     var getNumFuncs = [];//函数数组
//     var j;
//     for(var i=0;i<10;i++){
//         j = i;
//         getNumFuncs[i] = function(){
//             return j;//如果return i输出10
//         };
//     }
//     return getNumFuncs;
// }
// var tmp = f();
// tmp[3]();//9

// 10变量共享
// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(new Date,i);
//     },1000);
// }
// console.log(i);
// 利用立即执行表达式解决共享问题
// for(var i=0;i<5;i++){
//    ( function(j){setTimeout(function(){
//         console.log(new Date,j);
//     },1000);}(i))
    
// }
// console.log(i);





