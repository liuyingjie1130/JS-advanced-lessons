// 08
//四种 创建date对象  mouth 索引从0开始 0~11
// 一、new Date(year,month,date?,hours?,minutes?,seconds?,milliseconds?) //注意起始索引 
var date1=new Date(2018,4,7,16,45);
console.log(date1);//Mon May 07 2018 16:45:00 GMT+0800 (中国标准时间)

var date2=new Date(18,4,7,16,45);//若years为2位的话自动加1900
console.log(date2);//Tue May 07 1918 16:45:00 GMT+0800 (中国标准时间)

// 二、new Date(dateTimeStr)  //参数为字符串类型，注意格式
var date3=new Date("2018-05-07");
console.log(date3);//Mon May 07 2018 08:00:00 GMT+0800 (中国标准时间)

// 三、new Date(timeValue)     //参数为数字类型，以毫秒为单位
var date=new Date(0);//Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)
var date4=new Date(1000);//
console.log(date4);//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

// 四、new Date( )	              //返回当前时间
var date5=new Date();
console.log(date5);//Mon May 07 2018 16:45:00 GMT+0800 (中国标准时间)

var date6=new Date(NaN);
console.log(date6);//Invalid Date

//有误new的区别
var d1=new Date();
var d2=Date();
console.log(d1,typeof d1);//Mon May 07 2018 17:34:28 GMT+0800 (中国标准时间) "object"
console.log(d2,typeof d2);//Mon May 07 2018 17:34:28 GMT+0800 (中国标准时间) string

var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);//Number {123} "object"
console.log(n2,typeof n2);// 123 "number"



// 09
// Date静态 方法
//以毫秒为单位（从1970年1月1日00:00:00开始计算）
console.log(Date.now());
console.log(new Date().getTime());

console.log(Date.parse("1970-01-01"));//0
console.log(Date.parse("1970-01-02"));

// !!!!注意
console.log(Date.UTC(1970,00,01));//0

// Date 原型方法
var d=new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1978 10 6 25 8
console.log(d.getTimezoneOffset());//返回当前时区的时区偏移。
d.setDate(11);//设置几号
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1978 10 6 11 8
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1999 5 4 3 8



//七月的今天是星期几
var today=new Date();
today.setMonth(6);;
console.log(today);
console.log(today.getDay());//6

var today1=new Date();
today1.setFullYear(2019);
console.log(today1);
console.log(today1.getDate());


var today=new Date();
console.log(today.getTime());
var newtoday=new Date(today.getTime()+1000*3600*24*50);
console.log(newtoday);


// 10 日期格式

// YYYY-MM-DDTHH:mm:ss.sssZ
console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());

console.log(Date.parse("2010-01-01T11:12:23.111Z"));
console.log(new Date("2010-01-01T11:12:23.111Z"));
console.log(new Date().toISOString());

//日期格式（无时间）
console.log(new Date("2001"));
console.log(new Date("2001-02"));
console.log(new Date("2001-02-22"));

//日期和时间格式
console.log(new Date("1999-11-22T13:17"));
console.log(new Date("1999-11-22T13:17:11"));
console.log(new Date("1999-11-22T13:17:11.111"));
console.log(new Date("1999-11-22T13:17:11.111Z"));

//时间的比较和运算，内部转换为数字进行比较和运算（从1970年1月1日00:00:00开始计算）
console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime())+86400000));

//时间运算 和 时间综合练习 输出50天后是几月几号，星期几？
var today=new Date();
newtoday=new Date(today.getTime()+1000*3600*24*50);
console.log(newtoday.getMonth()+1+'月'+newtoday.getDate()+'号',newtoday.getDay());




// js20正则表达式

//g  全局  i  忽略大小写
var str="a fat bat ,a fat cat";
var reg1=/[bc]at/gi;
str.replace(reg1,"XX");

var str="a fAt bat ,a faT cat";
var reg2=new RegExp(/fat/,"gi");
str.replace(reg2,"XX");

console.log("moom2xyz".replace(/o/,"ab"));//mabom2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz  \b匹配一个空格
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz       \d匹配一个数字
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on


