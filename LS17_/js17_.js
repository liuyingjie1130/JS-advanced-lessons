// 07
var superobj={
    x:1,
    y:2
};
var sub_first=Object.create(superobj);
var sub_second=Object.create(superobj);
console.log(sub_second.x);//1
sub_first.__proto__.x=5;//原型上修改
console.log(sub_second.x);//5
console.log(superobj.__proto__ === Object.prototype);//true
console.log(sub_first.__proto__ === superobj);//true

function Person(name){
    this.name=name;
    this.show=function(){console.log(this.name)}
}
var obj=new Person("hh");
console.log(obj.__proto__===Person.prototype);//true
console.log(Person.__proto__===Function.prototype);//true
console.log(Person.__proto__.__proto__===Object.prototype);//true


// 08
function  Person(name){
    this.name=name;
}
Person.prototype.age=22;
Person.prototype.shoeName=function(){
    console.log(this.name);
}
function Student(id){
    this.id=id;
}
Student.prototype=new Person ("Mike");
var s1=new Student(2017001);
var s2=new Student(2017002);

console.log(s1.name,s1.age,s1.id);//Mike,22,2017001
console.log(s2.name,s2.age,s2.id);//Mike,22,2017002
s1.__proto__.name = "Jack";
console.log(s2.name);//Jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);//99
console.log(s1.__proto__);//Student.prototype

// 09
// js实现继承的形成一
function Person(name,age){
    this.name=name;
    this.age=age;
};
Person.prototype.shoeName=function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id=id;
};
Student.prototype.__proto__=Person.prototype;
var s1=new Student("xxx",22,2017001);
var s2=new Student("vvv",23,2017002);
//name 属性 添加到实例化对象上了


//js实现继承的形成二

function Person(name,age){
    this.name=name;
    this.age=age;
};
Person.prototype.shoeName=function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id=id;
};
Student.prototype=Object.create(Person.prototype);
// console.log(Person.prototype.constructor); //找到实例化的构造函数  Person
// console.log(Student.prototype.constructor);//Person
Student.prototype.constructor=Student;
var s1=new Student("xxx",22,2017001);
var s2=new Student("vvv",23,2017002);


// 10
var BaseClass=function(){};
BaseClass.prototype.f2=function(){
    console.log("This is a prototype method");
};
BaseClass.f1=function(){//定义静态方法
    console.log("This is a static method")
};
BaseClass.f1();//This is a static method
var instance1=new BaseClass();
instance1.f2();//This is a prototype method


var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();//1 This is a method in Base.prototype

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();//访问的哪一个method1？自身中的 2 This is a method in instance1


var BaseClass = function() {
    this.method1 = function(){
        console.log('1 Defined by the "this" in the instance method');
    }
};
var instance1 = new BaseClass();
instance1.method1 = function(){
    console.log('2 Defined directly in the instance method');
};
BaseClass.prototype.method1 = function(){
    console.log('3 Defined by the prototype instance method ');
};
instance1.method1();//2 Defined directly in the instance method



 Function.__proto__===Function.prototype;//true
 Function.__proto__.__proto__===Object.prototype;//true


//  11

//1确定对象的构造函数名
function Foo(){}
var f=new Foo();
console.log(f.constructor.name);//Foo

//2创建相似对象
function Constr(name){
    this.name=name;
}
var x=new Constr("Jack");
var y=new x.constructor("Mike");
console.log(y);
console.log(y.constructor.name);//Constr

//3constructor 可用于指定构造函数
function Person(area){
    this.type="person";
    this.area=area;
}
Person.prototype.say=function(){
    console.log(this.area);
}
var Father=function(age){
    this.age=age;
}
Father.prototype=new Person("beijin");
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);


//共有属性 私有属性 特权方法
function A(id){
    this.publicid=id;
    var privateid=456;
    this.getid=function(){console.log(this.publicid,privateid)}
}
var a=new A(123);
console.log(a.publicid);//123
console.log(a.privateid);//undefined
a.getid();//123 456  通过函数访问私有属性

function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
// Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
// 	getName:function(){}
// }
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//true 
console.log(p.__proto__ === p.constructor.prototype);//true 
console.log(Object.prototype === p.constructor.prototype);// false
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//false    ===Object.prototype

function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
	getName:function(){}
}
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//true 
console.log(p.__proto__ === p.constructor.prototype);//false
console.log(p.constructor.prototype);//Object.prototype
console.log(Object.prototype === p.constructor.prototype);// true
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//true


function A(){
    this.a = 10;
    this.af = function(){console.log(this.a);}
}
var a = new A();

function B(){
    A.call(this);
    this.b = 20;
    this.bf = function(){console.log(this.a);}
}
B.prototype.__proto__ = A.prototype;
var b = new B();
a.af();//10
b.bf();//10
b.af();//10







