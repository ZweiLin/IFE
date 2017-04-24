/**
 * Created by WIGER on 2017/4/23.
 */
var root=document.getElementById("root");
var btnPreOrder=document.getElementById("preOrder");
var btnInOrder=document.getElementById("inOrder");
var btnPostOrder=document.getElementById("postOrder");
var timer=0;
function showNode(node) {
    // alert(node.tagName);
    node.style.backgroundColor="#ffffff";
    setTimeout(function () {
        node.style.backgroundColor="#ff524a";
    },timer+=500);
    setTimeout(function () {
        node.style.backgroundColor="#ffffff";
    },timer+=500);
}
function preOrder(root) {
    if(root){
        showNode(root);
        preOrder(root.children[0]);
        preOrder(root.children[1]);
    }
}
function inOrder(root) {
    if(root){
        inOrder(root.children[0]);
        showNode(root);
        inOrder(root.children[1]);
    }
}
function postOrder(root) {
    if (root){
        postOrder(root.children[0]);
        postOrder(root.children[1]);
        showNode(root);
    }
}
btnPreOrder.addEventListener("click",function () {
    preOrder(root);
    timer=0;
},false);
btnInOrder.addEventListener("click",function () {
    inOrder(root);
    timer=0;
},false);
btnPostOrder.addEventListener("click",function () {
    postOrder(root);
    timer=0;
},false);
