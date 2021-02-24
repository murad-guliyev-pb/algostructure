// O(n) time | O(?) space - where n is the number of nodes in the Binary tree
function nodeDepths(root) {
    // Write your code here.
      let sum = [0];
      
      sumNodeDepth(root, sum, 0)
      
      return sum[0];
  }
  
  function sumNodeDepth(node, sum, depth) {
      sum[0] += depth;
      
      if(node.left) {
        sumNodeDepth(node.left, sum, depth + 1)
      }
      
      if(node.right) {
        sumNodeDepth(node.right, sum, depth + 1)
      }
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  