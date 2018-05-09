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


// 创建正则对象
var reg1=/[bcf]at/gi;
var reg2=new RegExp(/[bcf]at/,"gi");
var reg3=new RegExp("[bcf]at","gi");
console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]