// 创建正则对象01
var reg1=/[bcf]at/gi;
var reg2=new RegExp(/[bcf]at/,"gi");
var reg3=new RegExp("[bcf]at","gi");
console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]

// 02
// 正则对象的两种基本使用方式：1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）

//有无g的区别   g代表全局  i代表不区分小写  没有i代表匹配小写
var reg=/ab/i;
console.log("xxAbsiejnaaBbxyz".match(reg));//["Ab", index: 2, input: "xxAbsiejnaaBbxyz", groups: undefined]
var reg=/ab/gi;
console.log("xxAbsiejnaaBbxyz".match(reg));//(2) ["Ab", "aB"]
var reg=/ab/g;
console.log("xxabsiejnaaBbxyz".match(reg));//["ab"]

//注意*和.的区别 
//*   匹配*前边的字符0次或任何次次
var reg = /a*b/gi;
console.log("xxAbcaaBbxyz".match(reg));//["Ab","aaB","b"]
//  .匹配除了换行符之外的任何单个字符
var reg = /a.b/gi;
console.log("xxAbcaaBbxyz".match(reg));//["aaB"]

//test初步了解
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 从b开始找匹配
console.log(regExp.test("ab"));//true  又从头开始
console.log(regExp.test("ab"));//false 从b开始



/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}
*/



// 03

// ^起始边界   &结束边界  边界是真个大长字符串的边界
//    \B非边界  \b边界   边界是一个字符串的边界 两个单词中间的空格也可以看成是边界  如下示例possibly
 
console.log(/oo/.test("moon"));//true
console.log(/oo\b/.test("moon"));//false
console.log(/oon\b/.test("moon"));//true
console.log(/\boo/.test("moon"));//false

console.log("moon".search(/oo/));//1返回索引
console.log("moon".search(/oo\b/));//-1 匹配失败返回-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1 匹配失败返回-1

console.log(/oo\B/.test("moon"));//true
console.log(/oon\B/.test("moon"));//false
console.log(/\Boo\B/.test("moon"));//true

"noonday".replace(/\Boo/,"xx");//"nxxnday"
"noonday".search(/\Boo/);//1

"possibly yesterday".replace(/y\B./,"aaa");//"possibly aaasterday"
"possibly yesterday".replace(/y\B/,"aaa");//"possibly aaaesterday"


console.log("This is a Boy is".replace(/is/g,0));//"Th0 0 a Boy 0"
console.log("This is a Boy is".replace(/^is/g,0));//"This is a Boy is"
console.log("This is a Boy is".replace(/is$/g,0));//"This is a Boy 0"
console.log("This is a Boy is".replace(/is\b/g,0));//"Th0 0 a Boy 0"
console.log("This is a Boy is".replace(/is\B/g,0));//"This is a Boy is"
console.log("This is a Boy is".replace(/\bis/g,0));//"This 0 a Boy 0"
console.log("This is a Boy is".replace(/\Bis/g,0));//"Th0 is a Boy is"




// 匹配数字\d
"a2d5".replace(/\d/gi,"x");//axdx
// 匹配非数字\D
"a2d5".replace(/\D/gi,"x");//x2x5
// 匹配字母数字下划线 \w
"a2d5".replace(/\w/gi,"x");//xxxx
// 匹配非字母数字下划线\W
"a2d5".replace(/\W/gi,"x");//a2d5
//匹配一个空白字符 \s
"foo bar".match(/\s\w*/);//" bar"
"foo bar".match(/\s\w/);//" b"
"foo bar".match(/\S\w*/);//"foo"
"foo bar".match(/\S\w/);//"fo"
// 匹配一个非空白字符 \S

//\d \D \w \W \s \S 案例
"sdafsa sdfea2s".replace(/a\ds/g,"*");//"sdafsa sdfe*"
"sdafsa sdfea2s".replace(/a\Ds/g,"*");//"sd**dfea2s"
"sdafsa sdfea2s".replace(/a\ws/g,"*");//"sd*a sdfe*"
"sdafsa sdfea2s".replace(/a\Ws/g,"*");//"sdafs*dfea2s"

