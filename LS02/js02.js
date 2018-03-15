//js06
// var a1=20;
// var a2=23.4;
// console.log(parseInt(a2));//23
// console.log(parseFloat("23.456xy"));//23.456
// console.log(parseInt===window.parseInt);//true
// a3=5e2;//指数形式
// console.log(a3);//500
// console.log(3e3);//3000
// console.log(typeof Math);//object
// //NaN
// var x=Number("xiii021");
// console.log(x);//NaN
// console.log(isNaN(x));//true
// console.log(typeof(NaN));//number
// console.log(typeof(x));//number
// console.log(Math.log(-1));//NaN
// console.log(Math.acos(2));//NaN
// console.log(NaN===NaN);//false




//js07
// var str="abc_def_ghi_jkl_mn";
// console.log("abc\ndefghi\\\n'mn\'");
// console.log(str.substr(4,7));//def_ghi;
// console.log(str.substring(4,7));//def
// console.log(str.slice(2));//c_def_ghi_jkl_mn
// console.log(str.slice(2,5));//c_d;
// console.log(str.slice(-2));//mn
// console.log(str.slice(2,-2));//c_def_ghi_jkl_


//js08
// var a;
// console.log(a);//undefined

// function foo(x,y){
//     console.log(x,y);
// }
// foo(1);// 1 undefined
// console.log(foo(1));//undefined

// function fee(){

// }
// console.log(fee());//undefined

// console.log(typeof(null));//object


//js09
// var obj = {x:1,y:2};//obj的原型是Object.prototype,并且obj继承的属性和方法都源于这个原型
// console.log(obj.__proto__ === Object.prototype);//true
// console.log(Object.prototype);//Object

// var arr = [1,2,3,4,5];//arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
// console.log(arr.__proto__ === Array.prototype);//true
// console.log(Array.prototype);//Array
// console.log(arr.__proto__.__proto__ === Object.prototype);//true


// function foo() { //foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
//     console.log("foo function!");
// };
// console.log(foo.__proto__ === Function.prototype);//true
// console.log(foo.__proto__.__proto__ === Object.prototype);//true
// console.log(obj instanceof Object);//true
// console.log(arr instanceof Object);//true
// console.log(foo instanceof Object);//true
// console.log(foo === window.foo);//true
// console.log(typeof foo);//function

// var obj={x:1,y:2};
// for(var k in obj){
//     console.log(k,obj[k]);//x 1 y 2
// }
// console.log(Object.keys(obj));//["x","y"]
// console.log("x" in obj);//true
// function foo(){
//     console.log("foo function!");
// }
// for(var k in foo){
//     console.log(k,foo[k]);
// }
// console.log("call" in foo);//true
// console.log("apply" in foo);//true
// console.log("arguments"in foo);//true



//js10
// var a=123;
// var b=new Number(a);
// console.log(a==b);//true
// console.log(a===b);//false

// var str="abcde";
// console.log(str.length);//5
// str.length=1;
// console.log(str.length,str);//5,abcde    基本数据类型

// var arr=[1,2,3,4];
// console.log(arr.length);//4
// arr.length=1;
// console.log(arr.length,arr);//1,[1]      对象数据类型



//js11
// console.log(Boolean(undefined));//false
// console.log(Boolean(null));//false
// console.log(Boolean(0));//false
// console.log(Boolean(NaN));//false
// console.log(Boolean(1));//true
// console.log(Boolean(""));//false
// console.log(Boolean("abc"));//true
// console.log(Boolean({}));//true
// if(new Boolean(false)){
//     console.log("执行");
// }//执行

// console.log(Number(undefined));//NaN
// console.log(Number(null));//0
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Number(""));//0
// console.log(Number("abc"));//NaN
// console.log(Number("123.345xx"));//NaN
// console.log(Number("32343,455xx"));//NaN
// console.log(Number({x:1,y:3}));//NaN
// console.log(parseFloat("123.345xx"));//123.345
// console.log(parseFloat("32343,345xx"));//32343
// console.log(parseInt("123.345xx"));//123
// console.log(parseInt("32343,345xx"));//32343

// console.log(String(undefined));//undefined
// console.log(String(null));//null
// console.log(String(true));//true
// console.log(String(false));//false
// console.log(String(0));//0
// console.log(String(234));//234
// console.log(String({x:1,y:2}));//[object Object]


//js12

// var a=3;
// var b=4;
// console.log(typeof(a>b),a>b);//boolean,false

// var c="img"+3+".jpg";
// var d="23"-5;
// console.log(c,d);//img3.jpg,18

// var e=!23;//false
// var f=!!34;//true
// var g=!!"" ;//false
// var h=!!0 ;//false
// var i=!!"abc" ;//true
// var j=!!undefined;//false
// var t=!!null;//false
// var p=!!{};//true
// console.log(e,f,g,h,i,j,t,p);

// var h={x:1};
// if(h){
//     console.log("h:",h);
// }//h:{x:1}
// var h="";
// if(h){
//     console.log("h:",h);
// }//不输出


//js13

// console.log(NaN === NaN);//false
// console.log(isNaN("12,3"));//true
// console.log(Math.round(-3.5));//-3
// console.log(Math.round(3.5));//4


//js14

// console.log("A">"a");

// var a="abc";
// var b="def";
// var c=a+b;
// console.log(c);

var m="abdcdef";
console.log(m.slice(-2));//ef
console.log(m.split("c",1));//[abd]
console.log(m.split("c",2));//["abd","def"]
console.log(m.charAt(2));//d
console.log(m.charCodeAt(3));//99
console.log(m.indexOf("d",1))//2
console.log(m.indexOf("d",3));//4
