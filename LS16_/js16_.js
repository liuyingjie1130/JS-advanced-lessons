var a=1;
function f1(){
    var b=2;
    function f2(){
        console.log(a,b)
    }
    f2();
}
f1();

// 01
// 全局上的this
function t1(){
    console.log(this===window);
}
t1();


// 增加修改删除变量

var a=10,b='hi';
function t2(){
    this.a=888;
    delete this.b;
    this.c='新添加的全局变量';
}
t2();
console.log(a,c);

// 02

function test(){
    "use strict"
    console.log(this);
}
test();//undedined  严格模式下

// 检测严格模式
function isstrict(){
    "use strict"
    return this==undefined?true:false;
}
isstrict();//true


// 03
// 对象方法中的this
var point={
    x:0,
    y:0,
    moveto:function(x,y){
        this.x=x;
        this.y=y;
    }
};
    point.moveto(1,1);//this绑定到point上
    console.log(point);//1，1



//  构造函数   
function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);//2，3
console.log(window.x,window.y);//undefined  undefined

//思考：直接调用Point方法会是什么样的情况
Point(5,6);//在全局上
console.log(window.x,window.y);//5,6


function Person(name){
    this.name=name;
    this.showme=function (){
        console.log(this.name);
    }
}
var p1=new Person("帅杰");
p1.showme();//帅杰   正常写法   以下均是变形


function Person(name){
    this.name=name;
    showme=function (){
        console.log(this.name);
    }
}
var p1=new Person("帅杰");
p1.showme();//Uncaught TypeError: p1.showme is not a function
showme();//帅杰   定义在全局上

function Person(name){
    this.name=name;
    this.showme=function (){
        console.log(name);//闭包
    }
}
var p1=new Person("帅杰");
p1.showme();//帅杰       闭包，  函数没有被释放掉   


// 05

objA={name:"aa",x:1};
objB={name:"bb",x:2};
function test(){
    console.log(this.name,this.x);
}
objA.fun=test;
objA.fun();//aa 1
objA.fun.call(objB);//bb 2
test.call(objB);//bb 2

var bird={
    name:"polly",
    fly:function(m,n){
        console.log("i'm"+this.name+"i can fly",m,n);
    }
};
var me={
    name:"sj"
};
bird.fly(5,6);
bird.fly.apply(me,[7,8]);


// call,apply是绑定在Function.prototype上的方法
function f1(){};
f1.hasOwnProperty("call");//false
f1.__proto__.hasOwnProperty("call");//true


// 06
// 嵌套  this绑定到window
var point={
    x:0,
    y:0,
    moveto:function(x,y){
        function movetox(){this.x=x};//this绑定到了window
        function movetoy(){this.y=y};
        movetox();
        movetoy();
    }
 
};
point.moveto(2,3);
console.log(point);//0,0
console.log(window.x,window.y)//2,3

// 解决方法1软绑定
var point={
    x:0,
    y:0,
    moveto:function(x,y){
        var that=this;//软绑定
        function movetox(){that.x=x};
        function movetoy(){that.y=y};
        movetox();
        movetoy();
    }
};
point.moveto(2,3);
console.log(point);//2,3
console.log(window.x,window.y);//undefined  undefined

// 解决方法2间接调用
var point={
    x:0,
    y:0,
    moveto:function(x,y){
        function movetox(){this.x=x};
        function movetoy(){this.y=y};
        movetox.call(this);//this指的是point
        movetoy();//没变还是全局
    }

};
point.moveto(2,3);
console.log(point);//2,0
console.log(window.x,window.y);//undefined，3

// 解决方法3使用Function.prototype.bind
var point={
    x:0,
    y:0,
    moveto:function(x,y){
        function movetox(){this.x=x};
        function movetoy(){this.y=y};
        movetox.bind(point)();//this绑定到point    bind后边的参数为主体
        movetoy.bind(point)();
    }

};
point.moveto(2,3);
console.log(point);//2,3
console.log(window.x,window.y);//undefined，undefined

// 07
// 构造函数中this嵌套的
function point(x,y){
    this.x=x;this.y=y;
    this.movexy=function(x,y){
        var that=this;
        function movex(x){that.x+=x;}
        function movey(y){that.y+=y;}
        movex(x);
        movey(x);
    }
}
var p=new point(2,3);
p.movexy(1,1);
console.log(p);


function point(x,y){
    this.x=x;this.y=y;
    this.movexy=function(x,y){
        function movex(x){this.x+=x;}
        function movey(y){this.y+=y;}
        movex.call(this,x);
        movey.call(this,y);
    }
}
var p=new point(2,3);
p.movexy(1,1);
console.log(p);


function Point(x,y){
    this.x=x;this.y=y;
    this.movexy=function(x,y){
        function movex(x){this.x+=x;}
        function movey(y){this.y+=y;}
        movex.bind(p,x)();
        movey.bind(p,y)();
    }
}
var p=new Point(2,3);
p.movexy(1,1);
console.log(p);




