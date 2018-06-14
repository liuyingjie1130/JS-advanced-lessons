
// ES6 对String的扩展

// ES6为字符串添加了遍历器接口，似的字符串可以被for···of 循环遍历
for (let codePoint of 'foo'){
    console.log(codePoint)
}
//f
//o
//o

for (let key in 'foo'){
    console.log(key);
}
//0 
//1
//2

// 提供新的方法用于查找，判断呵生成字符串

var a='hello world!';
a.startsWith('hello');//true
a.endsWith('!');//true
a.includes('o');//true
// 第二个参数表示开始搜索的位置
var a='hello world!';
a.startsWith('world',6);//true
a.endsWith('hello',5);//true
a.includes('hello',6);//false

var reg1=/^hello/gi;
var reg2=/\hello/gi;
"hello world".replace(reg1,"*");

// repeat方法返回一个新字符串，表示将原字符串重复n次

'x'.repeat(3);//"xxx"
'na'.repeat(0);//""
'na'.repeat(2.7);//"nana"  取整
'hh'.repeat(Infinity)//报错
'hh'.repeat(-1)//报错


// ES6 对RegExp的扩展
// ES5中
var reg=new RegExp('abc','i');
var reg=new RegExp(/abc/i);
// 都等价于
var reg=/abc/i;
// ES5中不可以,ES6可以！！！
var reg=new RegExp(/abc/,'i')

// 返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。

var reg=new RegExp(/abc/gi,"i")
reg.flags;//i   flags检验有什么修饰符


// 粘连修饰符sticky
var a='aaa_aa_a';
var r1=/a+/g;
var r2=/a+/y;
r1.exec(a);//"aaa"
r2.exec(a);//"aaa"
r1.exec(a);//"aa"  从上一次匹配截止开始
r2.exec(a);//null  也是从上一次匹配截止开始但是后边的第一个字符必须是匹配的第一个时才可以匹配到！

var r=/hello\d/y;
r.sticky;//true   检测到有y这个修饰符

// ES5的source属性  返回正则表达式的正文
/abc/gi.source;//"abc"

// 03

// ES6 对Number和Math的扩展

// ES6在Number对象上新提供了Number.isFinite()和Number.isNaN()

// Number.isFinite()用来检测一个数值是否为有限的
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

//Number.isNaN()//用来检查一个值是否为NaN。
Number.isNaN(NaN); // true
Number.isNaN(15); // false
Number.isNaN('15'); // false
Number.isNaN(true); // false
Number.isNaN(9/NaN); // true
Number.isNaN('true'/0); // true
Number.isNaN('true'/'true') // true

//它们与传统的全局方法isFinite()和isNaN()的区别在于，
// 传统方法先调用Number()将非数值的值转为数值，再进行判断，
// 而这两个新方法只对数值有效，非数值一律返回false。
isFinite(25); // true
isFinite("25"); // true
Number.isFinite(25); // true
Number.isFinite("25"); // false
isNaN(NaN); // true
isNaN("NaN"); // true
Number.isNaN(NaN); // true
Number.isNaN("NaN"); // false

// Number.parseInt( )、Number.parseFloat( ) 
//Number.isInteger()
//Number.isInteger()用来判断一个值是否为整数。
// 在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。
Number.isInteger(25); // true
Number.isInteger(25.0); // true
Number.isInteger(25.1); // false
Number.isInteger("15"); // false
Number.isInteger(true); // false


//Math.trunc方法用于去除一个数的小数部分，返回整数部分。
Math.trunc(4.1); // 4
Math.trunc(4.9); // 4
Math.trunc(-4.1); // -4
Math.trunc(-4.9); // -4
Math.trunc(-0.1234); // -0

// 取整的方法
Math.ceil(2.33);//3 向上取整
Math.floor(2.33);//2 向下取整
Math.round(2.33);//2 四舍五入


//Math.sign方法用来判断一个数到底是正数、负数、还是零
Math.sign(-5); // -1
Math.sign(5); // +1
Math.sign(0); // +0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign('foo'); // NaN
Math.sign(); // NaN


// ES6 对Array和Object的扩展
// 04

// ES6中Array新增的静态方法 Array.from()  Array.of()


// 对象转换成数组
function foo(){
    console.log(arguments instanceof Array);//false
    console.log(arguments.constructor);//object
}
foo(1,2,3,"4","5");


// ES5写法
function foo(){
    var arr=Array.prototype.slice.call(arguments);
    console.log(arr);
}
foo(1,2,3,"4","5");//[1,2,3,"4","5"]
// Array.from()将对象 转化成数组
// ES6写法
function foo(){
    var arr=Array.from(arguments);
    console.log(arr);
}
foo(1,2,3,"4","5");//[1,2,3,"4","5"]

var abc={a:1,"0":2,length:3}
var arr=Array.from(abc);
console.log(arr);// [2, undefined, undefined]


// 扩展运算符（···）也可以将默写数据结构转为数组
function foo(){
    var args=[...arguments];
    console.log(args);
}
foo(1,2,3,"3","5");//[1,2,3,"3","5"]

console.log(Array.from('hello'));//["h", "e", "l", "l", "o"]
console.log(Array.from({length:3}));// [ undefined, undefined, undefined ]

Array.from([1,2,3],function(x){return x*x;});//[1, 4, 9]
Array.from([1,2,3]).map(function(x){return x*x});//[1, 4, 9]

// Array.of()将一组数值转化数组  与Array()的比较！！

