// 01
// 创建对象
var obj1={
    name:"帅杰",
    age:18,
    stu:function(){console.log(this.age+'岁的'+this.name+'真帅！')}
}

var obj2=Object.create(obj1);

function Obj(name){this.name=name}
var obj3=new Obj("帅杰");

obj3 instanceof Obj;//true

var b={};
b.__proto__===Object.prototype;//true
b.__proto__.__proto__===null;

// 02
var obj={
    num:10,str:"hi",show:function(){return this.str}
}

console.log(obj.__proto__);// Object.prototype
console.log(obj.__proto__ === Object.prototype);//true

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);//思考：多个对象同一个原型的情况//原型共享
newObj.age = 23;

console.log(newObj.__proto__ === obj);//true
console.log(newObj2.__proto__ === obj);//true

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null

// 03
var proObj={z:3}
var obj=Object.create(proObj)
obj.x=1;
obj.y=2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

obj.z=5;
console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3

obj.z = 8;
console.log(obj.z);//8

delete obj.z;//true
console.log(obj.z);//3

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了

//注意：hasOwnProperty是原型方法
//调用的主体为obj,先在自身上找该方法，找不到的话去原型链上去找
//区别与Object.keys(obj)这种静态方法

// 04
// 构造函数的原型链
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayhi=function(){
    console.log(this.name,this.age);
}
var p=new Person("Mile",23);
p.sayhi();
p.__proto__===Person.prototype;//true
Person.__proto__===Function.prototype;//true
Person.__proto__.__proto__===Object.prototype;//true
Person.__proto__.__proto__.__proto__===null;//true

// 06

function MyObj() { }//构造函数
MyObj.prototype.z = 3;//原型

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true  自身找不到 找到原型
console.log(obj.hasOwnProperty("z"));//false

///////////Part2 原型链属性操作////////////
obj.z = 5;

obj.hasOwnProperty("z");//true
console.log(obj.z);//5
console.log(MyObj.prototype.z);//3

obj.z = 8;
console.log(obj.z);//8

delete obj.z;//true  删除了自身的
console.log(obj.z);//3 找到原型的

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete MyObj.prototype.z;
console.log(obj.z);//此时彻底没有z了