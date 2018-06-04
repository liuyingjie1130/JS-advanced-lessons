// ！！！！！！！数组的解构赋值

// 数组的解构赋值var let 都支持
var [a,b,c]=[1,2,3];
console.log(a,b,c);//123

let [a,[b,c]]=[1,[2,3]];
console.log(a,b,c);//123

let [, ,xx]=["ss","dd","ee"];
console.log(xx);//ee

let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []

let [a,b,[c],d]=[{x:2},3,[],"ab"];
console.log(a,b,c,d)
// {x: 2} 3 undefined "ab"

//注意：如果解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);//undefined undefined

//不完全解构的情况
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);

// 解构赋值可以用来实现数据交换
var [a,b]=[1,2];
console.log(a,b);
[a,b]=[b,a];
console.log(a,b)



//解构赋值中的默认值
// 等号右边===undefined则取默认值，否则为等号右边的值
var [foo3 = true] = [];//foo3 为 true   []里是空的所以是undefined
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'

var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6 为 null 
//  null==undefined   不是===  所以取等号右边的值而不是默认值！！


//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // 报错
console.log(m1,n1,m2,n2,m3,n3);

let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
var [m4 = n4, n4 = 1] = []; //undefined 1
console.log(m1,n1,m2,n2,m3,n3);

//
let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false 空间不一样


// 取出奇数
let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);// true



// ！！！！！！！对象的解构赋值

// 主要是键的对应！！！
var {foo1,bar1}={foo1:"aaa",bar1:"bbb"};
console.log(foo1,bar1);//aaa bbb

var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };
console.log(foo2,bar2);//ccc ddd

var { bar3 } = { foo3: "ccc", bar3: "ddd" };
console.log(bar3);//ddd

var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"



let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;
console.log(f,l);//hello world//
//  主要记得是前者键的对应！真正被赋值的是后者
let { first, last } = obj1;
console.log(first,last);//hello world
// 其实是下边这样 上边是缩写
let { first:first, last:last } = obj1;
console.log(first,last);//hello world

var { foo6: baz6 } = { foo6: "aaa", bar6: "bbb" };
console.log(baz6);// "aaa"
//foo6 // error: foo is not defined
//上面代码中，真正被赋值的是变量baz6，而不是模式foo6


var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World //若上边改为var { p: [x, { y:z }] } = obj2;则报错
console.log(p);//报错   如果var { p: p } = obj2;或者var { p} = obj2;则不报错


//嵌套赋值的例子，为什么加括号，如果不加括号解析器将解析为代码块，所以加括号
let obj3 = {};
let arr = [];
({ foo7: obj3.prop, bar7: arr[0] } = { foo7: 123, bar7: true });
console.log(obj3);// {prop:123}
console.log(arr);// [true]

//对象的解构也可以指定默认值。
var {x2 = 3} = {};
console.log(x2); // 3

var {x3, y3 = 5} = {x3: 1};
console.log(x3); // 1
console.log(y3); // 5

var {x4:y4 = 3} = {};
console.log(y4); // 3

var {x5:y5 = 3} = {x5: 5};
console.log(y5); // 5
var { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"




// ！！！！！！！字符串的解构赋值
var [a,b,c,d,e]="hello";
console.log(a);//h
console.log(b);//e
console.log(c);//l
console.log(d);//l
console.log(e);//o


// ！！！！！！！数字的解构赋值


//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len); // 5

let {length : len11} = [1,2,4,[23,793],[44],{x:"o"}];
console.log(len11); // 6


//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
// 数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。
let {toString: s1} = 123;
console.log(s1); //
//s1 === Number.prototype.toString // true

let {toString: s2} = true;
console.log(s2); //
//s2 === Boolean.prototype.toString // true


//解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。
// 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
// let { prop: x } = undefined; // 报错
// let { prop: y } = null; // 报错



// ！！！！！！！函数的解构赋值
function add([x, y]){
    return x + y;
}
add([1, 2]); // 3


[[11,22],[33,44]].map(function([a,b]){return a+b});//33 77

/////
//函数参数的解构也可以使用默认值,下例中用了两次的解构赋值
function move1({x = 0, y = 0} = {}) {//x,y有默认值
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

///////
//注意，下面的写法会得到不一样的结果。
function move2({x, y} = { x: 0, y: 0 }) {//参数有默认值
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]
//上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。


//undefined就会触发函数参数的默认值
[1, undefined, 3].map(function(x = 'yes') {return x;});
// [ 1, 'yes', 3 ]

// 解构赋值常见应用
// 1.交换变量的值
var [a,b]=[1,2];
[a,b]=[b,a];
console.log(a,b);//21
// 2.从函数返回多个值
function exa(){
    return [1,2,3];
}
var [a,b,c]=exa();
console.log(a,b,c)//123
function exa2(){
    return{
        foo:1,
        bar:2
    };
}
var {foo,bar}=exa2();
console.log(foo,bar)//1 2

// 3.函数参数的定义：解构赋值可以方便的将一组参数与变量名对应起来
function f([x,y,z]){
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1,2,3])//123

function f({x,y,z}){
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z: 3,y:2, x:1})//123

// 4.提取JSON数据
var jsondata={
    id:34,
    status:"ok",
    data:[33,22]
};
let {id,status,data:number}=jsondata;
console.log(id,status,number);
//34 "ok" (2) [33, 22]