var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);//
console.log(newStr);//24
str.replace(/\dqe/,11223344);
console.log(str);//"test22314234244dgfqeqe231122334413ed"


// 04


var str="xxx-yyy-xx";
var a=str.split("-");
console.log(a);//(3) ["xxx", "yyy", "xx"]

var str="xxx-y*yy-xx";
var a=str.split(/[-*]/gi);
console.log(a);// ["xxx", "y", "yy", "xx"]

//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));//"Xbsxsdfe123Ab"
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));//"XXsxsXfe123AX"
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));//"XXsxsXfe123XX"

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));//"abXxsdfe123Ab"
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));//"abXXXdXXXXXXb"
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));//"abXXXdXXXXXAb"

//范围类
console.log("12345667".replace(/[3-9]/gi,"X"));//"12XXXXXX"
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));//"XXsxsXXXXXXXX"
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//如果单独替换，则需要分组，见后续
//absxsdfX23Ab
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));// absxsdfX2Xb


//思考：如何匹配 -
console.log("2017-10-23".replace(/[0-9]/g,"X"));//XXXX-XX-XX
console.log("2017-10-23".replace(/[0-9-]/g,"X"));// XXXXXXXXXX

//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
// ?   + * {n} {n,m} {n,}
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));//"0Bb0b_0aBbb0ba"

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));//"0BbAb_0BbbAba"

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));//"0Bb0b_0Bbb0ba"

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));//"0BbAb_0aBbbAba"
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));//"AaBbAb_0BbbAba"

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));//"0BbAb_0BbbAba"

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));//"AaBbAb_0BbbAba000"
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));//"AaBbAb_0BbbAba0aa00"


// 05

// 贪婪模式
"12345678".replace(/\d{3,6}/g,"x");//x78
// 非贪婪模式
"12345678".replace(/\d{3,6}?/g,"x");//xx78

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));//"NameNameName_11111"
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));//"XXX_11111"

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));//"a1b2c3d4e5"
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));//"Xd4e5"
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));//"Xe5"
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));//"Xd4e5"

// 与分组相关的 或|
"abcdefghijk".replace(/abcde|fghijk/g,"X");//"XX"
"abcdefghijk_abcdehi jk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");//"abcdefghijk_abcdehi jk_X"

//练习：
//将"xxabccxxdexx"替换为"yyabccxxdeyy"
"xxabccxxdexx".replace(/\bxx|xx\b/g,"yy")
//"xx11xx".replace(/(\bxx)|(xx\b)/g,"mm");

  var execExp2=/\d{1,2}(\d)(\d)/g;
  var ts="12s342dsfsf233s";
  console.log(execExp2.exec(ts),execExp2.lastIndex);
  console.log(execExp2.exec(ts),execExp2.lastIndex);

// 06
//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");
//"23/$3/10"
//注意括号的转义字符，第一个相当于做了分组   (ab)是带括号的
console.log(/^(ab)$/.test("(ab)"));//false
console.log(/^\(ab\)$/.test("(ab)"));//true

// 07
var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);//false false false 0 "\w"
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);//true true false 0 "\w"

console.log(reg2.lastIndex);//0
reg2.test("abc23def");
console.log(reg2.lastIndex);//1
reg2.test("abc23def");
console.log(reg2.lastIndex);//2

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}

var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);
//["s", index: 0, input: "slfls3r3sfsf", groups: undefined]
var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);
//["l", index: 1, input: "slfls3r3sfsf", groups: undefined]
//
/*
var returnArray3;
while (returnArray3 = reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}
*/

//RegExp静态属性
console.log(RegExp.$_);
console.log(RegExp.lastMatch);

// 08

// RegExp.prototype.exec 方法 可以获得更为详细的信息，返回一个有属性的数组，
//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项，正则对象的lastIndex不起作用
var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
//true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 0
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
//true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 0

