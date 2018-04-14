// 11
// function f1(){
//     var x=1;
//     function f2(){
//         return x++;
//     }
//     return f2();//返回数值
// }
// var f3=f1();
// console.log(f3);//1
// console.log(f3);//1

// function f1(){
//     var x=1;
//     function f2(){
//         return x++;
//     }
//     return f2;//返回函数
// }
// var f3=f1();//f3是f2这个函数
// console.log(f3());//1
// console.log(f3());//2闭包

function createinc(startvalue){
    return function(step){
        startvalue+=step;
        return startvalue;
    }
}
var inc=createinc(5);
console.log(inc(1));//6
console.log(inc(2));//8
inc=createinc(5);
console.log(inc(1));//6创建了新的闭包

// function createinc(startvalue){
//     return function(step){
//         startvalue+=step;
//         return startvalue;
//     }
// }
// var inc=createinc(5);
// console.log(inc(1));//6
// console.log(inc(2));//8
// var inc2=createinc(5);
// console.log(inc(1));//9
// console.log(inc2(1));//6创建了新的闭包
//  inc=createinc(5);
// console.log(inc(1));//6还是新的闭包

function foo(){
    var i=0;
    function bar(){
        console.log(++i);
    }
    return bar();//返回数值不是函数
}
foo();//1
foo();//1
function foo(){
    var i=0;
    function bar(){
        console.log(++i);
    }
    return bar;
}
var a=foo();
var b=foo();
a();//1
a();//2
b();//1



//12
var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？不包括
function foo(x) {
    var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？不是
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//2+10+4
fee(10);//2+10+5
fee(10);//2+10+6

function foo(x){
    var tmp=3;
    return function(y){
        x.count=x.count?x.count+1:1;
        console.log(x+y+(++tmp));
    }
}
var fee=foo(2);
fee(10);//16
fee(10);//17
fee(10);//18


function foo(x){
    var tmp=3;
    return function(y){
        x.count=x.count?x.count+1:1;
        console.log(x+y+tmp,x.count);
    }
}
var age=new Number(2);
var bar=foo(age);
bar(10);//15 1
bar(10);//15 2
bar(10);//15 3

// 作为对象的方法返回
function counter(){
    var n=0;
    return {
        count:function(){return  ++n; },
        reset:function(){n=0; return n;}
    }
}
var c=counter(),d=counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//2
console.log(d.count());//2

function fn(){
    var max=10;
    return function bar(x){
        if(x>max){console.log(x)}
        else {console.log(mx)}
    }
}
var f1=fn();
var max=100;
f1(15);//15

function fn(){
    // var max=10;
    return function bar(x){
        if(x>max){console.log(x)}
        else {console.log(mx)}
    }
}
var f1=fn();
var max=100;
f1(15);//100

// 14

function f1(){
    var n=999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f=f1();
f();//1000
f();//1001

var n=10;
function f1(){
    var n=999;
    nadd=function(){n+=1;}
    function f2(){console.log(n);}
    return f2;
}
var result=f1();
result();//999
nadd();
result();//1000


function person(){
    var name='default';
    return {
        getname:function(){return name;},
        setname:function(newname){name=newname}
    }
};
var john=person();
console.log(john.getname());//default
john.setname('john');
console.log(john.getname());//john

var jack=person();
console.log(jack.getname());//default
jack.setname('jack');
console.log(jack.getname());//jack

var m=10;
function f1(){
    nadd=function(){++m;};
    function f2(){console.log(m);}
    return f2;
}
var result1=f1();
var result2=f1();
result1();//10
nadd();
result2();//11

var m=10;
function f1(){
    nadd=function(){++m;};
    function f2(){console.log(m);}
    return f2;
}
var result1=f1();
var result2=f1();
result1();//10
nadd();
result2();//11
result1();//11

// 15
function fn(){
    var a;
    return function(){
        return a||(a=document.body.appendChild(documnet.createEl))

    }
}
var f=fn();
f();

var db=(function(){//立即执行表达式
    var data={};
    return function(key,val){
        if(val===undefined){return data[key]}
        else{return data[key]=val}  
    };
})();
db('x');//undefined 
db('x',1);
db('x');//1

(function () {
    var m = 0;
    function getM(){
        return m;
    }
    function setM(val){
        m = val;
    }
    window.g = getM;
    window.f = setM;
}());
f(100);
g();//100





