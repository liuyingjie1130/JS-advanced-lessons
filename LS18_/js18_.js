// 创建数组
// 数组默认值为空empty  不是0也不是null
var arr1=[1,2,3,4,5];
var arr2=new Array(5);
console.log(arr2);//empty*5
var arr3= new Array("5");
console.log(arr3);//["5"]


var arr22=[];
for(var i=0;i<5;i++){
    document.onclick=function(){
        arr22[i]=i
    }
}
console.log(arr22);// 6  [empty*5,5]

//数组直接量中的值不一定要是常量，可以是任意的表达式
var base=22;
var table=[base+1,base+2];
var b=[[1,{y:2}],[2,{x:3}]];
console.log(table,b)

//回顾数据类型思考：
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);//[] []   指向一个对象

var a3 = [1,2,3];
var a4 = a3;
a4 = [];//创建了新的数组
console.log(a3,a4);//[1,2,3][]

// 02

// 删除
// 没有彻底删除
var arr=[1,2,3];
delete arr[2];
console.log(arr,arr.length);//[1,2,empty] 3
//彻底删除
var arr=[1,2,3];
var p=arr.pop();
console.log(p);//3
console.log(arr,arr.length);//[1,2] 2

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);// 4 [empty*2, 3, undefined]

var a=[];
a[-1.23]="sss";//添加 属性
a["100"]=3;//添加元素
a[1.00]="hi";//添加元素
a[2.3]="aaa";//添加 属性
console.log(a);//(101) [empty, "hi", empty × 98, 3, -1.23: "sss", 2.3: "aaa"]

function f(){
    console.log(arguments);
}
f(1,2,3,"x");//Arguments(4) [1, 2, 3, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]


// 03

// 稀疏数组
// 稀疏数组是包含从0开始的不连续索引的数组，length值大于实际定义的元素的个数

var a1 = [,"abc"];
console.log(a1.length);//2
var a2=new Array(3);
console.log(a2.length);//3
var a3=[,,];
console.log(a3.length);//2   最后的逗号后边的元素不算
console.log(["a","b"].length);//2
console.log(["a","b",].length);//2
console.log(["a","b",,].length);//3

// 稀疏数组遍历不到
var a1=[,"abc"];
for(var i in a1){
    console.log(i,a1[i]);//输出几个元素  1  "abc"
}
console.log(0 in a1,1 in a1);// false true

// 04

