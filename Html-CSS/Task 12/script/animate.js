/**
 * Created by WIGER on 2017/4/19.
 */
var tab1=document.getElementById("tab1");
var tab2=document.getElementById("tab2");
var tab3=document.getElementById("tab3");
var blue=document.getElementById("blue");

tab1.addEventListener("mouseover",function () {
    blue.setAttribute("style","height: 100%;width: 0;background-color: #3355d0;transition:width 2s");
},false);
tab2.addEventListener("mouseover",function () {
    blue.setAttribute("style","height: 100%;width: 50%;background-color: #3355d0;transition:width 2s");
},false);
tab3.addEventListener("mouseover",function () {
    blue.setAttribute("style","height: 100%;width: 100%;background-color: #3355d0;transition:width 2s");
},false);