//js01
// console.log(typeof 123);                       //number
// console.log(typeof true);                      //boolean
// console.log(typeof "abc");                     //string
// console.log(typeof null);                      //null
// console.log(typeof undefined);                 //undefined
// console.log(typeof {name:"mile",age:20});      //object
// console.log(typeof function foo(){});          //function


// console.log(typeof Array);      //function
// console.log(typeof Function);   //function
// console.log(typeof Date);       //function
// console.log(typeof Number);     //function
// console.log(typeof Math);       //object
// console.log(typeof JSON);       //object


// var a={name:"mike",age:20};
// console.log(a instanceof Object);         //true
// var Person=function(){};
// var person1=new Person;
// console.log(person1 instanceof Person);   //true


//js02
// function foo(){
// 	var n=10;                        //栈区
// 	var m=true;                      //栈区
// 	var str="hello world";           //栈区
// 	var obj={value:"hello world"};   //obj的引用在栈区，{}在堆区
// };
// foo();
// var a=23;//栈区
// var a=34;//栈区



//js03

// var str_a="a";
// var str_b=str_a;
// str_b="b";
// console.log(str_a,str_b);   //a,b

// var obj_a={v:"a"};
// var obj_b=obj_a;
// obj_b.v="b";
// console.log(obj_a,obj_b);   //b,b
// obj_b={v:"c"};
// console.log(obj_a,obj_b);   //b,c

// var obj_c={x1:2,y1:3};               //obj_c.x1在  堆区
// var obj_d={x1:2,y1:3};
// console.log(obj_c.x1===obj_d.x2);   //false
// console.log(obj_c==obj_d);          //false
// console.log(obj_c===obj_d);         //false



//js04

// var a1=100;
// var b1=100;
// console.log(a1 == b1);     //true
// console.log(a1 === b1);    //true

// var a2 = new Number(200);
// var b2 = new Number(200);
// console.log(a2 == b2);     //false
// console.log(a2 === b2);    //false

// var a3 = new Number(200);
// var b3 = a3;
// console.log(a3 == b3);    //true
// console.log(a3 === b3);   //true
// b3 = new Number(200);
// console.log(a3 === b3);   //false

// var a4 = new Number(200);
// var b4 = 200;
// console.log(a4 == b4);//true
// console.log(a4 === b4);//false

// var a5 = {x:1,y:2};
// var b5 = {x:1,y:2};
// console.log(a5 === b5);//false
// console.log(a5.x === a5.x);// true对象属性如果是基本类型内存分配在堆区，比较时是值比较



//js05
//值传递
var str_a="hello world";
function fn_a(arg){
	console.log(arg);           //hello world
	arg="hai";
	console.log(str_a,arg);     //hello world,hai
};
fn_a(str_a);
console.log(str_a);             //hello world
//引用传递
var obj_a={v:1};
function fn_a(arg){
	arg.v=3;
};
fn_a(obj_a);
console.log(obj_a);        //{v:3}
function fn_b(arg){
	arg={v:2};
};
fn_b(obj_a);
console.log(obj_a);        //{v:3}
