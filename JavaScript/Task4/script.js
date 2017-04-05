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
        node.addEventListener("click",function () {
            var value=node.innerHTML;
            node.parentNode.removeChild(this);
            alert(value);
        });
        return node;
    }
    function empty() {
        var num=document.getElementById("num");
        num.value="";
    }
    btnPop.addEventListener("click",function () {
        if(list.lastChild){
            var value=list.lastChild.innerHTML;
            list.removeChild(list.lastChild);
            alert(value);
        }
        else alert("队列已空！！");
    },false);
    btnPush.addEventListener("click",function () {
        var node=getNum();
        if(node.innerHTML) list.appendChild(node);
        // empty();
    },false);
    btnUnshift.addEventListener("click",function () {
        var node=getNum();
        if(node.innerHTML) list.insertBefore(node,list.firstChild);
        // 时
    },false);
    btnShift.addEventListener("click",function () {
        if(list.firstChild){
            var value=list.firstChild.innerHTML;
            list.removeChild(list.firstChild);
            alert(value);
        }
        else alert("队列已空");
    },false);
};
