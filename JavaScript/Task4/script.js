/**
 * Created by WIGER on 2017/3/20.
 */
window.onload=function () {
    var numList=document.getElementById("numList");
    var btnPop=document.getElementById("pop");
    var btnPush=document.getElementById("push");
    var btnShift=document.getElementById("shift");
    var btnUnshift=document.getElementById("unshift");
    var list=document.createElement("ul");
    numList.appendChild(list);
    function getNum() {
        var num=document.getElementById("num");
        var node=document.createElement("li");
        node.innerHTML=num.value;
        return node;
    }
    function empty() {
        var num=document.getElementById("num");
        num.value="";
    }
    btnPop.addEventListener("click",function () {
        if(list.lastChild) list.removeChild(list.lastChild);
        else alert("队列已空！！");
    },false);
    btnPush.addEventListener("click",function () {
        var node=getNum();
        empty();
        if(node.value) list.appendChild(node);
    },false);
    btnUnshift.addEventListener("click",function () {
        var node=getNum();
        empty();
        if(node.value) list.insertBefore(node,list.firstChild);
    },false);
    btnShift.addEventListener("click",function () {
        if(list.firstChild) list.removeChild(list.firstChild);
        else alert("队列已空");
    },false);
};