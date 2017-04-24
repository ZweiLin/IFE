/**
 * Created by WIGER on 2017/4/19.
 */
function Node(data,left,right) {
    this.data=data;
    this.left=left;
    this.right=right;
    this.show=show;
}
function show() {
    return this.data;
}
function BST() {
    this.root=null;
    this.insert=insert;
    this.inOrder=inOrder;
    this.preOrder=preOrder;
    this.postOrder=postOrder;
}
function insert(data) {
    var node = new Node(data,null,null);
    if (!this.root){
        this.root= node;
    }
    else {
        var current= this.root;
        var parent;
        while (true){
            parent=current;
            if(data<current.data){
                current=current.left;
                if(!current){
                    parent.left=node;
                    break;
                }
            }
            else {
                current=current.right;
                if (!current) {
                    parent.right=node;
                    break;
                }
            }
        }
    }
}
function preOrder(node) {
    if(node) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}
function inOrder(node) {
    if (node) {
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}
function postOrder(node) {
    if (node) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}
var array=['A','B','C','D','E','F','G'];
var binTree=new BST();
array.forEach(function (elem) {
    binTree.insert(elem);
});
console.log("中序遍历：");
binTree.inOrder(binTree.root);
console.log("先序遍历：");
binTree.preOrder(binTree.root);
console.log("后序遍历：");
binTree.postOrder(binTree.root);