//矩形数组
var table=new Array(5);
for (var i=0;i<table.length;i++){
    table[i]=new Array(5);
}
for(var row=0;row<table.length;row++){
    for (var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var produt=table[2][4];
console.log(table);
// 交错数组
var table=new Array(5);
for (var i=0;i<table.length;i++){
    table[i]=new Array(i);
}
for(var row=0;row<table.length;row++){
    for (var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var produt=table[2][4];
console.log(table);

//合并写法
var table=new Array(5);
for(var i=0;i<table.length;i++){
    table[i]=new Array(5);//table[i]=new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
console.log(table);

// 05
var bar =["a","b","c"];
Array.from(bar);//["a","b","c"]
Array.from("foo");//["f","o","o"]

Array.of(7);//[7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

console.log(Array.isArray(bar));//true

function f(){
    console.log(Array.isArray(arguments));
}
f(1,2,3,'rr');//false   类数组对象


function f(){
    console.log(arguments instanceof Array);//false
    arguments.pop();//报错
}
f(1,2,3,'rr');//pop是 数组的方法

function f(){
    console.log(arguments );//Arguments(4) [1, 2, 3, "rr", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    Array.prototype.pop.call(arguments);
    console.log(arguments );// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

}
f(1,2,3,'rr');
  
//数组添加删除元素的原型方法  破坏性
var arr2=[1,2,3,5];
var shiftarr=arr2.shift();//返回去除的元素  去除第一个元素
console.log(shiftarr,arr2);//1 (3) [2, 3, 5]

var newlength=arr2.unshift(1,2);//在前边添加元素  返回新的长度
console.log(newlength,arr2);//5 (5) [1, 2, 2, 3, 5]

var poparr=arr2.pop();//在末尾删除返回删除的元素
var newlength=arr2.push();//在末尾添加返回长度

//用push将两个数组组合成一个数组
var arr3=["a","b"];
var arr4=["c","d"];
Array.prototype.push.call(arr3,arr4);
console.log(arr3);//(3) ["a", "b", Array(2)]
console.log(arr4);//["c","d"]

//splice 从start开始，移除deleteCount个元素，并插入给定的元素
// - Array.prototype.splice(start,deleteCount?,elem1?,elem2?)

var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);//(2) ["b", "c"]  (3) ["a", "x", "d"]
//思考start若是负数则返回什么？从后边数
// ：arr5.splice(-2,2,"x");
//(2) ["c", "d"] (3) ["a", "b", "x"]


// 06
//part11排序和颠倒元素顺序  破坏性
var arr1=[1,2,3];
arr1.reverse();
console.log(arr1);//(3) [3, 2, 1]

//按着首字母排序
var arr2=["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);//  (4) ["apple", "banana", "orange", "pear"]
//按着数字的最高位排序
var arr3=[-1,-20-7-50];
arr3.sort();
console.log(arr3);//(4) [-1, -20, 50, 7]

// sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});
//对于数字类型，大于0则交换，冒泡排序  (5) [-20, -1, 7, 50, 52]
arr3.sort(function (a,b) {return a>b;});
//对于布尔类型，true则交换，冒泡排序   (5) [-20, -1, 7, 50, 52]

//如果想让arr2按第二个字母排序
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);//(4) ["banana", "pear", "apple", "orange"]


//part22合并 切分 和连接 非破坏性
//合并
var arr4=["banana","apple"];
var arr5=["pear","orange"];
var newarr=arr4.concat(arr5);
console.log(newarr,arr4,arr5)//(4) ["banana", "apple", "pear", "orange"] (2) ["banana", "apple"] (2) ["pear", "orange"]
// 切分
var arr6=[1,2,3,4,5];
var newarr=arr6.slice(2,4);
console.log(newarr,arr6);//(2) [3, 4]   (5) [1, 2, 3, 4, 5]
var newarr2=arr6.slice(2);
console.log(newarr2,arr6);//(2) [3, 4,5]   (5) [1, 2, 3, 4, 5]
// 转化字符串
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");//返回了个什么类型？
console.log(joinReturn,arr7,typeof joinReturn);
//3--4--5  (3) [3, 4, 5]  string
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));//3******5

//Part333333333 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3
console.log(arr8.indexOf(5,5));//6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
// startIndex从此位置开始逆向查找
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3


//总结
//破坏性
Array.prototype.shift();
Array.prototype.unshift();
Array.prototype.push();
Array.prototype.splice();
Array.prototype.reserse();
Array.prototype.sort();
Array.prototype.sort(function(){});
// 非破坏性
Array.prototype.concat();
Array.prototype.slice();
Array.prototype.join();
Array.prototype.indexOf();
Array.prototype.lastIndexOf();

// 07

//Part11数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this
// Array.prototype.forEach(callback函数,thisValue?可选) //注意并不返回新的数组
// 每个元素都执行一遍函数
var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
console.log(arr1);
//2 "不大于3"
//  5 "大于3"
//  8 "大于3"
//  (3) [2, 5, 8]
//

//测试每个元素是否都符合函数要求
var arr2=[2,5,8];
var returnvalue=arr2.every(function(a){
    //判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);//2,5
    return a%2===0;
})
console.log(returnvalue);//false

//测试元素中存在符合函数要求的
// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);//2
    return a%2===0;
});
console.log(returnValue);//true


//Part22 数组原型方法（迭代-非破坏性-转换方法）
// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);//(5) [1, 9, 25, 49, 81]   (5) [1, 3, 5, 7, 9]

// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);//[3,5,7]   [1,3,5,7,9];


//Part3333333 数组原型方法（迭代-非破坏性-归约方法）
// Array.prototype.reduce(element,initialValue?) //从左向右迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));//14

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));

//综合实例
//i是当前元素的下标
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));

// prev a ,cur: b ,i: 1
// VM455:2 prev ab ,cur: c ,i: 2
// VM455:2 prev abc ,cur: d ,i: 3
// VM455:6 abcd
// VM455:2 prev x ,cur: a ,i: 0
// VM455:2 prev xa ,cur: b ,i: 1
// VM455:2 prev xab ,cur: c ,i: 2
// VM455:2 prev xabc ,cur: d ,i: 3
// VM455:7 xabcd
// VM455:2 prev d ,cur: c ,i: 2
// VM455:2 prev dc ,cur: b ,i: 1
// VM455:2 prev dcb ,cur: a ,i: 0
// VM455:8 dcba
// VM455:2 prev x ,cur: d ,i: 3
// VM455:2 prev xd ,cur: c ,i: 2
// VM455:2 prev xdc ,cur: b ,i: 1
// VM455:2 prev xdcb ,cur: a ,i: 0
// VM455:9 xdcba

//思考案例：
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);//(6) [0, 1, 2, 3, 4, 5]


//思考案例：计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
console.log(countedNames) ;  // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//总结  非破坏性
Array.prototype.forEach();
Array.prototype.every();
Array.prototype.some();
Array.prototype.map();
Array.prototype.ruduce();



var arr1=[2,5,8];
arr1.forEach(function(a){
    console.log(a,this);//this指的是window
})
console.log(arr1);

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){
    console.log(a,i,this);
},arr2)//this  指的就是arr2
console.log(arr1);

var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
  arr3[i]=a>arr2[i]?a:arr2[i];
},arr2)
console.log(arr3);
//  (3) [2, 6, 8]