// window.onload=function(){
//     console.log("window onload");
    // var div1=document.getElementById("div1");
    // div1.onclick=function(){
    //     console.log("div1 onclick");}//不可以放到外边来
    
//     }

// window.onload=function(e){
//     // console.log(e.target,this);//目标#document   window
//     // console.log("e:",e);//e:Event
//     var div1=document.getElementById("div1");
//     div1.onclick=function(e){
        // console.log(e.type);//事件的类型  click
        // console.log(e.target,this);//<div class="div1"></div>  <div class="div1"></div>
        // //target和this不一定一样
        // console.log("e:",e);//MouseEvent
        // console.log(e.clientX,e.clientY,e.ctrlKey);//事件触发的位置  是否按了crtl键

         
        // console.log(e);//MouseEvent
        // console.log(e.hasOwnProperty("target"));//false
        // console.log(e.__proto__);//MouseEvent
        // console.log(e.__proto__.hasOwnProperty("target"));//false
        // console.log(e.__proto__.__proto__);//UIEEvent
        // console.log(e.__proto__.__proto__.hasOwnProperty("target"));//false
        // console.log(e.__proto__.__proto__.__proto__);//Event
        // console.log(e.__proto__.__proto__.__proto__.hasOwnProperty("target"));//true
        // console.log(e.__proto__.__proto__.__proto__.__proto__);//constructor
        // console.log(e.__proto__.__proto__.__proto__.__proto__.__proto__);//null


        // for(var k in e){
        //     console.log(k,e[k]);
        // }

//     }
// }


// 事件响应处理方式
// 1.html事件响应处理方式
// HTML中
// <!-- <div id="div1" onclick="div1click()">
//     </div>

//     <div id="div2" ondrag="console.log('drag')">
//     </div> -->
// JS中
// function div1click(e){
//     console.log(e.target);
// }

// 2.DOM0级事件响应处理方式
// window.onload=function(){
//     var div1=document.getElementById("div1");
//     var div2=document.getElementById("div2");
//     function clickhandler(e){
//         console.log(e.target)
//     }
    // div1.onclick=clickhander;//
    // div1.onclick = function(){
    //     console.log("xx");
    // };//如果一个添加多次事件会覆盖 ，响应最后的那个事件
    // div2.onclick=clickhander;
    // div2.onclick=null;//取消事件
     
// }


//3 DOM2级事件处理方式

// window.onload = function (e) {
//     var div1 = document.getElementById("div1");
//     var div2 = document.getElementById("div2");
//     var eventHandler = function (e) {
//         console.log(e.clientX,e.clientY);
//     }
//     div1.addEventListener("click",eventHandler);
//     // div1.addEventListener("click",eventHandler,false);//第3个参数可选
//     div1.addEventListener("click",function(){
//         console.log("xx");
//     });//两个语句都会输出

//     div2.addEventListener("click",eventHandler);
//     //div2.addEventListener("click",eventHandler,false);
//     //div2.removeEventListener("click",eventHandler);//取消事件响应处理

// }

