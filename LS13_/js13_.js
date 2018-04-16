// 01
var obj={
    name:'pangza',
    age:20,
    show:function(){
        console.log("i'm"+this.name+'今年'+this.age+'岁')
    }
}
obj.show();//this 指的就是obj
// 02
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Object);//function
console.log(typeof Math);//object

Math instanceof Function;//false
Math instanceof Object;//true

console.log(Function instanceof Function);//true
console.log((new Function()) instanceof Function);//true
console.log((new Function()) instanceof Object);//true
console.log((new (new Function())()) instanceof Function);//false
console.log((new (new Function())()) instanceof Object);//true
typeof(new Function())//"function"
typeof(new (new Function())())	//"object"
typeof(new Object())//"object"
typeof(new (new Object())())//报错	

// 03
// _x表示私有属性
// 访问器属性
var o={
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x=val;
    }
};
console.log(o.x);//1       访问器属性调用的是函数，  但是不用写（）
o.x=2;//修改x
console.log(o.x,o._x);//2,2


var o={
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x=2;//相当于添加了一个数据属性
console.log(o.x);//1,优先访问访问器属性  而不是新添加的数据属性

// 过滤属性
var p1={
    _name:'jack',
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age=val;
        }else{
            console.log('请设置正常年龄');
        }
    },
    get age(){
        return this._age;
    }
};
p1.age=178;//通过过滤并没有修改值
console.log(p1.age);//23

// 04
var o={
    x:12
}
o.__proto__===Object.prototype;//true

var o2=Object.create(o);
o2.__proto__===o;//true

var Person=function(name){
    this.name=name;
}
var p=new Person('aaa');
p.__proto__===Person.prototype;//true
Person.__proto__===Function.prototype;//true
Person.__proto__.__proto__===Object.prototype;//true
Person.__proto__.__proto__.__proto__===null;//true

// 05
var obj={
    x1:12,
    x2:23,
    x3:34
}
for(var i=1;i<4;i++){
    console.log(obj['x'+i]);
}

var obj3={};
for(var i=0;i<10;i++){
    obj.i=i;
}//只添加一个属性  {i:9} 因为i不是作为字符串  看上边的代码就明白了

var obj4={};
for(var i=0;i<10;i++){
    obj[i]=i;
}//添加九个属性{0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
// 此时i是字符串
