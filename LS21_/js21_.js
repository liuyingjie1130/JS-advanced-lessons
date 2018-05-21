try{
    var a=new Array(-5);
}
catch(e){
    console.log(e);
}
//RangeError: Invalid array length
// at <anonymous>:2:11

try{
    var a=new Array(-5);
    console.log("xxx");//不会运行  
}
catch(e){
    console.log(e);
}
finally{
    console.log("finally");
}
 //RangeError: Invalid array length
    // at <anonymous>:2:11
 //finally

//抛出异常
 try{
     throw "abc";
 }
 catch(e){
     console.log(e);
 }
 //abc

 try{
    console.log("aaa");//没有错误
}
catch(e){
    console.log(e);
    console.log("AAA");//因为没有错误 所以不运行catch
}
//aaa

console.warn("yy");//警告
console.error("aaa");//错误
console.assert(3>22,"qqq");//断言 如果错误输出后边
// Assertion failed: qqq

try{
    try{
        throw "oops";
    }
    catch(ex){
         console.log("inner",ex);
    }
    finally{
        console.log("finally");
    }
}
 catch(ex){
    console.log("outer",ex);
}
//  inner oops
// finally
//异常已经解决了  外边的catch 不运行


try{
    try{
        throw "oops";
    }
    catch(ex){
         console.log("inner",ex);
         throw ex;
    }
    finally{
        console.log("finally");
    }
}
 catch(ex){
    console.log("outer",ex);
}

//inner oops
//finally//先输出finally   
//outer oops

try{
    function abc(x,cb){
        console.log(x);
        cb();
    }
    abc("xx",function(){
        var arr=new Array(-1);
    });
}
catch(e){
    console.log(e);//可以捕获到异常
}

try{
    function abc(x,bc){
        console.log(x);
        cb();
    }
}
catch(e){
    console.log(e);
}
//不能捕获到异常
abc("xx",function(){
    var arr=new Array(-1);
});




