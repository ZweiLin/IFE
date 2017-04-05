/**
 * Created by WIGER on 2017/4/5.
 */

window.onload=function () {
    var btnPop=document.getElementById("pop");
    var btnPush=document.getElementById("push");
    var btnShift=document.getElementById("shift");
    var btnUnshift=document.getElementById("unshift");
    var drawing=document.getElementById("drawing");
    var sortAsc=document.getElementById("sortAsc");
    var sortDesc=document.getElementById("sortDesc");
    var numlist=[50,30,60,15,40,70,10,26,80,75];
    function drawRect(numlist) {
        if(drawing.getContext){
            var context=drawing.getContext("2d");
            context.clearRect(0,0,500,500);
            context.fillStyle="red";
            if(numlist){
                numlist.forEach(function (elem,index) {
                    context.fillRect(2+4*index,100-elem,3,elem);
                });
            }
        }
    }
    function swap(numlist,a,b) {
        var temp=numlist[a];
        numlist[a]=numlist[b];
        numlist[b]=temp;
    }
    function bubbleSort(numlist,direction) {
        for(var i=0;i<numlist.length-1;i++)
            for(var j=0;j<numlist.length-i-1;j++){
              switch (direction){
                  case "asc":
                      if(numlist[j]>numlist[j+1]){
                          swap(numlist,j,j+1);
                      }
                      break;
                  case "desc":
                      if(numlist[j]<numlist[j+1]){
                          swap(numlist,j,j+1);
                      }
                      break;
              }
            }
            return numlist;
    }
    function getNum() {
        var num=document.getElementById("num");
        if(parseInt(num.value)<10||parseInt(num.value)>100){
            alert("输入的数要在10到100之间！！");
        }
        else return parseInt(num.value);
    }
    function empty() {
        var num=document.getElementById("num");
        num.value="";
    }
    btnPop.addEventListener("click",function () {
        if (numlist.length<=0)
            alert("栈已空！！");
        else numlist.pop();
        drawRect(numlist);
    },false);
    btnPush.addEventListener("click",function () {
        if(numlist.length>=60)
            alert("栈已满！！");
        else
          if (getNum())
           numlist.push(getNum());
        drawRect(numlist);
    },false);
    btnUnshift.addEventListener("click",function () {
        if (numlist.length>=60)
            alert("队列已满!!");
        else
            if (getNum())
             numlist.unshift(getNum());
        drawRect(numlist);
    },false);
    btnShift.addEventListener("click",function () {
        if (numlist.length<=0)
            alert("队列已空!!");
        else
            numlist.shift();
        drawRect(numlist);
    },false);
    sortAsc.addEventListener("click",function () {
        numlist=bubbleSort(numlist,"asc");
        drawRect(numlist);
    });
    sortDesc.addEventListener("click",function () {
        numlist=bubbleSort(numlist,"desc");
        drawRect(numlist);
    });
    if(numlist) drawRect(numlist);
};

