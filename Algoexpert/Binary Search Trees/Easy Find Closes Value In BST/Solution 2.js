// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
    // Write your code here.
    let closestValue = tree.value;
    
    function helper(node) {
        if(node === null) {
            return closestValue;
        }
        
        if(isNodeValueClosest(node, target, closestValue)) {
            closestValue = node.value;
        }

        if(node.value > target) {
            return helper(node.left);
        } else if(node.value < target) {
            return helper(node.right);
        } else {
            return closestValue;
        }
    }
    
    return helper(tree)
}
  
function isNodeValueClosest(node, target, closestValue) {
    return Math.abs(target - node.value) < Math.abs(target - closestValue);
}
  
// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
  
// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
  