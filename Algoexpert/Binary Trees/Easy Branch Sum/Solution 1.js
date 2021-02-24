// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
// O(n) time | O(n) space - where n is the number of nodes in the Binary tree
function branchSums(root) {
    // Write your code here.
      const result = [0];
      
      sum(root, result);
      
      return result;
}
  
function sum(node, array) {
    array[array.length - 1] += node.value;
    const val = array[array.length - 1];
    
    if(node.left) {
        sum(node.left, array)
    }
    if (node.right) {
        if(node.left) {
            array.push(val);
        }
        sum(node.right, array)
    }
}
  
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
  