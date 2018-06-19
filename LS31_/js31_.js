// 新增数据类型Symbol 产生独一无二的值

let s=Symbol();
typeof s;//Symbol
var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1);//Symbol(foo)
console.log(s2);//Symbol(bar)
console.log(s1.toString());"Symbol(foo)"
console.log(s2.toString());"Symbol(bar)"

// 唯一性
var s1=Symbol();
var s2=Symbol();
s1===s2;//false
s1==s2;//false

var s1=Symbol('foo');
var s2=Symbol('foo');
s1===s2;//false
s1==s2;//false

//如果Symbol的参数是一个对象，就会调用该对象的toString方法，将其转为字符串
// ，然后再生成一个Symbol值

var obj={
    toString(){return "abc";}   
}
var sy=Symbol(obj);
console.log(sy);//Symbol(abc)
//空对象 找到原型上的toString方法
var obj={
}
var sy=Symbol(obj);
console.log(sy);//Symbol([object Object])

// Symbol值不能与其他类型的值进行运算报错
var sy=Symbol('my symbol');
console.log("this is"+sy);//报错

// Symbol可以显示转为字符串
var sy=Symbol('my symbol');
String(sy);//"Symbol(my symbol)"
sy.toString();//"Symbol(my symbol)"






// Symbol作为对象的属性名 防止被改写或覆盖
//  只能用[]不能用点
var mySymbol=Symbol();
var a={};
a[mySymbol]='hello';

var a={
    [mySymbol]:'hello'
};

var a={};
Object.defineProperty(a,mySymbol,{value:'hello'});

a[mySymbol]//结果都是'hello'


var sy1=Symbol('xx');
var sy2=Symbol('xx');
var st1='xx';
var st2='xx';
var obj={};
obj[sy1]='12';
obj[sy2]='34';
obj[st1]='56';
obj[st2]='78';
obj;//出现三个属性 st1被覆盖 {xx: "78", Symbol(xx): "12", Symbol(xx): "34"}

var mySymbol=Symbol();
var a={};
a.mySymbol='hello';//添加字符串类型的属性 而不是Symbol型 所以下边[]访问要加''
console.log(a[mySymbol]);//undefined
console.log(a['mySymbol']);//"hello"
a;//{mySymbol: "hello"}


// !!!!!!!!!!!!!!!!!!!!!
var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);//123 undefined//独一无二
console.log(obj[myS2],obj["xx"]);//456 456
console.log(obj["myS1"]);//undefined
console.log(obj["myS2"]);//undefined

// demo 13
// 不能遍历出Symbol类型
var obj={};
var a=Symbol('a');
var b=Symbol('b');
obj[a]='hello';
obj[b]='world';
obj['a']=123;
obj.b=567;
for(var k in obj){
    console.log(k,typeof k);
}//a string
 //b string
 //得到Symbol类型
 console.log(Object.getOwnPropertySymbols(obj));//[Symbol(a), Symbol(b)]
//  遍历出Symbol类型
Object.getOwnPropertySymbols(obj).forEach((v)=>{console.log(obj[v])})//hello  world

var obj={};
var foo=Symbol("foo");
Object.defineProperty(obj,foo,{value:"foo bar"});
for(k in obj){
    console.log(k);
}//无输出  fooSymbol类型
Object.getOwnPropertyNames(obj);//[]
Object.getOwnPropertySymbols(obj);//[Symbol(foo)]

// Symbol.for()接受一个字符串作为参数，搜索有没有以该参数作为名称的Symbol值。
// 如果有就返回这个Symbol值，否则就新建并返回一个以该字符串命名的Symbol值，
// Symbol.keyFor()返回一个已登记的Symbol类型值的key,字符串类型
var s1=Symbol.for('foo');
var s2=Symbol.for('foo');
s1===s2;//true   多少个都返回同一个Symbol值
var s1=Symbol('foo');
var s2=Symbol('foo');
s1===s2;//false

console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false 唯一性
console.log(Symbol.for("bar") === Symbol("bar"));// false  唯一性

// Symbol.for()和Symbol区别：前者会被登记在全局环境中供搜索，后者不会 
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined 没有在全局登记

var s3 = Symbol(Symbol.keyFor(s1));//相当于var s3=Symbol("foo")
console.log(s1 === s3);//false
console.log(s2 === s3);//false
var s4 = Symbol.for(Symbol.keyFor(s1));//相当于var s3=Symbol.for("foo")
console.log(s1 === s4);//true
console.log(s2 === s4);//false


// demo 14
// 新增数据结构set  类似数组 但成员数据唯一
var s1=new Set([1,2,3,4,5,6,2,2,]);
console.log(s1);//Set(6) {1, 2, 3, 4, 5, …}

var s2=new Set();
[1,2,3,4,3,2,5,6,7].map(x=>s2.add(x));
for(var i of s2){
    console.log(i);
}//1234567
s2.size;//7

var set=new Set([1,2,3,4,5,8,7,3,7,86,6]);
console.log([...set]);// [1, 2, 3, 4, 5, 8, 7, 86, 6]


// 数组去重
//Array.from方法可以将Set结构转为数组。
//...也可以将set转换成数组
var set=new Set([1,2,3,2,3,4,3,4]);
console.log(set);//Set(4) {1, 2, 3, 4}
console.log([...set]);//(4) [1, 2, 3, 4]
// 或者
console.log(Array.from(set));//(4) [1, 2, 3, 4]

// 区分基本数据类型和引用数据类型
var set=new Set();
set.add({});//引用数据类型
console.log(set.size);//1
set.add({});
console.log(set.size);//2空间 不一样所以又是个不同的成员

var set=new Set();
set.add("a");//基本数据类型
console.log(set.size);//1
set.add("a");
console.log(set.size);//1 成员相同 

// set的原型方法和属性

// add(value)：添加某个值，返回 Set 结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。

s.add(1).add(2).add(2);
// 注意2被加入了两次
s.size // 2
s.has(1); // true
s.has(2); // true
s.has(3); // false
s.delete(2);
s.has(2); // false

//
var properties = new Set();
properties.add('width');
properties.add('height');
console.log(properties.size);//2
if (properties.has('width')&&properties.has('height')) {
    console.log("do something!");
}


var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);


console.log([...(new Set([1, 2, 3, 4, 5]))]);//[1, 2, 3, 4, 5]
//如果不加[]就是散列的元素
console.log(...(new Set([1, 2, 3, 4, 5])));//1, 2, 3, 4, 5


//关于Set的遍历方法
var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());//注意是什么类型，是否可迭代，是否可用for...of遍历
console.log(typeof set.values());
console.log(typeof set.entries());

//keys方法、values方法、entries方法返回的都是遍历器对象
for (var item of set.keys()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.values()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

//练习：使用解构赋值，将数据提取
for (var [key,value] of set.entries()) {
    console.log(key,value);
}

//Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值。
var set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) );
// 2
// 4
// 6

//而且，数组的map和filter方法也可以间接用于Set了，通过...转成数组后调用后再生成set
var set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}
var set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}


// set应用案例 并集、交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}


//关于WeakSet
/*
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
首先，WeakSet 的成员只能是对象，而不能是其他类型的值。

其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
也就是说，如果其他对象都不再引用该对象，
那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。
结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，
都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。
只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。
另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，
运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，
因此 ES6 规定 WeakSet 不可遍历。
*/



