//对于全局模式下 每检测一次lastIndex增加一次，再次用此正则对象匹配时，匹配的起始点为上一次的lastIndex
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 14
/*
var ret2;
while (ret2 = execExp2.exec(ts)){
    console.log(execExp2.lastIndex);//6   14
}
*/

// 09
//String.prototype.search 注意search忽略 全局g
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g));//返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 忽略全局
//String.prototype.match 如果匹配不到返回null 匹配到了返回数组

//String.prototype.match 如果匹配不到返回null 匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
console.log("a1b2c3d4".match(/1/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/f/));//null
console.log("a1b2c3d4".match(/\d/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/\d/g));//[ '1', '2', '3', '4' ]

// String.prototype.replace
console.log("a,b,c,d".replace(",","X"));//"aXb,c,d"
console.log("a2b3c4d".replace(/[2-3]/,"X"));//"aXb3c4d"
console.log("a2b3c4d".replace(/[2-3]/g,"X"));//"aXbXc4d"

//String.prototype.split
console.log("a,b,c,d".split(","));//["a", "b", "c", "d"]
console.log("a2b3c4d".split(/\d/));//["a", "b", "c", "d"]

"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/);//["a", index: 0, input: "abcdef21313sfsflsf1223jlnsa", groups: undefined]
"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/g);//["a", "b", "c", "d", "e", "f", "f", "f", "f", "a"]
"abcdef21313sfsflsf1223jlnsa".match(/[123efsa]/g);// ["a", "e", "f", "2", "1", "3", "1", "3", "s", "f", "s", "f", "s", "f", "1", "2", "2", "3", "s", "a"]
"abcdef21313sfsflsf1223jlnsa".match(/[^123efsa]/g);//["b", "c", "d", "l", "j", "l", "n"]
"abcdef21313sfsflsf1223jlnsa".match(/[1-2a-d]/g);//["a", "b", "c", "d", "2", "1", "1", "1", "2", "2", "a"]
"hello world Hi you".match(/hello|world/);//["hello", index: 0, input: "hello world Hi you", groups: undefined]
"hello world Hi you".match(/hello|world/g);// ["hello", "world"]
"world Hi you".match(/hello|world/);//["world", index: 0, input: "world Hi you", groups: undefined]
"THat hot hat".match(/h.t/);//["hot", index: 5, input: "THat hot hat", groups: undefined]
"THat hot hat".match(/h.t/g);// ["hot", "hat"]
"THat hot hat".match(/h.t/gi);// ["Hat", "hot", "hat"]



// 10
  var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
for(var i=0;i<numbers.length;i++){
    if(/1(3[4-9]|47|5[0127-9]|78|8[2-47-8])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);
    }
    else if(/1(3[0-2]|45|5[5-6]|78|8[5-6])\d{8}/.test(numbers[i])){
        CUCC.push(numbers[i]);
    }
    else if(/1(33|53|77|80|81|89)\d{8}/.test(numbers[i])){
        CTCC.push(numbers[i]);
    }
    else {
        Others.push(numbers[i])
    }
}
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);
console.log("其他号码：",Others);



//完成下述任务，其中1、2、3需要有调试成功的截图
// 1.给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
// 写一个function提取上述字符串中的字符最终输出：[254,289,675]
function aa(str){
    var newstr=str.match(/\d{3}/g);
    for(var i=0;i<newstr.length;i++){
        newstr[i]=Number(newstr[i]);
    }
    console.log(newstr);
}
var s1="dgfhfgh254bhku289fgdhdy675gfh";
aa(s1);//(3) [254, 289, 675]
// 2.给定这样一个连字符串，var s2 = "get-element-by-id";
// 写一个function转换为驼峰命名法形式的字符串输出：getElementById
function aa(str){
    var newstr=str.replace(/-./g,function(){
      return( arguments[0].toUpperCase());  
     })
     return newstr.replace(/-/g,"");
 }
 var s2 = "get-element-by-id";
 aa(s2);

// 3.写出正则表达式，从一个字符串中提取链接地址。
// 如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
// 写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]
function aa(str){
    console.log(str.match(/(www.*com)|(www.*cn)/g));
}
var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
aa(s3);