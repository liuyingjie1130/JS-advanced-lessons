// 23

var obj1 = "xxx";
var obj2 = 23;
var obj3 = false;
var obj4 = { x: 1, y: 2, a: [1, 3, 5], b: "xyz" };
var obj5 = [123, 345];
var obj6 = [{ z: 3 }, [1, 2]];
var obj7 = {x:true};

var obj1 = '"xxx"';
var obj2 = '23';
var obj3 = 'false';
var obj4 = '{ "x": 1,"y": 2, "a": [1, 3, 5], "b": "xyz" }';
var obj5 = '[123, 345]';
var obj6 = '[{ "z": 3 }, [1, 2]]';
var obj7 = '{"x":true}';

var j1 = '[{"name":"jack","obj":{"x":1,"y":2},"arr":[1,2,"3"]},2]';
var j2 = '{"x":1,"y":"2"}';

var foo = new Function("x","y","return x>y?x:y;");
foo(2,3);//3


//var jf = '["x","y","return x<y?x:y;"]';
var af = ["x","y","return x<y?x:y;"];
var fee = new Function(af[0],af[1],af[2]);
fee(2,3);

// JSON方法
// JSON.stringify()方法

var a1={x:123,name:"huahua",age:16};
var a1s=JSON.stringify(a1);
console.log(a1);//{x: 123, name: "huahua", age: 16}
console.log(a1s);//{"x":123,"name":"huahua","age":16}
var oa1=JSON.parse(a1s);
console.log(oa1);//{x: 123, name: "huahua", age: 16}

var a1 = [1,"x",true,{y:2,z:3}];//对比 ["1","x","true",{y:"2",z:3}]
console.log(JSON.stringify(a1));//[1,"x",true,{"y":2,"z":3}]
console.log(a1);//(4) [1, "x", true, {…}]

var a1 = ["1","x","true",{y:"2",z:3}];
console.log(JSON.stringify(a1));// ["1","x","true",{"y":"2","z":3}]
console.log(a1);//(4)  ["1","x","true",{y:"2",z:3}]

// console.log 出来就没有最外边的''

JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
JSON.parse('1');               //  1
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);          
// '[null,null,null]' 

// 不可枚举的属性默认会被忽略：
JSON.stringify( 
    Object.create(
        null, 
        { 
            x: { value: 'x', enumerable: false }, 
            y: { value: 'y', enumerable: true } 
        }
    )
);
// "{"y":"y"}"

// JSON.parse()方法

var jsonStr3 = '{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"}}';
var jsonStr4 = '[1,"x",true,{"y":2,"z":3}]';

console.log(JSON.parse(jsonStr3));//{a:[1,2],b:true,c:[3,4,"x",{y:34,z:56}],d:5,e:{name:"Jack"}}
console.log(JSON.parse(jsonStr4));//[1,"x",true,{y:2,z:3}]
//reviver参数是可选的，是一个节点访问函数，可用来转换解析后的数据
var jsonStr5 = '{"a":[1,2],"b":false,"c":[3,4,"x",{"y":34,"z":56}]}';
var o5 = JSON.parse(jsonStr5,function (key,value) {
    if(typeof value === "boolean"){
        value = "ChangeToString";
    }
    if(key == "c"){//迭代的遍历某个希望寻找的数据属性，可用于数据信息的查找
        console.log("c:",value);
    }
    return value;
});

console.log(o5);//c: (4) [3, 4, "x", {…}]
//{a: Array(2), b: "ChangeToString", c: Array(4)}


var o2 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};
//replacer 节点转换函数，在值被转为字符串之前转换树节点的值
var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    if(key === "a"){
        console.log("find key a");
        value = 12345;
    }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    return value;
});
console.log(jsonStr2);//{"a":12345,"b":false,"c":["Hi",4,"x",{"y":34,"z":"zzz"}],};
console.log(o2);//{a: Array(2), b: true, c: Array(4)}

function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;//如果是null会怎样？
    }
    return value;//若没有这一句会怎样？
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
console.log(JSON.stringify(foo, replacer));//'{"week":45,"month":7}'

function replacer(key, value) {
    if (typeof value === "string") {
        return null;
    }
    return value;//若没有这一句会怎样？
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
console.log(JSON.stringify(foo, replacer));//{"foundation":null,"model":null,"week":45,"transport":null,"month":7}

function replacer(key, value) {
    if (typeof value === "string") {
        return null;
    }
   
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
console.log(JSON.stringify(foo, replacer));//undefined

//如果replacer是一个数组，数组的值代表将被序列化成JSON字符串的属性名。
var jsonString2 = JSON.stringify(foo, ['model', 'transport']);  
console.log(jsonString2);//'{"model":"box","transport":"car"}'
var jsonString2 = JSON.stringify(foo, ['week', 'transport']);  
console.log(jsonString2);//'{"week":45,"transport":"car"}'


// 05


var o6 = JSON.parse('{"p": 5}', function (k, v) {
    console.log("回调调用");
    if(k === '') return v;     // 如果到了最顶层，则直接返回属性值，
    return v * 2;              // 否则将属性值变为原来的 2 倍。
});                            // { p: 10 }
console.log(o6);

var o7 = JSON.parse('{"p": 5,"x":1}', function (k, v) {
    if(k === 'p') return 2*v;    // 
    if(k === 'x') return 3*v;
    if(k === '')  return v;      //最终到达顶层    
});                             
console.log(o7);//{p: 10,x:3}

// ！！！！！
var o8 = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}',
    function (k, v) {
        console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
        // 最后一个属性名会是个空字符串。
        return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
    });
console.log(o8);
// 1
// 2
// 4
// 6
// 5
// 3
// 空字符
// {1: 1, 2: 2, 3: {…}}

var o9 = JSON.stringify({1: 1, 2: 2,3: {4: 4, 5: {6: 6}}},
    function (k, v) {
        console.log(k); // 输出当前的属性名，从而得知遍历顺序是从外向内的，
        // 第一个属性名会是个空字符串。
        return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
    });
    console.log(o9);
    // 空字符
    // 3 
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    //  {"1":1,"2":2,"3":{"4":4,"5":{"6":6}}}


function replacer(key,value){
    if(typeof value==="string"){
        return undefined;
    }
    return value;
}
var foo={model:"box",
week:45,
transport:"car",
moth:7};
var jsonstring1=JSON.stringify(foo,replacer);
console.log(jsonstring1);//{"week":45,"moth":7}