Array.of(2,4,53,55);//[2,4,53,55]
Array(2,4,53,55);//[2,4,53,55]
Array.of(4);//[4]
Array(4);//[, , , ,]
Array.of();//[]
Array();//[]
Array.of(undefined);//[undefined]
Array(undefined);//[undefined]


// ES6中Array新增的原型方法

//copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
//然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
//Array.prototype.copyWithin(target, start = 0, end = this.length)
//它接受三个参数
//target（必需）：从该位置开始替换数据。
//start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
//end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数

[1,2,3,4,5].copyWithin(0,3);//[4,5,3,4,5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);// [4, 2, 3, 4, 5]  把1改成了4
[1, 2, 3, 4, 5].copyWithin(0, -2, -1);// [4, 2, 3, 4, 5]

//数组实例的find方法，用于找出第一个符合条件的数组成员。
//它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
//如果没有符合条件的成员，则返回undefined。
[1, 4, -5, 10].find(
    function(n){
        return n<0;
    }
);//-5

[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}); // 10

//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，
// 如果所有成员都不符合条件，则返回-1。
[1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
}) // 2

//fill方法使用给定值，填充一个数组。
['a','b','c'].fill(7);
// [7, 7, 7]

//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['x', 'y', 'z'].fill(7, 1, 2);
// ['x', 7, 'z']
//上面代码表示，fill方法从1号位开始，向原数组填充7，到2号位之前结束

// ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。
// 它们都返回一个遍历器对象，可以用for...of循环进行遍历。
// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
for (let codePoint of 'foo'){
    console.log(codePoint)
}
//f
//o
//o

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'


for (let [index, elem] of ['a', 'b'].entries()) { //[index,elem] 解构赋值
    console.log(index, elem);
}
// 0 "a"
// 1 "b"


// ES6对对象的扩展

// ES6中
// ES6允许直接写入变量和函数，作为对象的属性和方法
var foo='bar';
var baz={foo};
baz;//{foo:'bar}
// 等同于
var foo='bar';
var baz={foo:foo};
baz;//{foo:'bar}

// 返回对象的简洁表示
function f(x,y){
    return {x,y};
}
f(1,2);//{x: 1, y: 2}
// 等同于
function f(x,y){
    return {x:x,y:y};
}
f(1,2);//{x: 1, y: 2}

// 除了属性简写，方法也可以简写

var o={
    f(){
    return "hh";
}}

var o={
    f:function(){
    return "hh";
}}


var name="Jack";
var person={
    name:name,
    showInfo:function(){
        console.log(this.name);
    }
}


var name="Jack";
var person={
    name,
    showInfo(){
        console.log(this.name);
    }
}

// ES6允许字面量定义对象时，用表达式作为对象的属性名，既把表达式放在方括号内
var pk='foo';
var obj={
    [pk]:true,
    ['a'+'bc']:123
}

var lastword='last word';
var a={
    'first word':'hello',
    [lastword]:'world'
};
a['first word'];//hello
a[lastword];//word
a['last word'];//word   

// 表达式还可以用于定义方法名

var obj={
    ['h'+'ello'](){
        return 'hello'
    }
}

var foo='bar';
var baz={foo};
bax;//{foo: "bar"}
var baz={[foo]:'abc'}//{bar: "abc"}



//Object.is它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
console.log(Object.is(1,"1"));//false
console.log(Object.is(1,1));//true
//和===的区别之处如下
console.log(+0 === -0); //true
console.log(NaN === NaN); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

var tar={a:1};
var sour1={b:2};
var sour2={c:3};
Object.assign(tar,sour1,sour2);
console.log(tar);//{a: 1, b: 2, c: 3}
// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

var tar={a:1,b:1};
var sour1={b:2,c:2};
var sour2={c:3};
Object.assign(tar,sour1,sour2);
console.log(tar);//{a: 1, b: 2, c: 3}

//Object.assign方法实行的是浅拷贝，而不是深拷贝。!!!
//也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。

var obj1={a:{b:1}};
var obj2=Object.assign({},obj1);
obj1.a.b=2;
obj2.a.b;//2


//Object.getPrototypeOf()得到原型
var obj = Object.create({x:1,y:2});
console.log(Object.getPrototypeOf(obj));//{x:1,y:2}
// Object.setPrototypeOf()方法设置原型
Object.setPrototypeOf(obj,{z:3});
console.log(Object.getPrototypeOf(obj));//{z:3}

//回顾ES5 中的Object.keys静态方法


var obj=Object.create({x:1,y:2});
obj.a=3;
obj.b=4;
console.log(Object.keys(obj));//["a", "b"]
console.log(Object.values(obj));// [3, 4]
console.log(Object.entries(obj));//[Array(2), Array(2)](["a", 3],["b", 4]) 
// 都是自身方法


var obj1={a:1,b:2};
var obj2={c:3,d:4};
Object.setPrototypeOf(obj2,obj1);
console.log(Object.keys(obj2));//只得到自身的两个key

var obj1={a:1,b:2};
var obj2=new Object();
obj2.c=3;obj2.d=4;
Object.setPrototypeOf(obj2,obj1);
console.log(Object.keys(obj2));


//values 和 entries 方法
var obj = { foo: "bar", baz: 42 };
Object.values(obj);// ["bar", 42]

var obj = { foo: 'bar', baz: 42 };
Object.entries(obj);// [ ["foo", "bar"], ["baz", 42] ]
for(var [k,v] of Object.entries(obj)){ //解构赋值
    console.log(k,v);
}

















