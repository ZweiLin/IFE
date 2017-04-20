window.onload=function () {
    var textList=document.getElementById("textList");
    var btnPop=document.getElementById("pop");
    var btnPush=document.getElementById("push");
    var btnShift=document.getElementById("shift");
    var btnUnshift=document.getElementById("unshift");
    var btnMatch=document.getElementById("match");
    var matchText=document.getElementById("matchText");
    var list=document.createElement("ul");
    textList.appendChild(list);
    function getnodes() {
        var text=document.getElementById("text");
        var nodes=[];
        text.value.split(/[\r\s\n,，、]+/).forEach(function (elem) {
            nodes[nodes.length]=getnode(elem);
        });
        return nodes;
    }
    function getnode(text) {
        var node=document.createElement("li");
        node.innerHTML=text;
        node.addEventListener("click",function () {
            // var value=node.innerHTML;
            node.parentNode.removeChild(this);
            // alert(value);
        });
        return node;
    }
    function empty() {
        var text=document.getElementById("text");
        text.value="";
    }
    btnPop.addEventListener("click",function () {
        if(list.lastChild){
            // var value=list.lastChild.innerHTML;
            list.removeChild(list.lastChild);
            // alert(value);
        }
        else alert("队列已空！！");
    },false);
    btnPush.addEventListener("click",function () {
        var nodes=getnodes();
        // if(node.innerHTML) list.appendChild(node);
        nodes.forEach(function (elem) {
            if (elem.innerHTML) list.appendChild(elem);
        });
        // empty();
    },false);
    btnUnshift.addEventListener("click",function () {
        var nodes=getnodes();
        // if(node.innerHTML) list.insertBefore(node,list.firstChild);
        nodes.reverse().forEach(function (elem) {
            if (elem.innerHTML) list.insertBefore(elem,list.firstChild);
        });
    },false);
    btnShift.addEventListener("click",function () {
        if(list.firstChild){
            // var value=list.firstChild.innerHTML;
            list.removeChild(list.firstChild);
            // alert(value);
        }
        else alert("队列已空");
    },false);
    btnMatch.addEventListener("click",function () {
        var key=matchText.value;
        if(key){
            var pattern=new RegExp(key);
            // alert(key);
            list.childNodes.forEach(function (elem) {
                elem.style.backgroundColor="#ff263e";
                // alert(pattern.test(elem.innerHTML));
                if(pattern.test(elem.innerHTML)){
                    elem.style.backgroundColor="#657fff";
                }
            });
        }
    },false);
};
